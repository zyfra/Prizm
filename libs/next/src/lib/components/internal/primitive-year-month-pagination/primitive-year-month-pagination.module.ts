import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PzmMonthPipeModule } from '../../../pipes/month';
import { PzmPrimitiveYearMonthPaginationComponent } from './primitive-year-month-pagination.component';
import { PzmPrimitiveSpinButtonModule } from '../primitive-spin-button';
import { PzmLinkModule } from '../../link/link.module';
import { PzmFocusableModule } from '../../../directives/focusable/focusable.module';
import { PzmIconModule } from '../../icon/icon.module';

@NgModule({
    imports: [
        CommonModule,
        PzmFocusableModule,
        PzmPrimitiveSpinButtonModule,
        PzmLinkModule,
        PzmIconModule,
        PzmMonthPipeModule,
    ],
    declarations: [PzmPrimitiveYearMonthPaginationComponent],
    exports: [PzmPrimitiveYearMonthPaginationComponent],
})
export class PzmPrimitiveYearMonthPaginationModule {}
