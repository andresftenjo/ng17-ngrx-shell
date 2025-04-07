import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeShellComponent } from './home-shell/home-shell.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer, storeReducer, userAuthenticatedReducer } from './storage/reducers/init.reducers';

@NgModule({
  declarations: [
    AppComponent,
    HomeShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ appState: storeReducer })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
