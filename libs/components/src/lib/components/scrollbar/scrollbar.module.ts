import { NgModule } from '@angular/core';
import { PrizmScrollRefDirective } from './scroll-ref.directive';
import { PrizmScrollbarComponent } from './scrollbar.component';
import { PrizmScrollableDirective } from './scrollable.directive';
import { PrizmScrollControlsComponent } from './scroll-controls.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [
    PrizmScrollControlsComponent,
    PrizmScrollbarComponent,
    PrizmScrollRefDirective,
    PrizmScrollableDirective,
  ],
  exports: [PrizmScrollbarComponent, PrizmScrollRefDirective, PrizmScrollableDirective],
})
export class PrizmScrollbarModule {}
