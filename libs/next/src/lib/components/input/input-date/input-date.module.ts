import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZuiInputDateComponent } from './input-date.component';
import { PolymorphModule } from '../../../directives/polymorph/polymorph.module';
import { ZuiCalendarModule } from '../../calendar/calendar.module';
import { ZuiLinkModule } from '../../link/link.module';
import { ZuiDropdownHostModule } from '../../dropdowns/dropdown-host';
import { ZuiValueAccessorModule } from '../../../directives/value-accessor/value-accessor.module';
import { ZuiPreventDefaultModule } from '../../../directives/prevent-default/prevent-default.module';
import { ZuiLetModule } from '@digital-plant/zyfra-helpers';
import { ZuiInputTextModule } from '../input-text/input-text.module';
import { ZuiIconModule } from '../../icon/icon.module';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
    imports: [
        CommonModule,
        NgxMaskModule.forRoot(),
        PolymorphModule,
        ZuiPreventDefaultModule,
        ZuiCalendarModule,
        ZuiInputTextModule,
        ZuiIconModule,
        ZuiLinkModule,
        FormsModule,
        ZuiDropdownHostModule,
        ZuiValueAccessorModule,
        ZuiLetModule,
    ],
    declarations: [ZuiInputDateComponent],
    exports: [ZuiInputDateComponent],
})
export class ZuiInputDateModule {}
