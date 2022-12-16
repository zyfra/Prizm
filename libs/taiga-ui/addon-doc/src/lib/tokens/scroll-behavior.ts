import {InjectionToken} from '@angular/core';

export const PRIZM_DOC_SCROLL_BEHAVIOR = new InjectionToken<ScrollBehavior>(
    `[PRIZM_DOC_SCROLL_BEHAVIOR] Defines the transition animation for scroll`,
    {factory: (): ScrollBehavior => "smooth"},
);
