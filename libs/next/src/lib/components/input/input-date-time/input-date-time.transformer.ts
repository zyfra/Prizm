import { Provider } from '@angular/core';
import { ZuiDay } from '../../../@core/date-time/day';
import { ZuiTime } from '../../../@core/date-time/time';
import { ZUI_DATE_TIME_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { ZuiControlValueTransformer } from '../../../types/control-value-transformer';

type From = [ZuiDay | null, ZuiTime | null] | null;
type To = Date | null;

export class ZuiInputDateTimeNativeTransformer implements ZuiControlValueTransformer<From, To> {
  public fromControlValue(controlValue: To): From {
    return controlValue && [
       ZuiDay.fromLocalNativeDate(controlValue),
       ZuiTime.fromLocalNativeDate(controlValue)
    ];
  }

  public toControlValue(componentValue: From): To {
    const dateInput = componentValue && componentValue[0];
    if (!dateInput) return null;
    const date = dateInput.toLocalNativeDate();

    const time = componentValue[1];
    if (time) {
      date.setHours(
        time.hours,
        time.minutes,
        time.seconds,
        time.ms
      )
    }

    return date;
  }
}

export function zuiGetInputDateTimeNativeTransformer(): Provider {
  return  {
    provide: ZUI_DATE_TIME_VALUE_TRANSFORMER,
    useClass: ZuiInputDateTimeNativeTransformer,
  };
}
