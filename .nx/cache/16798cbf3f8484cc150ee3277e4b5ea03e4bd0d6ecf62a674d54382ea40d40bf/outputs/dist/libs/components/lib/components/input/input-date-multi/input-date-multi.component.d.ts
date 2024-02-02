import { ChangeDetectorRef, EventEmitter, Injector, OnInit, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PrizmDateButton, PrizmDateButtonContext } from '../../../types/date-button';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import * as i0 from "@angular/core";
export type PrizmDateItemTemplate = {
    name: string;
} & PrizmDateButton;
export declare class PrizmInputDateMultiComponent extends PrizmAbstractTestId implements OnInit {
    readonly leftButtons$: BehaviorSubject<PrizmDateButton[]>;
    private readonly cdRef;
    private readonly injector;
    buttonLeftTemplate: TemplateRef<unknown>;
    private readonly _items$;
    set items(value: PrizmDateItemTemplate[]);
    get items(): PrizmDateItemTemplate[];
    currentIdx: number;
    readonly currentIdxChange: EventEmitter<number>;
    readonly testId_ = "ui_input_date_multi";
    open: boolean;
    get context(): PrizmDateButtonContext;
    constructor(leftButtons$: BehaviorSubject<PrizmDateButton[]>, cdRef: ChangeDetectorRef, injector: Injector);
    ngOnInit(): void;
    openDropdown(): void;
    setListener(el: HTMLElement): void;
    select(idx: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputDateMultiComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmInputDateMultiComponent, "prizm-input-date-multi", never, { "items": "items"; "currentIdx": "currentIdx"; }, { "currentIdxChange": "currentIdxChange"; }, never, never, true, never>;
}
