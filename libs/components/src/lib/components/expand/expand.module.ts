import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrizmExpandComponent } from './expand.component';
import { PrizmExpandContentDirective } from './expand-content.directive';
import { PrizmLoaderModule } from '../loader';

@NgModule({
  imports: [CommonModule, PrizmLoaderModule],
  declarations: [PrizmExpandComponent, PrizmExpandContentDirective],
  exports: [PrizmExpandComponent, PrizmExpandContentDirective],
})
export class PrizmExpandModule {}
