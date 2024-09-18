import { Directive, Input } from '@angular/core';
import { PrizmIdentityMatcherFunc } from './model';

@Directive({
  standalone: true,
  selector: '[prizmIdentityMatcher]',
})
export class PrizmIdentityMatcherDirective<T> {
  @Input()
  identityMatcher: PrizmIdentityMatcherFunc<T> = (a, b) => a === b;
}
