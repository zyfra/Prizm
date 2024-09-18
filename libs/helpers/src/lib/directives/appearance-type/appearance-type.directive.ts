import { Directive, HostBinding, inject, Input } from '@angular/core';
import { PrizmDestroyService } from '../../services/destroy';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_APPEARANCE_TYPE_DEFAULT_VALUE } from './token';
import { PrizmAppearanceType } from '../../types';

@Directive({
  selector: '[prizmAppearanceType]',
  standalone: true,
  providers: [PrizmDestroyService],
})
export class PrizmAppearanceTypeDirective {
  readonly default_value = inject(PRIZM_APPEARANCE_TYPE_DEFAULT_VALUE, {
    optional: true,
  });

  @Input()
  @HostBinding('attr.data-appearance-type')
  @prizmDefaultProp()
  appearanceType: PrizmAppearanceType = this.default_value ?? 'ghost';
}
