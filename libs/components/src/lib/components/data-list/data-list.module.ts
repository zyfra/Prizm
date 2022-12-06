import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmDataListComponent } from './data-list.component';
import { PolymorphModule } from '../../directives';
import { PrizmIconSvgModule } from '../icon';
import { PrizmScrollbarModule } from '../scrollbar';

@NgModule({
  imports: [
    CommonModule,
    PolymorphModule,
    PrizmIconSvgModule,
    PrizmScrollbarModule
  ],
    declarations: [PrizmDataListComponent],
    exports: [PrizmDataListComponent],
})
export class PrizmDataListModule {}
