import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorphModule } from '../../directives';
import { ZuiCardModule } from '../card';
import { ZuiWidgetComponent } from './widget.component';
import { ZuiIconModule } from '../icon';

@NgModule({
  imports: [
    CommonModule,
    ZuiCardModule,
    ZuiIconModule,
    PolymorphModule,
  ],
  declarations: [ZuiWidgetComponent],
  exports: [ZuiWidgetComponent],
})
export class ZuiWidgetModule {}
