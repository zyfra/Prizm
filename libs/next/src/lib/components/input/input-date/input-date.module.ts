import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZuiInputDateComponent } from './input-date.component';
import { PolymorphModule } from '../../../directives/polymorph/polymorph.module';
import { PzmCalendarModule } from '../../calendar/calendar.module';
import { PzmLinkModule } from '../../link/link.module';
import { ZuiDropdownHostModule } from '../../dropdowns/dropdown-host';
import { PzmValueAccessorModule } from '../../../directives/value-accessor/value-accessor.module';
import { PzmPreventDefaultModule } from '../../../directives/prevent-default/prevent-default.module';
import { PzmLetModule } from '@digital-plant/zyfra-helpers';
import { PzmInputTextModule } from '../input-text/input-text.module';
import { PzmIconModule } from '../../icon/icon.module';
import { FormsModule } from '@angular/forms';
import { ZuiMaskModule } from '../../../modules';

@NgModule({
  imports: [
    CommonModule,
    ZuiMaskModule,
    PolymorphModule,
    PzmPreventDefaultModule,
    PzmCalendarModule,
    PzmInputTextModule,
    PzmIconModule,
    PzmLinkModule,
    FormsModule,
    ZuiDropdownHostModule,
    PzmValueAccessorModule,
    PzmLetModule,
  ],
  declarations: [ZuiInputDateComponent],
  exports: [ZuiInputDateComponent],
})
export class ZuiInputDateModule {}

