import { Injectable } from '@angular/core';
import { INavigationTree } from '../navigation.interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ExpandedNavigationItemService {
  public itemsState$: BehaviorSubject<INavigationTree[] | null> = new BehaviorSubject<
    INavigationTree[] | null
  >(null);

  public set itemsState(items: INavigationTree[] | null) {
    this.itemsState$.next(items);
  }

  public get itemsState(): INavigationTree[] | null {
    return this.itemsState$.getValue();
  }

  public updateExpanded(item: INavigationTree, isExpanded: boolean) {
    item.isExpanded = isExpanded;
    this.itemsState$.next(this.itemsState);
  }
}
