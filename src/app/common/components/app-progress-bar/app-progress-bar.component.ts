import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ProgressBarModule } from 'primeng/progressbar';
import { AppState } from '../../../storage/app.state';
import { selectProgreesBar } from '../../../storage/state/state.selectors';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './app-progress-bar.component.html',
  styleUrls: ['./app-progress-bar.component.css']
})
export class AppProgressBarComponent implements OnInit {

  public showProgressBar: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select(selectProgreesBar)).subscribe(progreesBar => {
      this.showProgressBar = progreesBar;
    });
  }

}
