import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZuiRepeatTimesModule } from '../../directives/repeat-times/repeat-times.module';
import { ZuiProgressBarComponent } from './progress-bar/progress-bar.component';
import { ZuiProgressColorSegmentsDirective } from './progress-bar/progress-color-segments.directive';
import { ZuiProgressCircleComponent } from './progress-circle/progress-circle.component';
import { ZuiProgressLabelComponent } from './progress-label/progress-label.component';
import { ZuiProgressSegmentedComponent } from './progress-segmented/progress-segmented.component';

@NgModule({
    imports: [CommonModule, ZuiRepeatTimesModule],
    declarations: [
        ZuiProgressBarComponent,
        ZuiProgressColorSegmentsDirective,
        ZuiProgressCircleComponent,
        ZuiProgressLabelComponent,
        ZuiProgressSegmentedComponent,
    ],
    exports: [
        ZuiProgressBarComponent,
        ZuiProgressCircleComponent,
        ZuiProgressColorSegmentsDirective,
        ZuiProgressLabelComponent,
        ZuiProgressSegmentedComponent,
    ],
})
export class ZuiProgressModule {}
