import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmIconModule } from '../icon';
import { PrizmTabComponent } from './components/tab.component';
import { PrizmTabsComponent } from './tabs.component';
import { PrizmDropdownHostModule } from '../dropdowns/dropdown-host';
import { PrizmButtonModule } from '../button';
import { PolymorphModule, PrizmDropdownControllerModule, PrizmLifecycleModule } from '../../directives';
import { PrizmDataListModule } from '../data-list';
import { PrizmTabMenuItemDirective } from './tab-menu-item.directive';
import { PrizmCallFuncModule, PrizmLetModule } from '@prizm-ui/helpers';
import { PrizmCounterModule } from '../counter';
import { PrizmDropdownCellComponent } from '../dropdown-cell';

@NgModule({
  declarations: [PrizmTabsComponent, PrizmTabComponent, PrizmTabMenuItemDirective],
  imports: [
    CommonModule,
    PrizmIconModule,
    PolymorphModule,
    PrizmLifecycleModule,
    PrizmDropdownHostModule,
    PrizmCallFuncModule,
    PrizmLetModule,
    PrizmButtonModule,
    PrizmDropdownControllerModule,
    PrizmDataListModule,
    PrizmCounterModule,
    PrizmDropdownCellComponent,
  ],
  exports: [PrizmTabsComponent, PrizmTabComponent],
})
export class PrizmTabsModule {}
