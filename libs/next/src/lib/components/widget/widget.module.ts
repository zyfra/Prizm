import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorphModule, PzmThemeModule } from '../../directives';
import { ZuiCardModule } from '../card';
import { ZuiWidgetComponent } from './widget.component';
import { PzmIconModule } from '../icon';

@NgModule({
  imports: [
    CommonModule,
    ZuiCardModule,
    PzmIconModule,
    PzmThemeModule,
    PolymorphModule,
  ],
  declarations: [ZuiWidgetComponent],
  exports: [ZuiWidgetComponent],
})
export class ZuiWidgetModule {}
