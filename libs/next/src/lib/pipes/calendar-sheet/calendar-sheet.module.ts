import { NgModule } from '@angular/core';

import { ZuiCalendarSheetPipe } from './calendar-sheet.pipe';

@NgModule({
    declarations: [ZuiCalendarSheetPipe],
    exports: [ZuiCalendarSheetPipe],
})
export class ZuiCalendarSheetPipeModule {}
