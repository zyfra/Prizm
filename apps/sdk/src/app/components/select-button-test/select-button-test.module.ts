import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraSelectButtonModule } from '@digital-plant/zyfra-components';
import { SelectButtonTestComponent } from './select-button-test.component';
import { APP_TOKEN } from '../../app.token';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectButtonTestComponent],
  imports: [CommonModule, ZyfraSelectButtonModule, FormsModule, ReactiveFormsModule],
  exports: [SelectButtonTestComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Select-Button', SelectButtonTestComponent],
      multi: true,
    },
  ],
})
export class SelectButtonTestModule {}
