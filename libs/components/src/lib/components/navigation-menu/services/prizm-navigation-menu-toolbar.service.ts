import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, combineLatest } from 'rxjs';
import { ViewMode } from '../interfaces';
import { map } from 'rxjs/operators';

@Injectable()
export class PrizmNavigationMenuToolbarService {
  private searchVisible$$ = new BehaviorSubject<boolean>(false);
  private searchValue$$ = new BehaviorSubject<string>('');
  private viewMode$$ = new BehaviorSubject<ViewMode>('hierarchy');

  searchVisible$: Observable<boolean> = this.searchVisible$$.asObservable();

  searchState$: Observable<{
    enabled: boolean;
    value: string;
  }> = combineLatest([this.searchVisible$$, this.searchValue$$]).pipe(
    map(([enabled, value]) => ({ enabled, value }))
  );

  viewMode$: Observable<ViewMode> = this.viewMode$$.asObservable();

  closeAll$ = new Subject();

  public changeSearchValue(searchValue: string): void {
    this.searchValue$$.next(searchValue);
  }

  public toggleSearch(): void {
    const newValue = !this.searchVisible$$.value;
    this.searchVisible$$.next(newValue);

    if (!newValue) {
      this.searchValue$$.next('');
    }
  }

  public changeViewMode(viewMode: ViewMode): void {
    const newValue = this.viewMode$$.value === viewMode ? 'hierarchy' : viewMode;
    this.viewMode$$.next(newValue);
  }

  public closeAll(): void {
    this.closeAll$.next();
  }
}
