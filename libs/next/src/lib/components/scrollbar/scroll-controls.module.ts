import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PzmScrollControlsComponent } from './scroll-controls.component';
import { PzmScrollbarWrapperDirective } from './scrollbar-wrapper.directive';
import { PzmLetModule } from '@digital-plant/zyfra-helpers';
import { PzmScrollbarDirective } from './scrollbar.directive';
import { PzmThemeModule } from '../../directives/theme';

@NgModule({
    imports: [CommonModule, PzmLetModule, PzmThemeModule],
    declarations: [
        PzmScrollbarDirective,
        PzmScrollbarWrapperDirective,
        PzmScrollControlsComponent,
    ],
    exports: [PzmScrollControlsComponent],
})
export class PzmScrollControlsModule {}
