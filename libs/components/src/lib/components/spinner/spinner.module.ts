import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorphModule } from '../../directives/polymorph';
import { PrizmSpinnerComponent } from './spinner.component';

@NgModule({
  imports: [CommonModule, PolymorphModule],
  declarations: [PrizmSpinnerComponent],
  exports: [PrizmSpinnerComponent],
})
export class PrizmSpinnerModule {}
