import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmRepeatTimesModule } from '../../directives/repeat-times/repeat-times.module';
import { PrizmProgressBarComponent } from './progress-bar/progress-bar.component';
import { PrizmProgressColorSegmentsDirective } from './progress-bar/progress-color-segments.directive';
import { PrizmProgressCircleComponent } from './progress-circle/progress-circle.component';
import { PrizmProgressLabelComponent } from './progress-label/progress-label.component';
import { PrizmProgressSegmentedComponent } from './progress-segmented/progress-segmented.component';

@NgModule({
  imports: [CommonModule, PrizmRepeatTimesModule],
  declarations: [
    PrizmProgressBarComponent,
    PrizmProgressColorSegmentsDirective,
    PrizmProgressCircleComponent,
    PrizmProgressLabelComponent,
    PrizmProgressSegmentedComponent,
  ],
  exports: [
    PrizmProgressBarComponent,
    PrizmProgressCircleComponent,
    PrizmProgressColorSegmentsDirective,
    PrizmProgressLabelComponent,
    PrizmProgressSegmentedComponent,
  ],
})
export class PrizmProgressModule {}
