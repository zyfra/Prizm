import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import {
  HierarchicalMenuNode,
  HierarchicalMenuType,
  HierarchicalMenuViewType,
} from '../../../zyfra-hierarchical-menu.interface';
import {
  PZM_HIERARCHICAL_MENU_OPTIONS_TOKEN,
  PzmHierarchicalMenuOptions,
} from '../../hierarhical-menu-options';

@Component({
  selector: 'zyfra-hierarchical-menu-item',
  templateUrl: './zyfra-hierarchical-menu-item.component.html',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { class: 'zyfra-hierarchical-menu-item' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraHierarchicalMenuItemComponent {
  @Input() item: HierarchicalMenuNode;
  @Input() closed: boolean = false;
  @Input() activeNodeId: string;
  @Input() menuType: HierarchicalMenuType;
  @Input() itemTemplate: TemplateRef<unknown>;
  @Input() itemContentTemplate: TemplateRef<unknown>;
  @Input() suffixItemTemplate: TemplateRef<unknown>;
  @Input() optionsItemTemplate: TemplateRef<unknown>;

  optionsOpen = false;

  get nestedShift(): string {
    return `calc(${this.item.hierarchy.levelNested} * var(--hierarchicalMenuShiftSize) + var(--hierarchicalMenuItemLeftPadding))`;
  }

  get itemName(): string {
    return this.item?.attributes?.name ?? this.item.name;
  }

  constructor(
    public elementRef: ElementRef,
    @Inject(PZM_HIERARCHICAL_MENU_OPTIONS_TOKEN) public options: PzmHierarchicalMenuOptions
  ) {}
}
