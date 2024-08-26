import { Provider } from '@angular/core';
import { PrizmDay } from '../../../@core/date-time/day';
import { PRIZM_DATE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';
import { calcDateStrType, parseDateString } from '../../../@core/date-time/date-transform-util';
import { PrizmDateStringType } from '../../../types';

type From = PrizmDay | null;
type To = Date | string | null;

export class PrizmInputDateTransformer implements PrizmControlValueTransformer<From, To> {
  private dateStrType: PrizmDateStringType | null = null;

  public fromControlValue(controlValue: To): From {
    if (typeof controlValue === 'string') {
      try {
        this.dateStrType = calcDateStrType(controlValue);
        controlValue = parseDateString(controlValue);
      } catch {
        console.error('ERROR', `${controlValue} is not valid ISO or UTC string`);
        return null;
      }
    } else {
      this.dateStrType = null;
    }
    return controlValue && PrizmDay.fromLocalNativeDate(controlValue);
  }

  public toControlValue(componentValue: From): To {
    const nativeValue = componentValue?.toLocalNativeDate() || null;

    if (nativeValue && this.dateStrType) {
      switch (this.dateStrType) {
        case 'ISO':
          return nativeValue.toISOString();
        case 'UTC':
          return nativeValue.toUTCString();
        default:
          throw new Error(`Invalid date string type is set`);
      }
    }

    return nativeValue;
  }
}

export function prizmGetInputDateTransformer(): Provider {
  return {
    provide: PRIZM_DATE_VALUE_TRANSFORMER,
    useClass: PrizmInputDateTransformer,
  };
}
