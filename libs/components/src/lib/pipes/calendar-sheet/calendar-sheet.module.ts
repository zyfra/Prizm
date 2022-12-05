import { NgModule } from '@angular/core';

import { PrizmCalendarSheetPipe } from './calendar-sheet.pipe';

@NgModule({
    declarations: [PrizmCalendarSheetPipe],
    exports: [PrizmCalendarSheetPipe],
})
export class PrizmCalendarSheetPipeModule {}
