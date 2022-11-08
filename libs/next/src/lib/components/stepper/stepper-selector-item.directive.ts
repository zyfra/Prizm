import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[pzmStepperSelectorItem]',
})
export class PrizmStepperSelectorItemDirective {
  @Input('pzmStepperSelectorItem') stepIndex = 0;
  @Input() @HostBinding('disabled') disabled = true;

  constructor(private host: ElementRef<HTMLBRElement>) {}

  public focus(): void {
    this.host.nativeElement.focus();
  }
}

