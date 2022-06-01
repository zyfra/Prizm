import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {generateRoutes, TuiAddonDocModule} from "@taiga-ui/addon-doc";
import {RouterModule} from "@angular/router";
import {ExampleComponent} from "./example.component";
import {ZyfraButtonModule} from "@digital-plant/zyfra-components";
import {ZuiComponentExample1} from "./examples/1/template";
import {ZuiComponentExample2} from "./examples/2/template";

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    ZyfraButtonModule,
    RouterModule.forChild(generateRoutes(ExampleComponent)),
  ],
  declarations: [
    ZuiComponentExample1,
    ZuiComponentExample2,
    ExampleComponent
  ],
  exports: [ExampleComponent],
})
export class ExampleModule {}
