import { Provider } from '@angular/core';
import { PzmDay } from '../../../@core/date-time/day';
import { PZM_DATE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PzmControlValueTransformer } from '../../../types/control-value-transformer';

type From = PzmDay | null;
type To = Date | null;

export class PzmInputDateNativeTransformer implements PzmControlValueTransformer<From, To> {
  public fromControlValue(controlValue: To): From {
    return controlValue && PzmDay.fromLocalNativeDate(controlValue);
  }

  public toControlValue(componentValue: From): To {
    return componentValue?.toLocalNativeDate() || null;
  }
}

export function pzmGetInputDateNativeTransformer(): Provider {
  return  {
    provide: PZM_DATE_VALUE_TRANSFORMER,
    useClass: PzmInputDateNativeTransformer,
  };
}
