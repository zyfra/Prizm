import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmPaginatorComponent } from './prizm-paginator.component';
import { PrizmIconSvgModule } from '../icon';
import { PrizmSelectModule } from '../dropdowns/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PrizmPaginatorComponent],
  imports: [CommonModule, PrizmIconSvgModule, PrizmSelectModule, ReactiveFormsModule, FormsModule],
  exports: [PrizmPaginatorComponent],
})
export class PrizmPaginatorModule {}
