import { Provider } from '@angular/core';
import { PzmDay } from '../../../@core/date-time/day';
import { PzmTime } from '../../../@core/date-time/time';
import { PZM_DATE_TIME_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PzmControlValueTransformer } from '../../../types/control-value-transformer';

type From = [PzmDay | null, PzmTime | null] | null;
type To = Date | null;

export class PzmInputDateTimeNativeTransformer implements PzmControlValueTransformer<From, To> {
  public fromControlValue(controlValue: To): From {
    return controlValue && [
       PzmDay.fromLocalNativeDate(controlValue),
       PzmTime.fromLocalNativeDate(controlValue)
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

export function pzmGetInputDateTimeNativeTransformer(): Provider {
  return  {
    provide: PZM_DATE_TIME_VALUE_TRANSFORMER,
    useClass: PzmInputDateTimeNativeTransformer,
  };
}
