import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PzmLetModule } from '@digital-plant/zyfra-helpers';
import { PolymorphModule } from '../../../directives/polymorph/polymorph.module';
import { PzmInputDateRangeComponent } from './input-date-range.component';
import { PzmValueAccessorModule } from '../../../directives/value-accessor/value-accessor.module';
import { PzmCalendarRangeModule } from '../../calendar-range/calendar-range.module';
import { FormsModule } from '@angular/forms';
import { PzmInputTextModule } from '../input-text/input-text.module';
import { PzmIconModule } from '../../icon/icon.module';
import { PzmDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { PzmMaskModule } from '../../../modules';

@NgModule({
  imports: [
    CommonModule,
    PzmMaskModule,
    PzmLetModule,
    PolymorphModule,
    PzmInputTextModule,
    PzmIconModule,
    PzmDropdownHostModule,
    PzmCalendarRangeModule,
    PzmValueAccessorModule,
    FormsModule,
  ],
  declarations: [PzmInputDateRangeComponent],
  exports: [PzmInputDateRangeComponent],
})
export class PzmInputDateRangeModule {}

