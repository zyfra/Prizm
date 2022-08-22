import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZuiPaginatorComponent } from './zui-paginator.component';
import { ZuiIconModule } from '../icon';

@NgModule({
  declarations: [ZuiPaginatorComponent],
  imports: [CommonModule, ZuiIconModule],
  exports: [ZuiPaginatorComponent],
})
export class ZuiPaginatorModule {}
