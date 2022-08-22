import { FactoryProvider, Optional, Self } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { identity } from 'rxjs';
import { ZUI_VALUE_ACCESSOR } from '../tokens/value-accessor';

// TODO: 2.0 remove in ivy compilation
export const ZUI_IDENTITY = identity;

export const ZUI_VALUE_ACCESSOR_PROVIDER: FactoryProvider = {
    provide: ZUI_VALUE_ACCESSOR,
    deps: [[new Optional(), new Self(), NG_VALUE_ACCESSOR]],
    useFactory: ZUI_IDENTITY,
};
