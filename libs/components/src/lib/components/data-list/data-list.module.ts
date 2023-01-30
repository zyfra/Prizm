import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmDataListComponent } from './data-list.component';
import { PolymorphModule } from '../../directives';
import { PrizmIconModule } from '../icon';
import { PrizmScrollbarModule } from '../scrollbar';

@NgModule({
  imports: [CommonModule, PolymorphModule, PrizmIconModule, PrizmScrollbarModule],
  declarations: [PrizmDataListComponent],
  exports: [PrizmDataListComponent],
})
export class PrizmDataListModule {}
