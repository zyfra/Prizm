import { Directive, ElementRef, inject, Inject, OnInit, Renderer2 } from '@angular/core';
import { PRIZM_SCROLLABLE } from '../../constants/events';

@Directive({
  selector: '[prizmScrollable]',
  standalone: true,
})
export class PrizmScrollableDirective implements OnInit {
  readonly elementRef = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    this.elementRef.nativeElement.dispatchEvent(
      new CustomEvent(PRIZM_SCROLLABLE, {
        bubbles: true,
        detail: this.elementRef.nativeElement,
      })
    );
  }
}
