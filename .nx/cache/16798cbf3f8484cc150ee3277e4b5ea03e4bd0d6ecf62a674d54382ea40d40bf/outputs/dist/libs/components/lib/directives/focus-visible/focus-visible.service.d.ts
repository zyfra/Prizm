import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Service to imitate :focus-visible
 * (https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
 * in browsers that do not support it
 */
export declare class PrizmFocusVisibleService extends Observable<boolean> {
    private readonly focusVisible$;
    constructor({ nativeElement }: ElementRef<Element>, changeDetectorRef: ChangeDetectorRef, destroy$: Observable<void>);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmFocusVisibleService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmFocusVisibleService>;
}
