import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZuiDataListComponent } from './data-list.component';
import { PolymorphModule } from '../../directives';
import { ZuiIconModule } from '../icon';
import { ZuiScrollbarModule } from '../scrollbar';

@NgModule({
  imports: [
    CommonModule,
    PolymorphModule,
    ZuiIconModule,
    ZuiScrollbarModule
  ],
    declarations: [ZuiDataListComponent],
    exports: [ZuiDataListComponent],
})
export class ZuiDataListModule {}
