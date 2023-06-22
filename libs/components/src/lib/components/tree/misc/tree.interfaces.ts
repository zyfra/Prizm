import { TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmContextWithImplicit } from '../../../types';

import { PrizmTreeItemComponent } from '../components/tree-item/tree-item.component';

export interface PrizmTreeItemContext extends PrizmContextWithImplicit<PrizmTreeItemComponent> {
  readonly template: TemplateRef<Record<string, unknown>>;
}

export interface PrizmTreeContext<T> extends PrizmContextWithImplicit<T> {
  readonly node: PrizmTreeItemComponent;
}

export interface PrizmTreeController {
  isExpanded(item: PrizmTreeItemComponent): boolean;
  toggle(item: PrizmTreeItemComponent): void;
}

export interface PrizmTreeAccessor<T> {
  register(item: PrizmTreeItemComponent, value: T): void;
  unregister(item: PrizmTreeItemComponent): void;
}

export interface PrizmTreeLoader<T> {
  loadChildren(item: T): Observable<T[]>;
  hasChildren(item: T): boolean;
}
