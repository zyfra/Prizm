import { ChangeDetectorRef, EventEmitter, OnDestroy, TemplateRef } from '@angular/core';
import { PrizmAccordionContentDirective } from '../../directives/accordion-content.directive';
import { AccordionToolsDirective } from '../../directives/accordion-tools.directive';
import { Subject } from 'rxjs';
import { PolymorphContent } from '../../../../directives/polymorph';
import { PrizmAccordionItemData } from '../../model';
import { PrizmAbstractTestId } from '../../../../abstract/interactive';
import { BooleanInput } from '@angular/cdk/coercion';
import { prizmIsTextOverflow } from '../../../../util';
import * as i0 from "@angular/core";
export declare class PrizmAccordionItemComponent extends PrizmAbstractTestId implements OnDestroy {
    private readonly cdRef;
    icon: PolymorphContent<PrizmAccordionItemData>;
    title: PolymorphContent<PrizmAccordionItemData>;
    isExpanded: boolean;
    get disabled(): boolean;
    set disabled(value: BooleanInput);
    readonly prizmIsTextOverflow: typeof prizmIsTextOverflow;
    private _disabled;
    isExpandedChange: EventEmitter<boolean>;
    get data(): {
        icon: PolymorphContent<PrizmAccordionItemData>;
        title: PolymorphContent<PrizmAccordionItemData>;
        isExpanded: boolean;
        disabled: boolean;
        focused: boolean;
    };
    readonly testId_ = "ui_accordion_item";
    readonly accordionContent: TemplateRef<PrizmAccordionContentDirective>;
    readonly accordionTools: TemplateRef<AccordionToolsDirective>;
    constructor(cdRef: ChangeDetectorRef);
    toggle$: Subject<void>;
    isAccordionFocused: boolean;
    toggle(): void;
    close(): void;
    stopProp($event: Event): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmAccordionItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmAccordionItemComponent, "prizm-accordion-item", never, { "icon": "icon"; "title": "title"; "isExpanded": "isExpanded"; "disabled": "disabled"; }, { "isExpandedChange": "isExpandedChange"; }, ["accordionContent", "accordionTools"], never, true, never>;
}
