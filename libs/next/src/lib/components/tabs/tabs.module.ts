import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PzmIconModule } from '../icon';
import { TabComponent } from './components/tab.component';
import { TabsComponent } from './tabs.component';
import { PzmDropdownHostModule } from '../dropdowns/dropdown-host';
import { PzmButtonModule } from '../button';
import { PzmDropdownControllerModule } from '../../directives';
import { PzmDataListModule } from '../data-list';

@NgModule({
  declarations: [TabsComponent, TabComponent],
  imports: [
    CommonModule,
    PzmIconModule,
    PzmDropdownHostModule,
    PzmButtonModule,
    PzmDropdownControllerModule,
    PzmDataListModule,
  ],
  exports: [TabsComponent, TabComponent],
})
export class PzmTabsModule {}
