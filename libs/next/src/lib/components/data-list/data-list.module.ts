import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZuiDataListComponent } from './data-list.component';
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
    declarations: [ZuiDataListComponent],
    exports: [ZuiDataListComponent],
})
export class ZuiDataListModule {}
