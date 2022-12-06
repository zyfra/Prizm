import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorphModule } from '../../../directives/polymorph/polymorph.module';
import { PrizmPreventDefaultModule } from '../../../directives/prevent-default/prevent-default.module';
import { PrizmValueAccessorModule } from '../../../directives/value-accessor/value-accessor.module';
import { PrizmCalendarModule } from '../../calendar/calendar.module';
import { PrizmDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { PrizmLinkModule } from '../../link/link.module';
import { PrizmInputDateTimeComponent } from './input-date-time.component';
import { FormsModule } from '@angular/forms';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmIconSvgModule } from '../../icon/icon.module';
import { PrizmMaskModule } from '../../../modules';
import { PrizmDataListModule } from '../../data-list';
import { PrizmLifecycleModule } from '../../../directives';

@NgModule({
  imports: [
    CommonModule,
    PrizmMaskModule,
    PrizmDataListModule,
    PolymorphModule,
    PrizmInputTextModule,
    PrizmIconSvgModule,
    FormsModule,
    PrizmLifecycleModule,
    PrizmPreventDefaultModule,
    PrizmCalendarModule,
    PrizmLinkModule,
    PrizmDropdownHostModule,
    PrizmValueAccessorModule,
  ],
  declarations: [PrizmInputDateTimeComponent],
  exports: [PrizmInputDateTimeComponent],
})
export class PrizmInputDateTimeModule {}

