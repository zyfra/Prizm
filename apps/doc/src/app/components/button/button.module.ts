import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {generateRoutes, TuiAddonDocModule} from "@taiga-ui/addon-doc";
import {RouterModule} from "@angular/router";
import {ButtonComponent} from "./button.component";
import {ZuiButtonExample2} from "./examples/2/template";
import {ZuiButtonExample1} from "./examples/1/template";
import {ZuiButtonModule} from "@digital-plant/zui-components";
import {ZuiButtonExample3} from "./examples/3/template";
import {ZuiButtonExample4} from "./examples/4/template";
import { ZuiButtonExample5 } from "./examples/5/template";

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    ZuiButtonModule,
    RouterModule.forChild(generateRoutes(ButtonComponent)),
  ],
  declarations: [
    ZuiButtonExample1,
    ZuiButtonExample2,
    ZuiButtonExample3,
    ZuiButtonExample4,
    ZuiButtonExample5,
    ButtonComponent
  ],
  exports: [ButtonComponent],
})
export class ButtonModule {}
