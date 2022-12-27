import { Injectable } from '@angular/core';
import { INavigationTree } from '../navigation.interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ActiveNavigationItemService {
  public activeItem$: BehaviorSubject<INavigationTree | null> = new BehaviorSubject<INavigationTree | null>(
    null
  );

  public set activeItem(item: INavigationTree | null) {
    this.activeItem$.next(item);
  }

  public get activeItem(): INavigationTree | null {
    return this.activeItem$.getValue();
  }
}
