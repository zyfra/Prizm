import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ZuiScrollControlsComponent } from './scroll-controls.component';
import { ZuiScrollbarWrapperDirective } from './scrollbar-wrapper.directive';
import { ZuiLetModule } from '@digital-plant/zyfra-helpers';
import { ZuiScrollbarDirective } from './scrollbar.directive';

@NgModule({
    imports: [CommonModule, ZuiLetModule],
    declarations: [
        ZuiScrollbarDirective,
        ZuiScrollbarWrapperDirective,
        ZuiScrollControlsComponent,
    ],
    exports: [ZuiScrollControlsComponent],
})
export class ZuiScrollControlsModule {}
