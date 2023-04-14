import { Directive, ElementRef, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { prizmDefaultProp } from '@prizm-ui/core';

import { PRIZM_MUTATION_OBSERVER_OPTIONS, PrizmMutationObserveOptions } from './mutation-observer-options';

@Directive({
  selector: '[prizmMutationObserver]',
  providers: [PrizmDestroyService],
  exportAs: 'prizmMutationObserverEl',
})
export class PrizmMutationObserveDirective implements OnInit {
  @Input()
  @prizmDefaultProp()
  public prizmMutationObserverConfig: PrizmMutationObserveOptions['config'] = this.options.config;

  @Input()
  @prizmDefaultProp()
  public prizmMutationObserverHost: HTMLElement | null = null;

  @Output()
  readonly prizmMutationObserver: EventEmitter<MutationRecord[]> = new EventEmitter();

  readonly observer: MutationObserver;

  constructor(
    @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
    @Inject(PrizmDestroyService) private readonly destroy$: PrizmDestroyService,
    @Inject(PRIZM_MUTATION_OBSERVER_OPTIONS) protected readonly options: PrizmMutationObserveOptions
  ) {
    this.observer = new MutationObserver((records: MutationRecord[]) => {
      this.prizmMutationObserver.emit(records);
    });
  }

  public ngOnInit(): void {
    this.startObserve();
  }

  private startObserve(): void {
    this.observer.observe(
      this.prizmMutationObserverHost ?? this.el.nativeElement,
      this.prizmMutationObserverConfig
    );
    this.destroy$.addCallback(() => {
      this.observer.disconnect();
    });
  }
}
