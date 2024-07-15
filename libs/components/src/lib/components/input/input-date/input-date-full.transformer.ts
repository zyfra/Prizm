import { Provider } from '@angular/core';
import { PrizmDay } from '../../../@core/date-time/day';
import { PRIZM_DATE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';

type From = PrizmDay | null;
type To = Date | string | null;

export class PrizmInputDateTransformer implements PrizmControlValueTransformer<From, To> {
  public fromControlValue(controlValue: To): From {
    // return controlValue && PrizmDay.fromLocalNativeDate(controlValue);
    return null;
  }

  public toControlValue(componentValue: From): To {
    return componentValue?.toLocalNativeDate() || null;
  }
}

export function prizmGetInputDateTransformer(): Provider {
  return {
    provide: PRIZM_DATE_VALUE_TRANSFORMER,
    useClass: PrizmInputDateTransformer,
  };
}
