import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorphModule } from '../../directives';
import { PrizmCardModule } from '../card';
import { PrizmWidgetComponent } from './widget.component';
import { PrizmIconModule } from '../icon';
import { PrizmButtonModule } from '../button';
import { PrizmThemeModule } from '@prizm-ui/theme';

@NgModule({
  imports: [PrizmWidgetComponent],
  exports: [PrizmWidgetComponent],
})
export class PrizmWidgetModule {}
