import { NgModule } from '@angular/core';
import { ZyfraSpinnerComponent } from './zyfra-spinner.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [ZyfraSpinnerComponent],
  imports: [ProgressSpinnerModule],
  exports: [ZyfraSpinnerComponent],
})
export class ZyfraSpinnerModule {}
