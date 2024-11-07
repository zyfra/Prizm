import { Provider } from '@angular/core';
import { PRIZM_DATE_TIME_RANGE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';
import { PrizmDateTimeRange } from '../../../@core';

type From = PrizmDateTimeRange | null;
type To = [Date | null, Date | null] | null;

// TODO add support transformers later
export class PrizmInputDateTimeRangeNativeTransformer implements PrizmControlValueTransformer<From, To> {
  public fromControlValue(controlValue: To): From {
    return (
      controlValue && PrizmDateTimeRange.fromLocalNativeDate(controlValue[0] as Date, controlValue[1] as Date)
    );
  }

  public toControlValue(componentValue: From): To | null {
    return componentValue?.toLocalNativeDate() || null;
  }
}

export function prizmGetInputDateTimeRangeNativeTransformer(): Provider {
  return {
    provide: PRIZM_DATE_TIME_RANGE_VALUE_TRANSFORMER,
    useClass: PrizmInputDateTimeRangeNativeTransformer,
  };
}
