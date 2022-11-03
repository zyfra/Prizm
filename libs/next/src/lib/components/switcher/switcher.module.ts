import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitcherComponent } from './switcher.component';
import { SwitcherItemComponent } from './components/switcher-item/switcher-item.component';
import { PzmIconModule } from '../icon';

@NgModule({
  declarations: [SwitcherComponent, SwitcherItemComponent],
  imports: [CommonModule, PzmIconModule],
  exports: [SwitcherComponent],
})
export class PzmSwitcherModule {}
