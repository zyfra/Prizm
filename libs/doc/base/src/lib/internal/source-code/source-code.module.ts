import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { PolymorpheusModule } from '@tinkoff/ng-polymorpheus';

import { PrizmDocSourceCodeComponent } from './source-code.component';

@NgModule({
  declarations: [PrizmDocSourceCodeComponent],
  imports: [CommonModule, PolymorpheusModule, TuiButtonModule],
  exports: [PrizmDocSourceCodeComponent],
})
export class TuiDocSourceCodeModule {}
