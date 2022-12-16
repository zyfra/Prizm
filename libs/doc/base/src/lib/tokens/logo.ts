import { InjectionToken } from '@angular/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';

export const PRIZM_DOC_LOGO = new InjectionToken<PolymorpheusContent>(`[PRIZM_DOC_LOGO]: Main logo`, {
  factory: (): PolymorpheusContent => ``,
});
