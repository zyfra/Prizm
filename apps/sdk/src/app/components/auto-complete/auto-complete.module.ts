import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraAutoCompleteModule } from '@digital-plant/zyfra-components';
import { AutoCompleteComponent } from './auto-complete.component';
import { APP_TOKEN } from '../../app.token';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AutoCompleteComponent],
  imports: [CommonModule, ZyfraAutoCompleteModule, FormsModule, ReactiveFormsModule],
  exports: [AutoCompleteComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['AutoComplete', AutoCompleteComponent],
      multi: true,
    },
  ],
})
export class AutoCompleteModule {}
