import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  TemplateRef,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import {
  InternalPrizmNavigationMenuItem,
  PrizmNavigationMenuEmptyMessageConfig,
  PrizmNavigationMenuItem,
  PrizmNavigationMenuSearchConfig,
  PrizmNavigationMenuToolbarConfig,
  ViewMode,
} from '../../interfaces';
import { PrizmNavigationMenuService } from '../../services/prizm-navigation-menu.service';
import { PrizmNavigationMenuGroupService } from '../../services/prizm-navigation-menu-group.service';
import { PrizmNavigationMenuToolbarService } from '../../services/prizm-navigation-menu-toolbar.service';
import { PrizmNavigationMenuItemsComponent } from '../prizm-navigation-menu-items/prizm-navigation-menu-items.component';

@Component({
  selector: 'prizm-navigation-menu-group',
  templateUrl: './prizm-navigation-menu-group.component.html',
  styleUrls: ['./prizm-navigation-menu-group.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmNavigationMenuToolbarService, PrizmNavigationMenuGroupService],
})
export class PrizmNavigationMenuGroupComponent<
  UserItem extends Omit<PrizmNavigationMenuItem, 'children'> & { children?: UserItem[] }
> implements OnInit
{
  @ViewChild(PrizmNavigationMenuItemsComponent)
  private menuItemsComponent: PrizmNavigationMenuItemsComponent<UserItem>;

  @Output() itemExpandedChanged = new EventEmitter<{
    item: UserItem;
    isExpanded: boolean;
  }>();

  @Output() groupExpandedChanged = new EventEmitter<{
    groupId: string;
    isExpanded: boolean;
  }>();

  @Input() groupId: string;
  @Input() title: string;
  @Input() hideGroupAppearance?: boolean;
  @Input() icon?: string;
  @Input() itemExtraTemplate?: TemplateRef<unknown>;
  @Input() toolbarExtraTemplate: TemplateRef<unknown>;

  @Input() set items(items: UserItem[]) {
    this.items$$.next(items);
  }

  @Input() set toolbarConfig(toolbarConfig: PrizmNavigationMenuToolbarConfig) {
    this.groupService.setToolbarConfig(toolbarConfig);
  }

  @Input() set emptyMessageConfig(config: PrizmNavigationMenuEmptyMessageConfig) {
    this.groupService.setEmptyMessageConfig(config);
  }

  @Input() set searchConfig(config: PrizmNavigationMenuSearchConfig) {
    this.groupService.setSearchConfig(config);
  }

  groupIsExpanded: boolean;

  groupItems$: Observable<InternalPrizmNavigationMenuItem<UserItem>[]> = this.groupService.groupItems$;

  expandedItemsMap$: Observable<Map<InternalPrizmNavigationMenuItem<UserItem>, boolean>> =
    this.groupService.expandedItemsMap$;

  toolbarConfig$: Observable<PrizmNavigationMenuToolbarConfig> = this.groupService.toolbarConfig$;

  searchConfig$: Observable<PrizmNavigationMenuSearchConfig> = this.groupService.searchConfig$;

  emptyMessageConfig$: Observable<PrizmNavigationMenuEmptyMessageConfig> =
    this.groupService.emptyMessageConfig$;

  activeItem$: Observable<InternalPrizmNavigationMenuItem<UserItem>> = this.menuService.activeItem$;

  mode$: Observable<ViewMode> = this.groupService.viewMode$;

  private items$$ = new BehaviorSubject<UserItem[]>([]);

  constructor(
    private cdr: ChangeDetectorRef,
    private destroy$: PrizmDestroyService,
    private groupService: PrizmNavigationMenuGroupService<UserItem>,
    private menuService: PrizmNavigationMenuService<UserItem>
  ) {}

  ngOnInit(): void {
    this.registerItems();
    this.setGroupIsExpanded();
    this.ensureViewUpdatesCorrectly();
  }

  public handleActiveItemChange(item: InternalPrizmNavigationMenuItem<UserItem>): void {
    this.menuService.handleActiveItemChange(item);
  }

  public handleItemExpandedChanged(event: {
    item: InternalPrizmNavigationMenuItem<UserItem>;
    isExpanded: boolean;
  }): void {
    if (this.groupService.viewMode === 'rubricator') return;

    if (this.groupService.viewMode === 'folder') {
      return this.groupService.handleFolderExpanded(event.item);
    }

    this.menuService.handleExpandedChanged(event);
    this.itemExpandedChanged.emit({
      item: this.menuService.getUserItem(event.item),
      isExpanded: event.isExpanded,
    });
  }

  public handleGroupExpandedChanged(isExpanded: boolean): void {
    const event = {
      groupId: this.groupId,
      isExpanded,
    };

    this.menuService.handleGroupExpandedChanged(event);
    this.groupExpandedChanged.emit(event);
  }

  public handleGoToParentItem(item: InternalPrizmNavigationMenuItem<UserItem>): void {
    this.groupService.goToParentFolder(item);
  }

  public handleGoToRootItem(_item: InternalPrizmNavigationMenuItem<UserItem>): void {
    this.groupService.goToRootFolder();
  }

  private registerItems(): void {
    const groupId: string = this.groupId || this.title;
    this.groupService.setGroupId(groupId);
    this.items$$.pipe(takeUntil(this.destroy$)).subscribe(items => {
      this.menuService.registerGroupItems(groupId, items);
    });
  }

  private setGroupIsExpanded(): void {
    this.groupIsExpanded = this.menuService.getGroupIsExpanded(this.groupId);
  }

  private ensureViewUpdatesCorrectly(): void {
    merge(
      this.activeItem$,
      this.groupService.closeAll$,
      this.groupService.viewMode$,
      this.menuService.itemExpandedChangedEvent$
    )
      .pipe(debounceTime(0), takeUntil(this.destroy$))
      .subscribe(() => {
        this.cdr.markForCheck();
        this.menuItemsComponent?.triggerCdr();
      });
  }
}
