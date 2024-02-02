import { NgIfContext } from '@angular/common';
import { ChangeDetectorRef, TemplateRef } from '@angular/core';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import * as i0 from "@angular/core";
export declare class PrizmExpandComponent extends PrizmAbstractTestId {
    private readonly changeDetectorRef;
    private readonly contentWrapper?;
    private state;
    isLoading: boolean;
    set expanded(expanded: boolean | null);
    content: TemplateRef<NgIfContext<boolean>> | null;
    private expanded_;
    readonly testId_ = "ui-area--expand";
    onTransitionEnd(event: TransitionEvent): void;
    onExpandLoaded(event: Event): void;
    constructor(changeDetectorRef: ChangeDetectorRef);
    get overflow(): boolean;
    get loading(): boolean;
    get height(): number | null;
    get contentVisible(): boolean;
    private reTrigger;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmExpandComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmExpandComponent, "prizm-expand", never, { "isLoading": { "alias": "isLoading"; "required": false; }; "expanded": { "alias": "expanded"; "required": false; }; }, {}, ["content"], ["*"], true, never>;
}
