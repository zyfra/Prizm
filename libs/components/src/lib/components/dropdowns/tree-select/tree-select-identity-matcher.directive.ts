import { Directive, Input } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';

@Directive({
  selector: '[prizmInputTreeSelectIdentityMatcher]',
  standalone: true,
  providers: [PrizmDestroyService],
})
export class PrizmTreeSelectIdentityMatcherDirective<T = any> {
  @Input() identityMatcher = (a: T, b: T) => a === b;
}
