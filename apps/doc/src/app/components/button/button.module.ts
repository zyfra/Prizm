import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {generateRoutes, TuiAddonDocModule} from "@taiga-ui/addon-doc";
import {RouterModule} from "@angular/router";
import {ButtonComponent} from "./button.component";
import {ZuiButtonExample2} from "./examples/2/template";
import {ZuiButtonExample1} from "./examples/1/template";
import {ZuiButtonModule} from "@digital-plant/zui-components";

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
    ButtonComponent
  ],
  exports: [ButtonComponent],
})
export class ButtonModule {}
