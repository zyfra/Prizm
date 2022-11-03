import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorphModule, PrizmThemeModule } from '../../directives';
import { PrizmCardModule } from '../card';
import { PrizmWidgetComponent } from './widget.component';
import { PrizmIconModule } from '../icon';

@NgModule({
  imports: [
    CommonModule,
    PrizmCardModule,
    PrizmIconModule,
    PrizmThemeModule,
    PolymorphModule,
  ],
  declarations: [PrizmWidgetComponent],
  exports: [PrizmWidgetComponent],
})
export class PrizmWidgetModule {}
