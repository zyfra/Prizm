import { Inject, Injectable, OnDestroy, Optional, Self, SkipSelf } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, switchMap, takeUntil, withLatestFrom } from 'rxjs/operators';
import {
  filterItems,
  toRubricatorItems,
  traverseAllDeep,
} from '../helpers/prizm-navigation-menu-items-helpers';
import {
  InternalPrizmNavigationMenuItem,
  PrizmNavigationMenuEmptyMessageConfig,
  PrizmNavigationMenuItem,
  PrizmNavigationMenuSearchConfig,
  PrizmNavigationMenuToolbarConfig,
  ViewMode,
} from '../interfaces';
import { PrizmNavigationMenuToolbarService } from './prizm-navigation-menu-toolbar.service';
import { PrizmNavigationMenuService } from './prizm-navigation-menu.service';
import { PRIZM_NAVIGATION_MENU_SEARCH_CONFIG } from '../tokens';
import { DEFAULT_TOOLBAR_CONFIG, DEFAULT_SEARCH_CONFIG, DEFAULT_EMPTY_MESSAGE_CONFIG } from '../defaults';

@Injectable()
export class PrizmNavigationMenuGroupService<
  UserItem extends Omit<PrizmNavigationMenuItem, 'children'> & { children?: UserItem[] }
> implements OnDestroy
{
  private groupId$$ = new BehaviorSubject<string | null>(null);

  private emptyMessageConfig$$ = new BehaviorSubject<PrizmNavigationMenuEmptyMessageConfig>(
    DEFAULT_EMPTY_MESSAGE_CONFIG
  );

  private searchConfig$$ = new BehaviorSubject<PrizmNavigationMenuSearchConfig>({
    ...DEFAULT_SEARCH_CONFIG,
    ...this.searchConfigToken,
  });

  private toolbarConfig$$ = new BehaviorSubject<PrizmNavigationMenuToolbarConfig>(DEFAULT_TOOLBAR_CONFIG);

  private searchState$$ = new BehaviorSubject<{
    enabled: boolean;
    value: string;
  }>({
    enabled: false,
    value: '',
  });

  private viewMode$$ = new BehaviorSubject<ViewMode>('hierarchy');

  private folderItem$$ = new BehaviorSubject<InternalPrizmNavigationMenuItem<UserItem | null>>(null);

  private persistentExpandedItemsMap$$ = new BehaviorSubject<
    Map<InternalPrizmNavigationMenuItem<UserItem>, boolean>
  >(this.menuService.internalExpandedItemsMap);

  private temporaryExpandedItemsMap: Map<InternalPrizmNavigationMenuItem<UserItem>, boolean> = new Map();

  private internalItems$: Observable<InternalPrizmNavigationMenuItem<UserItem>[]> = this.groupId$$.pipe(
    filter(groupId => !!groupId),
    switchMap(groupId => this.menuService.getGroupItems(groupId))
  );

  private modeBasedItems$: Observable<InternalPrizmNavigationMenuItem<UserItem>[]> = combineLatest([
    this.internalItems$,
    this.viewMode$$,
  ]).pipe(
    switchMap(([internalItems, viewMode]) => {
      if (viewMode === 'rubricator') {
        const rubricatorItems = toRubricatorItems(internalItems);
        rubricatorItems.forEach(rootLevelItem => this.temporaryExpandedItemsMap.set(rootLevelItem, false));
        return of(rubricatorItems);
      }

      if (viewMode === 'folder') {
        return this.folderItem$$.pipe(
          map(folderItem => {
            if (folderItem) {
              if (!folderItem.children) {
                return [folderItem];
              }

              return folderItem.children || [];
            }

            return internalItems;
          })
        );
      }

      return of(internalItems);
    })
  );

  viewMode$: Observable<ViewMode> = this.viewMode$$.asObservable();

  groupItems$: Observable<InternalPrizmNavigationMenuItem<UserItem>[]> = combineLatest([
    this.modeBasedItems$,
    this.searchState$$,
  ]).pipe(
    map(([modeBasedItems, searchState]) => {
      if (searchState.enabled && searchState.value === '') {
        return [];
      }

      if (searchState.enabled) {
        const filtered = filterItems(modeBasedItems, item => item.text.includes(searchState.value));
        traverseAllDeep(filtered, item => this.temporaryExpandedItemsMap.set(item, true));
        return filtered;
      }

      return modeBasedItems;
    })
  );

  expandedItemsMap$: Observable<Map<InternalPrizmNavigationMenuItem<UserItem>, boolean>> = combineLatest([
    this.viewMode$$,
    this.searchState$$,
    this.persistentExpandedItemsMap$$,
  ]).pipe(
    map(([viewMode, searchState, persistentExpandedItemsMap]) => {
      return viewMode === 'folder' || viewMode === 'rubricator' || searchState.enabled
        ? this.temporaryExpandedItemsMap
        : persistentExpandedItemsMap;
    })
  );

  closeAll$ = new Subject();

  searchConfig$: Observable<PrizmNavigationMenuSearchConfig> = this.searchConfig$$.asObservable();

  toolbarConfig$: Observable<PrizmNavigationMenuToolbarConfig> = this.toolbarConfig$$.asObservable();

  emptyMessageConfig$: Observable<PrizmNavigationMenuEmptyMessageConfig> =
    this.emptyMessageConfig$$.asObservable();

  get groupId(): string {
    return this.groupId$$.value;
  }

  get searchConfig(): PrizmNavigationMenuSearchConfig {
    return this.searchConfig$$.value;
  }

  get viewMode(): ViewMode {
    return this.viewMode$$.value;
  }

  private destroy$ = new Subject();

  constructor(
    private menuService: PrizmNavigationMenuService<UserItem>,
    @Inject(PRIZM_NAVIGATION_MENU_SEARCH_CONFIG) private searchConfigToken: PrizmNavigationMenuSearchConfig,
    @Self()
    private groupToolbarService: PrizmNavigationMenuToolbarService,
    @SkipSelf() @Optional() private menuToolbarService?: PrizmNavigationMenuToolbarService
  ) {
    this.filterItemsOnSearchChange();
    this.configureViewMode();
    this.clearExpandedItemsOnToolbarAction();
  }

  public goToParentFolder(item: InternalPrizmNavigationMenuItem<UserItem>): void {
    const parentUserItem = item.breadcrumbs[item.breadcrumbs.length - 3];
    const parent = this.menuService.getInternalItem(parentUserItem);

    this.temporaryExpandedItemsMap.clear();
    this.folderItem$$.next(parent);
  }

  public goToRootFolder(): void {
    this.temporaryExpandedItemsMap.clear();
    this.folderItem$$.next(null);
  }

  public handleFolderExpanded(item: InternalPrizmNavigationMenuItem<UserItem>): void {
    this.folderItem$$.next(item);
  }

  public setGroupId(groupId: string): void {
    this.groupId$$.next(groupId);
  }

  public setToolbarConfig(toolbarConfig: PrizmNavigationMenuToolbarConfig): void {
    this.toolbarConfig$$.next({ ...DEFAULT_TOOLBAR_CONFIG, ...toolbarConfig });
  }

  public setSearchConfig(config: PrizmNavigationMenuSearchConfig): void {
    this.searchConfig$$.next({
      ...DEFAULT_SEARCH_CONFIG,
      ...config,
    });
  }

  public setEmptyMessageConfig(config: PrizmNavigationMenuEmptyMessageConfig): void {
    this.emptyMessageConfig$$.next(config);
  }

  public applySearchState(value: { enabled: boolean; value: string }): void {
    this.searchState$$.next(value);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
  }

  private filterItemsOnSearchChange(): void {
    this.searchConfig$
      .pipe(
        switchMap(config => {
          switch (config.searchSource) {
            case 'group':
              return this.groupToolbarService.searchState$;

            case 'menu':
              return this.menuToolbarService.searchState$;

            case 'hierarchical':
            default:
              return combineLatest([
                this.groupToolbarService.searchState$,
                this.menuToolbarService.searchState$,
              ]).pipe(
                map(([groupValue, menuValue]) => {
                  if (groupValue.enabled) {
                    return groupValue;
                  }

                  if (menuValue.enabled) {
                    return menuValue;
                  }

                  return {
                    enabled: false,
                    value: '',
                  };
                })
              );
          }
        }),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(v => this.applySearchState(v));
  }

  private configureViewMode(): void {
    const menuViewMode$ = this.menuToolbarService.viewMode$.pipe(
      filter(menuViewMode => {
        if (menuViewMode === 'folder' && !this.toolbarConfig$$.value.folderMode) return false;
        if (menuViewMode === 'rubricator' && !this.toolbarConfig$$.value.rubricatorMode) return false;
        return true;
      })
    );

    menuViewMode$
      .pipe(
        withLatestFrom(this.viewMode$$),
        filter(([menuViewMode, currentViewMode]) => menuViewMode !== currentViewMode),
        takeUntil(this.destroy$)
      )
      .subscribe(([menuViewMode]) => {
        this.viewMode$$.next(menuViewMode);
        this.groupToolbarService.changeViewMode(menuViewMode);
      });

    this.groupToolbarService.viewMode$
      .pipe(
        filter(groupViewMode => groupViewMode !== this.viewMode$$.value),
        takeUntil(this.destroy$)
      )
      .subscribe(groupViewMode => {
        this.viewMode$$.next(groupViewMode);
      });
  }

  private clearExpandedItemsOnToolbarAction(): void {
    this.menuToolbarService.closeAll$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.temporaryExpandedItemsMap.clear();
      this.menuService.clearExpandedItemsMap();
      this.closeAll$.next();
    });

    this.groupToolbarService.closeAll$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.temporaryExpandedItemsMap.clear();
      this.menuService.clearExpandedItemsMap(this.groupId);
      this.closeAll$.next();
    });
  }
}
