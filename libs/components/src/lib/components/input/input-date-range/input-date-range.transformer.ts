import { Provider } from '@angular/core';
import { PrizmDayRange } from '../../../@core/date-time/day-range';
import { PRIZM_DATE_RANGE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';

type From = PrizmDayRange | null;
type To = [Date, Date] | null;

export class PrizmInputDateRangeNativeTransformer implements PrizmControlValueTransformer<From, To> {
  public fromControlValue(controlValue: To): From {
    return controlValue && PrizmDayRange.fromLocalNativeDate(
      controlValue[0],
      controlValue[1]
    );
  }

  public toControlValue(componentValue: From): To {
    return componentValue?.toLocalNativeDate() || null;
  }
}

export function prizmGetInputDateRangeNativeTransformer(): Provider {
  return  {
    provide: PRIZM_DATE_RANGE_VALUE_TRANSFORMER,
    useClass: PrizmInputDateRangeNativeTransformer,
  };
}
