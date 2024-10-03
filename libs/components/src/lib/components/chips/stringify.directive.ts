import { Directive } from '@angular/core';
import { PrizmStringifyDirective } from '@prizm-ui/helpers';

@Directive({
  standalone: true,
  selector: 'prizm-chips[stringify]',
  hostDirectives: [
    {
      directive: PrizmStringifyDirective,
      inputs: ['stringify'],
    },
  ],
})
export class PrizmChipsStringifyDirective {}
