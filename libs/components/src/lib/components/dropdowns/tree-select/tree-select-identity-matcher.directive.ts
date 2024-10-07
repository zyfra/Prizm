import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[prizmInputTreeSelectIdentityMatcher]',
  standalone: true,
})
export class PrizmTreeSelectIdentityMatcherDirective<T = any> {
  @Input() identityMatcher = (a: T, b: T) => a === b;
}
