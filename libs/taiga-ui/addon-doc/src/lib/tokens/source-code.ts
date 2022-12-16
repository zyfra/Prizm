import { InjectionToken } from '@angular/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { PrizmDocSourceCodePathOptions } from '../interfaces/source-code-path-options';

export const PRIZM_DOC_SOURCE_CODE: InjectionToken<
    PolymorpheusContent<PrizmDocSourceCodePathOptions>
> = new InjectionToken<PolymorpheusContent<PrizmDocSourceCodePathOptions>>(
    `[PRIZM_DOC_SOURCE_CODE]: Source code link`,
    {
        factory: (): PolymorpheusContent<PrizmDocSourceCodePathOptions> => null,
    },
);
