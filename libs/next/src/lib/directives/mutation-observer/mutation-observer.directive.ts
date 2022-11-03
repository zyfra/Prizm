import { Directive, ElementRef, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { PrizmDestroyService } from '@digital-plant/zyfra-helpers';
import { pzmDefaultProp } from '../../decorators';

import { PZM_MUTATION_OBSERVER_OPTIONS, PrizmMutationObserveOptions } from './mutation-observer-options';

@Directive({
  selector: '[pzmMutationObserver]',
  providers: [
    PrizmDestroyService,
  ],
  exportAs: 'pzmMutationObserverEl'
})
export class PrizmMutationObserveDirective implements OnInit {
  @Input()
  @pzmDefaultProp()
  public pzmMutationObserverConfig: PrizmMutationObserveOptions['config'] = this.options.config;

  @Input()
  @pzmDefaultProp()
  public pzmMutationObserverHost: HTMLElement | null = null;

  @Output()
  readonly pzmMutationObserver: EventEmitter<MutationRecord[]> = new EventEmitter();

  readonly observer: MutationObserver;

  constructor(
    @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
    @Inject(PrizmDestroyService) private readonly destroy$: PrizmDestroyService,
    @Inject(PZM_MUTATION_OBSERVER_OPTIONS) protected readonly options: PrizmMutationObserveOptions,
  ) {
    this.observer = new MutationObserver((records: MutationRecord[]) => {
      this.pzmMutationObserver.emit(records);
    });
  }

  public ngOnInit(): void {
    this.startObserve();
  }

  private startObserve(): void {
    this.observer.observe(
      this.pzmMutationObserverHost ?? this.el.nativeElement,
      this.pzmMutationObserverConfig
    );
    this.destroy$.addCallback(() => {
      this.observer.disconnect();
    })
  }
}
