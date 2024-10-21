import { Directive, inject } from '@angular/core';
import { PrizmElementRefDirective } from './element-ref.directive';

@Directive({
  selector: '[prizmHtmlRef]',
  standalone: true,
  exportAs: 'prizmHtmlRef',
  hostDirectives: [PrizmElementRefDirective],
})
export class PrizmHtmlRefDirective {
  public get ref() {
    return inject(PrizmElementRefDirective).ref.nativeElement as HTMLElement;
  }
}
