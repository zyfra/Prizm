import { Provider } from '@angular/core';
import { PrizmDay } from '../../../@core/date-time/day';
import { PRIZM_DATE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';
import { calcDateStrType, parseDateString } from '../../../@core/date-time/date-transform-util';
import { PrizmDateStringType } from '../../../types';

type From = PrizmDay | null;
type To = Date | string | null;

export class PrizmInputDateTransformer implements PrizmControlValueTransformer<From, To> {
  private dateStrType?: PrizmDateStringType;

  public fromControlValue(controlValue: To): From {
    if (typeof controlValue === 'string') {
      this.dateStrType = calcDateStrType(controlValue);
      controlValue = parseDateString(controlValue);
    }
    return controlValue && PrizmDay.fromLocalNativeDate(controlValue);
  }

  public toControlValue(componentValue: From): To {
    // TODO: implement wuth correct type return, needs generic?
    return componentValue?.toLocalNativeDate() || null;
  }
}

export function prizmGetInputDateTransformer(): Provider {
  return {
    provide: PRIZM_DATE_VALUE_TRANSFORMER,
    useClass: PrizmInputDateTransformer,
  };
}
