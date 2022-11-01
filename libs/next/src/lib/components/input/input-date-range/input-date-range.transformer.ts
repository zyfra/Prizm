import { Provider } from '@angular/core';
import { PzmDayRange } from '../../../@core/date-time/day-range';
import { PZM_DATE_RANGE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PzmControlValueTransformer } from '../../../types/control-value-transformer';

type From = PzmDayRange | null;
type To = [Date, Date] | null;

export class PzmInputDateRangeNativeTransformer implements PzmControlValueTransformer<From, To> {
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

export function pzmGetInputDateRangeNativeTransformer(): Provider {
  return  {
    provide: PZM_DATE_RANGE_VALUE_TRANSFORMER,
    useClass: PzmInputDateRangeNativeTransformer,
  };
}
