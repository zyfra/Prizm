import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress.component';
import { ZyfraProgressBarModule } from '@digital-plant/zyfra-components';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [ProgressComponent],
  imports: [CommonModule, ZyfraProgressBarModule],
  exports: [ProgressComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Progress', ProgressComponent],
      multi: true,
    },
  ],
})
export class ProgressModule {}
