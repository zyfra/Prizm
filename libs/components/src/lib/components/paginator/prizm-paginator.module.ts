import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmPaginatorComponent } from './prizm-paginator.component';
import { PrizmIconModule } from '../icon';
import { PrizmSelectModule } from '../dropdowns/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmCallFuncModule } from '@prizm-ui/helpers';
import { PrizmButtonModule } from '../button';

@NgModule({
  declarations: [PrizmPaginatorComponent],
  imports: [
    CommonModule,
    PrizmCallFuncModule,
    PrizmIconModule,
    PrizmSelectModule,
    ReactiveFormsModule,
    FormsModule,
    PrizmButtonModule,
  ],
  exports: [PrizmPaginatorComponent],
})
export class PrizmPaginatorModule {}
