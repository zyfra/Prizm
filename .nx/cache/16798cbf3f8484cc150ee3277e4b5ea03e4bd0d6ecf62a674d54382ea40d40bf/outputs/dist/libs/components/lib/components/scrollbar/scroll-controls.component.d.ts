import { ElementRef, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimationOptions } from '@angular/animations';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import * as i0 from "@angular/core";
export declare class PrizmScrollControlsComponent extends PrizmAbstractTestId {
    private readonly options;
    private readonly ngZone;
    private readonly documentRef;
    private readonly scrollRef;
    private readonly animationFrame$;
    readonly testId_ = "ui_scroll_controls";
    readonly refresh$: Observable<boolean[] | [boolean, boolean]>;
    readonly animation: {
        readonly delay?: string | number | undefined;
        readonly params?: {
            [name: string]: any;
        } | undefined;
        readonly value: "";
    };
    constructor(options: AnimationOptions, ngZone: NgZone, documentRef: Document, scrollRef: ElementRef<HTMLElement> | null, animationFrame$: Observable<number>);
    private get scrollbars();
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmScrollControlsComponent, [null, null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmScrollControlsComponent, "prizm-scroll-controls", never, {}, {}, never, never, true, never>;
}
