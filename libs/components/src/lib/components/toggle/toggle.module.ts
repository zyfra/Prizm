import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmToggleComponent } from './toggle.component';
import { PrizmLoaderModule } from '../loader';
import { PrizmWrapperModule } from '../../directives/wrapper';
import {
  PolymorphModule,
  PrizmCheckedModule,
  PrizmFocusableModule,
  PrizmFocusedModule,
  PrizmPressedModule,
} from '../../directives';
import { PrizmFocusVisibleModule } from '../../directives/focus-visible';
import { PrizmHoveredModule } from '../../directives/hovered';
import { PrizmIconModule } from '../icon';

@NgModule({
  imports: [
    CommonModule,
    PrizmFocusedModule,
    PrizmFocusableModule,
    PrizmFocusVisibleModule,
    PrizmHoveredModule,
    PrizmPressedModule,
    PrizmCheckedModule,
    PrizmWrapperModule,
    PrizmLoaderModule,
    PolymorphModule,
    PrizmIconModule,
  ],
  declarations: [PrizmToggleComponent],
  exports: [PrizmToggleComponent],
})
export class PrizmToggleModule {}
