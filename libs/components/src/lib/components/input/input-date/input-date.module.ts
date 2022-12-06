import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmInputDateComponent } from './input-date.component';
import { PolymorphModule } from '../../../directives/polymorph/polymorph.module';
import { PrizmCalendarModule } from '../../calendar/calendar.module';
import { PrizmLinkModule } from '../../link/link.module';
import { PrizmDropdownHostModule } from '../../dropdowns/dropdown-host';
import { PrizmValueAccessorModule } from '../../../directives/value-accessor/value-accessor.module';
import { PrizmPreventDefaultModule } from '../../../directives/prevent-default/prevent-default.module';
import { PrizmLetModule } from '@prizm-ui/helpers';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmIconSvgModule } from '../../icon/icon.module';
import { FormsModule } from '@angular/forms';
import { PrizmMaskModule } from '../../../modules';

@NgModule({
  imports: [
    CommonModule,
    PrizmMaskModule,
    PolymorphModule,
    PrizmPreventDefaultModule,
    PrizmCalendarModule,
    PrizmInputTextModule,
    PrizmIconSvgModule,
    PrizmLinkModule,
    FormsModule,
    PrizmDropdownHostModule,
    PrizmValueAccessorModule,
    PrizmLetModule,
  ],
  declarations: [PrizmInputDateComponent],
  exports: [PrizmInputDateComponent],
})
export class PrizmInputDateModule {}

