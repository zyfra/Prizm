import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZuiLetModule } from '@digital-plant/zyfra-helpers';
import { ZuiActiveZoneModule } from '../../../directives/active-zone/active-zone.module';
import { PolymorphModule } from '../../../directives/polymorph/polymorph.module';
import { ZuiInputDateRangeComponent } from './input-date-range.component';
import { ZuiValueAccessorModule } from '../../../directives/value-accessor/value-accessor.module';
import { ZuiCalendarRangeModule } from '../../calendar-range/calendar-range.module';
import { FormsModule } from '@angular/forms';
import { ZuiInputTextModule } from '../input-text/input-text.module';
import { ZuiIconModule } from '../../icon/icon.module';
import { ZuiDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
    imports: [
      CommonModule,
      NgxMaskModule.forRoot(),
      ZuiActiveZoneModule,
      ZuiLetModule,
      PolymorphModule,
      ZuiInputTextModule,
      ZuiIconModule,
      ZuiDropdownHostModule,
      ZuiCalendarRangeModule,
      ZuiValueAccessorModule,
      FormsModule
    ],
    declarations: [ZuiInputDateRangeComponent],
    exports: [
      ZuiInputDateRangeComponent
    ],
})
export class ZuiInputDateRangeModule {}
