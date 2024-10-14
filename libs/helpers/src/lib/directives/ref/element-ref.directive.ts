import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[prizmElementRef]',
  standalone: true,
  exportAs: 'prizmElementRef',
})
export class PrizmElementRefDirective {
  public readonly ref = inject(ElementRef);
}
