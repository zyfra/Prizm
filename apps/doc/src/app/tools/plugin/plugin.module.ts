import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { PluginComponent } from './plugin.component';
import { PrizmButtonComponent } from '@prizm-ui/components';
import { PrizmAstAccordionExampleComponent } from './examples/accordion/accordion.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmButtonComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(PluginComponent)),
  ],
  declarations: [PrizmAstAccordionExampleComponent, PluginComponent],
  exports: [PluginComponent],
})
export class PluginModule {}
