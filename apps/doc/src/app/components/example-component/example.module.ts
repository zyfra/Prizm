import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {generateRoutes, TuiAddonDocModule} from "@taiga-ui/addon-doc";
import {RouterModule} from "@angular/router";
import {ExampleComponent} from "./example.component";
import {ZyfraButtonModule} from "@digital-plant/zyfra-components";
import {ZuiComponentExample1Component} from "./examples/1/template";
import {ZuiComponentExample2Component} from "./examples/2/template";

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    ZyfraButtonModule,
    RouterModule.forChild(generateRoutes(ExampleComponent)),
  ],
  declarations: [
    ZuiComponentExample1Component,
    ZuiComponentExample2Component,
    ExampleComponent
  ],
  exports: [ExampleComponent],
})
export class ExampleModule {}
