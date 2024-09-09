import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { CounterExampleComponent } from './counter-example.component';
import { PrizmCounterBaseExampleComponent } from './examples/base/counter-base-example.component';
import { PrizmButtonComponent, PrizmCounterDirective, PrizmCounterComponent } from '@prizm-ui/components';
import { PrizmCounterDirectiveExampleComponent } from './examples/directive/counter-directive-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmCounterDirective,
    PrizmCounterComponent,
    PrizmButtonComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(CounterExampleComponent)),
  ],
  declarations: [
    CounterExampleComponent,
    PrizmCounterBaseExampleComponent,
    PrizmCounterDirectiveExampleComponent,
  ],
  exports: [CounterExampleComponent],
})
export class CounterExampleModule {}
