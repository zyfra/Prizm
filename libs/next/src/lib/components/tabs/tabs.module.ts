import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZuiIconModule } from '../icon';
import { TabComponent } from './components/tab.component';
import { TabsComponent } from './tabs.component';
import { ZuiDropdownHostModule } from '../dropdowns/dropdown-host';
import { ZuiButtonModule } from '../button';

@NgModule({
  declarations: [TabsComponent, TabComponent],
  imports: [CommonModule, ZuiIconModule, ZuiDropdownHostModule, ZuiButtonModule],
  exports: [TabsComponent, TabComponent],
})
export class ZuiTabsModule {}
