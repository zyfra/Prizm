import { Directive, Input } from '@angular/core';
import { PrizmStringifyFunc } from './model';

@Directive({
  selector: '[prizmStringify]',
  standalone: true,
})
export class PrizmStringifyDirective<T> {
  @Input()
  stringify: PrizmStringifyFunc<T> = i => i?.toString() ?? '';
}
