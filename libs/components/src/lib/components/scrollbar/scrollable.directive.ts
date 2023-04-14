import { Directive, ElementRef, Inject, OnInit } from '@angular/core';
import { PRIZM_SCROLLABLE } from '../../constants/events';

@Directive({
  selector: '[prizmScrollable]',
})
export class PrizmScrollableDirective implements OnInit {
  constructor(@Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.dispatchEvent(
      new CustomEvent(PRIZM_SCROLLABLE, {
        bubbles: true,
        detail: this.elementRef.nativeElement,
      })
    );
  }
}
