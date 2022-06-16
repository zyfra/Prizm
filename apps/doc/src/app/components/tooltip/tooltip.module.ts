import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {generateRoutes, TuiAddonDocModule} from "@taiga-ui/addon-doc";
import {RouterModule} from "@angular/router";
import {PolymorpheusModule, ZuiButtonModule, ZuiTooltipModule} from "@digital-plant/zui-components";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TooltipComponent} from "./tooltip.component";
import {ZuiTooltipExampleWithTemplate} from "./examples/with-template/template";
import {ZuiTooltipExampleBasic} from "./examples/basic/template";
import {ZuiTooltipSomeComponent} from "./examples/with-component/some-component";
import {ZuiTooltipExampleWithComponent} from "./examples/with-component/template";

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorpheusModule,
    ZuiTooltipModule,
    ZuiButtonModule,
    RouterModule.forChild(generateRoutes(TooltipComponent)),
  ],
  declarations: [
    ZuiTooltipExampleWithTemplate,
    ZuiTooltipExampleWithComponent,
    ZuiTooltipSomeComponent,
    ZuiTooltipExampleBasic,
    TooltipComponent
  ],
  exports: [TooltipComponent],
})
export class TooltipModule {}
