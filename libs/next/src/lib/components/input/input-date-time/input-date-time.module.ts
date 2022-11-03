import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorphModule } from '../../../directives/polymorph/polymorph.module';
import { PzmPreventDefaultModule } from '../../../directives/prevent-default/prevent-default.module';
import { PzmValueAccessorModule } from '../../../directives/value-accessor/value-accessor.module';
import { PzmCalendarModule } from '../../calendar/calendar.module';
import { PzmDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { PzmLinkModule } from '../../link/link.module';
import { PzmInputDateTimeComponent } from './input-date-time.component';
import { FormsModule } from '@angular/forms';
import { PzmInputTextModule } from '../input-text/input-text.module';
import { PzmIconModule } from '../../icon/icon.module';
import { PzmMaskModule } from '../../../modules';
import { PzmDataListModule } from '../../data-list';
import { PzmLifecycleModule } from '../../../directives';

@NgModule({
  imports: [
    CommonModule,
    PzmMaskModule,
    PzmDataListModule,
    PolymorphModule,
    PzmInputTextModule,
    PzmIconModule,
    FormsModule,
    PzmLifecycleModule,
    PzmPreventDefaultModule,
    PzmCalendarModule,
    PzmLinkModule,
    PzmDropdownHostModule,
    PzmValueAccessorModule,
  ],
  declarations: [PzmInputDateTimeComponent],
  exports: [PzmInputDateTimeComponent],
})
export class PzmInputDateTimeModule {}

