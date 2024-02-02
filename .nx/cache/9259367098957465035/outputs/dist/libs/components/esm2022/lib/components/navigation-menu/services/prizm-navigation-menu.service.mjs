import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { traverseAllDeep } from '../helpers/prizm-navigation-menu-items-helpers';
import { DEFAULT_EMPTY_MESSAGE_CONFIG, DEFAULT_SEARCH_CONFIG, DEFAULT_SETTINGS, DEFAULT_TOOLBAR_CONFIG, } from '../defaults';
import { PRIZM_NAVIGATION_MENU_SEARCH_CONFIG, PRIZM_NAVIGATION_MENU_SETTINGS_CONFIG } from '../tokens';
import * as i0 from "@angular/core";
export class PrizmNavigationMenuService {
    get activeItem() {
        return this.activeItem$$.value;
    }
    get settingsConfig() {
        return this.settingsConfig$$.value;
    }
    get searchConfig() {
        return this.searchConfig$$.value;
    }
    get toolbarConfig() {
        return this.toolbarConfig$$.value;
    }
    constructor(searchConfigToken, settingsConfigToken) {
        this.searchConfigToken = searchConfigToken;
        this.settingsConfigToken = settingsConfigToken;
        this.internalItemsState$$ = new BehaviorSubject({});
        this.internalToUserMap = new Map();
        this.userToInternalMap = new Map();
        this.expandedGroupsMap$$ = new BehaviorSubject(new Map());
        this.userExpandedItemsMap$$ = new BehaviorSubject(new Map());
        this.activeItem$$ = new BehaviorSubject(null);
        this.activeItem$ = this.activeItem$$.asObservable();
        this.internalExpandedItemsMap = new Map();
        this.itemKeyName = 'id';
        /** CONFIGURATION */
        this.searchConfig$$ = new BehaviorSubject({
            ...DEFAULT_SEARCH_CONFIG,
            ...this.searchConfigToken,
        });
        this.toolbarConfig$$ = new BehaviorSubject(DEFAULT_TOOLBAR_CONFIG);
        this.settingsConfig$$ = new BehaviorSubject({
            ...DEFAULT_SETTINGS,
            ...this.settingsConfigToken,
            selectionMode: 'single',
        });
        this.emptySearchResultMessageConfig$$ = new BehaviorSubject(DEFAULT_EMPTY_MESSAGE_CONFIG);
        this.emptyDataMessageConfig$$ = new BehaviorSubject({
            title: '',
            subtitle: '',
        });
        this.searchConfig$ = this.searchConfig$$.asObservable();
        this.toolbarConfig$ = this.toolbarConfig$$.asObservable();
        this.emptySearchResultMessageConfig$ = this.emptySearchResultMessageConfig$$.asObservable();
        this.emptyDataMessageConfig$ = this.emptyDataMessageConfig$$.asObservable();
        /** FORWARD EVENTS */
        this.activeItemChangedEvent$ = new Subject();
        this.breadCrumbsChangedEvent$ = new Subject();
        this.expandedItemsMapChangedEvent$ = new Subject();
        this.expandedGroupsMapChangedEvent$ = new Subject();
        this.itemExpandedChangedEvent$ = new Subject();
        this.groupExpandedChangedEvent$ = new Subject();
    }
    /** ITEMS RELATED */
    registerGroupItems(groupId, items) {
        const internalItems = this.mapToInternalItemsAndUpdateSetMap(items, groupId);
        this.internalItemsState$$.next({
            ...this.internalItemsState$$.value,
            [groupId]: internalItems,
        });
        this.fillInternalExpandedItemsMapWithUser();
    }
    getGroupItems(groupId) {
        return this.internalItemsState$$.pipe(map(s => s[groupId] ?? []));
    }
    getUserItem(internalItem) {
        return this.internalToUserMap.get(internalItem);
    }
    getInternalItem(userItem) {
        return this.userToInternalMap.get(userItem);
    }
    /** EXPANDED RELATED */
    registerExpandedItemsMap(expandedItemsMap) {
        this.userExpandedItemsMap$$.next(expandedItemsMap);
    }
    registerExpandedGroupsMap(expandedGroupsMap) {
        this.expandedGroupsMap$$.next(expandedGroupsMap);
    }
    getGroupIsExpanded(groupId) {
        return Boolean(this.expandedGroupsMap$$.value.get(groupId));
    }
    handleExpandedChanged(event) {
        const userItem = this.getUserItem(event.item);
        this.userExpandedItemsMap$$.value.set(userItem, event.isExpanded);
        this.itemExpandedChangedEvent$.next({
            item: userItem,
            isExpanded: event.isExpanded,
        });
        this.expandedItemsMapChangedEvent$.next(this.userExpandedItemsMap$$.value);
    }
    handleGroupExpandedChanged(event) {
        this.expandedGroupsMap$$.value.set(event.groupId, event.isExpanded);
        this.groupExpandedChangedEvent$.next(event);
        this.expandedGroupsMapChangedEvent$.next(this.expandedGroupsMap$$.value);
    }
    clearExpandedItemsMap(groupId) {
        if (groupId) {
            const groupItems = this.internalItemsState$$.value[groupId];
            traverseAllDeep(groupItems, internalItem => {
                const userItem = this.getUserItem(internalItem);
                this.internalExpandedItemsMap.delete(internalItem);
                this.userExpandedItemsMap$$.value.delete(userItem);
            });
        }
        else {
            this.internalExpandedItemsMap.clear();
            this.userExpandedItemsMap$$.value.clear();
        }
        this.expandedItemsMapChangedEvent$.next(this.userExpandedItemsMap$$.value);
    }
    /** ACTIVE RELATED */
    setActiveItem(userItem) {
        const internal = this.getInternalItem(userItem);
        if (internal !== this.activeItem$$.value) {
            this.activeItem$$.next(internal);
        }
    }
    handleActiveItemChange(internalItem) {
        if (internalItem.isRubricator)
            return;
        const breadcrumbs = internalItem.breadcrumbs ?? [];
        const userItem = breadcrumbs[breadcrumbs.length - 1];
        this.activeItem$$.next(internalItem);
        this.activeItemChangedEvent$.next(userItem);
        this.breadCrumbsChangedEvent$.next(internalItem.breadcrumbs ?? []);
    }
    /** CONFIGURATION RELATED */
    setSettingsConfiguration(settingsConfig) {
        this.settingsConfig$$.next({ ...DEFAULT_SETTINGS, ...settingsConfig });
    }
    setSearchConfig(config) {
        this.searchConfig$$.next({ ...DEFAULT_SEARCH_CONFIG, ...config });
    }
    setToolbarConfig(config) {
        this.toolbarConfig$$.next({ ...DEFAULT_TOOLBAR_CONFIG, ...config, folderMode: false });
        this.toolbarIsNotEmpty = Object.values(this.toolbarConfig).some(Boolean);
    }
    setItemKeyName(itemKeyName) {
        this.itemKeyName = itemKeyName;
    }
    setEmptySearchResultMessageConfig(config) {
        this.emptySearchResultMessageConfig$$.next(config);
    }
    setEmptyDataMessageConfig(config) {
        this.emptyDataMessageConfig$$.next(config);
    }
    /** PRIVATE */
    fillInternalExpandedItemsMapWithUser() {
        const entries = this.userExpandedItemsMap$$.value.entries();
        for (const [userItem, isExpanded] of entries) {
            const internalItem = this.getInternalItem(userItem);
            this.internalExpandedItemsMap.set(internalItem, isExpanded);
        }
    }
    mapToInternalItemsAndUpdateSetMap(items, groupId) {
        return items.map(item => this.mapWithMetadataAndUpdateMaps(item, groupId, null));
    }
    mapWithMetadataAndUpdateMaps(item, groupId, parent) {
        if (!item.children) {
            const internal = {
                ...item,
                original: item,
                groupId,
                parent,
                breadcrumbs: parent ? [...(parent.breadcrumbs ?? []), item] : [item],
                children: undefined,
            };
            this.internalToUserMap.set(internal, item);
            this.userToInternalMap.set(item, internal);
            return internal;
        }
        const internalWithMappedChildren = {
            ...item,
            original: item,
            groupId,
            parent,
            breadcrumbs: parent ? [...(parent.breadcrumbs ?? []), item] : [item],
            children: [],
        };
        internalWithMappedChildren.children = item.children.map(child => this.mapWithMetadataAndUpdateMaps(child, groupId, internalWithMappedChildren));
        this.internalToUserMap.set(internalWithMappedChildren, item);
        this.userToInternalMap.set(item, internalWithMappedChildren);
        return internalWithMappedChildren;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmNavigationMenuService, deps: [{ token: PRIZM_NAVIGATION_MENU_SEARCH_CONFIG }, { token: PRIZM_NAVIGATION_MENU_SETTINGS_CONFIG }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmNavigationMenuService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmNavigationMenuService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_NAVIGATION_MENU_SEARCH_CONFIG]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_NAVIGATION_MENU_SETTINGS_CONFIG]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpem0tbmF2aWdhdGlvbi1tZW51LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24tbWVudS9zZXJ2aWNlcy9wcml6bS1uYXZpZ2F0aW9uLW1lbnUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2pGLE9BQU8sRUFDTCw0QkFBNEIsRUFDNUIscUJBQXFCLEVBQ3JCLGdCQUFnQixFQUNoQixzQkFBc0IsR0FDdkIsTUFBTSxhQUFhLENBQUM7QUFTckIsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQU92RyxNQUFNLE9BQU8sMEJBQTBCO0lBYXJDLElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQWlDRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFrQ0QsWUFFVSxpQkFBa0QsRUFFbEQsbUJBQXNEO1FBRnRELHNCQUFpQixHQUFqQixpQkFBaUIs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dXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyB0cmF2ZXJzZUFsbERlZXAgfSBmcm9tICcuLi9oZWxwZXJzL3ByaXptLW5hdmlnYXRpb24tbWVudS1pdGVtcy1oZWxwZXJzJztcbmltcG9ydCB7XG4gIERFRkFVTFRfRU1QVFlfTUVTU0FHRV9DT05GSUcsXG4gIERFRkFVTFRfU0VBUkNIX0NPTkZJRyxcbiAgREVGQVVMVF9TRVRUSU5HUyxcbiAgREVGQVVMVF9UT09MQkFSX0NPTkZJRyxcbn0gZnJvbSAnLi4vZGVmYXVsdHMnO1xuaW1wb3J0IHtcbiAgSW50ZXJuYWxQcml6bU5hdmlnYXRpb25NZW51SXRlbSxcbiAgUHJpem1OYXZpZ2F0aW9uTWVudUVtcHR5TWVzc2FnZUNvbmZpZyxcbiAgUHJpem1OYXZpZ2F0aW9uTWVudUl0ZW0sXG4gIFByaXptTmF2aWdhdGlvbk1lbnVTZWFyY2hDb25maWcsXG4gIFByaXptTmF2aWdhdGlvbk1lbnVTZXR0aW5nc0NvbmZpZyxcbiAgUHJpem1OYXZpZ2F0aW9uTWVudVRvb2xiYXJDb25maWcsXG59IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUFJJWk1fTkFWSUdBVElPTl9NRU5VX1NFQVJDSF9DT05GSUcsIFBSSVpNX05BVklHQVRJT05fTUVOVV9TRVRUSU5HU19DT05GSUcgfSBmcm9tICcuLi90b2tlbnMnO1xuXG5pbnRlcmZhY2UgSW50ZXJuYWxJdGVtc1N0YXRlPFVzZXJJdGVtPiB7XG4gIFtncm91cElkOiBzdHJpbmddOiBJbnRlcm5hbFByaXptTmF2aWdhdGlvbk1lbnVJdGVtPFVzZXJJdGVtPltdO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJpem1OYXZpZ2F0aW9uTWVudVNlcnZpY2U8XG4gIFVzZXJJdGVtIGV4dGVuZHMgT21pdDxQcml6bU5hdmlnYXRpb25NZW51SXRlbSwgJ2NoaWxkcmVuJz4gJiB7IGNoaWxkcmVuPzogVXNlckl0ZW1bXSB9XG4+IHtcbiAgcHJpdmF0ZSBpbnRlcm5hbEl0ZW1zU3RhdGUkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SW50ZXJuYWxJdGVtc1N0YXRlPFVzZXJJdGVtPj4oe30pO1xuXG4gIHByaXZhdGUgaW50ZXJuYWxUb1VzZXJNYXAgPSBuZXcgTWFwPEludGVybmFsUHJpem1OYXZpZ2F0aW9uTWVudUl0ZW08VXNlckl0ZW0+LCBVc2VySXRlbT4oKTtcbiAgcHJpdmF0ZSB1c2VyVG9JbnRlcm5hbE1hcCA9IG5ldyBNYXA8VXNlckl0ZW0sIEludGVybmFsUHJpem1OYXZpZ2F0aW9uTWVudUl0ZW08VXNlckl0ZW0+PigpO1xuXG4gIHByaXZhdGUgZXhwYW5kZWRHcm91cHNNYXAkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TWFwPHN0cmluZywgYm9vbGVhbj4+KG5ldyBNYXAoKSk7XG4gIHByaXZhdGUgdXNlckV4cGFuZGVkSXRlbXNNYXAkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TWFwPFVzZXJJdGVtLCBib29sZWFuPj4obmV3IE1hcCgpKTtcblxuICBwcml2YXRlIGFjdGl2ZUl0ZW0kJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SW50ZXJuYWxQcml6bU5hdmlnYXRpb25NZW51SXRlbTxVc2VySXRlbT4gfCBudWxsPihudWxsKTtcblxuICBnZXQgYWN0aXZlSXRlbSgpOiBJbnRlcm5hbFByaXptTmF2aWdhdGlvbk1lbnVJdGVtPFVzZXJJdGVtPiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUl0ZW0kJC52YWx1ZTtcbiAgfVxuXG4gIGFjdGl2ZUl0ZW0kOiBPYnNlcnZhYmxlPEludGVybmFsUHJpem1OYXZpZ2F0aW9uTWVudUl0ZW08VXNlckl0ZW0+IHwgbnVsbD4gPVxuICAgIHRoaXMuYWN0aXZlSXRlbSQkLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGludGVybmFsRXhwYW5kZWRJdGVtc01hcDogTWFwPEludGVybmFsUHJpem1OYXZpZ2F0aW9uTWVudUl0ZW08VXNlckl0ZW0+LCBib29sZWFuPiA9IG5ldyBNYXAoKTtcblxuICBpdGVtS2V5TmFtZSA9ICdpZCc7XG5cbiAgLyoqIENPTkZJR1VSQVRJT04gKi9cblxuICBwcml2YXRlIHNlYXJjaENvbmZpZyQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQcml6bU5hdmlnYXRpb25NZW51U2VhcmNoQ29uZmlnPih7XG4gICAgLi4uREVGQVVMVF9TRUFSQ0hfQ09ORklHLFxuICAgIC4uLnRoaXMuc2VhcmNoQ29uZmlnVG9rZW4sXG4gIH0pO1xuXG4gIHByaXZhdGUgdG9vbGJhckNvbmZpZyQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQcml6bU5hdmlnYXRpb25NZW51VG9vbGJhckNvbmZpZz4oREVGQVVMVF9UT09MQkFSX0NPTkZJRyk7XG5cbiAgcHJpdmF0ZSBzZXR0aW5nc0NvbmZpZyQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQcml6bU5hdmlnYXRpb25NZW51U2V0dGluZ3NDb25maWc+KHtcbiAgICAuLi5ERUZBVUxUX1NFVFRJTkdTLFxuICAgIC4uLnRoaXMuc2V0dGluZ3NDb25maWdUb2tlbixcbiAgICBzZWxlY3Rpb25Nb2RlOiAnc2luZ2xlJyxcbiAgfSk7XG5cbiAgcHJpdmF0ZSBlbXB0eVNlYXJjaFJlc3VsdE1lc3NhZ2VDb25maWckJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UHJpem1OYXZpZ2F0aW9uTWVudUVtcHR5TWVzc2FnZUNvbmZpZz4oXG4gICAgREVGQVVMVF9FTVBUWV9NRVNTQUdFX0NPTkZJR1xuICApO1xuXG4gIHByaXZhdGUgZW1wdHlEYXRhTWVzc2FnZUNvbmZpZyQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQcml6bU5hdmlnYXRpb25NZW51RW1wdHlNZXNzYWdlQ29uZmlnPih7XG4gICAgdGl0bGU6ICcnLFxuICAgIHN1YnRpdGxlOiAnJyxcbiAgfSk7XG5cbiAgZ2V0IHNldHRpbmdzQ29uZmlnKCk6IFByaXptTmF2aWdhdGlvbk1lbnVTZXR0aW5nc0NvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3NDb25maWckJC52YWx1ZTtcbiAgfVxuXG4gIGdldCBzZWFyY2hDb25maWcoKTogUHJpem1OYXZpZ2F0aW9uTWVudVNlYXJjaENvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoQ29uZmlnJCQudmFsdWU7XG4gIH1cblxuICBnZXQgdG9vbGJhckNvbmZpZygpOiBQcml6bU5hdmlnYXRpb25NZW51VG9vbGJhckNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMudG9vbGJhckNvbmZpZyQkLnZhbHVlO1xuICB9XG5cbiAgc2VhcmNoQ29uZmlnJDogT2JzZXJ2YWJsZTxQcml6bU5hdmlnYXRpb25NZW51U2VhcmNoQ29uZmlnPiA9IHRoaXMuc2VhcmNoQ29uZmlnJCQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgdG9vbGJhckNvbmZpZyQ6IE9ic2VydmFibGU8UHJpem1OYXZpZ2F0aW9uTWVudVRvb2xiYXJDb25maWc+ID0gdGhpcy50b29sYmFyQ29uZmlnJCQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgZW1wdHlTZWFyY2hSZXN1bHRNZXNzYWdlQ29uZmlnJDogT2JzZXJ2YWJsZTxQcml6bU5hdmlnYXRpb25NZW51RW1wdHlNZXNzYWdlQ29uZmlnPiA9XG4gICAgdGhpcy5lbXB0eVNlYXJjaFJlc3VsdE1lc3NhZ2VDb25maWckJC5hc09ic2VydmFibGUoKTtcblxuICBlbXB0eURhdGFNZXNzYWdlQ29uZmlnJDogT2JzZXJ2YWJsZTxQcml6bU5hdmlnYXRpb25NZW51RW1wdHlNZXNzYWdlQ29uZmlnPiA9XG4gICAgdGhpcy5lbXB0eURhdGFNZXNzYWdlQ29uZmlnJCQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgdG9vbGJhcklzTm90RW1wdHkhOiBib29sZWFuO1xuXG4gIC8qKiBGT1JXQVJEIEVWRU5UUyAqL1xuXG4gIGFjdGl2ZUl0ZW1DaGFuZ2VkRXZlbnQkID0gbmV3IFN1YmplY3Q8VXNlckl0ZW0+KCk7XG5cbiAgYnJlYWRDcnVtYnNDaGFuZ2VkRXZlbnQkID0gbmV3IFN1YmplY3Q8VXNlckl0ZW1bXT4oKTtcblxuICBleHBhbmRlZEl0ZW1zTWFwQ2hhbmdlZEV2ZW50JCA9IG5ldyBTdWJqZWN0PE1hcDxVc2VySXRlbSwgYm9vbGVhbj4+KCk7XG5cbiAgZXhwYW5kZWRHcm91cHNNYXBDaGFuZ2VkRXZlbnQkID0gbmV3IFN1YmplY3Q8TWFwPHN0cmluZywgYm9vbGVhbj4+KCk7XG5cbiAgaXRlbUV4cGFuZGVkQ2hhbmdlZEV2ZW50JCA9IG5ldyBTdWJqZWN0PHtcbiAgICBpdGVtOiBVc2VySXRlbTtcbiAgICBpc0V4cGFuZGVkOiBib29sZWFuO1xuICB9PigpO1xuXG4gIGdyb3VwRXhwYW5kZWRDaGFuZ2VkRXZlbnQkID0gbmV3IFN1YmplY3Q8e1xuICAgIGdyb3VwSWQ6IHN0cmluZztcbiAgICBpc0V4cGFuZGVkOiBib29sZWFuO1xuICB9PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUFJJWk1fTkFWSUdBVElPTl9NRU5VX1NFQVJDSF9DT05GSUcpXG4gICAgcHJpdmF0ZSBzZWFyY2hDb25maWdUb2tlbjogUHJpem1OYXZpZ2F0aW9uTWVudVNlYXJjaENvbmZpZyxcbiAgICBASW5qZWN0KFBSSVpNX05BVklHQVRJT05fTUVOVV9TRVRUSU5HU19DT05GSUcpXG4gICAgcHJpdmF0ZSBzZXR0aW5nc0NvbmZpZ1Rva2VuOiBQcml6bU5hdmlnYXRpb25NZW51U2V0dGluZ3NDb25maWdcbiAgKSB7fVxuXG4gIC8qKiBJVEVNUyBSRUxBVEVEICovXG5cbiAgcHVibGljIHJlZ2lzdGVyR3JvdXBJdGVtcyhncm91cElkOiBzdHJpbmcsIGl0ZW1zOiBVc2VySXRlbVtdKTogdm9pZCB7XG4gICAgY29uc3QgaW50ZXJuYWxJdGVtcyA9IHRoaXMubWFwVG9JbnRlcm5hbEl0ZW1zQW5kVXBkYXRlU2V0TWFwKGl0ZW1zLCBncm91cElkKTtcblxuICAgIHRoaXMuaW50ZXJuYWxJdGVtc1N0YXRlJCQubmV4dCh7XG4gICAgICAuLi50aGlzLmludGVybmFsSXRlbXNTdGF0ZSQkLnZhbHVlLFxuICAgICAgW2dyb3VwSWRdOiBpbnRlcm5hbEl0ZW1zLFxuICAgIH0pO1xuXG4gICAgdGhpcy5maWxsSW50ZXJuYWxFeHBhbmRlZEl0ZW1zTWFwV2l0aFVzZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRHcm91cEl0ZW1zKGdyb3VwSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SW50ZXJuYWxQcml6bU5hdmlnYXRpb25NZW51SXRlbTxVc2VySXRlbT5bXT4ge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsSXRlbXNTdGF0ZSQkLnBpcGUobWFwKHMgPT4gc1tncm91cElkXSA/PyBbXSkpO1xuICB9XG5cbiAgcHVibGljIGdldFVzZXJJdGVtKGludGVybmFsSXRlbTogSW50ZXJuYWxQcml6bU5hdmlnYXRpb25NZW51SXRlbTxVc2VySXRlbT4pOiBVc2VySXRlbSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxUb1VzZXJNYXAuZ2V0KGludGVybmFsSXRlbSkgYXMgVXNlckl0ZW07XG4gIH1cblxuICBwdWJsaWMgZ2V0SW50ZXJuYWxJdGVtKHVzZXJJdGVtOiBVc2VySXRlbSk6IEludGVybmFsUHJpem1OYXZpZ2F0aW9uTWVudUl0ZW08VXNlckl0ZW0+IHtcbiAgICByZXR1cm4gdGhpcy51c2VyVG9JbnRlcm5hbE1hcC5nZXQodXNlckl0ZW0pIGFzIEludGVybmFsUHJpem1OYXZpZ2F0aW9uTWVudUl0ZW08VXNlckl0ZW0+O1xuICB9XG5cbiAgLyoqIEVYUEFOREVEIFJFTEFURUQgKi9cblxuICBwdWJsaWMgcmVnaXN0ZXJFeHBhbmRlZEl0ZW1zTWFwKGV4cGFuZGVkSXRlbXNNYXA6IE1hcDxVc2VySXRlbSwgYm9vbGVhbj4pOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJFeHBhbmRlZEl0ZW1zTWFwJCQubmV4dChleHBhbmRlZEl0ZW1zTWFwKTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3RlckV4cGFuZGVkR3JvdXBzTWFwKGV4cGFuZGVkR3JvdXBzTWFwOiBNYXA8c3RyaW5nLCBib29sZWFuPik6IHZvaWQge1xuICAgIHRoaXMuZXhwYW5kZWRHcm91cHNNYXAkJC5uZXh0KGV4cGFuZGVkR3JvdXBzTWFwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRHcm91cElzRXhwYW5kZWQoZ3JvdXBJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5leHBhbmRlZEdyb3Vwc01hcCQkLnZhbHVlLmdldChncm91cElkKSk7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlRXhwYW5kZWRDaGFuZ2VkKGV2ZW50OiB7XG4gICAgaXRlbTogSW50ZXJuYWxQcml6bU5hdmlnYXRpb25NZW51SXRlbTxVc2VySXRlbT47XG4gICAgaXNFeHBhbmRlZDogYm9vbGVhbjtcbiAgfSk6IHZvaWQge1xuICAgIGNvbnN0IHVzZXJJdGVtID0gdGhpcy5nZXRVc2VySXRlbShldmVudC5pdGVtKTtcbiAgICB0aGlzLnVzZXJFeHBhbmRlZEl0ZW1zTWFwJCQudmFsdWUuc2V0KHVzZXJJdGVtLCBldmVudC5pc0V4cGFuZGVkKTtcbiAgICB0aGlzLml0ZW1FeHBhbmRlZENoYW5nZWRFdmVudCQubmV4dCh7XG4gICAgICBpdGVtOiB1c2VySXRlbSxcbiAgICAgIGlzRXhwYW5kZWQ6IGV2ZW50LmlzRXhwYW5kZWQsXG4gICAgfSk7XG4gICAgdGhpcy5leHBhbmRlZEl0ZW1zTWFwQ2hhbmdlZEV2ZW50JC5uZXh0KHRoaXMudXNlckV4cGFuZGVkSXRlbXNNYXAkJC52YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlR3JvdXBFeHBhbmRlZENoYW5nZWQoZXZlbnQ6IHsgZ3JvdXBJZDogc3RyaW5nOyBpc0V4cGFuZGVkOiBib29sZWFuIH0pOiB2b2lkIHtcbiAgICB0aGlzLmV4cGFuZGVkR3JvdXBzTWFwJCQudmFsdWUuc2V0KGV2ZW50Lmdyb3VwSWQsIGV2ZW50LmlzRXhwYW5kZWQpO1xuICAgIHRoaXMuZ3JvdXBFeHBhbmRlZENoYW5nZWRFdmVudCQubmV4dChldmVudCk7XG4gICAgdGhpcy5leHBhbmRlZEdyb3Vwc01hcENoYW5nZWRFdmVudCQubmV4dCh0aGlzLmV4cGFuZGVkR3JvdXBzTWFwJCQudmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyRXhwYW5kZWRJdGVtc01hcChncm91cElkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGdyb3VwSWQpIHtcbiAgICAgIGNvbnN0IGdyb3VwSXRlbXMgPSB0aGlzLmludGVybmFsSXRlbXNTdGF0ZSQkLnZhbHVlW2dyb3VwSWRdO1xuICAgICAgdHJhdmVyc2VBbGxEZWVwKGdyb3VwSXRlbXMsIGludGVybmFsSXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJJdGVtID0gdGhpcy5nZXRVc2VySXRlbShpbnRlcm5hbEl0ZW0pO1xuICAgICAgICB0aGlzLmludGVybmFsRXhwYW5kZWRJdGVtc01hcC5kZWxldGUoaW50ZXJuYWxJdGVtKTtcbiAgICAgICAgdGhpcy51c2VyRXhwYW5kZWRJdGVtc01hcCQkLnZhbHVlLmRlbGV0ZSh1c2VySXRlbSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnRlcm5hbEV4cGFuZGVkSXRlbXNNYXAuY2xlYXIoKTtcbiAgICAgIHRoaXMudXNlckV4cGFuZGVkSXRlbXNNYXAkJC52YWx1ZS5jbGVhcigpO1xuICAgIH1cbiAgICB0aGlzLmV4cGFuZGVkSXRlbXNNYXBDaGFuZ2VkRXZlbnQkLm5leHQodGhpcy51c2VyRXhwYW5kZWRJdGVtc01hcCQkLnZhbHVlKTtcbiAgfVxuXG4gIC8qKiBBQ1RJVkUgUkVMQVRFRCAqL1xuXG4gIHB1YmxpYyBzZXRBY3RpdmVJdGVtKHVzZXJJdGVtOiBVc2VySXRlbSk6IHZvaWQge1xuICAgIGNvbnN0IGludGVybmFsID0gdGhpcy5nZXRJbnRlcm5hbEl0ZW0odXNlckl0ZW0pO1xuICAgIGlmIChpbnRlcm5hbCAhPT0gdGhpcy5hY3RpdmVJdGVtJCQudmFsdWUpIHtcbiAgICAgIHRoaXMuYWN0aXZlSXRlbSQkLm5leHQoaW50ZXJuYWwpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVBY3RpdmVJdGVtQ2hhbmdlKGludGVybmFsSXRlbTogSW50ZXJuYWxQcml6bU5hdmlnYXRpb25NZW51SXRlbTxVc2VySXRlbT4pOiB2b2lkIHtcbiAgICBpZiAoaW50ZXJuYWxJdGVtLmlzUnVicmljYXRvcikgcmV0dXJuO1xuXG4gICAgY29uc3QgYnJlYWRjcnVtYnMgPSBpbnRlcm5hbEl0ZW0uYnJlYWRjcnVtYnMgPz8gW107XG4gICAgY29uc3QgdXNlckl0ZW0gPSBicmVhZGNydW1ic1ticmVhZGNydW1icy5sZW5ndGggLSAxXTtcbiAgICB0aGlzLmFjdGl2ZUl0ZW0kJC5uZXh0KGludGVybmFsSXRlbSk7XG4gICAgdGhpcy5hY3RpdmVJdGVtQ2hhbmdlZEV2ZW50JC5uZXh0KHVzZXJJdGVtKTtcbiAgICB0aGlzLmJyZWFkQ3J1bWJzQ2hhbmdlZEV2ZW50JC5uZXh0KGludGVybmFsSXRlbS5icmVhZGNydW1icyA/PyBbXSk7XG4gIH1cblxuICAvKiogQ09ORklHVVJBVElPTiBSRUxBVEVEICovXG5cbiAgcHVibGljIHNldFNldHRpbmdzQ29uZmlndXJhdGlvbihzZXR0aW5nc0NvbmZpZzogUHJpem1OYXZpZ2F0aW9uTWVudVNldHRpbmdzQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5zZXR0aW5nc0NvbmZpZyQkLm5leHQoeyAuLi5ERUZBVUxUX1NFVFRJTkdTLCAuLi5zZXR0aW5nc0NvbmZpZyB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTZWFyY2hDb25maWcoY29uZmlnOiBQcml6bU5hdmlnYXRpb25NZW51U2VhcmNoQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hDb25maWckJC5uZXh0KHsgLi4uREVGQVVMVF9TRUFSQ0hfQ09ORklHLCAuLi5jb25maWcgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0VG9vbGJhckNvbmZpZyhjb25maWc6IFByaXptTmF2aWdhdGlvbk1lbnVUb29sYmFyQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy50b29sYmFyQ29uZmlnJCQubmV4dCh7IC4uLkRFRkFVTFRfVE9PTEJBUl9DT05GSUcsIC4uLmNvbmZpZywgZm9sZGVyTW9kZTogZmFsc2UgfSk7XG4gICAgdGhpcy50b29sYmFySXNOb3RFbXB0eSA9IE9iamVjdC52YWx1ZXModGhpcy50b29sYmFyQ29uZmlnKS5zb21lKEJvb2xlYW4pO1xuICB9XG5cbiAgcHVibGljIHNldEl0ZW1LZXlOYW1lKGl0ZW1LZXlOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLml0ZW1LZXlOYW1lID0gaXRlbUtleU5hbWU7XG4gIH1cblxuICBwdWJsaWMgc2V0RW1wdHlTZWFyY2hSZXN1bHRNZXNzYWdlQ29uZmlnKGNvbmZpZzogUHJpem1OYXZpZ2F0aW9uTWVudUVtcHR5TWVzc2FnZUNvbmZpZyk6IHZvaWQge1xuICAgIHRoaXMuZW1wdHlTZWFyY2hSZXN1bHRNZXNzYWdlQ29uZmlnJCQubmV4dChjb25maWcpO1xuICB9XG5cbiAgcHVibGljIHNldEVtcHR5RGF0YU1lc3NhZ2VDb25maWcoY29uZmlnOiBQcml6bU5hdmlnYXRpb25NZW51RW1wdHlNZXNzYWdlQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5lbXB0eURhdGFNZXNzYWdlQ29uZmlnJCQubmV4dChjb25maWcpO1xuICB9XG5cbiAgLyoqIFBSSVZBVEUgKi9cblxuICBwcml2YXRlIGZpbGxJbnRlcm5hbEV4cGFuZGVkSXRlbXNNYXBXaXRoVXNlcigpOiB2b2lkIHtcbiAgICBjb25zdCBlbnRyaWVzID0gdGhpcy51c2VyRXhwYW5kZWRJdGVtc01hcCQkLnZhbHVlLmVudHJpZXMoKTtcblxuICAgIGZvciAoY29uc3QgW3VzZXJJdGVtLCBpc0V4cGFuZGVkXSBvZiBlbnRyaWVzKSB7XG4gICAgICBjb25zdCBpbnRlcm5hbEl0ZW0gPSB0aGlzLmdldEludGVybmFsSXRlbSh1c2VySXRlbSk7XG4gICAgICB0aGlzLmludGVybmFsRXhwYW5kZWRJdGVtc01hcC5zZXQoaW50ZXJuYWxJdGVtLCBpc0V4cGFuZGVkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1hcFRvSW50ZXJuYWxJdGVtc0FuZFVwZGF0ZVNldE1hcChcbiAgICBpdGVtczogVXNlckl0ZW1bXSxcbiAgICBncm91cElkOiBzdHJpbmdcbiAgKTogSW50ZXJuYWxQcml6bU5hdmlnYXRpb25NZW51SXRlbTxVc2VySXRlbT5bXSB7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcChpdGVtID0+IHRoaXMubWFwV2l0aE1ldGFkYXRhQW5kVXBkYXRlTWFwcyhpdGVtLCBncm91cElkLCBudWxsKSk7XG4gIH1cblxuICBwcml2YXRlIG1hcFdpdGhNZXRhZGF0YUFuZFVwZGF0ZU1hcHMoXG4gICAgaXRlbTogVXNlckl0ZW0sXG4gICAgZ3JvdXBJZDogc3RyaW5nLFxuICAgIHBhcmVudDogSW50ZXJuYWxQcml6bU5hdmlnYXRpb25NZW51SXRlbTxVc2VySXRlbT4gfCBudWxsXG4gICk6IEludGVybmFsUHJpem1OYXZpZ2F0aW9uTWVudUl0ZW08VXNlckl0ZW0+IHtcbiAgICBpZiAoIWl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgIGNvbnN0IGludGVybmFsOiBJbnRlcm5hbFByaXptTmF2aWdhdGlvbk1lbnVJdGVtPFVzZXJJdGVtPiA9IHtcbiAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgb3JpZ2luYWw6IGl0ZW0sXG4gICAgICAgIGdyb3VwSWQsXG4gICAgICAgIHBhcmVudCxcbiAgICAgICAgYnJlYWRjcnVtYnM6IHBhcmVudCA/IFsuLi4ocGFyZW50LmJyZWFkY3J1bWJzID8/IFtdKSwgaXRlbV0gOiBbaXRlbV0sXG4gICAgICAgIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmludGVybmFsVG9Vc2VyTWFwLnNldChpbnRlcm5hbCwgaXRlbSk7XG4gICAgICB0aGlzLnVzZXJUb0ludGVybmFsTWFwLnNldChpdGVtLCBpbnRlcm5hbCk7XG4gICAgICByZXR1cm4gaW50ZXJuYWw7XG4gICAgfVxuXG4gICAgY29uc3QgaW50ZXJuYWxXaXRoTWFwcGVkQ2hpbGRyZW46IEludGVybmFsUHJpem1OYXZpZ2F0aW9uTWVudUl0ZW08VXNlckl0ZW0+ID0ge1xuICAgICAgLi4uaXRlbSxcbiAgICAgIG9yaWdpbmFsOiBpdGVtLFxuICAgICAgZ3JvdXBJZCxcbiAgICAgIHBhcmVudCxcbiAgICAgIGJyZWFkY3J1bWJzOiBwYXJlbnQgPyBbLi4uKHBhcmVudC5icmVhZGNydW1icyA/PyBbXSksIGl0ZW1dIDogW2l0ZW1dLFxuICAgICAgY2hpbGRyZW46IFtdLFxuICAgIH07XG4gICAgaW50ZXJuYWxXaXRoTWFwcGVkQ2hpbGRyZW4uY2hpbGRyZW4gPSBpdGVtLmNoaWxkcmVuLm1hcChjaGlsZCA9PlxuICAgICAgdGhpcy5tYXBXaXRoTWV0YWRhdGFBbmRVcGRhdGVNYXBzKGNoaWxkLCBncm91cElkLCBpbnRlcm5hbFdpdGhNYXBwZWRDaGlsZHJlbilcbiAgICApO1xuXG4gICAgdGhpcy5pbnRlcm5hbFRvVXNlck1hcC5zZXQoaW50ZXJuYWxXaXRoTWFwcGVkQ2hpbGRyZW4sIGl0ZW0pO1xuICAgIHRoaXMudXNlclRvSW50ZXJuYWxNYXAuc2V0KGl0ZW0sIGludGVybmFsV2l0aE1hcHBlZENoaWxkcmVuKTtcbiAgICByZXR1cm4gaW50ZXJuYWxXaXRoTWFwcGVkQ2hpbGRyZW47XG4gIH1cbn1cbiJdfQ==