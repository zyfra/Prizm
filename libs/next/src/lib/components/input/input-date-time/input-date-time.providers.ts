import { forwardRef, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { PzmDay } from '../../../@core/date-time/day';
import { ZuiTime } from '../../../@core/date-time/time';
import { AbstractZuiControl } from '../../../abstract/control';
import { ZUI_LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER } from '../../../providers/specific-dropdown-controllers';
import { ZUI_CALENDAR_DATA_STREAM } from '../../../tokens/calendar-data-stream';
import { ZUI_DATE_TIME_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PZM_FOCUSABLE_ITEM_ACCESSOR } from '../../../tokens/focusable-item-accessor';
import { ZuiControlValueTransformer } from '../../../types/control-value-transformer';
import { zuiReplayControlValueChangesFactory } from '../../../util/common/replay-control-value-changes-factory';
import { ZuiInputDateTimeComponent } from './input-date-time.component';

export const TIME_STREAM_FACTORY = <T extends [PzmDay | null, ZuiTime | null]>(
    control: NgControl | null,
    valueTransformer: ZuiControlValueTransformer<T>,
): Observable<T | null> | null =>
    zuiReplayControlValueChangesFactory<T>(control, valueTransformer);

export const ZUI_INPUT_DATE_TIME_PROVIDERS = [
    {
        provide: AbstractZuiControl,
        useExisting: forwardRef(() => ZuiInputDateTimeComponent),
    },
    {
        provide: PZM_FOCUSABLE_ITEM_ACCESSOR,
        useExisting: forwardRef(() => ZuiInputDateTimeComponent),
    },
    {
        provide: ZUI_CALENDAR_DATA_STREAM,
        deps: [
            [new Optional(), new Self(), NgControl],
            [new Optional(), forwardRef(() => ZUI_DATE_TIME_VALUE_TRANSFORMER)],
        ],
        useFactory: TIME_STREAM_FACTORY,
    },
    ZUI_LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER,
];
