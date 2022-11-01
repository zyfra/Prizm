import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PzmLetModule } from '@digital-plant/zyfra-helpers';
import { PolymorphModule } from '../../../directives/polymorph/polymorph.module';
import { ZuiInputDateRangeComponent } from './input-date-range.component';
import { PzmValueAccessorModule } from '../../../directives/value-accessor/value-accessor.module';
import { ZuiCalendarRangeModule } from '../../calendar-range/calendar-range.module';
import { FormsModule } from '@angular/forms';
import { PzmInputTextModule } from '../input-text/input-text.module';
import { PzmIconModule } from '../../icon/icon.module';
import { ZuiDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { ZuiMaskModule } from '../../../modules';

@NgModule({
  imports: [
    CommonModule,
    ZuiMaskModule,
    PzmLetModule,
    PolymorphModule,
    PzmInputTextModule,
    PzmIconModule,
    ZuiDropdownHostModule,
    ZuiCalendarRangeModule,
    PzmValueAccessorModule,
    FormsModule,
  ],
  declarations: [ZuiInputDateRangeComponent],
  exports: [ZuiInputDateRangeComponent],
})
export class ZuiInputDateRangeModule {}

