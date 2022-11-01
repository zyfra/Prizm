import { NgModule } from '@angular/core';

import { PzmCalendarSheetPipe } from './calendar-sheet.pipe';

@NgModule({
    declarations: [PzmCalendarSheetPipe],
    exports: [PzmCalendarSheetPipe],
})
export class PzmCalendarSheetPipeModule {}
