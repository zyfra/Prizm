import { InjectionToken } from '@angular/core';
import { defer, Observable, of, timer } from 'rxjs';
import { switchMapTo } from 'rxjs/operators';

export const PRIZM_DOC_PAGE_LOADED = new InjectionToken<Observable<boolean>>(
    `[PRIZM_DOC_PAGE_LOADED] Stream that emits if loading of page is over (for example, to begin scrollIntoView)`,
    {factory: (): Observable<boolean> => defer(() => timer(200).pipe(switchMapTo(of(true))))},
);
