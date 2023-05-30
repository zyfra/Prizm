import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmLetModule } from '@prizm-ui/helpers';
import { PolymorphModule } from '../../../directives/polymorph/polymorph.module';
import { PrizmValueAccessorModule } from '../../../directives/value-accessor/value-accessor.module';
import { PrizmCalendarRangeModule } from '../../calendar-range/calendar-range.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmIconModule } from '../../icon/icon.module';
import { PrizmDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { PrizmMaskModule } from '../../../modules';
import { PrizmInputLayoutTimeModule } from '../input-time';
import { PrizmInputLayoutDateRangeModule } from '../input-date-range';
import { PrizmDropdownZoneModule, PrizmLifecycleModule, PrizmZoneEventModule } from '../../../directives';
import { PrizmInputLayoutDateTimeRangeComponent } from './input-layout-date-range-time.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmMaskModule,
    PrizmLetModule,
    PolymorphModule,
    PrizmInputTextModule,
    PrizmIconModule,
    PrizmInputLayoutDateRangeModule,
    PrizmDropdownHostModule,
    PrizmCalendarRangeModule,
    PrizmValueAccessorModule,
    FormsModule,
    PrizmZoneEventModule,
    PrizmInputLayoutTimeModule,
    PrizmDropdownZoneModule,
    ReactiveFormsModule,
    PrizmLifecycleModule,
  ],
  declarations: [PrizmInputLayoutDateTimeRangeComponent],
  exports: [PrizmInputLayoutDateTimeRangeComponent, PrizmInputTextModule],
})
export class PrizmInputLayoutDateTimeRangeModule {}
