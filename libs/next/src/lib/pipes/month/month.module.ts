import {NgModule} from '@angular/core';

import {PzmMonthPipe} from './month.pipe';

@NgModule({
    exports: [PzmMonthPipe],
    declarations: [PzmMonthPipe],
})
export class PzmMonthPipeModule {}
