import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { CounterExampleComponent } from './counter-example.component';
import { PrizmCounterBaseExampleComponent } from './examples/base/counter-base-example.component';
import { PrizmCounterModule } from '@prizm-ui/components';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(CounterExampleComponent)),
    PrizmCounterModule,
  ],
  declarations: [CounterExampleComponent, PrizmCounterBaseExampleComponent],
  exports: [CounterExampleComponent],
})
export class CounterExampleModule {}
