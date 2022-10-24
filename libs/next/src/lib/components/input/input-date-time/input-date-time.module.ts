import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorphModule } from '../../../directives/polymorph/polymorph.module';
import { ZuiPreventDefaultModule } from '../../../directives/prevent-default/prevent-default.module';
import { ZuiValueAccessorModule } from '../../../directives/value-accessor/value-accessor.module';
import { ZuiCalendarModule } from '../../calendar/calendar.module';
import { ZuiDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { ZuiLinkModule } from '../../link/link.module';
import { ZuiInputDateTimeComponent } from './input-date-time.component';
import { FormsModule } from '@angular/forms';
import { ZuiInputTextModule } from '../input-text/input-text.module';
import { ZuiIconModule } from '../../icon/icon.module';
import { ZuiMaskModule } from '../../../modules';
import { ZuiDataListModule } from '../../data-list';
import { ZuiLifecycleModule } from '../../../directives';

@NgModule({
  imports: [
    CommonModule,
    ZuiMaskModule,
    ZuiDataListModule,
    PolymorphModule,
    ZuiInputTextModule,
    ZuiIconModule,
    FormsModule,
    ZuiLifecycleModule,
    ZuiPreventDefaultModule,
    ZuiCalendarModule,
    ZuiLinkModule,
    ZuiDropdownHostModule,
    ZuiValueAccessorModule,
  ],
  declarations: [ZuiInputDateTimeComponent],
  exports: [ZuiInputDateTimeComponent],
})
export class ZuiInputDateTimeModule {}

