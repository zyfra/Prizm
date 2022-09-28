import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorphModule, ZuiThemeModule } from '../../directives';
import { ZuiCardModule } from '../card';
import { ZuiWidgetComponent } from './widget.component';
import { ZuiIconModule } from '../icon';

@NgModule({
  imports: [
    CommonModule,
    ZuiCardModule,
    ZuiIconModule,
    ZuiThemeModule,
    PolymorphModule,
  ],
  declarations: [ZuiWidgetComponent],
  exports: [ZuiWidgetComponent],
})
export class ZuiWidgetModule {}
