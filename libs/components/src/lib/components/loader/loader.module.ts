import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorphModule } from '../../directives/polymorph';
import { PrizmLoaderComponent } from './loader.component';

@NgModule({
  imports: [CommonModule, PolymorphModule],
  declarations: [PrizmLoaderComponent],
  exports: [PrizmLoaderComponent],
})
export class PrizmLoaderModule {}
