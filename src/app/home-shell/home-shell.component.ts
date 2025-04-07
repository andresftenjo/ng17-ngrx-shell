import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateAuthenticatedUser } from '../storage/actions/init.actions';
import { selectIsAuthenticated } from '../storage/selectors/appState.selectors';
import { AppState } from '../storage/app.state';

@Component({
  selector: 'app-home-shell',
  templateUrl: './home-shell.component.html',
  styleUrl: './home-shell.component.css'
})
export class HomeShellComponent implements OnInit {

  userAuthenticated$!: Observable<boolean>;

  constructor(private store: Store<{ storeObject: AppState }>) {
    this.userAuthenticated$ = this.store.select(selectIsAuthenticated);
  }

  ngOnInit() {
    setTimeout(() => {
      // this.store.dispatch(updateAuthenticatedUser({ userAuthenticated: true }));
    }, 2000);
  }

}
