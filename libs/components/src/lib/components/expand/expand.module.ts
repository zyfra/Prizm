import { NgModule } from '@angular/core';

import { PrizmExpandComponent } from './expand.component';
import { PrizmExpandContentDirective } from './expand-content.directive';

@NgModule({
  imports: [PrizmExpandComponent, PrizmExpandContentDirective],
  exports: [PrizmExpandComponent, PrizmExpandContentDirective],
})
export class PrizmExpandModule {}
