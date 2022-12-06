import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorphModule, PrizmThemeModule } from '../../directives';
import { PrizmCardModule } from '../card';
import { PrizmWidgetComponent } from './widget.component';
import { PrizmIconSvgModule } from '../icon';

@NgModule({
  imports: [
    CommonModule,
    PrizmCardModule,
    PrizmIconSvgModule,
    PrizmThemeModule,
    PolymorphModule,
  ],
  declarations: [PrizmWidgetComponent],
  exports: [PrizmWidgetComponent],
})
export class PrizmWidgetModule {}
