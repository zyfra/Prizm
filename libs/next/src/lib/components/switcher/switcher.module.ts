import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitcherComponent } from './switcher.component';
import { SwitcherItemComponent } from './components/switcher-item/switcher-item.component';
import { ZuiIconModule } from '../icon';

@NgModule({
  declarations: [SwitcherComponent, SwitcherItemComponent],
  imports: [CommonModule, ZuiIconModule],
  exports: [SwitcherComponent],
})
export class ZuiSwitcherModule {}
