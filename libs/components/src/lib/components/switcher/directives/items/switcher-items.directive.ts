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

          items
            .filter(i => !i.hide)
            .forEach((item, idx) => {
              const projectableNodes: Node[][] = [];

              if (item.title) {
                projectableNodes.push([document.createTextNode(item.title.toString())]);
              }

              const cmp = viewRef.createComponent(PrizmSwitcherItemComponent, {
                injector: this.injector,
                index: idx,
                projectableNodes,
              });
              if (item.appearanceType) cmp.setInput('appearanceType', item.appearanceType);
              if (item.appearance) {
                cmp.setInput('appearance', item.appearance);
              }
              if (item.icon) cmp.setInput('icon', item.icon);
              if (item.disabled) cmp.setInput('disabled', item.disabled);
              if (item.hint?.value) cmp.setInput('hint', item.hint.value);

              if (projectableNodes?.length) cmp.changeDetectorRef.detectChanges();
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
