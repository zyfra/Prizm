import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmIconSvgModule } from '../icon';
import { TabComponent } from './components/tab.component';
import { TabsComponent } from './tabs.component';
import { PrizmDropdownHostModule } from '../dropdowns/dropdown-host';
import { PrizmButtonModule } from '../button';
import { PrizmDropdownControllerModule } from '../../directives';
import { PrizmDataListModule } from '../data-list';

@NgModule({
  declarations: [TabsComponent, TabComponent],
  imports: [
    CommonModule,
    PrizmIconSvgModule,
    PrizmDropdownHostModule,
    PrizmButtonModule,
    PrizmDropdownControllerModule,
    PrizmDataListModule,
  ],
  exports: [TabsComponent, TabComponent],
})
export class PrizmTabsModule {}
