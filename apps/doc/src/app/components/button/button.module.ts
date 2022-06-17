import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {generateRoutes, TuiAddonDocModule} from "@taiga-ui/addon-doc";
import {RouterModule} from "@angular/router";
import {ButtonComponent} from "./button.component";
import {ZuiButtonExample2Component} from "./examples/2/template";
import {ZuiButtonExample1Component} from "./examples/1/template";
import {ZuiButtonModule} from "@digital-plant/zui-components";
import {ZuiButtonExample3Component} from "./examples/3/template";
import {ZuiButtonExample4Component} from "./examples/4/template";
import { ZuiButtonExample5Component } from "./examples/5/template";

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    ZuiButtonModule,
    RouterModule.forChild(generateRoutes(ButtonComponent)),
  ],
  declarations: [
    ZuiButtonExample1Component,
    ZuiButtonExample2Component,
    ZuiButtonExample3Component,
    ZuiButtonExample4Component,
    ZuiButtonExample5Component,
    ButtonComponent
  ],
  exports: [ButtonComponent],
})
export class ButtonModule {}
