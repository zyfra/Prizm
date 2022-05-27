import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ZyfraCheckBoxModule } from '@digital-plant/zyfra-components';
import { APP_TOKEN } from '../../app.token';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [CheckboxComponent],
  imports: [CommonModule, ZyfraCheckBoxModule, FormsModule],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Checkbox', CheckboxComponent],
      multi: true,
    },
  ],
})
export class CheckboxModule {}
