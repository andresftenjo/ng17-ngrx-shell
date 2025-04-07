import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable, combineLatest } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { AppState } from '../../../storage/app.state';
import { selectActiveShellLanguages, selectedLanguage } from '../../../storage/state/state.selectors';
import { setLanguage } from '../../../storage/state/state.actions';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  storeLanguages$: Observable<any>;

  constructor(private store: Store<AppState>, private translate: TranslateService) {
    this.translate.setDefaultLang('en');

    this.storeLanguages$ = this.store.pipe(select(selectActiveShellLanguages),
      filter(languages => languages !== undefined),
      map(languages => languages.map((language: any) => language.code)),
    );
  }

  initialize() {    
    combineLatest([this.storeLanguages$, this.store.pipe(select(selectedLanguage))]).subscribe(([languages, selectedLanguage]) => {
      this.translate.addLangs(languages);
      this.translate.use(selectedLanguage);
    });
  }

  updateLanguage(language: string) {
    this.translate.use(language);
    this.store.dispatch(setLanguage({ selectedLanguage: language }));
  }
}
