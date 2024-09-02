import { AfterViewInit, Directive, EventEmitter, inject, Input, Output } from '@angular/core';
import { PRIZM_ALL_INDEXES_READY, PRIZM_INDEX_SELECT_FN, PRIZM_SELECTED_INDEX_INITIAL } from './options';
import { PrizmDestroyService } from '../../services/destroy';
import { PrizmSyncParentDirective } from '../parent-sync';
import { of, ReplaySubject, Subject, takeUntil, timer } from 'rxjs';
import { debounceTime, switchMap, tap } from 'rxjs/operators';

@Directive({
  selector: '[prizmSelectedIndex]',
  standalone: true,
  providers: [PrizmDestroyService],
})
export class PrizmSelectedIndexDirective implements AfterViewInit {
  private initial_index =
    inject(PRIZM_SELECTED_INDEX_INITIAL, {
      host: true,
      optional: true,
    }) ?? 0;

  private readonly destroy$ = inject(PrizmDestroyService);
  private readonly allIndexesReady$ = inject(PRIZM_ALL_INDEXES_READY, {
    host: true,
    optional: true,
  });
  private readonly selectAfterViewInit$ = new ReplaySubject<number>();
  @Input()
  get selectedIndex() {
    return this.selectedIndex_;
  }
  set selectedIndex(idx: number) {
    this.selectAfterViewInit(idx);
  }

  private selectedIndex_: number = this.initial_index;
  @Output() selectedIndexChange = new EventEmitter<number>();

  private readonly selector = inject(PRIZM_INDEX_SELECT_FN);
  private readonly syncParentDirective = inject(PrizmSyncParentDirective, {
    host: true,
    optional: true,
  });

  public ngAfterViewInit() {
    // after load all indexes or after timer for safe update index
    const root$ = (this.allIndexesReady$ ?? timer(50)) as Subject<void>;
    root$
      .pipe(
        debounceTime(0),
        switchMap(() => this.selectAfterViewInit$),
        tap(idx => this.select(idx)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public selectAfterViewInit(idx: number) {
    this.selectAfterViewInit$.next(idx);
  }

  public select(idx: number) {
    if (!this.selector(idx)) {
      console.error('Can not select idx', idx);
      return false;
    }
    this.setIndex(idx);
    return true;
  }

  public setIndex(idx: number) {
    this.selectedIndexChange.emit((this.selectedIndex_ = idx));
    this.syncParentDirective?.sync();
  }
}
