import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraMultiSelectModule } from '@digital-plant/zyfra-components';
import { MultiselectComponent } from './multiselect.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [MultiselectComponent],
  imports: [CommonModule, ZyfraMultiSelectModule, FormsModule, ReactiveFormsModule],
  exports: [MultiselectComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Multiselect', MultiselectComponent],
      multi: true,
    },
  ],
})
export class MultiselectModule {}
