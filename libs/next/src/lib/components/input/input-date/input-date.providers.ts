import { forwardRef, Optional, Provider, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { PZM_CALENDAR_DATA_STREAM } from '../../../tokens/calendar-data-stream';
import { PZM_DATE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { pzmReplayControlValueChangesFactory } from '../../../util/common/replay-control-value-changes-factory';
import { PzmInputDateComponent } from './input-date.component';
import { PZM_LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER } from '../../../providers/specific-dropdown-controllers';
import { PzmDay } from '../../../@core/date-time/day';
import { PzmControlValueTransformer } from '../../../types/control-value-transformer';
import { PZM_FOCUSABLE_ITEM_ACCESSOR } from '../../../tokens/focusable-item-accessor';
import { AbstractPzmControl } from '../../../abstract/control';

export const DATE_STREAM_FACTORY = <T extends PzmDay>(
    control: NgControl | null,
    valueTransformer: PzmControlValueTransformer<T>,
): Observable<T | null> | null =>
    pzmReplayControlValueChangesFactory<T>(control, valueTransformer);

export const PZM_INPUT_DATE_PROVIDERS = [
    {
        provide: PZM_FOCUSABLE_ITEM_ACCESSOR,
        useExisting: forwardRef(() => PzmInputDateComponent),
    },
    {
        provide: PZM_CALENDAR_DATA_STREAM,
        deps: [
            [new Optional(), new Self(), NgControl],
            [new Optional(), PZM_DATE_VALUE_TRANSFORMER],
        ],
        useFactory: DATE_STREAM_FACTORY,
    },
    {
        provide: AbstractPzmControl,
        useExisting: forwardRef(() => PzmInputDateComponent),
    },
    PZM_LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER,
];


