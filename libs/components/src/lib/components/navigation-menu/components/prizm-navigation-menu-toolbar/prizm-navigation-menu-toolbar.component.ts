import { Component, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';
import { PrizmNavigationMenuSearchConfig, PrizmNavigationMenuToolbarConfig } from '../../interfaces';
import { PrizmNavigationMenuToolbarService } from '../../services/prizm-navigation-menu-toolbar.service';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { CommonModule } from '@angular/common';
import { PrizmNavigationMenuSearchComponent } from '../prizm-navigation-menu-search/prizm-navigation-menu-search.component';
import { PrizmButtonModule } from '../../../button/button.module';

@Component({
  selector: 'prizm-navigation-menu-toolbar',
  templateUrl: './prizm-navigation-menu-toolbar.component.html',
  styleUrls: ['./prizm-navigation-menu-toolbar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, PrizmButtonModule, PrizmNavigationMenuSearchComponent],
})
export class PrizmNavigationMenuToolbarComponent extends PrizmAbstractTestId {
  @Input() toolbarExtraTemplate!: TemplateRef<unknown>;

  @Input() toolbarConfig!: PrizmNavigationMenuToolbarConfig;

  @Input() searchConfig!: PrizmNavigationMenuSearchConfig;

  @Input() hideGroupAppearance!: boolean;

  get toolbarIsVisible(): boolean {
    return !this.hideGroupAppearance && this.toolbarConfig && Object.values(this.toolbarConfig).some(Boolean);
  }
  override readonly testId_ = 'ui_navigation_menu_toolbar';

  constructor(public toolbarService: PrizmNavigationMenuToolbarService) {
    super();
  }
}
