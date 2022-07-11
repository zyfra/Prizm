import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraSpinnerModule } from '@digital-plant/zyfra-components';
import { SpinnerTestComponent } from './spinner-test.component';
import { APP_TOKEN } from '../../app.token';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SpinnerTestComponent],
  imports: [CommonModule, ZyfraSpinnerModule, FormsModule, ReactiveFormsModule],
  exports: [SpinnerTestComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Spinner', SpinnerTestComponent],
      multi: true,
    },
  ],
})
export class SpinnerTestModule {}
