import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class PrizmHintService {
    private readonly subHoveredSource$;
    childHovered(hintId: string): Observable<boolean>;
    emit(hintId: string, hovered: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmHintService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmHintService>;
}
