import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {generateRoutes, TuiAddonDocModule} from "@taiga-ui/addon-doc";
import {RouterModule} from "@angular/router";
import {ToggleComponent} from "./toggle.component";
import {ZuiToggleExample1Component} from "./examples/1/template";
import {PolymorpheusModule, ZuiToggleModule} from "@digital-plant/zui-components";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorpheusModule,
    ZuiToggleModule,
    RouterModule.forChild(generateRoutes(ToggleComponent)),
  ],
  declarations: [
    ZuiToggleExample1Component,
    ToggleComponent
  ],
  exports: [ToggleComponent],
})
export class ToggleModule {}
