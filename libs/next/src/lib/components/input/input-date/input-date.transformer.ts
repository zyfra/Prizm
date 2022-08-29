import { Provider } from '@angular/core';
import { ZuiDay } from '../../../@core/date-time/day';
import { ZUI_DATE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { ZuiControlValueTransformer } from '../../../types/control-value-transformer';

type From = ZuiDay | null;
type To = Date | null;

export class ZuiInputDateNativeTransformer implements ZuiControlValueTransformer<From, To> {
  public fromControlValue(controlValue: To): From {
    return controlValue && ZuiDay.fromLocalNativeDate(controlValue);
  }

  public toControlValue(componentValue: From): To {
    return componentValue?.toLocalNativeDate() || null;
  }
}

export function zuiGetInputDateNativeTransformer(): Provider {
  return  {
    provide: ZUI_DATE_VALUE_TRANSFORMER,
    useClass: ZuiInputDateNativeTransformer,
  };
}
