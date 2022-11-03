import { forwardRef, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { PzmDay } from '../../../@core/date-time/day';
import { PzmTime } from '../../../@core/date-time/time';
import { AbstractPzmControl } from '../../../abstract/control';
import { PZM_LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER } from '../../../providers/specific-dropdown-controllers';
import { PZM_CALENDAR_DATA_STREAM } from '../../../tokens/calendar-data-stream';
import { PZM_DATE_TIME_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PZM_FOCUSABLE_ITEM_ACCESSOR } from '../../../tokens/focusable-item-accessor';
import { PzmControlValueTransformer } from '../../../types/control-value-transformer';
import { pzmReplayControlValueChangesFactory } from '../../../util/common/replay-control-value-changes-factory';
import { PzmInputDateTimeComponent } from './input-date-time.component';

export const TIME_STREAM_FACTORY = <T extends [PzmDay | null, PzmTime | null]>(
    control: NgControl | null,
    valueTransformer: PzmControlValueTransformer<T>,
): Observable<T | null> | null =>
    pzmReplayControlValueChangesFactory<T>(control, valueTransformer);

export const PZM_INPUT_DATE_TIME_PROVIDERS = [
    {
        provide: AbstractPzmControl,
        useExisting: forwardRef(() => PzmInputDateTimeComponent),
    },
    {
        provide: PZM_FOCUSABLE_ITEM_ACCESSOR,
        useExisting: forwardRef(() => PzmInputDateTimeComponent),
    },
    {
        provide: PZM_CALENDAR_DATA_STREAM,
        deps: [
            [new Optional(), new Self(), NgControl],
            [new Optional(), forwardRef(() => PZM_DATE_TIME_VALUE_TRANSFORMER)],
        ],
        useFactory: TIME_STREAM_FACTORY,
    },
    PZM_LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER,
];
