import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorphModule, PzmThemeModule } from '../../directives';
import { PzmCardModule } from '../card';
import { PzmWidgetComponent } from './widget.component';
import { PzmIconModule } from '../icon';

@NgModule({
  imports: [
    CommonModule,
    PzmCardModule,
    PzmIconModule,
    PzmThemeModule,
    PolymorphModule,
  ],
  declarations: [PzmWidgetComponent],
  exports: [PzmWidgetComponent],
})
export class PzmWidgetModule {}
