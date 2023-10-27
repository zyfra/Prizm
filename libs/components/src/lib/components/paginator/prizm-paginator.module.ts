import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmPaginatorComponent } from './prizm-paginator.component';
import { PrizmIconModule } from '../icon';
import { PrizmInputSelectModule } from '../dropdowns/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmCallFuncModule, PrizmLetModule, PrizmPluckPipeModule } from '@prizm-ui/helpers';
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
    PrizmInputSelectModule,
    ReactiveFormsModule,
    FormsModule,
    PrizmButtonModule,
    PrizmPluckPipeModule,
    PrizmLetModule,
  ],
  exports: [PrizmPaginatorComponent],
})
export class PrizmPaginatorModule {}
