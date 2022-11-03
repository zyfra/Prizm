import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { PolymorphModule, PrizmButtonModule, PrizmTooltipModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipComponent } from './tooltip.component';
import {
  PrizmTooltipWithTemplateExampleComponent,
} from './examples/with-template/tooltip-with-template-example.component';
import {
  PrizmTooltipWithComponentExampleComponent,
} from './examples/with-component/tooltip-with-component-example.component';
import { PrizmTooltipBaseExampleComponent } from './examples/base/tooltip-base-example.component';
import { PrizmTooltipSomeComponent } from './examples/with-component/some.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmTooltipModule,
    PrizmButtonModule,
    RouterModule.forChild(generateRoutes(TooltipComponent)),
  ],
  declarations: [
    PrizmTooltipWithTemplateExampleComponent,
    PrizmTooltipWithComponentExampleComponent,
    PrizmTooltipSomeComponent,
    PrizmTooltipBaseExampleComponent,
    TooltipComponent
  ],
  exports: [TooltipComponent],
})
export class TooltipModule {}
