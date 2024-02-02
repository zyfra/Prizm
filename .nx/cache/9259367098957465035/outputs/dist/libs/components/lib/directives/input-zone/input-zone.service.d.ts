import { PrizmInputInZoneDirective } from './input-in-zone.directive';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class PrizmInputZoneService {
    private readonly map;
    private readonly changes$$;
    readonly changes$: Observable<void>;
    get elements(): PrizmInputInZoneDirective[];
    readonly elements$: Observable<PrizmInputInZoneDirective[]>;
    set(idx: number, input: PrizmInputInZoneDirective): void;
    getIdx(input: PrizmInputInZoneDirective): number;
    getByIdx(idx: number): PrizmInputInZoneDirective | null;
    add(input: PrizmInputInZoneDirective): number;
    delete(idx: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputZoneService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmInputZoneService>;
}
