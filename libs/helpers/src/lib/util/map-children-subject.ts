import { PrizmMapSubject } from './map-subject';
import { prizmGenerateId } from './uuid';
import { PrizmIdentityMatcher } from '../types/matcher';

export type PrizmChildrenGetter<T> = (item: T) => T[];

export type PrizmMapChildrenSubject<T> = {
  item: T;
  parent: PrizmMapChildrenSubject<T> | null;
  level: number;
};
export class PrizmMapWithChildrenSubject<T extends Record<string, unknown>> {
  private readonly store = new PrizmMapSubject<string, PrizmMapChildrenSubject<T>>();

  constructor(
    private readonly identityMatcher: PrizmIdentityMatcher<T>,
    private readonly getChildren: PrizmChildrenGetter<T>
  ) {}

  public get(item: T) {
    return this.getEntity(item)?.[1] ?? null;
  }

  public getEntity(item: T) {
    return [...this.store.entries()].find(([, i]) => this.identityMatcher(i.item, item)) ?? null;
  }

  public add(
    item: T,
    {
      parentItem,
    }: {
      parentItem?: T;
    }
  ) {
    if (this.has(item)) return false;

    const parent = parentItem && this.get(parentItem);

    if (parentItem && !parent) return false;

    const storedItem: PrizmMapChildrenSubject<T> = {
      item,
      level: parent ? parent?.level + 1 : 0,
      parent: parent ?? null,
    };

    this.store.set(prizmGenerateId(), storedItem);

    this.getChildren(item)?.forEach(child =>
      this.add(child, {
        parentItem: item,
      })
    );

    return true;
  }

  public remove(item: T) {
    const storedItem = this.getEntity(item);

    if (!storedItem) return false;

    this.store.delete(storedItem[0]);

    return true;
  }

  public has(item: T) {
    return (
      [...this.store.values()].findIndex(storedItem => this.identityMatcher(storedItem.item, item)) !== -1
    );
  }
}
