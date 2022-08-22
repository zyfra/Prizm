import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ZuiScrollControlsComponent } from './scroll-controls.component';
import { ZuiScrollbarWrapperDirective } from './scrollbar-wrapper.directive';
import { ZuiLetModule } from '@digital-plant/zyfra-helpers';
import { ZuiScrollbarDirective } from './scrollbar.directive';
import { ZuiThemeModule } from '../../directives/theme';

@NgModule({
    imports: [CommonModule, ZuiLetModule, ZuiThemeModule],
    declarations: [
        ZuiScrollbarDirective,
        ZuiScrollbarWrapperDirective,
        ZuiScrollControlsComponent,
    ],
    exports: [ZuiScrollControlsComponent],
})
export class ZuiScrollControlsModule {}
