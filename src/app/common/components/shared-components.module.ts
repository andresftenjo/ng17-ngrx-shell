import { NgModule } from "@angular/core";
import { AppProgressBarComponent } from "./app-progress-bar/app-progress-bar.component";
import { ProgressBarModule } from "primeng/progressbar";

@NgModule({

    imports: [
      ProgressBarModule
    ],
    declarations: [
      AppProgressBarComponent
    ],

    exports: [AppProgressBarComponent]
    
  })
  export class SharedComponentsModule { }