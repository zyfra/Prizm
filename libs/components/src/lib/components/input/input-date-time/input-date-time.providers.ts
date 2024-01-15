import { forwardRef, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { PrizmDay } from '../../../@core/date-time/day';
import { PrizmTime } from '../../../@core/date-time/time';
import { PRIZM_LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER } from '../../../providers/specific-dropdown-controllers';
import { PRIZM_CALENDAR_DATA_STREAM } from '../../../tokens/calendar-data-stream';
import { PRIZM_DATE_TIME_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';
import { prizmReplayControlValueChangesFactory } from '../../../util/common/replay-control-value-changes-factory';
import { PrizmDestroyService } from '@prizm-ui/helpers';

export const TIME_STREAM_FACTORY = <T extends [PrizmDay | null, PrizmTime | null]>(
  control: NgControl | null,
  valueTransformer: PrizmControlValueTransformer<T>
): Observable<T | null> | null => prizmReplayControlValueChangesFactory<T>(control, valueTransformer);

export const PRIZM_INPUT_DATE_TIME_PROVIDERS = [
  PrizmDestroyService,
  {
    provide: PRIZM_CALENDAR_DATA_STREAM,
    deps: [
      [new Optional(), new Self(), NgControl],
      [new Optional(), forwardRef(() => PRIZM_DATE_TIME_VALUE_TRANSFORMER)],
    ],
    useFactory: TIME_STREAM_FACTORY,
  },
  PRIZM_LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER,
];
