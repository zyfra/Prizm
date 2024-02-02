import { OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { PrizmTabComponent } from './components/tab.component';
import * as i0 from "@angular/core";
export declare class PrizmTabMenuItemDirective implements OnInit {
    private readonly templateRef;
    private readonly viewContainer;
    constructor(templateRef: TemplateRef<PrizmTabComponent>, viewContainer: ViewContainerRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmTabMenuItemDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmTabMenuItemDirective, "[prizmTabMenuItem]", never, {}, {}, never, never, true, never>;
}
