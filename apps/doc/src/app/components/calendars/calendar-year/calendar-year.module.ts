import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrizmCalendarMonthComponent, PrizmCalendarYearComponent } from '@prizm-ui/components';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { TuiLinkModule } from '@taiga-ui/core';
import { ExampleCalendarYearComponent } from './calendar-year-example.component';
import { PrizmCalendarYearBaseExampleComponent } from './examples/base/base.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TuiLinkModule,
    PrizmCalendarMonthComponent,
    PrizmAddonDocModule,
    PrizmCalendarYearComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(ExampleCalendarYearComponent)),
  ],
  declarations: [ExampleCalendarYearComponent, PrizmCalendarYearBaseExampleComponent],
})
export class ExampleCalendarYearExampleModule {}
