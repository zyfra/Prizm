import {InjectionToken} from '@angular/core';

import {PrizmCodeEditor} from '../interfaces/code-editor';

export const PRIZM_DOC_CODE_EDITOR = new InjectionToken<PrizmCodeEditor>(
    `[PRIZM_DOC_CODE_EDITOR]: Contains service for opening online IDE e.g. Stackblitz`,
);
