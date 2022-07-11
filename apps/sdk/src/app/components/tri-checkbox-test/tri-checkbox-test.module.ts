import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraTriCheckBoxModule } from '@digital-plant/zyfra-components';
import { TriCheckboxTestComponent } from './tri-checkbox-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [TriCheckboxTestComponent],
  imports: [CommonModule, ZyfraTriCheckBoxModule, FormsModule, ReactiveFormsModule],
  exports: [TriCheckboxTestComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['TriCheckbox', TriCheckboxTestComponent],
      multi: true,
    },
  ],
})
export class TriCheckboxTestModule {}
