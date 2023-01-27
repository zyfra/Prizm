import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmNavigationComponent } from './prizm-navigation.component';

import { PrizmNavigationItemSimpleComponent } from './components/prizm-navigation-item-simple/prizm-navigation-item-simple.component';
import { PrizmNavigationItemExpandableComponent } from './components/prizm-navigation-item-expandable/prizm-navigation-item-expandable.component';
import { PrizmIconModule } from '../icon';
import { ActiveNavigationItemService } from './services/active-navigation-item.service';
import { PrizmHintModule } from '../../directives';

@NgModule({
  declarations: [
    PrizmNavigationComponent,
    PrizmNavigationItemSimpleComponent,
    PrizmNavigationItemExpandableComponent,
  ],
  imports: [CommonModule, PrizmIconModule, PrizmHintModule],
  exports: [PrizmNavigationComponent],
  providers: [ActiveNavigationItemService],
})
export class PrizmNavigationModule {}
