import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmScrollRefDirective } from './scroll-ref.directive';
import { PrizmScrollbarComponent } from './scrollbar.component';
import { PrizmScrollableDirective } from './scrollable.directive';
import { PrizmScrollControlsModule } from './scroll-controls.module';

@NgModule({
  imports: [CommonModule, PrizmScrollControlsModule],
  declarations: [PrizmScrollbarComponent, PrizmScrollRefDirective, PrizmScrollableDirective],
  exports: [PrizmScrollbarComponent, PrizmScrollRefDirective, PrizmScrollableDirective],
})
export class PrizmScrollbarModule {}
