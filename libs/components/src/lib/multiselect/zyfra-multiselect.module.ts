import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraDisableControlModule } from '../@core/shared/zyfra-disable-control.module';
import { ZyfraTemplateModule } from '../@core/shared/zyfra-template.module';
import { ZyfraMultiSelectComponent } from './zyfra-multiselect.component';
import { ZyfraMultiSelectTemplateDirective } from './zyfra-multiselect-template.directive';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [ZyfraMultiSelectComponent, ZyfraMultiSelectTemplateDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ZyfraTemplateModule,
    ZyfraDisableControlModule,
    MultiSelectModule,
  ],
  exports: [ZyfraMultiSelectComponent, ZyfraMultiSelectTemplateDirective],
})
export class ZyfraMultiSelectModule {}
