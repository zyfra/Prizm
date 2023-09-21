import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmPaginatorComponent } from './prizm-paginator.component';
import { PrizmIconModule } from '../icon';
import { PrizmSelectModule } from '../dropdowns/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmCallFuncModule, PrizmLetModule } from '@prizm-ui/helpers';
import { PolymorphModule } from '../../directives';
import { PrizmButtonModule } from '../button/button.module';

@NgModule({
  declarations: [PrizmPaginatorComponent],
  imports: [
    CommonModule,
    PrizmCallFuncModule,
    PolymorphModule,
    PrizmLetModule,
    PrizmIconModule,
    PrizmSelectModule,
    ReactiveFormsModule,
    FormsModule,
    PrizmButtonModule,
  ],
  exports: [PrizmPaginatorComponent],
})
export class PrizmPaginatorModule {}
