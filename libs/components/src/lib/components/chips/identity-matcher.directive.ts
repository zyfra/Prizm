import { Directive } from '@angular/core';
import { PrizmIdentityMatcherDirective } from '@prizm-ui/helpers';

@Directive({
  standalone: true,
  selector: 'prizm-chips[identityMatcher]',
  hostDirectives: [
    {
      directive: PrizmIdentityMatcherDirective,
      inputs: ['identityMatcher'],
    },
  ],
})
export class PrizmChipsIdentityMatcherDirective {}
