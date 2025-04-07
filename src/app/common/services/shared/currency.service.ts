import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest, filter, map, firstValueFrom } from 'rxjs';
import { AppState } from '../../../storage/app.state';
import { selectedCurrency } from '../../../storage/state/state.selectors';
import { setCurrency } from '../../../storage/state/state.actions';


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  //currencies$: Observable<string[]>;
  selectedCurrency$!: Observable<string>;

  constructor(private store: Store<AppState>) {    
  }
  
  getSelectedCurrency(): Observable<any> {
    return this.store.pipe(select(selectedCurrency),
      filter((curreny: any) => curreny !== undefined)
    );
  }

  updateCurrency(currencyCode: string) {
    this.store.dispatch(setCurrency({ selectedCurrency: currencyCode }));
  }

}
