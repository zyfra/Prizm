import { Directive, ElementRef, inject, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { PrizmContextService } from './context.service';
import { PRIZM_CONTEXT_KEY } from './token';

@Directive({
  selector: '[prizmContext]',
  exportAs: 'prizmContext',
  standalone: true,
  providers: [],
})
export class PrizmContextDirective implements OnChanges, OnDestroy {
  @Input({
    alias: 'prizmContext',
  })
  context: any;

  @Input({
    alias: 'prizmContextKey',
  })
  key: any =
    inject(PRIZM_CONTEXT_KEY, {
      optional: true,
      host: true,
    }) ?? inject(ElementRef);

  private readonly contextService = inject(PrizmContextService);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['key']?.previousValue) {
      this.contextService.delete(changes['key'].previousValue);
    }

    if (this.key) {
      this.contextService.add(this.key, this.context);
    }
  }

  ngOnDestroy(): void {
    this.contextService.delete(this.key);
  }
}
