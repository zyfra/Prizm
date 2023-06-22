import { Provider } from '@angular/core';
import { PrizmDay } from '../../../@core/date-time/day';
import { PrizmTime } from '../../../@core/date-time/time';
import { PRIZM_DATE_TIME_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';

type From = [PrizmDay | null, PrizmTime | null] | null;
type To = Date | null;

export class PrizmInputDateTimeNativeTransformer implements PrizmControlValueTransformer<From, To> {
  public fromControlValue(controlValue: To): From {
    return (
      controlValue && [
        PrizmDay.fromLocalNativeDate(controlValue),
        PrizmTime.fromLocalNativeDate(controlValue),
      ]
    );
  }

  public toControlValue(componentValue: From): To {
    const dateInput = componentValue && componentValue[0];
    if (!dateInput) return null;
    const date = dateInput.toLocalNativeDate();

    const time = componentValue[1];
    if (time) {
      date.setHours(time.hours, time.minutes, time.seconds, time.ms);
    }

    return date;
  }
}

export function prizmGetInputDateTimeNativeTransformer(): Provider {
  return {
    provide: PRIZM_DATE_TIME_VALUE_TRANSFORMER,
    useClass: PrizmInputDateTimeNativeTransformer,
  };
}
