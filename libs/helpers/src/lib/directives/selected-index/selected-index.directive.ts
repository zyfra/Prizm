import { Directive, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, combineLatest, distinctUntilChanged, of, takeUntil } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PRIZM_SELECTED_INDEX_INITIAL, PRIZM_SELECTED_INDEX_ITEMS } from './options';
import { PrizmDestroyService } from '../../services/destroy';
import { PrizmSyncParentDirective } from '../parent-sync';

@Directive({
  selector: '[prizmSelectedIndex]',
  standalone: true,
  providers: [PrizmDestroyService],
})
export class PrizmSelectedIndexDirective implements OnInit {
  @Input()
  get selectedIndex() {
    return this.selectedIndex$$.value;
  }
  set selectedIndex(idx: number) {
    this.selectedIndex$$.next(idx);
  }

  @Output() selectedIndexChange = new EventEmitter<number>();

  private readonly destroy$$ = inject(PrizmDestroyService);
  private readonly syncParentDirective = inject(PrizmSyncParentDirective, {
    host: true,
    optional: true,
  });
  private readonly items$$ =
    inject(PRIZM_SELECTED_INDEX_ITEMS, {
      optional: true,
      host: true,
    }) ?? of(null);

  private initial_index =
    inject(PRIZM_SELECTED_INDEX_INITIAL, {
      host: true,
      optional: true,
    }) ?? 0;
  public selectedIndex$$ = new BehaviorSubject(this.initial_index);

  public ngOnInit() {
    combineLatest([this.items$$, this.selectedIndex$$.pipe(distinctUntilChanged())])
      .pipe(
        map(([items, selected]) => {
          if (!items?.length) return selected;
          if (selected < items.length - 1) {
            selected = 0;
          } else if (selected > items.length - 1) {
            selected = items.length - 1;
          }
          return selected;
        }),
        tap(correctedSelected => {
          this.selectedIndexChange.emit((this.selectedIndex = correctedSelected));
          this.syncParentDirective?.sync();
        }),
        takeUntil(this.destroy$$)
      )
      .subscribe();
  }
}
