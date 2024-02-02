import { Inject, Injectable, Optional, Self, SkipSelf } from '@angular/core';
import { BehaviorSubject, combineLatest, of, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, switchMap, takeUntil, withLatestFrom } from 'rxjs/operators';
import { filterItems, toRubricatorItems, traverseAllDeep, } from '../helpers/prizm-navigation-menu-items-helpers';
import { PrizmNavigationMenuToolbarService } from './prizm-navigation-menu-toolbar.service';
import { PrizmNavigationMenuService } from './prizm-navigation-menu.service';
import { PRIZM_NAVIGATION_MENU_SEARCH_CONFIG } from '../tokens';
import { DEFAULT_TOOLBAR_CONFIG, DEFAULT_SEARCH_CONFIG, DEFAULT_EMPTY_MESSAGE_CONFIG } from '../defaults';
import * as i0 from "@angular/core";
import * as i1 from "./prizm-navigation-menu.service";
import * as i2 from "./prizm-navigation-menu-toolbar.service";
export class PrizmNavigationMenuGroupService {
    get groupId() {
        return this.groupId$$.value;
    }
    get searchConfig() {
        return this.searchConfig$$.value;
    }
    get viewMode() {
        return this.viewMode$$.value;
    }
    constructor(menuService, searchConfigToken, groupToolbarService, menuToolbarService) {
        this.menuService = menuService;
        this.searchConfigToken = searchConfigToken;
        this.groupToolbarService = groupToolbarService;
        this.menuToolbarService = menuToolbarService;
        this.groupId$$ = new BehaviorSubject(null);
        this.emptySearchResultMessageConfig$$ = new BehaviorSubject(DEFAULT_EMPTY_MESSAGE_CONFIG);
        this.emptyDataMessageConfig$$ = new BehaviorSubject({
            title: '',
            subtitle: '',
        });
        this.toolbarConfig$$ = new BehaviorSubject(DEFAULT_TOOLBAR_CONFIG);
        this.searchConfig$$ = new BehaviorSubject({
            ...DEFAULT_SEARCH_CONFIG,
            ...this.searchConfigToken,
        });
        this.searchState$$ = new BehaviorSubject({
            enabled: false,
            value: '',
        });
        this.viewMode$$ = new BehaviorSubject('hierarchy');
        this.folderItem$$ = new BehaviorSubject(null);
        this.persistentExpandedItemsMap$$ = new BehaviorSubject(this.menuService.internalExpandedItemsMap);
        this.temporaryExpandedItemsMap = new Map();
        this.internalItems$ = this.groupId$$.pipe(filter(groupId => !!groupId), switchMap(groupId => this.menuService.getGroupItems(groupId)));
        this.modeBasedItems$ = combineLatest([
            this.internalItems$,
            this.viewMode$$,
        ]).pipe(switchMap(([internalItems, viewMode]) => {
            if (viewMode === 'rubricator') {
                const rubricatorItems = toRubricatorItems(internalItems);
                rubricatorItems.forEach(rootLevelItem => this.temporaryExpandedItemsMap.set(rootLevelItem, false));
                return of(rubricatorItems);
            }
            if (viewMode === 'folder') {
                return this.folderItem$$.pipe(map(folderItem => {
                    if (folderItem) {
                        if (!folderItem.children) {
                            return [folderItem];
                        }
                        return folderItem.children || [];
                    }
                    return internalItems;
                }));
            }
            return of(internalItems);
        }));
        this.viewMode$ = this.viewMode$$.asObservable();
        this.groupItems$ = combineLatest([
            this.modeBasedItems$,
            this.searchState$$,
        ]).pipe(map(([modeBasedItems, searchState]) => {
            if (searchState.enabled && searchState.value === '') {
                return [];
            }
            if (searchState.enabled) {
                const filtered = filterItems(modeBasedItems, item => item.text.toLowerCase().includes(searchState.value.toLowerCase()));
                traverseAllDeep(filtered, item => this.temporaryExpandedItemsMap.set(item, true));
                return filtered;
            }
            return modeBasedItems;
        }));
        this.expandedItemsMap$ = combineLatest([
            this.viewMode$$,
            this.searchState$$,
            this.persistentExpandedItemsMap$$,
        ]).pipe(map(([viewMode, searchState, persistentExpandedItemsMap]) => {
            return viewMode === 'folder' || viewMode === 'rubricator' || searchState.enabled
                ? this.temporaryExpandedItemsMap
                : persistentExpandedItemsMap;
        }));
        this.closeAll$ = new Subject();
        this.searchEnabled$ = this.searchState$$.pipe(map(s => s.enabled));
        this.searchConfig$ = this.searchConfig$$.asObservable();
        this.toolbarConfig$ = this.toolbarConfig$$.asObservable();
        this.emptySearchResultMessageConfig$ = this.menuService.emptySearchResultMessageConfig$;
        this.emptyDataMessageConfig$ = this.menuService.emptyDataMessageConfig$;
        this.destroy$ = new Subject();
        this.filterItemsOnSearchChange();
        this.configureViewMode();
        this.clearExpandedItemsOnToolbarAction();
    }
    goToParentFolder(item) {
        item.breadcrumbs = item.breadcrumbs ?? [];
        const parentUserItem = item.breadcrumbs[item.breadcrumbs.length - 3];
        const parent = this.menuService.getInternalItem(parentUserItem);
        this.temporaryExpandedItemsMap.clear();
        this.folderItem$$.next(parent);
    }
    goToRootFolder() {
        this.temporaryExpandedItemsMap.clear();
        this.folderItem$$.next(null);
    }
    handleFolderExpanded(item) {
        this.folderItem$$.next(item);
    }
    setGroupId(groupId) {
        this.groupId$$.next(groupId);
    }
    setToolbarConfig(toolbarConfig) {
        this.toolbarConfig$$.next({ ...DEFAULT_TOOLBAR_CONFIG, ...toolbarConfig, folderMode: false });
    }
    setSearchConfig(config) {
        this.searchConfig$$.next({
            ...DEFAULT_SEARCH_CONFIG,
            ...config,
        });
    }
    setEmptySearchResultMessageConfig(config) {
        this.emptySearchResultMessageConfig$$.next(config);
    }
    setEmptyDataMessageConfig(config) {
        this.emptyDataMessageConfig$$.next(config);
    }
    applySearchState(value) {
        this.searchState$$.next(value);
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    filterItemsOnSearchChange() {
        this.searchConfig$
            .pipe(switchMap(config => {
            switch (config.searchSource) {
                case 'group':
                    return this.groupToolbarService.searchState$;
                case 'menu':
                    return this.menuToolbarService?.searchState$;
                case 'hierarchical':
                default:
                    return combineLatest([
                        this.groupToolbarService.searchState$,
                        ...(this.menuToolbarService?.searchState$ ? [this.menuToolbarService?.searchState$] : []),
                    ]).pipe(map(([groupValue, menuValue]) => {
                        if (groupValue?.enabled) {
                            return groupValue;
                        }
                        if (menuValue?.enabled) {
                            return menuValue;
                        }
                        return {
                            enabled: false,
                            value: '',
                        };
                    }));
            }
        }), distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe(v => this.applySearchState(v));
    }
    configureViewMode() {
        const menuViewMode$ = this.menuToolbarService?.viewMode$.pipe(filter(menuViewMode => {
            if (menuViewMode === 'folder' && !this.toolbarConfig$$.value.folderMode)
                return false;
            if (menuViewMode === 'rubricator' && !this.toolbarConfig$$.value.rubricatorMode)
                return false;
            return true;
        }));
        menuViewMode$
            ?.pipe(withLatestFrom(this.viewMode$$), filter(([menuViewMode, currentViewMode]) => menuViewMode !== currentViewMode), takeUntil(this.destroy$))
            .subscribe(([menuViewMode]) => {
            this.viewMode$$.next(menuViewMode);
            this.groupToolbarService.changeViewMode(menuViewMode);
        });
        this.groupToolbarService.viewMode$
            .pipe(filter(groupViewMode => groupViewMode !== this.viewMode$$.value), takeUntil(this.destroy$))
            .subscribe(groupViewMode => {
            this.viewMode$$.next(groupViewMode);
        });
    }
    clearExpandedItemsOnToolbarAction() {
        this.menuToolbarService?.closeAll$.pipe(takeUntil(this.destroy$)).subscribe(() => {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmNavigationMenuGroupService, deps: [{ token: i1.PrizmNavigationMenuService }, { token: PRIZM_NAVIGATION_MENU_SEARCH_CONFIG }, { token: i2.PrizmNavigationMenuToolbarService, self: true }, { token: i2.PrizmNavigationMenuToolbarService, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmNavigationMenuGroupService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmNavigationMenuGroupService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.PrizmNavigationMenuService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_NAVIGATION_MENU_SEARCH_CONFIG]
                }] }, { type: i2.PrizmNavigationMenuToolbarService, decorators: [{
                    type: Self
                }] }, { type: i2.PrizmNavigationMenuToolbarService, decorators: [{
                    type: SkipSelf
                }, {
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpem0tbmF2aWdhdGlvbi1tZW51LWdyb3VwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24tbWVudS9zZXJ2aWNlcy9wcml6bS1uYXZpZ2F0aW9uLW1lbnUtZ3JvdXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBYSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RixPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekcsT0FBTyxFQUNMLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsZUFBZSxHQUNoQixNQUFNLGdEQUFnRCxDQUFDO0FBU3hELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNoRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUscUJBQXFCLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFHMUcsTUFBTSxPQUFPLCtCQUErQjtJQTZIMUMsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztJ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QyxDQUFDO0lBQ1AsQ0FBQztJQUVPLGlDQUFpQztRQUN2QyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUMvRSxJQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUMvRSxJQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsT0FBaUIsQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzhHQTFSVSwrQkFBK0IsNERBNkloQyxtQ0FBbUM7a0hBN0lsQywrQkFBK0I7OzJGQUEvQiwrQkFBK0I7a0JBRDNDLFVBQVU7OzBCQThJTixNQUFNOzJCQUFDLG1DQUFtQzs7MEJBQzFDLElBQUk7OzBCQUVKLFFBQVE7OzBCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9uRGVzdHJveSwgT3B0aW9uYWwsIFNlbGYsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFrZVVudGlsLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIGZpbHRlckl0ZW1zLFxuICB0b1J1YnJpY2F0b3JJdGVtcyxcbiAgdHJhdmVyc2VBbGxEZWVwLFxufSBmcm9tICcuLi9oZWxwZXJzL3ByaXptLW5hdmlnYXRpb24tbWVudS1pdGVtcy1oZWxwZXJzJztcbmltcG9ydCB7XG4gIEludGVybmFsUHJpem1OYXZpZ2F0aW9uTWVudUl0ZW0sXG4gIFByaXptTmF2aWdhdGlvbk1lbnVFbXB0eU1lc3NhZ2VDb25maWcsXG4gIFByaXptTmF2aWdhdGlvbk1lbnVJdGVtLFxuICBQcml6bU5hdmlnYXRpb25NZW51U2VhcmNoQ29uZmlnLFxuICBQcml6bU5hdmlnYXRpb25NZW51VG9vbGJhckNvbmZpZyxcbiAgVmlld01vZGUsXG59IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUHJpem1OYXZpZ2F0aW9uTWVudVRvb2xiYXJTZXJ2aWNlIH0gZnJvbSAnLi9wcml6bS1uYXZpZ2F0aW9uLW1lbnUtdG9vbGJhci5zZXJ2aWNlJztcbmltcG9ydCB7IFByaXptTmF2aWdhdGlvbk1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9wcml6bS1uYXZpZ2F0aW9uLW1lbnUuc2VydmljZSc7XG5pbXBvcnQgeyBQUklaTV9OQVZJR0FUSU9OX01FTlVfU0VBUkNIX0NPTkZJRyB9IGZyb20gJy4uL3Rva2Vucyc7XG5pbXBvcnQgeyBERUZBVUxUX1RPT0xCQVJfQ09ORklHLCBERUZBVUxUX1NFQVJDSF9DT05GSUcsIERFRkFVTFRfRU1QVFlfTUVTU0FHRV9DT05GSUcgfSBmcm9tICcuLi9kZWZhdWx0cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcml6bU5hdmlnYXRpb25NZW51R3JvdXBTZXJ2aWNlPFxuICBVc2VySXRlbSBleHRlbmRzIE9taXQ8UHJpem1OYXZpZ2F0aW9uTWVudUl0ZW0sICdjaGlsZHJlbic+ICYgeyBjaGlsZHJlbj86IFVzZXJJdGVtW10gfVxuPiBpbXBsZW1lbnRzIE9uRGVzdHJveVxue1xuICBwcml2YXRlIGdyb3VwSWQkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgcHJpdmF0ZSBlbXB0eVNlYXJjaFJlc3VsdE1lc3NhZ2VDb25maWckJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UHJpem1OYXZpZ2F0aW9uTWVudUVtcHR5TWVzc2FnZUNvbmZpZz4oXG4gICAgREVGQVVMVF9FTVBUWV9NRVNTQUdFX0NPTkZJR1xuICApO1xuXG4gIHByaXZhdGUgZW1wdHlEYXRhTWVzc2FnZUNvbmZpZyQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQcml6bU5hdmlnYXRpb25NZW51RW1wdHlNZXNzYWdlQ29uZmlnPih7XG4gICAgdGl0bGU6ICcnLFxuICAgIHN1YnRpdGxlOiAnJyxcbiAgfSk7XG5cbiAgcHJpdmF0ZSB0b29sYmFyQ29uZmlnJCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFByaXptTmF2aWdhdGlvbk1lbnVUb29sYmFyQ29uZmlnPihERUZBVUxUX1RPT0xCQVJfQ09ORklHKTtcblxuICBwcml2YXRlIHNlYXJjaENvbmZpZyQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQcml6bU5hdmlnYXRpb25NZW51U2VhcmNoQ29uZmlnPih7XG4gICAgLi4uREVGQVVMVF9TRUFSQ0hfQ09ORklHLFxuICAgIC4uLnRoaXMuc2VhcmNoQ29uZmlnVG9rZW4sXG4gIH0pO1xuXG4gIHByaXZhdGUgc2VhcmNoU3RhdGUkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8e1xuICAgIGVuYWJsZWQ6IGJvb2xlYW47XG4gICAgdmFsdWU6IHN0cmluZztcbiAgfT4oe1xuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIHZhbHVlOiAnJyxcbiAgfSk7XG5cbiAgcHJpdmF0ZSB2aWV3TW9kZSQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxWaWV3TW9kZT4oJ2hpZXJhcmNoeScpO1xuXG4gIHByaXZhdGUgZm9sZGVySXRlbSQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJbnRlcm5hbFByaXptTmF2aWdhdGlvbk1lbnVJdGVtPFVzZXJJdGVtIHwgbnVsbD4gfCBudWxsPihudWxsKTtcblxuICBwcml2YXRlIHBlcnNpc3RlbnRFeHBhbmRlZEl0ZW1zTWFwJCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFxuICAgIE1hcDxJbnRlcm5hbFByaXptTmF2aWdhdGlvbk1lbnVJdGVtPFVzZXJJdGVtPiwgYm9vbGVhbj5cbiAgPih0aGlzLm1lbnVTZXJ2aWNlLmludGVybmFsRXhwYW5kZWRJdGVtc01hcCk7XG5cbiAgcHJpdmF0ZSB0ZW1wb3JhcnlFeHBhbmRlZEl0ZW1zTWFwOiBNYXA8SW50ZXJuYWxQcml6bU5hdmlnYXRpb25NZW51SXRlbTxVc2VySXRlbT4sIGJvb2xlYW4+ID0gbmV3IE1hcCgpO1xuXG4gIHByaXZhdGUgaW50ZXJuYWxJdGVtcyQ6IE9ic2VydmFibGU8SW50ZXJuYWxQcml6bU5hdmlnYXRpb25NZW51SXRlbTxVc2VySXRlbT5bXT4gPSB0aGlzLmdyb3VwSWQkJC5waXBlKFxuICAgIGZpbHRlcihncm91cElkID0+ICEhZ3JvdXBJZCksXG4gICAgc3dpdGNoTWFwKGdyb3VwSWQgPT4gdGhpcy5tZW51U2VydmljZS5nZXRHcm91cEl0ZW1zKGdyb3VwSWQgYXMgc3RyaW5nKSlcbiAgKTtcblxuICBwcml2YXRlIG1vZGVCYXNlZEl0ZW1zJDogT2JzZXJ2YWJsZTxJbnRlcm5hbFByaXptTmF2aWdhdGlvbk1lbnVJdGVtPFVzZXJJdGVtPltdPiA9IGNvbWJpbmVMYXRlc3QoW1xuICAgIHRoaXMuaW50ZXJuYWxJdGVtcyQsXG4gICAgdGhpcy52aWV3TW9kZSQkLFxuICBdKS5waXBlKFxuICAgIHN3aXRjaE1hcCgoW2ludGVybmFsSXRlbXMsIHZpZXdNb2RlXSkgPT4ge1xuICAgICAgaWYgKHZpZXdNb2RlID09PSAncnVicmljYXRvcicpIHtcbiAgICAgICAgY29uc3QgcnVicmljYXRvckl0ZW1zID0gdG9SdWJyaWNhdG9ySXRlbXMoaW50ZXJuYWxJdGVtcyk7XG4gICAgICAgIHJ1YnJpY2F0b3JJdGVtcy5mb3JFYWNoKHJvb3RMZXZlbEl0ZW0gPT4gdGhpcy50ZW1wb3JhcnlFeHBhbmRlZEl0ZW1zTWFwLnNldChyb290TGV2ZWxJdGVtLCBmYWxzZSkpO1xuICAgICAgICByZXR1cm4gb2YocnVicmljYXRvckl0ZW1zKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZpZXdNb2RlID09PSAnZm9sZGVyJykge1xuICAgICAgICByZXR1cm4gdGhpcy5mb2xkZXJJdGVtJCQucGlwZShcbiAgICAgICAgICBtYXAoZm9sZGVySXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoZm9sZGVySXRlbSkge1xuICAgICAgICAgICAgICBpZiAoIWZvbGRlckl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW2ZvbGRlckl0ZW1dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGZvbGRlckl0ZW0uY2hpbGRyZW4gfHwgW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBpbnRlcm5hbEl0ZW1zO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvZihpbnRlcm5hbEl0ZW1zKTtcbiAgICB9KVxuICApO1xuXG4gIHZpZXdNb2RlJDogT2JzZXJ2YWJsZTxWaWV3TW9kZT4gPSB0aGlzLnZpZXdNb2RlJCQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgZ3JvdXBJdGVtcyQ6IE9ic2VydmFibGU8SW50ZXJuYWxQcml6bU5hdmlnYXRpb25NZW51SXRlbTxVc2VySXRlbT5bXT4gPSBjb21iaW5lTGF0ZXN0KFtcbiAgICB0aGlzLm1vZGVCYXNlZEl0ZW1zJCxcbiAgICB0aGlzLnNlYXJjaFN0YXRlJCQsXG4gIF0pLnBpcGUoXG4gICAgbWFwKChbbW9kZUJhc2VkSXRlbXMsIHNlYXJjaFN0YXRlXSkgPT4ge1xuICAgICAgaWYgKHNlYXJjaFN0YXRlLmVuYWJsZWQgJiYgc2VhcmNoU3RhdGUudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlYXJjaFN0YXRlLmVuYWJsZWQpIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSBmaWx0ZXJJdGVtcyhtb2RlQmFzZWRJdGVtcywgaXRlbSA9PlxuICAgICAgICAgIGl0ZW0udGV4dC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0YXRlLnZhbHVlLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICk7XG4gICAgICAgIHRyYXZlcnNlQWxsRGVlcChmaWx0ZXJlZCwgaXRlbSA9PiB0aGlzLnRlbXBvcmFyeUV4cGFuZGVkSXRlbXNNYXAuc2V0KGl0ZW0sIHRydWUpKTtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbW9kZUJhc2VkSXRlbXM7XG4gICAgfSlcbiAgKTtcblxuICBleHBhbmRlZEl0ZW1zTWFwJDogT2JzZXJ2YWJsZTxNYXA8SW50ZXJuYWxQcml6bU5hdmlnYXRpb25NZW51SXRlbTxVc2VySXRlbT4sIGJvb2xlYW4+PiA9IGNvbWJpbmVMYXRlc3QoW1xuICAgIHRoaXMudmlld01vZGUkJCxcbiAgICB0aGlzLnNlYXJjaFN0YXRlJCQsXG4gICAgdGhpcy5wZXJzaXN0ZW50RXhwYW5kZWRJdGVtc01hcCQkLFxuICBdKS5waXBlKFxuICAgIG1hcCgoW3ZpZXdNb2RlLCBzZWFyY2hTdGF0ZSwgcGVyc2lzdGVudEV4cGFuZGVkSXRlbXNNYXBdKSA9PiB7XG4gICAgICByZXR1cm4gdmlld01vZGUgPT09ICdmb2xkZXInIHx8IHZpZXdNb2RlID09PSAncnVicmljYXRvcicgfHwgc2VhcmNoU3RhdGUuZW5hYmxlZFxuICAgICAgICA/IHRoaXMudGVtcG9yYXJ5RXhwYW5kZWRJdGVtc01hcFxuICAgICAgICA6IHBlcnNpc3RlbnRFeHBhbmRlZEl0ZW1zTWFwO1xuICAgIH0pXG4gICk7XG5cbiAgY2xvc2VBbGwkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBzZWFyY2hFbmFibGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuc2VhcmNoU3RhdGUkJC5waXBlKG1hcChzID0+IHMuZW5hYmxlZCkpO1xuXG4gIHNlYXJjaENvbmZpZyQ6IE9ic2VydmFibGU8UHJpem1OYXZpZ2F0aW9uTWVudVNlYXJjaENvbmZpZz4gPSB0aGlzLnNlYXJjaENvbmZpZyQkLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHRvb2xiYXJDb25maWckOiBPYnNlcnZhYmxlPFByaXptTmF2aWdhdGlvbk1lbnVUb29sYmFyQ29uZmlnPiA9IHRoaXMudG9vbGJhckNvbmZpZyQkLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGVtcHR5U2VhcmNoUmVzdWx0TWVzc2FnZUNvbmZpZyQ6IE9ic2VydmFibGU8UHJpem1OYXZpZ2F0aW9uTWVudUVtcHR5TWVzc2FnZUNvbmZpZz4gPVxuICAgIHRoaXMubWVudVNlcnZpY2UuZW1wdHlTZWFyY2hSZXN1bHRNZXNzYWdlQ29uZmlnJDtcblxuICBlbXB0eURhdGFNZXNzYWdlQ29uZmlnJDogT2JzZXJ2YWJsZTxQcml6bU5hdmlnYXRpb25NZW51RW1wdHlNZXNzYWdlQ29uZmlnPiA9XG4gICAgdGhpcy5tZW51U2VydmljZS5lbXB0eURhdGFNZXNzYWdlQ29uZmlnJDtcblxuICBnZXQgZ3JvdXBJZCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5ncm91cElkJCQudmFsdWU7XG4gIH1cblxuICBnZXQgc2VhcmNoQ29uZmlnKCk6IFByaXptTmF2aWdhdGlvbk1lbnVTZWFyY2hDb25maWcge1xuICAgIHJldHVybiB0aGlzLnNlYXJjaENvbmZpZyQkLnZhbHVlO1xuICB9XG5cbiAgZ2V0IHZpZXdNb2RlKCk6IFZpZXdNb2RlIHtcbiAgICByZXR1cm4gdGhpcy52aWV3TW9kZSQkLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtZW51U2VydmljZTogUHJpem1OYXZpZ2F0aW9uTWVudVNlcnZpY2U8VXNlckl0ZW0+LFxuICAgIEBJbmplY3QoUFJJWk1fTkFWSUdBVElPTl9NRU5VX1NFQVJDSF9DT05GSUcpIHByaXZhdGUgc2VhcmNoQ29uZmlnVG9rZW46IFByaXptTmF2aWdhdGlvbk1lbnVTZWFyY2hDb25maWcsXG4gICAgQFNlbGYoKVxuICAgIHByaXZhdGUgZ3JvdXBUb29sYmFyU2VydmljZTogUHJpem1OYXZpZ2F0aW9uTWVudVRvb2xiYXJTZXJ2aWNlLFxuICAgIEBTa2lwU2VsZigpIEBPcHRpb25hbCgpIHByaXZhdGUgbWVudVRvb2xiYXJTZXJ2aWNlPzogUHJpem1OYXZpZ2F0aW9uTWVudVRvb2xiYXJTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuZmlsdGVySXRlbXNPblNlYXJjaENoYW5nZSgpO1xuICAgIHRoaXMuY29uZmlndXJlVmlld01vZGUoKTtcbiAgICB0aGlzLmNsZWFyRXhwYW5kZWRJdGVtc09uVG9vbGJhckFjdGlvbigpO1xuICB9XG5cbiAgcHVibGljIGdvVG9QYXJlbnRGb2xkZXIoaXRlbTogSW50ZXJuYWxQcml6bU5hdmlnYXRpb25NZW51SXRlbTxVc2VySXRlbT4pOiB2b2lkIHtcbiAgICBpdGVtLmJyZWFkY3J1bWJzID0gaXRlbS5icmVhZGNydW1icyA/PyBbXTtcbiAgICBjb25zdCBwYXJlbnRVc2VySXRlbSA9IGl0ZW0uYnJlYWRjcnVtYnNbaXRlbS5icmVhZGNydW1icy5sZW5ndGggLSAzXTtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLm1lbnVTZXJ2aWNlLmdldEludGVybmFsSXRlbShwYXJlbnRVc2VySXRlbSk7XG5cbiAgICB0aGlzLnRlbXBvcmFyeUV4cGFuZGVkSXRlbXNNYXAuY2xlYXIoKTtcbiAgICB0aGlzLmZvbGRlckl0ZW0kJC5uZXh0KHBhcmVudCk7XG4gIH1cblxuICBwdWJsaWMgZ29Ub1Jvb3RGb2xkZXIoKTogdm9pZCB7XG4gICAgdGhpcy50ZW1wb3JhcnlFeHBhbmRlZEl0ZW1zTWFwLmNsZWFyKCk7XG4gICAgdGhpcy5mb2xkZXJJdGVtJCQubmV4dChudWxsKTtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVGb2xkZXJFeHBhbmRlZChpdGVtOiBJbnRlcm5hbFByaXptTmF2aWdhdGlvbk1lbnVJdGVtPFVzZXJJdGVtPik6IHZvaWQge1xuICAgIHRoaXMuZm9sZGVySXRlbSQkLm5leHQoaXRlbSk7XG4gIH1cblxuICBwdWJsaWMgc2V0R3JvdXBJZChncm91cElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmdyb3VwSWQkJC5uZXh0KGdyb3VwSWQpO1xuICB9XG5cbiAgcHVibGljIHNldFRvb2xiYXJDb25maWcodG9vbGJhckNvbmZpZzogUHJpem1OYXZpZ2F0aW9uTWVudVRvb2xiYXJDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLnRvb2xiYXJDb25maWckJC5uZXh0KHsgLi4uREVGQVVMVF9UT09MQkFSX0NPTkZJRywgLi4udG9vbGJhckNvbmZpZywgZm9sZGVyTW9kZTogZmFsc2UgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0U2VhcmNoQ29uZmlnKGNvbmZpZzogUHJpem1OYXZpZ2F0aW9uTWVudVNlYXJjaENvbmZpZyk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoQ29uZmlnJCQubmV4dCh7XG4gICAgICAuLi5ERUZBVUxUX1NFQVJDSF9DT05GSUcsXG4gICAgICAuLi5jb25maWcsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0RW1wdHlTZWFyY2hSZXN1bHRNZXNzYWdlQ29uZmlnKGNvbmZpZzogUHJpem1OYXZpZ2F0aW9uTWVudUVtcHR5TWVzc2FnZUNvbmZpZyk6IHZvaWQge1xuICAgIHRoaXMuZW1wdHlTZWFyY2hSZXN1bHRNZXNzYWdlQ29uZmlnJCQubmV4dChjb25maWcpO1xuICB9XG5cbiAgcHVibGljIHNldEVtcHR5RGF0YU1lc3NhZ2VDb25maWcoY29uZmlnOiBQcml6bU5hdmlnYXRpb25NZW51RW1wdHlNZXNzYWdlQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5lbXB0eURhdGFNZXNzYWdlQ29uZmlnJCQubmV4dChjb25maWcpO1xuICB9XG5cbiAgcHVibGljIGFwcGx5U2VhcmNoU3RhdGUodmFsdWU6IHsgZW5hYmxlZDogYm9vbGVhbjsgdmFsdWU6IHN0cmluZyB9KTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hTdGF0ZSQkLm5leHQodmFsdWUpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJJdGVtc09uU2VhcmNoQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoQ29uZmlnJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChjb25maWcgPT4ge1xuICAgICAgICAgIHN3aXRjaCAoY29uZmlnLnNlYXJjaFNvdXJjZSkge1xuICAgICAgICAgICAgY2FzZSAnZ3JvdXAnOlxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ncm91cFRvb2xiYXJTZXJ2aWNlLnNlYXJjaFN0YXRlJDtcblxuICAgICAgICAgICAgY2FzZSAnbWVudSc6XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLm1lbnVUb29sYmFyU2VydmljZT8uc2VhcmNoU3RhdGUkIGFzIGFueTtcblxuICAgICAgICAgICAgY2FzZSAnaGllcmFyY2hpY2FsJzpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwVG9vbGJhclNlcnZpY2Uuc2VhcmNoU3RhdGUkLFxuICAgICAgICAgICAgICAgIC4uLih0aGlzLm1lbnVUb29sYmFyU2VydmljZT8uc2VhcmNoU3RhdGUkID8gW3RoaXMubWVudVRvb2xiYXJTZXJ2aWNlPy5zZWFyY2hTdGF0ZSRdIDogW10pLFxuICAgICAgICAgICAgICBdKS5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCgoW2dyb3VwVmFsdWUsIG1lbnVWYWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChncm91cFZhbHVlPy5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBncm91cFZhbHVlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAobWVudVZhbHVlPy5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtZW51VmFsdWU7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHYgPT4gdGhpcy5hcHBseVNlYXJjaFN0YXRlKHYgYXMgYW55KSk7XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZVZpZXdNb2RlKCk6IHZvaWQge1xuICAgIGNvbnN0IG1lbnVWaWV3TW9kZSQgPSB0aGlzLm1lbnVUb29sYmFyU2VydmljZT8udmlld01vZGUkLnBpcGUoXG4gICAgICBmaWx0ZXIobWVudVZpZXdNb2RlID0+IHtcbiAgICAgICAgaWYgKG1lbnVWaWV3TW9kZSA9PT0gJ2ZvbGRlcicgJiYgIXRoaXMudG9vbGJhckNvbmZpZyQkLnZhbHVlLmZvbGRlck1vZGUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKG1lbnVWaWV3TW9kZSA9PT0gJ3J1YnJpY2F0b3InICYmICF0aGlzLnRvb2xiYXJDb25maWckJC52YWx1ZS5ydWJyaWNhdG9yTW9kZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIG1lbnVWaWV3TW9kZSRcbiAgICAgID8ucGlwZShcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy52aWV3TW9kZSQkKSxcbiAgICAgICAgZmlsdGVyKChbbWVudVZpZXdNb2RlLCBjdXJyZW50Vmlld01vZGVdKSA9PiBtZW51Vmlld01vZGUgIT09IGN1cnJlbnRWaWV3TW9kZSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoW21lbnVWaWV3TW9kZV0pID0+IHtcbiAgICAgICAgdGhpcy52aWV3TW9kZSQkLm5leHQobWVudVZpZXdNb2RlKTtcbiAgICAgICAgdGhpcy5ncm91cFRvb2xiYXJTZXJ2aWNlLmNoYW5nZVZpZXdNb2RlKG1lbnVWaWV3TW9kZSk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuZ3JvdXBUb29sYmFyU2VydmljZS52aWV3TW9kZSRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoZ3JvdXBWaWV3TW9kZSA9PiBncm91cFZpZXdNb2RlICE9PSB0aGlzLnZpZXdNb2RlJCQudmFsdWUpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoZ3JvdXBWaWV3TW9kZSA9PiB7XG4gICAgICAgIHRoaXMudmlld01vZGUkJC5uZXh0KGdyb3VwVmlld01vZGUpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRXhwYW5kZWRJdGVtc09uVG9vbGJhckFjdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLm1lbnVUb29sYmFyU2VydmljZT8uY2xvc2VBbGwkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy50ZW1wb3JhcnlFeHBhbmRlZEl0ZW1zTWFwLmNsZWFyKCk7XG4gICAgICB0aGlzLm1lbnVTZXJ2aWNlLmNsZWFyRXhwYW5kZWRJdGVtc01hcCgpO1xuICAgICAgdGhpcy5jbG9zZUFsbCQubmV4dCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ncm91cFRvb2xiYXJTZXJ2aWNlLmNsb3NlQWxsJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMudGVtcG9yYXJ5RXhwYW5kZWRJdGVtc01hcC5jbGVhcigpO1xuICAgICAgdGhpcy5tZW51U2VydmljZS5jbGVhckV4cGFuZGVkSXRlbXNNYXAodGhpcy5ncm91cElkIGFzIHN0cmluZyk7XG4gICAgICB0aGlzLmNsb3NlQWxsJC5uZXh0KCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==