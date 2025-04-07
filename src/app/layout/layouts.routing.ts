import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppExternalLayoutsComponent } from "./external/app-external-layouts/app-external-layouts.component";
import { loadRemoteModule } from "@angular-architects/native-federation";
import { AppContactComponent } from "./pages/app-contact/app-contact.component";


const routes: Routes = [
    {
        path:'',
        component: AppExternalLayoutsComponent,
        children:[
            {
              path: 'home',
              loadChildren: () =>
                loadRemoteModule('mcfhome', './Module').then((m) => m.HomeModule),
            },
            { 
              path: 'yourorder',
              loadChildren: () =>
                loadRemoteModule('yourorder', './Module').then((m) => m.YourOrderModule),
            },
            { 
              path: 'placeorder',
              loadChildren: () =>
                loadRemoteModule('mcfplaceorder', './Module').then((m) => m.PlaceOrderModule),
            },
            { 
              path: 'myprofile',
              loadChildren: () =>
                loadRemoteModule('myprofile', './Module').then((m) => m.MyProfileModule),
            },

            {
              path:'contactus',
              component:AppContactComponent
            }
        ]
    }
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LayoutsRoutingModule { }