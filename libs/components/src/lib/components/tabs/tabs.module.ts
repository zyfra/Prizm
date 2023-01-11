import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmIconModule } from '../icon';
import { PrizmTabComponent } from './components/tab.component';
import { PrizmTabsComponent } from './tabs.component';
import { PrizmDropdownHostModule } from '../dropdowns/dropdown-host';
import { PrizmButtonModule } from '../button';
import { PolymorphModule, PrizmDropdownControllerModule } from '../../directives';
import { PrizmDataListModule } from '../data-list';

@NgModule({
  declarations: [PrizmTabsComponent, PrizmTabComponent],
  imports: [
    CommonModule,
    PrizmIconModule,
    PolymorphModule,
    PrizmDropdownHostModule,
    PrizmButtonModule,
    PrizmDropdownControllerModule,
    PrizmDataListModule,
  ],
  exports: [PrizmTabsComponent, PrizmTabComponent],
})
export class PrizmTabsModule {}
