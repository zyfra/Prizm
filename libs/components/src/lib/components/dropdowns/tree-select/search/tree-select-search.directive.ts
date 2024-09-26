import { Directive, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { debounceTime, filter, map, shareReplay, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filterTruthy, PrizmDestroyService } from '@prizm-ui/helpers';
import { PRIZM_SEARCH_TEXT, prizmI18nInitWithKey, PrizmTreeSelectItemComponent } from '@prizm-ui/components';
import { PrizmTreeSelectSelectedDirective } from '../tree-select-selected.directive';
import { PrizmTreeSelectGetChildrenDirective } from '../tree-select-get-children.directive';

@Directive({
  selector: '[prizmInputTreeSelectSearch]',
  standalone: true,
  exportAs: 'prizmInputTreeSelectSearch',
  providers: [...prizmI18nInitWithKey(PRIZM_SEARCH_TEXT, 'search')],
})
export class PrizmTreeSelectSearchDirective<T = any> implements OnInit {
  @Input() searchable = false;
  @Input() searchMatcher = (search: string, item: T): boolean => search === item;
  @Input() searchMapper = (search: string): Observable<string> => of(search);
  @Input() searchFilter = (search: string) => of(search.replace(/[ \n\r\t]+/g, ''));
  @Input() searchDebounce = 50;

  private readonly onSearch$$ = new ReplaySubject<string>(1);
  private readonly destroy = inject(PrizmDestroyService);
  public readonly searchLabelTranslation$ = inject(PRIZM_SEARCH_TEXT);
  private readonly treeSelectSelectedDirective = inject(PrizmTreeSelectSelectedDirective);
  private readonly treeSelectGetChildrenDirective = inject(PrizmTreeSelectGetChildrenDirective);

  @Output() searched = new EventEmitter<string>();

  private _query = '';
  get query() {
    return this._query;
  }
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

  ngOnInit(): void {
    this._onSearch$.pipe(takeUntil(this.destroy)).subscribe();
  }

  /**
   * @public api
   * */
  public clear() {
    this.onSearch$$.next((this._query = ''));
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
      this.treeSelectGetChildrenDirective.getChildren(item).find(child => this.isSearchedItem(search, child))
    );
  }

  public initItemUpdaterOnSearch<T>(el: PrizmTreeSelectItemComponent<T>) {
    return this.searched.pipe(
      debounceTime(this.searchDebounce),
      filter(search => {
        if (search) return true;
        el.show();
        el.openIfHasSelectedChildren();
        return false;
      }),
      tap(search => {
        if (this.isSearchedItem(search, el.treeSelectItemDirective.prizmInputTreeSelectItem)) {
          el.show();
          el.close();
        } else if (this.hasSearchedChildren(search, el.treeSelectItemDirective.prizmInputTreeSelectItem)) {
          el.show();
          el.open();
        } else {
          el.hide();
          el.close();
        }
      })
    );
  }
}
