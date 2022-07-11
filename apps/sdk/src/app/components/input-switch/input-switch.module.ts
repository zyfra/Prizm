import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSwitchComponent } from './input-switch.component';
import { ZyfraInputSwitchModule } from '@digital-plant/zyfra-components';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [InputSwitchComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ZyfraInputSwitchModule],
  exports: [InputSwitchComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Input-switch', InputSwitchComponent],
      multi: true,
    },
  ],
})
export class InputSwitchModule {}
