import { InjectionToken, Provider } from '@angular/core';
import { PrizmLanguage } from '@prizm-ui/i18n';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class PrizmI18nService {
    readonly language$: Observable<PrizmLanguage>;
    constructor(language$: Observable<PrizmLanguage>);
    extract<K extends keyof PrizmLanguage>(key: K): Observable<PrizmLanguage[K]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmI18nService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmI18nService>;
}
export declare function prizmI18nInitWithKey<T, K extends keyof PrizmLanguage>(token: InjectionToken<T>, key: K): Provider[];
export declare function prizmI18nInitWithKeys<T, K extends keyof PrizmLanguage>(keys: Record<K, InjectionToken<T>>): Provider[];
