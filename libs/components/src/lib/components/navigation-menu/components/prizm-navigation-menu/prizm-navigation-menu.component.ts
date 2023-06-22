import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { PRIZM_EMPTY_ARRAY } from '@prizm-ui/core';
import { PrizmHandler } from '../../../../types';
import { PrizmNavigationMenuGroupComponent } from '../prizm-navigation-menu-group/prizm-navigation-menu-group.component';
import { PrizmNavigationMenuToolbarService } from '../../services/prizm-navigation-menu-toolbar.service';
import { PrizmNavigationMenuService } from '../../services/prizm-navigation-menu.service';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import {
  GroupExpandedChangedEvent,
  ItemExpandedChangedEvent,
  PrizmNavigationMenuEmptyMessageConfig,
  PrizmNavigationMenuHeaderConfig,
  PrizmNavigationMenuItem,
  PrizmNavigationMenuSearchConfig,
  PrizmNavigationMenuSettingsConfig,
  PrizmNavigationMenuToolbarConfig,
} from '../../interfaces';
import { DEFAULT_HEADER_CONFIG } from '../../defaults';

@Component({
  selector: 'prizm-navigation-menu',
  templateUrl: './prizm-navigation-menu.component.html',
  styleUrls: ['./prizm-navigation-menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmNavigationMenuService, PrizmNavigationMenuToolbarService, PrizmDestroyService],
})
export class PrizmNavigationMenuComponent<
  UserItem extends Omit<PrizmNavigationMenuItem, 'children'> & { children?: UserItem[] }
> {
  @ContentChildren(PrizmNavigationMenuGroupComponent)
  menuGroups: QueryList<PrizmNavigationMenuGroupComponent<UserItem>>;

  @Output() homeClicked = new EventEmitter<void>();
  @Output() activeItemChanged = new EventEmitter<UserItem>();
  @Output() breadcrumbsChanged = new EventEmitter<UserItem[]>();
  @Output() expandedItemsMapChanged = new EventEmitter<Map<UserItem, boolean>>();
  @Output() expandedGroupsMapChangedEvent = new EventEmitter<Map<string, boolean>>();
  @Output() itemExpandedChanged = new EventEmitter<ItemExpandedChangedEvent<UserItem>>();
  @Output() groupExpandedChanged = new EventEmitter<GroupExpandedChangedEvent>();

  @Input() title: string;
  @Input() items: UserItem[];
  @Input() toolbarExtraTemplate: TemplateRef<unknown>;
  @Input() itemExtraTemplate: TemplateRef<unknown>;
  @Input() headerExtraTemplate: TemplateRef<unknown>;

  @Input() set activeItem(activeItem: UserItem | null) {
    this.menuService.setActiveItem(activeItem);
  }
  @Input() set itemKeyName(keyName: string) {
    this.menuService.setItemKeyName(keyName);
  }
  @Input() set expandedItemsMap(expandedItemsMap: Map<UserItem, boolean>) {
    this.menuService.registerExpandedItemsMap(expandedItemsMap);
  }
  @Input() set expandedGroupsMap(expandedGroupsMap: Map<string, boolean>) {
    this.menuService.registerExpandedGroupsMap(expandedGroupsMap);
  }
  @Input() set settingsConfig(settings: PrizmNavigationMenuSettingsConfig) {
    this.menuService.setSettingsConfiguration(settings);
  }
  @Input() set emptySearchResultMessageConfig(config: PrizmNavigationMenuEmptyMessageConfig) {
    this.menuService.setEmptySearchResultMessageConfig(config);
  }
  @Input() set emptyDataMessageConfig(config: PrizmNavigationMenuEmptyMessageConfig) {
    this.menuService.setEmptyDataMessageConfig(config);
  }
  @Input() set headerConfig(config: PrizmNavigationMenuHeaderConfig) {
    this.headerConfiguration = { ...config, showSettings: false };
  }
  @Input() set searchConfig(config: PrizmNavigationMenuSearchConfig) {
    this.menuService.setSearchConfig(config);
  }
  @Input() set toolbarConfig(config: PrizmNavigationMenuToolbarConfig) {
    this.menuService.setToolbarConfig(config);
  }

  menuToolbarConfig$: Observable<PrizmNavigationMenuToolbarConfig> = this.menuService.toolbarConfig$;

  menuSearchConfig$: Observable<PrizmNavigationMenuSearchConfig> = this.menuService.searchConfig$;

  emptySearchResultMessageConfig$: Observable<PrizmNavigationMenuEmptyMessageConfig> =
    this.menuService.emptySearchResultMessageConfig$;

  emptyDataMessageConfig$: Observable<PrizmNavigationMenuEmptyMessageConfig> =
    this.menuService.emptyDataMessageConfig$;

  settingsConfiguration: PrizmNavigationMenuSettingsConfig = this.menuService.settingsConfig;

  headerConfiguration: PrizmNavigationMenuHeaderConfig = DEFAULT_HEADER_CONFIG;

  headerIsHovered: boolean;

  constructor(
    private menuService: PrizmNavigationMenuService<UserItem>,
    private destroy$: PrizmDestroyService
  ) {
    this.forwardEvents();
  }

  public handleHomeClicked(): void {
    this.homeClicked.emit();
  }

  readonly handler: PrizmHandler<PrizmNavigationMenuItem, readonly PrizmNavigationMenuItem[]> = item =>
    item.children || PRIZM_EMPTY_ARRAY;

  private forwardEvents(): void {
    this.menuService.activeItemChangedEvent$
      .pipe(takeUntil(this.destroy$))
      .subscribe(event => this.activeItemChanged.emit(event));

    this.menuService.breadCrumbsChangedEvent$
      .pipe(takeUntil(this.destroy$))
      .subscribe(event => this.breadcrumbsChanged.emit(event));

    this.menuService.itemExpandedChangedEvent$
      .pipe(takeUntil(this.destroy$))
      .subscribe(event => this.itemExpandedChanged.emit(event));

    this.menuService.groupExpandedChangedEvent$
      .pipe(takeUntil(this.destroy$))
      .subscribe(event => this.groupExpandedChanged.emit(event));

    this.menuService.expandedItemsMapChangedEvent$
      .pipe(takeUntil(this.destroy$))
      .subscribe(event => this.expandedItemsMapChanged.emit(event));

    this.menuService.expandedGroupsMapChangedEvent$
      .pipe(takeUntil(this.destroy$))
      .subscribe(event => this.expandedGroupsMapChangedEvent.emit(event));
  }

  public handleSettingsClicked(): void {
    // TODO
  }
}
