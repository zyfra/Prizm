import { Provider } from '@angular/core';
import { PrizmDay } from '../../../@core/date-time/day';
import { PrizmTime } from '../../../@core/date-time/time';
import { PRIZM_DATE_TIME_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';
import { PrizmDateTime } from '@prizm-ui/components';

type From = [PrizmDay | null, PrizmTime | null] | null;
type To = PrizmDateTime | null;

export class PrizmInputDateTimeBaseTransformer implements PrizmControlValueTransformer<From, To> {
  public fromControlValue(controlValue: To): From {
    return controlValue && [controlValue.day ?? null, controlValue.time ?? null];
  }

  public toControlValue(componentValue: From): To {
    const dateInput = componentValue && componentValue[0];
    if (!dateInput) return null;
    const time = componentValue[1];
    return new PrizmDateTime(dateInput, time);
  }
}

export function prizmGetInputDateTimeBaseTransformer(): Provider {
  return {
    provide: PRIZM_DATE_TIME_VALUE_TRANSFORMER,
    useClass: PrizmInputDateTimeBaseTransformer,
  };
}
