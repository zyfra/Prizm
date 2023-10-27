import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorphModule } from '../../../directives/polymorph/polymorph.module';
import { PrizmPreventDefaultModule } from '../../../directives/prevent-default/prevent-default.module';
import { PrizmValueAccessorModule } from '../../../directives/value-accessor/value-accessor.module';
import { PrizmCalendarModule } from '../../calendar/calendar.module';
import { PrizmDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { PrizmLinkModule } from '../../link/link.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmIconModule } from '../../icon/icon.module';
import { PrizmMaskModule } from '../../../modules';
import { PrizmDataListModule } from '../../data-list';
import { PrizmInputNativeValueModule, PrizmLifecycleModule } from '../../../directives';
import { PrizmInputLayoutDateTimeComponent } from './input-layout-date-time.component';
import { PrizmInputZoneModule } from '../../../directives/input-zone';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrizmMaskModule,
    PrizmDataListModule,
    PolymorphModule,
    PrizmInputTextModule,
    PrizmIconModule,
    PrizmInputZoneModule,
    FormsModule,
    PrizmLifecycleModule,
    PrizmPreventDefaultModule,
    PrizmCalendarModule,
    PrizmLinkModule,
    PrizmDropdownHostModule,
    PrizmValueAccessorModule,
    PrizmInputNativeValueModule,
  ],
  declarations: [PrizmInputLayoutDateTimeComponent],
  exports: [PrizmDropdownHostModule, PrizmInputLayoutDateTimeComponent, PrizmInputTextModule],
})
export class PrizmInputLayoutDateTimeModule {}
