import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PzmRepeatTimesModule } from '../../directives/repeat-times/repeat-times.module';
import { PzmProgressBarComponent } from './progress-bar/progress-bar.component';
import { PzmProgressColorSegmentsDirective } from './progress-bar/progress-color-segments.directive';
import { PzmProgressCircleComponent } from './progress-circle/progress-circle.component';
import { PzmProgressLabelComponent } from './progress-label/progress-label.component';
import { PzmProgressSegmentedComponent } from './progress-segmented/progress-segmented.component';

@NgModule({
    imports: [CommonModule, PzmRepeatTimesModule],
    declarations: [
        PzmProgressBarComponent,
        PzmProgressColorSegmentsDirective,
        PzmProgressCircleComponent,
        PzmProgressLabelComponent,
        PzmProgressSegmentedComponent,
    ],
    exports: [
        PzmProgressBarComponent,
        PzmProgressCircleComponent,
        PzmProgressColorSegmentsDirective,
        PzmProgressLabelComponent,
        PzmProgressSegmentedComponent,
    ],
})
export class PzmProgressModule {}
