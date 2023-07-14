import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmPaginatorComponent } from './prizm-paginator.component';
import { PrizmIconModule } from '../icon';
import { PrizmInputSelectModule } from '../dropdowns/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmCallFuncModule } from '@prizm-ui/helpers';

@NgModule({
  declarations: [PrizmPaginatorComponent],
  imports: [
    CommonModule,
    PrizmCallFuncModule,
    PrizmIconModule,
    PrizmInputSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [PrizmPaginatorComponent],
})
export class PrizmPaginatorModule {}
