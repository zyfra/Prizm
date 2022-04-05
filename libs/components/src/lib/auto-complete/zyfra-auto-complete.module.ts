import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraDisableControlModule } from '../@core/shared/zyfra-disable-control.module';
import { ZyfraTemplateModule } from '../@core/shared/zyfra-template.module';
import { ZyfraAutoCompleteComponent } from './zyfra-auto-complete.component';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  declarations: [ZyfraAutoCompleteComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AutoCompleteModule, ZyfraTemplateModule, ZyfraDisableControlModule],
  exports: [ZyfraAutoCompleteComponent],
})
export class ZyfraAutoCompleteModule {}
