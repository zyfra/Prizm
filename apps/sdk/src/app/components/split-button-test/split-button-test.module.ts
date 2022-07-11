import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraSplitButtonModule } from '@digital-plant/zyfra-components';
import { SplitButtonTestComponent } from './split-button-test.component';
import { APP_TOKEN } from '../../app.token';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SplitButtonTestComponent],
  imports: [CommonModule, ZyfraSplitButtonModule, FormsModule, ReactiveFormsModule],
  exports: [SplitButtonTestComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['SplitButton', SplitButtonTestComponent],
      multi: true,
    },
  ],
})
export class SplitButtonTestModule {}
