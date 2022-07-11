import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraToggleButtonModule } from '@digital-plant/zyfra-components';
import { ToggleButtonTestComponent } from './toggle-button-test.component';
import { APP_TOKEN } from '../../app.token';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ToggleButtonTestComponent],
  imports: [CommonModule, ZyfraToggleButtonModule, FormsModule, ReactiveFormsModule],
  exports: [ToggleButtonTestComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['ToggleButton', ToggleButtonTestComponent],
      multi: true,
    },
  ],
})
export class ToggleButtonTestModule {}
