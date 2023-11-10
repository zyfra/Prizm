import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorphModule } from '../../directives/polymorph';
import { PrizmLoaderComponent } from './loader.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmLoaderComponent],
  exports: [PrizmLoaderComponent],
})
export class PrizmLoaderModule {}
