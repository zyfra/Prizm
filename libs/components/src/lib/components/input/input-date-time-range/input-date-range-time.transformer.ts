import { Provider } from '@angular/core';
import { PrizmDayRange } from '../../../@core/date-time/day-range';
import { PRIZM_DATE_RANGE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';

type From = PrizmDayRange | null;
type To = [Date | null, Date | null] | null;

// TODO add support transformers later
export class PrizmInputDateTimeRangeNativeTransformer implements PrizmControlValueTransformer<From, To> {
  public fromControlValue(controlValue: To): From {
    return controlValue && PrizmDayRange.fromLocalNativeDate(controlValue[0] as any, controlValue[1] as any);
  }

  public toControlValue(componentValue: From): To | null {
    return componentValue?.toLocalNativeDate() || null;
  }
}

export function prizmGetInputDateTimeRangeNativeTransformer(): Provider {
  return {
    provide: PRIZM_DATE_RANGE_VALUE_TRANSFORMER,
    useClass: PrizmInputDateTimeRangeNativeTransformer,
  };
}
