import { Directive, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { PolymorphContent, PrizmHintDirective, PrizmHintOptions } from '../../../directives';
import { prizmSwitcherHint } from '../switcher.interface';

@Directive({
  selector: '[prizmSwitcherHint]',
})
export class PrizmSwitcherHintDirective implements OnInit, OnChanges, OnDestroy {
  readonly prizmHint_ = new PrizmHintDirective();

  content: PolymorphContent | null;
  options: Partial<PrizmHintOptions> | undefined;

  @Input()
  set prizmSwitcherHint(hintData: prizmSwitcherHint | undefined) {
    if (hintData) {
      this.content = hintData.value;
      this.options = hintData.options;
    }

    this.updateHint();
  }

  public ngOnInit(): void {
    this.prizmHint_.ngOnInit();
  }

  public ngOnChanges(): void {
    this.prizmHint_.ngOnChanges();
  }

  public ngOnDestroy(): void {
    this.prizmHint_.ngOnDestroy();
  }

  private updateHint(): void {
    this.prizmHint_.prizmHint = this.content ?? '';
    if (this.options?.showDelay) this.prizmHint_.prizmHintShowDelay = this.options?.showDelay;
    if (this.options?.hideDelay) this.prizmHint_.prizmHintHideDelay = this.options?.hideDelay;
    if (this.options?.autoReposition) this.prizmHint_.prizmAutoReposition = this.options?.autoReposition;
    if (this.options?.direction) this.prizmHint_.prizmHintDirection = this.options?.direction;
    if (this.options?.theme) this.prizmHint_.prizmHintTheme = this.options?.theme;
    this.hintSyncChanges();
  }

  private hintSyncChanges(): void {
    this.prizmHint_.ngOnChanges();
  }
}
