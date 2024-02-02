import { ChangeDetectorRef, OnInit } from '@angular/core';
import { PrizmDataListOptions } from './data-list-options';
import { PrizmScrollbarVisibility } from '../scrollbar';
import { PrizmDropdownControllerDirective } from '../../directives/dropdown-controller';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { PolymorphContent } from '../../directives';
import * as i0 from "@angular/core";
export declare class PrizmDataListComponent extends PrizmAbstractTestId implements OnInit {
    private readonly controller;
    readonly options: PrizmDataListOptions;
    private readonly destroy$;
    private readonly cdRef;
    defaultStyle: boolean;
    iconOff: any;
    /**
     * for example
     * change scroll bar
     * */
    content: PolymorphContent;
    scroll: PrizmScrollbarVisibility | 'none';
    readonly testId_ = "ui_data_list";
    constructor(controller: PrizmDropdownControllerDirective | null, options: PrizmDataListOptions, destroy$: PrizmDestroyService, cdRef: ChangeDetectorRef);
    get minDropdownHeight(): string;
    get maxDropdownHeight(): string;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmDataListComponent, [{ optional: true; }, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmDataListComponent, "prizm-data-list", never, { "defaultStyle": "defaultStyle"; "iconOff": "iconOff"; "content": "content"; "scroll": "scroll"; }, {}, never, ["[header]", "*", "[footer]"], true, never>;
}
