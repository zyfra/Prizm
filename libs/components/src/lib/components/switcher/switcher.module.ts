import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmSwitcherComponent } from './switcher.component';
import { SwitcherItemComponent } from './components/switcher-item/switcher-item.component';
import { PrizmIconModule } from '../icon';
import { PrizmButtonModule } from '../button';
import { PolymorphModule, PrizmHintModule } from '../../directives';
import { PrizmSwitcherHintDirective } from './directives/switcher-hint.directive';

@NgModule({
  declarations: [PrizmSwitcherComponent, SwitcherItemComponent, PrizmSwitcherHintDirective],
  imports: [CommonModule, PrizmIconModule, PrizmButtonModule, PolymorphModule, PrizmHintModule],
  exports: [PrizmSwitcherComponent],
})
export class PrizmSwitcherModule {}
