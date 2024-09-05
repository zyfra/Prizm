import { AfterViewInit, Directive, inject, Injector, Input, Renderer2 } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { PrizmSwitcherItem } from '../../switcher.interface';
import { SWITCHER_VIEW_CONTAINER } from '../../swithcer.const';
import { PrizmSwitcherItemComponent } from '../../components/switcher-item/switcher-item.component';
import { takeUntil, tap } from 'rxjs/operators';
import { filterTruthy, PrizmDestroyService, PrizmSyncParentDirective } from '@prizm-ui/helpers';

@Directive({
  selector: '[prizmSwitcherItems]',
  standalone: true,
  providers: [PrizmDestroyService],
})
export class PrizmSwitcherItemsDirective implements AfterViewInit {
  private readonly destroy$ = inject(PrizmDestroyService);
  private readonly injector = inject(Injector);
  private readonly renderer2 = inject(Renderer2);
  private readonly prizmSyncParentDirective = inject(PrizmSyncParentDirective);
  private readonly viewRef$$ = inject(SWITCHER_VIEW_CONTAINER);
  ngAfterViewInit(): void {
    combineLatest([this.switchers$$, this.viewRef$$.pipe(filterTruthy())])
      .pipe(
        tap(([items, viewRef]) => {
          viewRef.clear();

          // TODO add identity matcher for update only changed items
          items.forEach((item, idx) => {
            const projectableNodes: Node[][] = [];

            if (item.title) {
              projectableNodes.push([document.createTextNode(item.title.toString())]);
            }

            const cmp = viewRef.createComponent(PrizmSwitcherItemComponent, {
              injector: this.injector,
              index: idx,
              projectableNodes: projectableNodes?.length ? projectableNodes : undefined,
            });

            if (item.appearanceType) cmp.setInput('appearanceType', item.appearanceType);
            if (item.appearance) {
              cmp.setInput('appearance', item.appearance);
            }
            if (item.icon) cmp.setInput('icon', item.icon);
            if (item.disabled || item.hide) cmp.setInput('disabled', true);
            if (item.hint?.value) cmp.setInput('hint', item.hint.value);
            if (item.hint?.options) {
              if (item.hint.options.autoReposition)
                cmp.setInput('hintAutoReposition', item.hint.options.autoReposition);
              if (item.hint.options.direction) cmp.setInput('hintDirection', item.hint.options.direction);
              if (item.hint.options.hideDelay) cmp.setInput('hintHideDelay', item.hint.options.hideDelay);
              if (item.hint.options.showDelay) cmp.setInput('hintShowDelay', item.hint.options.showDelay);
              if (item.hint.options.theme) cmp.setInput('hintTheme', item.hint.options.theme);
            }

            if (item.hide) {
              this.renderer2.setStyle(cmp.location.nativeElement, 'display', 'none');
            }

            if (projectableNodes?.length) cmp.changeDetectorRef.detectChanges();
          });

          this.prizmSyncParentDirective.sync();
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
  set switchers(value: PrizmSwitcherItem[]) {
    if (value) this.switchers$$.next(value);
  }
}
