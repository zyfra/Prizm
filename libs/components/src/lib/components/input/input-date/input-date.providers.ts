import { forwardRef, Optional, Provider, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { PRIZM_CALENDAR_DATA_STREAM } from '../../../tokens/calendar-data-stream';
import { PRIZM_DATE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { prizmReplayControlValueChangesFactory } from '../../../util/common/replay-control-value-changes-factory';
import { PrizmDateComponent } from './date.component';
import { PRIZM_LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER } from '../../../providers/specific-dropdown-controllers';
import { PrizmDay } from '../../../@core/date-time/day';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';
import { PRIZM_FOCUSABLE_ITEM_ACCESSOR } from '../../../tokens/focusable-item-accessor';
import { AbstractPrizmControl } from '../../../abstract/control';

export const DATE_STREAM_FACTORY = <T extends PrizmDay>(
  control: NgControl | null,
  valueTransformer: PrizmControlValueTransformer<T>
): Observable<T | null> | null => prizmReplayControlValueChangesFactory<T>(control, valueTransformer);

export const PRIZM_INPUT_DATE_PROVIDERS = [
  {
    provide: PRIZM_FOCUSABLE_ITEM_ACCESSOR,
    useExisting: forwardRef(() => PrizmDateComponent),
  },
  {
    provide: PRIZM_CALENDAR_DATA_STREAM,
    deps: [
      [new Optional(), new Self(), NgControl],
      [new Optional(), PRIZM_DATE_VALUE_TRANSFORMER],
    ],
    useFactory: DATE_STREAM_FACTORY,
  },
  {
    provide: AbstractPrizmControl,
    useExisting: forwardRef(() => PrizmDateComponent),
  },
  PRIZM_LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER,
];
