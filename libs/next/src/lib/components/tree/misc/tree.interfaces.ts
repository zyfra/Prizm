import { TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { PzmContextWithImplicit } from '../../../types';

import { ZuiTreeItemComponent } from '../components/tree-item/tree-item.component';

export interface ZuiTreeItemContext extends PzmContextWithImplicit<ZuiTreeItemComponent> {
    readonly template: TemplateRef<Record<string, unknown>>;
}

export interface ZuiTreeContext<T> extends PzmContextWithImplicit<T> {
    readonly node: ZuiTreeItemComponent;
}

export interface ZuiTreeController {
    isExpanded(item: ZuiTreeItemComponent): boolean;
    toggle(item: ZuiTreeItemComponent): void;
}

export interface ZuiTreeAccessor<T> {
    register(item: ZuiTreeItemComponent, value: T): void;
    unregister(item: ZuiTreeItemComponent): void;
}

export interface ZuiTreeLoader<T> {
    loadChildren(item: T): Observable<T[]>;
    hasChildren(item: T): boolean;
}
