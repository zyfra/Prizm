import {InjectionToken} from '@angular/core';

export const PRIZM_DOC_SEE_ALSO = new InjectionToken<ReadonlyArray<readonly string[]>>(
    `[PRIZM_DOC_SEE_ALSO]: Array of arrays of related pages`,
    {
        factory: (): ReadonlyArray<readonly string[]> => [],
    },
);
