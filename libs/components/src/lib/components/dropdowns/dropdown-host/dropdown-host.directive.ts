import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[prizmDropdownHost]',
  standalone: true,
})
export class PrizmDropdownHostDirective {
  private el_ = inject(ElementRef);
  get el() {
    return this.el_.nativeElement;
  }
}
