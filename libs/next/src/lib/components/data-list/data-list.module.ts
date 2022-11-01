import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PzmDataListComponent } from './data-list.component';
import { PolymorphModule } from '../../directives';
import { PzmIconModule } from '../icon';
import { PzmScrollbarModule } from '../scrollbar';

@NgModule({
  imports: [
    CommonModule,
    PolymorphModule,
    PzmIconModule,
    PzmScrollbarModule
  ],
    declarations: [PzmDataListComponent],
    exports: [PzmDataListComponent],
})
export class PzmDataListModule {}
