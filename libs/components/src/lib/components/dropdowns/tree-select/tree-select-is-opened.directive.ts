import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[prizmInputTreeSelectIsOpened]',
  standalone: true,
})
export class PrizmTreeSelectIsOpenedDirective<T = any> {
  @Input() isOpened = (item: T): boolean => false;
}
