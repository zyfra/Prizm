import { Directive, ElementRef, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { pzmDefaultProp } from '../../decorators';

import { PZM_MUTATION_OBSERVER_OPTIONS, PzmMutationObserveOptions } from './mutation-observer-options';

@Directive({
  selector: '[pzmMutationObserver]',
  providers: [
    PzmDestroyService,
  ],
  exportAs: 'pzmMutationObserverEl'
})
export class PzmMutationObserveDirective implements OnInit {
  @Input()
  @pzmDefaultProp()
  public zuiMutationObserverConfig: PzmMutationObserveOptions['config'] = this.options.config;

  @Input()
  @pzmDefaultProp()
  public zuiMutationObserverHost: HTMLElement | null = null;

  @Output()
  readonly pzmMutationObserver: EventEmitter<MutationRecord[]> = new EventEmitter();

  readonly observer: MutationObserver;

  constructor(
    @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
    @Inject(PzmDestroyService) private readonly destroy$: PzmDestroyService,
    @Inject(PZM_MUTATION_OBSERVER_OPTIONS) protected readonly options: PzmMutationObserveOptions,
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
      this.zuiMutationObserverHost ?? this.el.nativeElement,
      this.zuiMutationObserverConfig
    );
    this.destroy$.addCallback(() => {
      this.observer.disconnect();
    })
  }
}
