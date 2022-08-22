import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZuiMonthPipeModule } from '../../../pipes/month';
import { ZuiPrimitiveYearMonthPaginationComponent } from './primitive-year-month-pagination.component';
import { ZuiPrimitiveSpinButtonModule } from '../primitive-spin-button';
import { ZuiLinkModule } from '../../link/link.module';
import { ZuiFocusableModule } from '../../../directives/focusable/focusable.module';
import { ZuiIconModule } from '../../icon/icon.module';

@NgModule({
    imports: [
        CommonModule,
        ZuiFocusableModule,
        ZuiPrimitiveSpinButtonModule,
        ZuiLinkModule,
        ZuiIconModule,
        ZuiMonthPipeModule,
    ],
    declarations: [ZuiPrimitiveYearMonthPaginationComponent],
    exports: [ZuiPrimitiveYearMonthPaginationComponent],
})
export class ZuiPrimitiveYearMonthPaginationModule {}
