import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmTreeButtonComponent } from './tree-button.component';
import { PrizmIconModule } from '../icon/icon.module';
import { PolymorphModule } from '../../directives/polymorph/polymorph.module';

@NgModule({
  declarations: [PrizmTreeButtonComponent],
  imports: [PolymorphModule, PrizmIconModule, CommonModule],
  exports: [PrizmTreeButtonComponent],
})
export class PrizmTreeButtonModule {}
