import { Component, ChangeDetectionStrategy, Input, TemplateRef, inject } from '@angular/core';
import { PrizmNavigationMenuSearchConfig, PrizmNavigationMenuToolbarConfig } from '../../interfaces';
import { PrizmNavigationMenuToolbarService } from '../../services/prizm-navigation-menu-toolbar.service';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { CommonModule } from '@angular/common';
import { PrizmNavigationMenuSearchComponent } from '../prizm-navigation-menu-search/prizm-navigation-menu-search.component';
import { PrizmButtonComponent } from '../../../button/button.module';
import { PrizmLetDirective } from '@prizm-ui/helpers';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import {
  prizmIconsChevronDownToDoubleLine,
  prizmIconsEditorAlfavit,
  prizmIconsFilesMode,
  prizmIconsFolder,
  prizmIconsMagnifyingGlass,
} from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-navigation-menu-toolbar',
  templateUrl: './prizm-navigation-menu-toolbar.component.html',
  styleUrls: ['./prizm-navigation-menu-toolbar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, PrizmButtonComponent, PrizmNavigationMenuSearchComponent, PrizmLetDirective],
})
export class PrizmNavigationMenuToolbarComponent extends PrizmAbstractTestId {
  @Input() toolbarExtraTemplate!: TemplateRef<unknown>;

  @Input() toolbarConfig!: PrizmNavigationMenuToolbarConfig;

  @Input() searchConfig!: PrizmNavigationMenuSearchConfig;

  @Input() hideGroupAppearance!: boolean;

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  get toolbarIsVisible(): boolean {
    return !this.hideGroupAppearance && this.toolbarConfig && Object.values(this.toolbarConfig).some(Boolean);
  }
  override readonly testId_ = 'ui_navigation_menu_toolbar';

  constructor(public toolbarService: PrizmNavigationMenuToolbarService) {
    super();

    this.iconsFullRegistry.registerIcons(
      prizmIconsFilesMode,
      prizmIconsEditorAlfavit,
      prizmIconsFolder,
      prizmIconsChevronDownToDoubleLine,
      prizmIconsMagnifyingGlass
    );
  }
}
