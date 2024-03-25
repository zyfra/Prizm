import { InjectionToken } from '@angular/core';
import { prizmIconsGetNameByOld } from '../replace';

type PrizmIconsNameTransformer = (name: string) => string | null;
/**
 * @developer-preview
 * */
export const PRIZM_ICONS_NAME_TRANSFORMER = new InjectionToken<PrizmIconsNameTransformer>(
  'icon names transformer'
);

/**
 * @developer-preview
 * */
export function prizmIconsProvideOldNameTransformer() {
  return prizmIconsProvideTransformer(name => prizmIconsGetNameByOld(name) ?? name);
}

/**
 * @developer-preview
 * */
export function prizmIconsProvideTransformer(transformer: PrizmIconsNameTransformer) {
  return {
    provide: PRIZM_ICONS_NAME_TRANSFORMER,
    useValue: transformer,
  };
}
