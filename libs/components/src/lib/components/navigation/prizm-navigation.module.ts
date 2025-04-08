import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmNavigationComponent } from './prizm-navigation.component';

import { PrizmNavigationItemSimpleComponent } from './components/prizm-navigation-item-simple/prizm-navigation-item-simple.component';
import { PrizmNavigationItemExpandableComponent } from './components/prizm-navigation-item-expandable/prizm-navigation-item-expandable.component';
import { ActiveNavigationItemService } from './services/active-navigation-item.service';
import { PrizmHintDirective, PrizmHintOnOverflowDirective } from '../../directives';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';
import { PrizmToTypePipe } from '@prizm-ui/helpers';
import { PrizmCalculateNavMarginPipe } from './pipes/calculate-margin.pipe';
import { ExpandedNavigationItemService } from './services/expanded-navigation.service';

// TODO: to remove in 7.0

/**
 * @deprecated
 * since 5.10.0
 *
 */
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
    PrizmHintOnOverflowDirective,
  ],
  exports: [PrizmNavigationComponent],
  providers: [ActiveNavigationItemService, ExpandedNavigationItemService],
})
export class PrizmNavigationModule {}
