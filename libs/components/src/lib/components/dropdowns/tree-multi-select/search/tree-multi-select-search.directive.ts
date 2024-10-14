import { Directive, EventEmitter, inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  first,
  map,
  shareReplay,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { combineLatest, concat, Observable, of, ReplaySubject } from 'rxjs';
import { PrizmDestroyService, PrizmMapSubject } from '@prizm-ui/helpers';
import { prizmI18nInitWithKeys } from '../../../../services/i18n.service';
import { PRIZM_EMPTY_LIST_TEXT, PRIZM_SEARCH_TEXT } from '../../../../tokens/i18n';
import { PrizmTreeMultiSelectItemComponent } from '../item/tree-multi-select-item.component';
import { PrizmTreeSelectGetChildrenDirective } from '../../tree-select/tree-select-get-children.directive';

@Directive({
  selector: '[prizmInputTreeMultiSelectSearch]',
  standalone: true,
  exportAs: 'prizmInputTreeMultiSelectSearch',
  providers: [
    ...prizmI18nInitWithKeys({
      search: PRIZM_SEARCH_TEXT,
      emptyListText: PRIZM_EMPTY_LIST_TEXT,
    }),
  ],
})
export class PrizmTreeMultiSelectSearchDirective<T = any> implements OnInit, OnDestroy {
  @Input() searchable = false;
  @Input() searchMatcher = (search: string, item: T): boolean => search === item;
  @Input() searchMapper = (search: string): Observable<string> => of(search);
  @Input() searchFilter = (search: string) => of(!!search.replace(/[ \n\r\t]+/g, '').length);
  @Input() searchDebounce = 0;
  @Input() searchPlaceholder = '';

  private readonly onSearch$$ = new ReplaySubject<string>(1);
  private readonly destroy = inject(PrizmDestroyService);
  private readonly treeSelectGetChildrenDirective = inject(PrizmTreeSelectGetChildrenDirective);

  protected readonly mapWithItemsVisibleState = new PrizmMapSubject<
    PrizmTreeMultiSelectItemComponent<T>,
    boolean
  >();

  @Output() searched = new EventEmitter<string>();

  private _query = '';
  get query() {
    return this._query;
  }

  public readonly validQuery$ = this.onSearch$$.pipe(switchMap(search => this.searchFilter(search)));

  private readonly _onSearch$ = this.onSearch$$.pipe(
    switchMap(search =>
      this.searchFilter(search).pipe(
        filter(result => {
          if (!result) this.searched.next('');
          return !!result;
        }),
        map(() => search)
      )
    ),
    switchMap(search => this.searchMapper(search)),
    tap(search => {
      this.searched.next(search);
    }),
    shareReplay(1)
  );
  public readonly showedCount$ = this.mapWithItemsVisibleState.value.pipe(
    debounceTime(0),
    map(() =>
      [...this.mapWithItemsVisibleState.values()].reduce((counter, state) => {
        if (state) counter++;
        return counter;
      }, 0)
    )
  );
  public readonly empty$ = this.showedCount$.pipe(map(i => i === 0));
  public hasEmptyList$ = combineLatest([this.validQuery$, this.empty$]).pipe(
    map(result => result.every(Boolean)),
    distinctUntilChanged()
  );

  ngOnInit(): void {
    this._onSearch$.pipe(takeUntil(this.destroy)).subscribe();
  }

  ngOnDestroy(): void {
    this.clear();
  }

  /**
   * @public api
   * */
  public clear() {
    this.clearCounter();
    this.search('');
  }

  /**
   * @public api
   * */
  public search(str: string) {
    this.onSearch$$.next((this._query = str));
  }

  public isSearchedItem(search: string, item: T): boolean {
    return Boolean(this.searchMatcher(search, item));
  }

  public hasSearchedChildren(search: string, item: T): boolean {
    return Boolean(
      this.treeSelectGetChildrenDirective
        .getChildren(item)
        .find(child => this.isSearchedItem(search, child) || this.hasSearchedChildren(search, child))
    );
  }

  public initItemUpdaterOnSearch<T>(el: PrizmTreeMultiSelectItemComponent<T>) {
    el.destroy
      .pipe(
        first(),
        tap(() => this.mapWithItemsVisibleState.delete(el))
      )
      .subscribe();

    const searchedWithCurrentQuery = [
      ...(this.searchFilter(this.query) ? [this.searchMapper(this.query)] : []),
      this.searched,
    ];

    return concat(...searchedWithCurrentQuery).pipe(
      debounceTime(this.searchDebounce),
      filter(search => {
        if (search) return true;
        el.show();
        el.openIfHasSelectedChildren();
        this.mapWithItemsVisibleState.set(el, true);
        return false;
      }),
      tap(search => {
        if (this.isSearchedItem(search, el.treeSelectItemDirective.prizmInputTreeSelectItem)) {
          el.show();
          el.close();
          this.mapWithItemsVisibleState.set(el, true);
          if (this.hasSearchedChildren(search, el.treeSelectItemDirective.prizmInputTreeSelectItem)) {
            el.open();
          }
        } else if (this.hasSearchedChildren(search, el.treeSelectItemDirective.prizmInputTreeSelectItem)) {
          el.show();
          el.open();
          this.mapWithItemsVisibleState.set(el, true);
        } else {
          el.hide();
          el.close();
          this.mapWithItemsVisibleState.set(el, false);
        }
      })
    );
  }

  private clearCounter() {
    this.mapWithItemsVisibleState.clear();
  }
}
