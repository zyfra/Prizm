import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[prizmStepperSelectorItem]',
})
export class PrizmStepperSelectorItemDirective {
  @Input('prizmStepperSelectorItem') stepIndex = 0;
  @Input() @HostBinding('disabled') disabled = true;

  constructor(private host: ElementRef<HTMLBRElement>) {}

  public focus(): void {
    this.host.nativeElement.focus();
  }
}
