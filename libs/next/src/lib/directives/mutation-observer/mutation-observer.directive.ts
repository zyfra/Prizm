import { Directive, ElementRef, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { zuiDefaultProp } from '../../decorators';

import { ZUI_MUTATION_OBSERVER_OPTIONS, ZuiMutationObserveOptions } from './mutation-observer-options';

@Directive({
  selector: '[zuiMutationObserver]',
  providers: [
    ZuiDestroyService,
  ],
  exportAs: 'zuiMutationObserverEl'
})
export class ZuiMutationObserveDirective implements OnInit {
  @Input()
  @zuiDefaultProp()
  public zuiMutationObserverConfig: ZuiMutationObserveOptions['config'] = this.options.config;

  @Input()
  @zuiDefaultProp()
  public zuiMutationObserverHost: HTMLElement | null = null;

  @Output()
  readonly zuiMutationObserver: EventEmitter<MutationRecord[]> = new EventEmitter();

  readonly observer: MutationObserver;

  constructor(
    @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
    @Inject(ZuiDestroyService) private readonly destroy$: ZuiDestroyService,
    @Inject(ZUI_MUTATION_OBSERVER_OPTIONS) protected readonly options: ZuiMutationObserveOptions,
  ) {
    this.observer = new MutationObserver((records: MutationRecord[]) => {
      this.zuiMutationObserver.emit(records);
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
