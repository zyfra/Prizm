import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {generateRoutes, TuiAddonDocModule} from "@taiga-ui/addon-doc";
import {RouterModule} from "@angular/router";
import {ExampleComponent} from "./example.component";
import {ZuiButtonExample1} from "./examples/1/template";
import {ZyfraButtonModule} from "@digital-plant/zyfra-components";
import {ZuiButtonExample2} from "./examples/2/template";

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    ZyfraButtonModule,
    RouterModule.forChild(generateRoutes(ExampleComponent)),
  ],
  declarations: [
    ZuiButtonExample1,
    ZuiButtonExample2,
    ExampleComponent
  ],
  exports: [ExampleComponent],
})
export class ExampleButtonModule {}
