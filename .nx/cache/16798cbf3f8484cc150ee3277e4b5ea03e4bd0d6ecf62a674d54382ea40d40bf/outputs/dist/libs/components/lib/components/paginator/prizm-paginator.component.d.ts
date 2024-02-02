import { NumberInput } from '@angular/cdk/coercion';
import { ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmPaginatorData, PrizmPaginatorOptions, PrizmPaginatorOutput, PrizmPaginatorType } from './interfaces/prizm-paginator.interface';
import { PolymorphContent } from '../../directives';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { PrizmLanguagePaginator } from '@prizm-ui/i18n';
import * as i0 from "@angular/core";
export declare class PrizmPaginatorComponent extends PrizmAbstractTestId implements OnInit {
    readonly paginator$: Observable<PrizmLanguagePaginator['paginator']>;
    private readonly changeDetectorRef;
    paginatorType: PrizmPaginatorType;
    textOnPage: PolymorphContent;
    /** The length of the total number of items that are being paginated. Defaulted to 0. */
    get totalRecords(): number | null;
    set totalRecords(value: NumberInput);
    private _totalRecords;
    pageLinkSize: number;
    showMoreDisabled: boolean;
    disabled: boolean;
    /** Number of items to display on a page. */
    get rows(): number;
    set rows(value: NumberInput);
    private _rows;
    /** The 1-based page index of the displayed list of items. Defaulted to 1. */
    get page(): number;
    set page(value: NumberInput);
    paginatorOptions: PrizmPaginatorOptions;
    leftButtonLabel: string;
    rightButtonLabel: string;
    moreButtonLabel: string;
    rowsCountOptions: number[];
    paginatorChange: EventEmitter<PrizmPaginatorOutput>;
    pageChange: EventEmitter<number>;
    rowsChange: EventEmitter<number | null>;
    readonly testId_ = "ui_paginator";
    /**
     * The 1-based page index of the displayed list of items.
     */
    currentPage: number;
    pagesCount: number;
    private readonly initialized$$;
    readonly initialized: Observable<void>;
    constructor(paginator$: Observable<PrizmLanguagePaginator['paginator']>, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    /**
     * Updates the list of page options to display to the user.
     */
    paginationGenerator(): PrizmPaginatorData | null;
    get realTotalRecord(): number | null;
    /**
     * Tries to normalize paginator configuration.
     */
    get isDataValid(): boolean;
    changePage(page: number): void;
    increase(): void;
    decrease(): void;
    toLastPage(): void;
    toFirstPage(): void;
    private emitPageChange;
    private emitPaginatorChanges;
    changeRows(rows: null | number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmPaginatorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmPaginatorComponent, "prizm-paginator", never, { "paginatorType": "paginatorType"; "textOnPage": "textOnPage"; "totalRecords": "totalRecords"; "pageLinkSize": "pageLinkSize"; "showMoreDisabled": "showMoreDisabled"; "disabled": "disabled"; "rows": "rows"; "page": "page"; "paginatorOptions": "paginatorOptions"; "leftButtonLabel": "leftButtonLabel"; "rightButtonLabel": "rightButtonLabel"; "moreButtonLabel": "moreButtonLabel"; "rowsCountOptions": "rowsCountOptions"; }, { "paginatorChange": "paginatorChange"; "pageChange": "pageChange"; "rowsChange": "rowsChange"; }, never, never, true, never>;
}
