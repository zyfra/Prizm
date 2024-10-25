import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmNavigationComponent } from './prizm-navigation.component';

import { PrizmNavigationItemSimpleComponent } from './components/prizm-navigation-item-simple/prizm-navigation-item-simple.component';
import { PrizmNavigationItemExpandableComponent } from './components/prizm-navigation-item-expandable/prizm-navigation-item-expandable.component';
import { ActiveNavigationItemService } from './services/active-navigation-item.service';
import { PrizmHintDirective } from '../../directives';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';
import { PrizmToTypePipe } from '@prizm-ui/helpers';
import { PrizmCalculateNavMarginPipe } from './pipes/calculate-margin.pipe';

@NgModule({
  declarations: [
    PrizmNavigationComponent,
    PrizmNavigationItemSimpleComponent,
    PrizmNavigationItemExpandableComponent,
  ],
  imports: [
    CommonModule,
    PrizmHintDirective,
    PrizmIconsFullComponent,
    PrizmToTypePipe,
    PrizmCalculateNavMarginPipe,
  ],
  exports: [PrizmNavigationComponent],
  providers: [ActiveNavigationItemService],
})
export class PrizmNavigationModule {}
