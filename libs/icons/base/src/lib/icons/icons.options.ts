import { InjectionToken } from '@angular/core';
import { prizmIconsGetNameByOld } from '../replace';

type PrizmIconsNameTransformer = (name: string) => string | null;
export const PRIZM_ICONS_NAME_TRANSFORMER = new InjectionToken<PrizmIconsNameTransformer>(
  'icon names transformer'
);

export function prizmIconsProvideOldNameTransformer() {
  return prizmIconsProvideTransformer(prizmIconsGetNameByOld);
}

export function prizmIconsProvideTransformer(transformer: PrizmIconsNameTransformer) {
  return {
    provide: PRIZM_ICONS_NAME_TRANSFORMER,
    useValue: transformer,
  };
}
