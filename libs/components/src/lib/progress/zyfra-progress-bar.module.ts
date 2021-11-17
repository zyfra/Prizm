import { NgModule } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { ZyfraProgressBarComponent } from './zyfra-progress-bar.component';

@NgModule({
  declarations: [ZyfraProgressBarComponent],
  imports: [ProgressBarModule],
  exports: [ZyfraProgressBarComponent],
})
export class ZyfraProgressBarModule {}
