import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZyfraDisableControlModule } from '../@core/shared/zyfra-disable-control.module';
import { ZyfraTemplateModule } from '../@core/shared/zyfra-template.module';
import { ZyfraDropdownComponent } from './zyfra-dropdown.component';
import { DropdownModule } from 'primeng/dropdown';
import { ZyfraDropdownTemplateDirective } from './zyfra-dropdown-template.directive';

@NgModule({
  declarations: [ZyfraDropdownComponent, ZyfraDropdownTemplateDirective],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DropdownModule, ZyfraTemplateModule, ZyfraDisableControlModule],
  exports: [ZyfraDropdownComponent, ZyfraDropdownTemplateDirective],
})
export class ZyfraDropdownModule {}
