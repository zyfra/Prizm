import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrizmCalendarMonthModule } from '@prizm-ui/components';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { TuiLinkModule } from '@taiga-ui/core';
import { ExampleCalendarMonthComponent } from './calendar-month.component';
import { PrizmMonthExample1Component } from './examples/base/base.component';
import { PrizmMonthExample2Component } from './examples/range/range.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TuiLinkModule,
    PrizmCalendarMonthModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ExampleCalendarMonthComponent)),
  ],
  declarations: [ExampleCalendarMonthComponent, PrizmMonthExample1Component, PrizmMonthExample2Component],
  exports: [ExampleCalendarMonthComponent],
})
export class ExampleCalendarMonthModule {}
