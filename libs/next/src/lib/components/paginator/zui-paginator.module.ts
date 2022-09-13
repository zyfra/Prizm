import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZuiPaginatorComponent } from './zui-paginator.component';
import { ZuiIconModule } from '../icon';
import { ZuiSelectModule } from '../dropdowns/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ZuiPaginatorComponent],
  imports: [CommonModule, ZuiIconModule, ZuiSelectModule, ReactiveFormsModule, FormsModule],
  exports: [ZuiPaginatorComponent],
})
export class ZuiPaginatorModule {}
