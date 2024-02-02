import { BehaviorSubject, Observable } from 'rxjs';
import { PrizmLanguage, PrizmLanguageLoader, PrizmLanguageName, PrizmLanguageStorage } from '../interfaces';
import * as i0 from "@angular/core";
export declare class PrizmLanguageSwitcher extends BehaviorSubject<Observable<PrizmLanguage>> {
    private readonly fallback;
    private readonly key;
    private readonly storage;
    private readonly loader;
    constructor(fallback: PrizmLanguage, key: string, storage: PrizmLanguageStorage, loader: PrizmLanguageLoader | null);
    get language(): PrizmLanguageName;
    setLanguage(language: PrizmLanguageName): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmLanguageSwitcher, [null, null, null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmLanguageSwitcher>;
}
