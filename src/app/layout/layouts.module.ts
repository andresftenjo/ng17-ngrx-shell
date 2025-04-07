import { NgModule } from "@angular/core";
import { LayoutsRoutingModule } from "./layouts.routing";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { actionMcfHomeReducer } from "../storage/mcf-home/mcf-reducer";
import { actionShellReducer } from "../storage/state/state.reducer";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ButtonModule } from "primeng/button";
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { actionMcfYourOrderReducer } from "../storage/mcf-home/mcf-yourorder-reducer";
import { SharedComponentsModule } from "../common/components/shared-components.module";
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
      LayoutsRoutingModule,
      HttpClientModule,
      ButtonModule,
      MenuModule,
      TableModule,
      IconFieldModule,
      InputIconModule,
      DialogModule,
      ToastModule,
      SharedComponentsModule,
      StoreModule.forRoot(
          { 
            shell:actionShellReducer,
            mcfHome: actionMcfHomeReducer,
            mcfHome2: actionMcfYourOrderReducer  
          }
      ),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false }),
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    ],
    providers: [MessageService]
  })
  export class LayoutsModule { }