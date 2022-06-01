import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {generateRoutes, TuiAddonDocModule} from "@taiga-ui/addon-doc";
import {RouterModule} from "@angular/router";
import {LoaderComponent} from "./loader.component";
import {ZuiLoaderExample1} from "./examples/1/template";
import {ZuiLoaderModule} from "@digital-plant/zui-components";

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    ZuiLoaderModule,
    RouterModule.forChild(generateRoutes(LoaderComponent)),
  ],
  declarations: [
    ZuiLoaderExample1,
    LoaderComponent
  ],
  exports: [LoaderComponent],
})
export class LoaderModule {}
