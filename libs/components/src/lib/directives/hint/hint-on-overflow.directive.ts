import { Directive, ElementRef, inject, Input, OnChanges, OnInit } from '@angular/core';
import { PrizmDestroyService, prizmElementResized$, PrizmMutationObserverService } from '@prizm-ui/helpers';
import { PrizmHintDirective } from './hint.directive';
import { prizmIsTextOverflow } from '../../util/dom/is-textoverflow';
import { BehaviorSubject, mergeMap } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';

/**
 * TODO v5
 * add to demo page
 * */
@Directive({
  selector: '[prizmHintOnOverflow]:not(ng-container)',
  exportAs: 'prizmHintOnOverflow',
  standalone: true,
  providers: [PrizmMutationObserverService, PrizmDestroyService],
  hostDirectives: [
    {
      directive: PrizmHintDirective,
      inputs: [
        'prizmAutoReposition',
        'prizmHint',
        'prizmHintHideDelay',
        'prizmHintContext',
        'prizmHintDirection',
        'prizmHintHost',
        'prizmHintId',
        'prizmHintShowDelay',
        'prizmHintTheme',
      ],
    },
  ],
})
export class PrizmHintOnOverflowDirective implements OnInit, OnChanges {
  @Input()
  prizmHintOnOverflowEl?: HTMLElement;

  private readonly hintDirective = inject(PrizmHintDirective, {
    self: true,
  });

  private readonly mutationObserve = inject(PrizmMutationObserverService, {
    self: true,
  });

  private readonly elRef = inject(ElementRef);
  private readonly destroy = inject(PrizmDestroyService);

  get element() {
    return this.prizmHintOnOverflowEl ?? this.elRef.nativeElement;
  }
  private readonly saveInit$$ = new BehaviorSubject<void>(void 0);

  ngOnInit(): void {
    this.saveInit$$
      .pipe(
        mergeMap(() => prizmElementResized$(this.element)),
        debounceTime(0),
        tap(() => {
          this.safeInit();
        }),
        takeUntil(this.destroy)
      )
      .subscribe();
  }

  ngOnChanges(): void {
    this.saveInit$$.next();
  }

  private updateHintDirective(element: HTMLElement) {
    this.hintDirective.prizmHintCanShow = prizmIsTextOverflow(element);
  }

  private safeInit() {
    const element = this.element;
    this.mutationObserve.disconnectAll();
    this.updateHintDirective(element);
    this.mutationObserve.observe(element, () => this.updateHintDirective(element));
  }
}
