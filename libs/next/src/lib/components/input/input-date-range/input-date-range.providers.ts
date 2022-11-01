import { forwardRef, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { ZuiInputDateRangeComponent } from './input-date-range.component';
import { PzmDayRange } from '../../../@core/date-time';
import { ZuiControlValueTransformer } from '../../../types/control-value-transformer';
import { AbstractZuiControl } from '../../../abstract/control';
import { PZM_FOCUSABLE_ITEM_ACCESSOR } from '../../../tokens/focusable-item-accessor';
import { ZUI_CALENDAR_DATA_STREAM } from '../../../tokens/calendar-data-stream';
import { ZUI_DATE_RANGE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { ZUI_LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER } from '../../../providers/specific-dropdown-controllers';
import { zuiReplayControlValueChangesFactory } from '../../../util/common/replay-control-value-changes-factory';

// TODO: 2.0 remove in ivy compilation
export const RANGE_STREAM_FACTORY = <T extends PzmDayRange>(
    control: NgControl | null,
    valueTransformer: ZuiControlValueTransformer<T>,
): Observable<T | null> | null =>
  zuiReplayControlValueChangesFactory<T>(control, valueTransformer);

export const ZUI_INPUT_DATE_RANGE_PROVIDERS = [
    {
        provide: AbstractZuiControl,
        useExisting: forwardRef(() => ZuiInputDateRangeComponent),
    },
    {
        provide: PZM_FOCUSABLE_ITEM_ACCESSOR,
        useExisting: forwardRef(() => ZuiInputDateRangeComponent),
    },
    {
        provide: ZUI_CALENDAR_DATA_STREAM,
        deps: [
            [new Optional(), new Self(), NgControl],
            [new Optional(), forwardRef(() => ZUI_DATE_RANGE_VALUE_TRANSFORMER)],
        ],
        useFactory: RANGE_STREAM_FACTORY,
    },
    ZUI_LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER,
];
