import { forwardRef, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ZUI_CALENDAR_DATA_STREAM } from '../../../tokens/calendar-data-stream';
import { ZUI_DATE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { zuiReplayControlValueChangesFactory } from '../../../util/common/replay-control-value-changes-factory';
import { ZuiInputDateComponent } from './input-date.component';
import { ZUI_LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER } from '../../../providers/specific-dropdown-controllers';
import { ZuiDay } from '../../../@core/date-time/day';
import { ZuiControlValueTransformer } from '../../../types/control-value-transformer';
import { ZUI_FOCUSABLE_ITEM_ACCESSOR } from '../../../tokens/focusable-item-accessor';
import { AbstractZuiControl } from '../../../abstract/control';

export const DATE_STREAM_FACTORY = <T extends ZuiDay>(
    control: NgControl | null,
    valueTransformer: ZuiControlValueTransformer<T>,
): Observable<T | null> | null =>
    zuiReplayControlValueChangesFactory<T>(control, valueTransformer);

export const ZUI_INPUT_DATE_PROVIDERS = [
    {
        provide: ZUI_FOCUSABLE_ITEM_ACCESSOR,
        useExisting: forwardRef(() => ZuiInputDateComponent),
    },
    {
        provide: ZUI_CALENDAR_DATA_STREAM,
        deps: [
            [new Optional(), new Self(), NgControl],
            [new Optional(), ZUI_DATE_VALUE_TRANSFORMER],
        ],
        useFactory: DATE_STREAM_FACTORY,
    },
    {
        provide: AbstractZuiControl,
        useExisting: forwardRef(() => ZuiInputDateComponent),
    },
    ZUI_LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER,
];
