import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PzmIconModule } from '../icon';
import { TabComponent } from './components/tab.component';
import { TabsComponent } from './tabs.component';
import { ZuiDropdownHostModule } from '../dropdowns/dropdown-host';
import { PzmButtonModule } from '../button';
import { ZuiDropdownControllerModule } from '../../directives';
import { ZuiDataListModule } from '../data-list';

@NgModule({
  declarations: [TabsComponent, TabComponent],
  imports: [
    CommonModule,
    PzmIconModule,
    ZuiDropdownHostModule,
    PzmButtonModule,
    ZuiDropdownControllerModule,
    ZuiDataListModule,
  ],
  exports: [TabsComponent, TabComponent],
})
export class ZuiTabsModule {}
