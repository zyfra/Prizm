import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmSwitcherComponent } from './switcher.component';
import { SwitcherItemComponent } from './components/switcher-item/switcher-item.component';
import { PrizmIconModule } from '../icon';
import { PrizmButtonModule } from '../button';
import { PolymorphModule } from '../../directives';

@NgModule({
  declarations: [PrizmSwitcherComponent, SwitcherItemComponent],
  imports: [CommonModule, PrizmIconModule, PrizmButtonModule, PolymorphModule],
  exports: [PrizmSwitcherComponent],
})
export class PrizmSwitcherModule {}
