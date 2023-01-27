import { forwardRef, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { PrizmInputDateRangeComponent } from './input-date-range.component';
import { PrizmDayRange } from '../../../@core/date-time';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';
import { AbstractPrizmControl } from '../../../abstract/control';
import { PRIZM_FOCUSABLE_ITEM_ACCESSOR } from '../../../tokens/focusable-item-accessor';
import { PRIZM_CALENDAR_DATA_STREAM } from '../../../tokens/calendar-data-stream';
import { PRIZM_DATE_RANGE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PRIZM_LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER } from '../../../providers/specific-dropdown-controllers';
import { prizmReplayControlValueChangesFactory } from '../../../util/common/replay-control-value-changes-factory';

// TODO: 2.0 remove in ivy compilation
export const RANGE_STREAM_FACTORY = <T extends PrizmDayRange>(
  control: NgControl | null,
  valueTransformer: PrizmControlValueTransformer<T>
): Observable<T | null> | null => prizmReplayControlValueChangesFactory<T>(control, valueTransformer);

export const PRIZM_INPUT_DATE_RANGE_PROVIDERS = [
  {
    provide: AbstractPrizmControl,
    useExisting: forwardRef(() => PrizmInputDateRangeComponent),
  },
  {
    provide: PRIZM_FOCUSABLE_ITEM_ACCESSOR,
    useExisting: forwardRef(() => PrizmInputDateRangeComponent),
  },
  {
    provide: PRIZM_CALENDAR_DATA_STREAM,
    deps: [
      [new Optional(), new Self(), NgControl],
      [new Optional(), forwardRef(() => PRIZM_DATE_RANGE_VALUE_TRANSFORMER)],
    ],
    useFactory: RANGE_STREAM_FACTORY,
  },
  PRIZM_LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER,
];
