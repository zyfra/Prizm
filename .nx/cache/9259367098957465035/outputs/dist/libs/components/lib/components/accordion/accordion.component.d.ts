import { QueryList, AfterContentInit } from '@angular/core';
import { PrizmAccordionItemComponent } from './components/accordion-item/accordion-item.component';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import * as i0 from "@angular/core";
export declare class PrizmAccordionComponent extends PrizmAbstractTestId implements AfterContentInit {
    private readonly destroy$;
    onlyOneExpanded: boolean;
    accordionItems: QueryList<PrizmAccordionItemComponent>;
    readonly testId_ = "ui_accordion";
    constructor(destroy$: PrizmDestroyService);
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmAccordionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmAccordionComponent, "prizm-accordion", never, { "onlyOneExpanded": { "alias": "onlyOneExpanded"; "required": false; }; }, {}, ["accordionItems"], ["*"], true, never>;
}
