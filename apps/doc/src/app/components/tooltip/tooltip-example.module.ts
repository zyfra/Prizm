import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { PolymorphModule, PrizmButtonModule, PrizmTooltipModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipExampleComponent } from './tooltip-example.component';
import { PrizmTooltipWithTemplateExampleComponent } from './examples/with-template/tooltip-with-template-example.component';
import { PrizmTooltipWithComponentExampleComponent } from './examples/with-component/tooltip-with-component-example.component';
import { PrizmTooltipBaseExampleComponent } from './examples/base/tooltip-base-example.component';
import { PrizmTooltipSomeComponent } from './examples/with-component/some.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmTooltipModule,
    PrizmButtonModule,
    RouterModule.forChild(prizmDocGenerateRoutes(TooltipExampleComponent)),
  ],
  declarations: [
    PrizmTooltipWithTemplateExampleComponent,
    PrizmTooltipWithComponentExampleComponent,
    PrizmTooltipSomeComponent,
    PrizmTooltipBaseExampleComponent,
    TooltipExampleComponent,
  ],
  exports: [TooltipExampleComponent],
})
export class TooltipExampleModule {}
