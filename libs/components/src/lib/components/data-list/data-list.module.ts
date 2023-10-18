import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmDataListComponent } from './data-list.component';
import { PolymorphModule } from '../../directives';
import { PrizmIconModule } from '../icon';
import { PrizmScrollbarModule } from '../scrollbar';
import { PrizmDataListDirective } from './data-list.directive';

@NgModule({
  imports: [CommonModule, PolymorphModule, PrizmIconModule, PrizmScrollbarModule],
  declarations: [PrizmDataListComponent, PrizmDataListDirective],
  exports: [PrizmDataListComponent, PrizmDataListDirective],
})
export class PrizmDataListModule {}
