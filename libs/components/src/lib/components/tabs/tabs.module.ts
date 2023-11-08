import { NgModule } from '@angular/core';
import { PrizmTabComponent } from './components/tab.component';
import { PrizmTabsComponent } from './tabs.component';
import { PrizmTabMenuItemDirective } from './tab-menu-item.directive';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmTabsComponent, PrizmTabComponent, PrizmTabMenuItemDirective],
  exports: [PrizmTabsComponent, PrizmTabComponent],
})
export class PrizmTabsModule {}
