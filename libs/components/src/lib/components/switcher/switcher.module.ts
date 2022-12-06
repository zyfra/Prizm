import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitcherComponent } from './switcher.component';
import { SwitcherItemComponent } from './components/switcher-item/switcher-item.component';
import { PrizmIconSvgModule } from '../icon';

@NgModule({
  declarations: [SwitcherComponent, SwitcherItemComponent],
  imports: [CommonModule, PrizmIconSvgModule],
  exports: [SwitcherComponent],
})
export class PrizmSwitcherModule {}
