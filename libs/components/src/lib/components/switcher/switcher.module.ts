import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitcherComponent } from './switcher.component';
import { SwitcherItemComponent } from './components/switcher-item/switcher-item.component';
import { PrizmIconModule } from '../icon';

@NgModule({
  declarations: [SwitcherComponent, SwitcherItemComponent],
  imports: [CommonModule, PrizmIconModule],
  exports: [SwitcherComponent],
})
export class PrizmSwitcherModule {}
