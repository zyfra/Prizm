import { ChangeDetectorRef } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputLayoutComponent } from '../common/input-layout/input-layout.component';
import { PrizmInputPasswordDirective } from './input-password.directive';
import * as i0 from "@angular/core";
export declare class PrizmInputPasswordDefaultControlComponent {
    readonly layout: PrizmInputLayoutComponent;
    private readonly destroy$;
    private readonly cdr;
    inputPassword: PrizmInputPasswordDirective;
    constructor(layout: PrizmInputLayoutComponent, destroy$: PrizmDestroyService, cdr: ChangeDetectorRef);
    get icon(): string;
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputPasswordDefaultControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmInputPasswordDefaultControlComponent, "prizm-input-password-auxiliary-control", never, { "inputPassword": "inputPassword"; }, {}, never, never, false, never>;
}
