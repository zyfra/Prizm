import { Directive, HostBinding, inject, Input } from '@angular/core';
import { PrizmDestroyService } from '../../services/destroy';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_APPEARANCE_DEFAULT_VALUE } from './token';
import { PrizmAppearance } from '../../types/appearance.types';

@Directive({
  selector: '[prizmAppearance]',
  standalone: true,
  providers: [PrizmDestroyService],
})
export class PrizmAppearanceDirective {
  readonly default_value = inject(PRIZM_APPEARANCE_DEFAULT_VALUE, {
    optional: true,
  });

  @Input()
  @HostBinding('attr.data-appearance')
  @prizmDefaultProp()
  appearance: PrizmAppearance = this.default_value ?? 'primary';
}
