import { AfterViewInit, Directive, inject, Injector, Input } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { PrizmSwitcherItem } from '../../switcher.interface';
import { SWITCHER_VIEW_CONTAINER } from '../../swithcer.const';
import { PrizmSwitcherItemComponent } from '../../components/switcher-item/switcher-item.component';
import { takeUntil, tap } from 'rxjs/operators';
import { filterTruthy, PrizmDestroyService } from '@prizm-ui/helpers';

@Directive({
  selector: '[prizmSwitcherItems]',
  standalone: true,
  providers: [PrizmDestroyService],
})
export class PrizmSwitcherItemsDirective implements AfterViewInit {
  private readonly destroy$ = inject(PrizmDestroyService);
  private readonly injector = inject(Injector);
  private readonly viewRef$$ = inject(SWITCHER_VIEW_CONTAINER);
  ngAfterViewInit(): void {
    combineLatest([this.switchers$$, this.viewRef$$.pipe(filterTruthy())])
      .pipe(
        tap(([items, viewRef]) => {
          viewRef.clear();
          items.forEach((item, idx) => {
            const cmp = viewRef.createComponent(PrizmSwitcherItemComponent, {
              injector: this.injector,
              index: idx,
            });
            cmp.setInput('type', 'inner');
            cmp.setInput('data', item);
            cmp.setInput('isActive', true);
            cmp.setInput('fullWidth', false);
          });
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
  public readonly switchers$$: BehaviorSubject<PrizmSwitcherItem[]> = new BehaviorSubject<
    PrizmSwitcherItem[]
  >([]);

  @Input()
  get switchers(): PrizmSwitcherItem[] {
    return this.switchers$$.value;
  }
  public set switchers(value: PrizmSwitcherItem[]) {
    if (value) this.switchers$$.next(value);
  }
}
