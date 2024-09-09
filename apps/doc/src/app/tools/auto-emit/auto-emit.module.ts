import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { AutoEmitComponent } from './auto-emit.component';
import { PrizmButtonComponent } from '@prizm-ui/components';
import { PrizmObservableBaseExampleComponent } from './examples/base/base.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmButtonComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(AutoEmitComponent)),
  ],
  declarations: [PrizmObservableBaseExampleComponent, AutoEmitComponent],
  exports: [AutoEmitComponent],
})
export class AutoEmitModule {}
