import { TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { PzmContextWithImplicit } from '../../../types';

import { PzmTreeItemComponent } from '../components/tree-item/tree-item.component';

export interface PzmTreeItemContext extends PzmContextWithImplicit<PzmTreeItemComponent> {
    readonly template: TemplateRef<Record<string, unknown>>;
}

export interface PzmTreeContext<T> extends PzmContextWithImplicit<T> {
    readonly node: PzmTreeItemComponent;
}

export interface PzmTreeController {
    isExpanded(item: PzmTreeItemComponent): boolean;
    toggle(item: PzmTreeItemComponent): void;
}

export interface PzmTreeAccessor<T> {
    register(item: PzmTreeItemComponent, value: T): void;
    unregister(item: PzmTreeItemComponent): void;
}

export interface PzmTreeLoader<T> {
    loadChildren(item: T): Observable<T[]>;
    hasChildren(item: T): boolean;
}
