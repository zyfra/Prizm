import {InjectionToken} from '@angular/core';
import {TuiHandler} from '@taiga-ui/cdk';
import {identity} from 'rxjs';

export const PRIZM_DOC_EXAMPLE_CONTENT_PROCESSOR: InjectionToken<
    TuiHandler<Record<string, string>, Record<string, string>>
> = new InjectionToken(
    `[PRIZM_DOC_EXAMPLE_CONTENT_PROCESSOR]: Processes content in example`,
    {factory: () => identity},
);
