import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { InternalPrizmNavigationMenuItem, ViewMode } from '../../interfaces';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { PrizmInputCommonModule } from '../../../input/common/input-common.module';
import { PrizmHoveredDirective } from '../../../../directives/hovered';
import { PrizmHintDirective } from '../../../../directives';
import { PrizmButtonComponent } from '../../../button';
import { prizmIsTextOverflow } from '../../../../util';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import {
  prizmIconsArrowTurnLeftUp,
  prizmIconsArrowUpToDottedLine,
  prizmIconsChevronDown,
  prizmIconsChevronRight,
} from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-navigation-menu-item',
  templateUrl: './prizm-navigation-menu-item.component.html',
  styleUrls: ['./prizm-navigation-menu-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    PrizmHoveredDirective,
    NgIf,
    NgTemplateOutlet,
    PrizmInputCommonModule,
    PrizmButtonComponent,
    PrizmHintDirective,
    PrizmIconsFullComponent,
  ],
})
export class PrizmNavigationMenuItemComponent<T> extends PrizmAbstractTestId {
  @Output() interaction = new EventEmitter<InternalPrizmNavigationMenuItem<T>>();
  @Output() toggleExpanded = new EventEmitter<InternalPrizmNavigationMenuItem<T>>();
  @Output() goToParentItem = new EventEmitter<InternalPrizmNavigationMenuItem<T>>();
  @Output() goToRootItem = new EventEmitter<InternalPrizmNavigationMenuItem<T>>();

  @Input() itemExtraTemplate!: TemplateRef<unknown>;
  @Input() isExpandable!: boolean;
  @Input() isExpanded!: boolean;
  @Input() isActiveNode!: boolean;
  @Input() isActive!: boolean;
  @Input() item!: InternalPrizmNavigationMenuItem<T>;
  @Input() mode!: ViewMode;
  @Input() showGoToButtons!: boolean;

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);
  public readonly prizmIsTextOverflow = prizmIsTextOverflow;
  public isHovered = false;

  get expandButtonVisible(): boolean {
    return this.mode === 'rubricator' ? !!this.item.isRubricator : this.isExpandable;
  }

  get goToButtonsVisible(): boolean {
    this.item.breadcrumbs = this.item.breadcrumbs ?? [];
    return this.mode === 'folder' && this.item.breadcrumbs.length > 1;
  }
  override readonly testId_ = 'ui_navigation_menu_item';

  constructor(public cdr: ChangeDetectorRef) {
    super();

    this.iconsFullRegistry.registerIcons(
      prizmIconsArrowTurnLeftUp,
      prizmIconsArrowUpToDottedLine,
      prizmIconsChevronDown,
      prizmIconsChevronRight
    );
  }
}
