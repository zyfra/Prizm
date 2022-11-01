import { Provider } from '@angular/core';
import { PzmDayRange } from '../../../@core/date-time/day-range';
import { ZUI_DATE_RANGE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { ZuiControlValueTransformer } from '../../../types/control-value-transformer';

type From = PzmDayRange | null;
type To = [Date, Date] | null;

export class ZuiInputDateRangeNativeTransformer implements ZuiControlValueTransformer<From, To> {
  public fromControlValue(controlValue: To): From {
    return controlValue && PzmDayRange.fromLocalNativeDate(
      controlValue[0],
      controlValue[1]
    );
  }

  public toControlValue(componentValue: From): To {
    return componentValue?.toLocalNativeDate() || null;
  }
}

export function zuiGetInputDateRangeNativeTransformer(): Provider {
  return  {
    provide: ZUI_DATE_RANGE_VALUE_TRANSFORMER,
    useClass: ZuiInputDateRangeNativeTransformer,
  };
}
