import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmLetModule } from '@prizm-ui/helpers';
import { PolymorphModule } from '../../../directives/polymorph/polymorph.module';
import { PrizmValueAccessorModule } from '../../../directives/value-accessor/value-accessor.module';
import { PrizmCalendarRangeModule } from '../../calendar-range/calendar-range.module';
import { FormsModule } from '@angular/forms';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmIconModule } from '../../icon/icon.module';
import { PrizmDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { PrizmMaskModule } from '../../../modules';
import { PrizmInputLayoutDateTimeRangeComponent } from './input-layout-date-time-range.component';
import { PrizmInputZoneModule } from '../../../directives/input-zone';
import { PrizmLifecycleModule } from '../../../directives/lifecycle/lifecycle.module';
import { PrizmDataListModule } from '../../data-list';
import { PrizmInputLayoutTimeModule } from '../input-time';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmInputTextModule, PrizmInputLayoutDateTimeRangeComponent],
  exports: [PrizmInputLayoutDateTimeRangeComponent, PrizmInputTextModule],
})
export class PrizmInputLayoutDateTimeRangeModule {}
