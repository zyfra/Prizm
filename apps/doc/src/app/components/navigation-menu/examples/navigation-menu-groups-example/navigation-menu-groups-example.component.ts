import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  IBreadcrumb,
  PrizmNavigationMenuToolbarConfig,
  findItem,
  traverseAllDeep,
} from '@prizm-ui/components';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmIconsSvgRegistry, PRIZM_ICONS_SVG_SET } from '@prizm-ui/icons';
import { BehaviorSubject, combineLatest, merge, Observable } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { ExpandedItemsService } from './example-data/expanded-items.service';
import { CustomGroupConfig, CustomItem, PersistentExpandedValue } from './example-data/interfaces';
import { ItemGroupsService } from './example-data/item-groups.service';

@Component({
  selector: 'prizm-navigation-menu-groups-example',
  templateUrl: './navigation-menu-groups-example.component.html',
  styleUrls: ['./navigation-menu-groups-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService, ExpandedItemsService, ItemGroupsService],
})
export class NavigationMenuGroupsExampleComponent {
  private activeItemId$$ = new BehaviorSubject<string | null>(null);

  menuToolbarConfig: PrizmNavigationMenuToolbarConfig = {
    search: true,
    rubricatorMode: true,
    folderMode: true,
    closeAll: true,
  };

  expandedItemsMap: Map<CustomItem, boolean> = new Map();
  expandedGroupsMap: Map<string, boolean> = new Map();

  fruitsGroup$: Observable<CustomGroupConfig> = this.itemGroupsService.fruits$;
  noGroupAppearanceGroup$: Observable<CustomGroupConfig> = this.itemGroupsService.noGroupAppearance$;
  musicalInstrumentsGroup$: Observable<CustomGroupConfig> = this.itemGroupsService.musicalInstruments$;
  longNamesGroup$: Observable<CustomGroupConfig> = this.itemGroupsService.longNames$;

  activeItem$: Observable<CustomItem> = this.activeItemId$$.pipe(
    switchMap(activeItemId => {
      return combineLatest([
        this.fruitsGroup$,
        this.noGroupAppearanceGroup$,
        this.musicalInstrumentsGroup$,
        this.longNamesGroup$,
      ]).pipe(
        map(([a, b, c, d]) => [...a.items, ...b.items, ...c.items, ...d.items]),
        map(allItems => findItem(allItems, i => i.id === activeItemId))
      );
    })
  );

  homeBreadcrumb: IBreadcrumb = {
    name: '',
    icon: 'social-home-breadcrumbs',
  };

  breadcrumbs: IBreadcrumb[] = [this.homeBreadcrumb];

  constructor(
    private iconRegistry: PrizmIconsSvgRegistry,
    private expandedItemsService: ExpandedItemsService,
    private itemGroupsService: ItemGroupsService,
    private destroy$: PrizmDestroyService
  ) {
    this.iconRegistry.registerIcons(PRIZM_ICONS_SVG_SET);
    this.configureExpandedItemsMap();
    this.configureExpandedGroupsMap();
  }

  public activeItemChanged(item: CustomItem | null): void {
    this.logMenuEvent('activeItemChanged', item);
    this.activeItemId$$.next(item?.id);
  }

  public breadcrumbChange(breadcrumb: IBreadcrumb): void {
    this.activeItemId$$.next(breadcrumb.link);
  }

  public menuBreadcrumbsChanged(breadcrumbs: CustomItem[]): void {
    this.logMenuEvent('breadcrumbs', breadcrumbs);

    const currentBreadcrumbs: IBreadcrumb[] = breadcrumbs.map(i => ({ name: i.text, link: i.id }));
    this.breadcrumbs = [this.homeBreadcrumb, ...currentBreadcrumbs];
  }

  public expandedItemsMapChanged(expandedItemsMap: Map<CustomItem, boolean>): void {
    this.logMenuEvent('expandedItemsMapChanged', expandedItemsMap);
    this.expandedItemsService.setItemsExpandedKeys(expandedItemsMap);
  }

  public expandedGroupsMapChangedEvent(expandedGroupsMap: Map<string, boolean>): void {
    this.logMenuEvent('expandedGroupsMapChangedEvent', expandedGroupsMap);
    this.expandedItemsService.setGroupsExpandedKeys(expandedGroupsMap);
  }

  public logMenuEvent(eventName: string, event: unknown): void {
    console.groupCollapsed(`%c ${eventName} `, 'background: #222; color: plum');
    console.log(event);
    console.groupEnd();
  }

  private configureExpandedItemsMap(): void {
    const persistent: PersistentExpandedValue = this.expandedItemsService.getItemsExpandedKeys() ?? {};

    const allItems$: Observable<CustomItem[]> = merge(
      this.itemGroupsService.fruits$.pipe(map(g => g.items)),
      this.itemGroupsService.longNames$.pipe(map(g => g.items)),
      this.itemGroupsService.musicalInstruments$.pipe(map(g => g.items)),
      this.itemGroupsService.noGroupAppearance$.pipe(map(g => g.items))
    );

    allItems$.pipe(takeUntil(this.destroy$)).subscribe(allItems => {
      traverseAllDeep(allItems, item => {
        if (persistent[item.id] !== undefined) {
          this.expandedItemsMap.set(item, persistent[item.id]);
        }
      });
    });
  }

  private configureExpandedGroupsMap(): void {
    const persistent: PersistentExpandedValue = this.expandedItemsService.getGroupsExpandedKeys() ?? {};

    for (const [groupId, isExpanded] of Object.entries(persistent)) {
      this.expandedGroupsMap.set(groupId, isExpanded);
    }
  }
}
