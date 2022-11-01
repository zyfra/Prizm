import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorphModule } from '../../../directives/polymorph/polymorph.module';
import { PzmPreventDefaultModule } from '../../../directives/prevent-default/prevent-default.module';
import { PzmValueAccessorModule } from '../../../directives/value-accessor/value-accessor.module';
import { PzmCalendarModule } from '../../calendar/calendar.module';
import { ZuiDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { PzmLinkModule } from '../../link/link.module';
import { ZuiInputDateTimeComponent } from './input-date-time.component';
import { FormsModule } from '@angular/forms';
import { PzmInputTextModule } from '../input-text/input-text.module';
import { PzmIconModule } from '../../icon/icon.module';
import { ZuiMaskModule } from '../../../modules';
import { ZuiDataListModule } from '../../data-list';
import { PzmLifecycleModule } from '../../../directives';

@NgModule({
  imports: [
    CommonModule,
    ZuiMaskModule,
    ZuiDataListModule,
    PolymorphModule,
    PzmInputTextModule,
    PzmIconModule,
    FormsModule,
    PzmLifecycleModule,
    PzmPreventDefaultModule,
    PzmCalendarModule,
    PzmLinkModule,
    ZuiDropdownHostModule,
    PzmValueAccessorModule,
  ],
  declarations: [ZuiInputDateTimeComponent],
  exports: [ZuiInputDateTimeComponent],
})
export class ZuiInputDateTimeModule {}

