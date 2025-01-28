import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  PrizmButtonComponent,
  PrizmCalendarMonthComponent,
  PrizmCalendarYearComponent,
} from '@prizm-ui/components';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { TuiLinkModule } from '@taiga-ui/core';
import { ExampleCalendarYearComponent } from './calendar-year-example.component';
import { PrizmCalendarYearBaseExampleComponent } from './examples/base/base.component';
import { PrizmCalendarYearCustomFooterExampleComponent } from './examples/custom-footer/custom-footer-example.component';
import { PrizmIfLanguageDirective } from '@prizm-ui/i18n';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TuiLinkModule,
    PrizmCalendarMonthComponent,
    PrizmAddonDocModule,
    PrizmCalendarYearComponent,
    PrizmButtonComponent,
    PrizmIfLanguageDirective,
    RouterModule.forChild(prizmDocGenerateRoutes(ExampleCalendarYearComponent)),
  ],
  declarations: [
    ExampleCalendarYearComponent,
    PrizmCalendarYearBaseExampleComponent,
    PrizmCalendarYearCustomFooterExampleComponent,
  ],
})
export class ExampleCalendarYearExampleModule {}
