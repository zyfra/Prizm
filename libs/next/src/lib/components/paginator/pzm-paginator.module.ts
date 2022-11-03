import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmPaginatorComponent } from './pzm-paginator.component';
import { PrizmIconModule } from '../icon';
import { PrizmSelectModule } from '../dropdowns/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PrizmPaginatorComponent],
  imports: [CommonModule, PrizmIconModule, PrizmSelectModule, ReactiveFormsModule, FormsModule],
  exports: [PrizmPaginatorComponent],
})
export class PrizmPaginatorModule {}
