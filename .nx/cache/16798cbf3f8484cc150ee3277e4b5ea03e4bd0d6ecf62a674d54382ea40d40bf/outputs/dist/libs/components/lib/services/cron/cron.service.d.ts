import { PrizmCronValueObject } from './model';
import * as i0 from "@angular/core";
export declare class PrizmCronService {
    private readonly value$$;
    readonly value$: import("rxjs").Observable<PrizmCronValueObject>;
    get value(): PrizmCronValueObject;
    get valueAsString(): string;
    readonly valueAsString$: import("rxjs").Observable<string>;
    readonly second$: import("rxjs").Observable<string>;
    readonly dayOfWeek$: import("rxjs").Observable<string>;
    readonly minute$: import("rxjs").Observable<string>;
    readonly hour$: import("rxjs").Observable<string>;
    readonly dayOfMonth$: import("rxjs").Observable<string>;
    readonly month$: import("rxjs").Observable<string>;
    readonly year$: import("rxjs").Observable<string>;
    updateWith(ojb: Partial<PrizmCronValueObject>): void;
    updateWith(ojb: string): void;
    private convertToCronString;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmCronService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmCronService>;
}
