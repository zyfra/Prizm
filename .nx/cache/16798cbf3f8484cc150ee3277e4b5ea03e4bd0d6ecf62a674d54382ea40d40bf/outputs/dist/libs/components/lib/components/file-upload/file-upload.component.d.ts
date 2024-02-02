import { AfterViewInit, ElementRef, EventEmitter, OnDestroy, Renderer2 } from '@angular/core';
import { PrizmFilesMap, PrizmFilesProgress, PrizmFileUploadOptions, PrizmFileValidationErrors } from './types';
import { Observable } from 'rxjs';
import { PrizmLanguageFileUpload } from '@prizm-ui/i18n';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class PrizmFileUploadComponent extends PrizmAbstractTestId implements AfterViewInit, OnDestroy {
    private renderer;
    readonly fileUpload$: Observable<PrizmLanguageFileUpload['fileUpload']>;
    dropzoneElementRef: ElementRef<HTMLDivElement>;
    readonly testId_ = "ui_file_upload";
    options: PrizmFileUploadOptions;
    constructor(renderer: Renderer2, fileUpload$: Observable<PrizmLanguageFileUpload['fileUpload']>, customOptions: PrizmFileUploadOptions);
    private listeners;
    private validationErrors;
    accept: string;
    multiple: boolean;
    maxFileSize: number;
    maxFilesCount: number;
    get disabled(): BooleanInput;
    set disabled(value: BooleanInput);
    private _disabled;
    set progress(progress: PrizmFilesProgress);
    beforeFilesChange: EventEmitter<void>;
    filesChange: EventEmitter<File[]>;
    filesValidationErrors: EventEmitter<{
        [filename: string]: PrizmFileValidationErrors;
    }>;
    filesCountError: EventEmitter<string[]>;
    retry: EventEmitter<File>;
    filesMap: PrizmFilesMap;
    get files(): Array<File>;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onDrop(event: DragEvent): void;
    onFileInputChange(event: Event): void;
    getFileExtension(file: File): string;
    removeFile(filename: string, options?: {
        emitEvent: boolean;
    }): void;
    clearFiles(options?: {
        emitEvent: boolean;
    }): void;
    filesTrackBy(index: number, file: {
        key: string;
        value: any;
    }): string;
    retryUpload(filename: string): void;
    private dropzoneDragOverListener;
    private dropzoneDragLeaveListener;
    private selectFiles;
    private validate;
    private emitValidationErrors;
    private isImage;
    private isFileTypeValid;
    private getTypeClass;
    private isWildcard;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmFileUploadComponent, [null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmFileUploadComponent, "prizm-file-upload", never, { "accept": "accept"; "multiple": "multiple"; "maxFileSize": "maxFileSize"; "maxFilesCount": "maxFilesCount"; "disabled": "disabled"; "progress": "progress"; }, { "beforeFilesChange": "beforeFilesChange"; "filesChange": "filesChange"; "filesValidationErrors": "filesValidationErrors"; "filesCountError": "filesCountError"; "retry": "retry"; }, never, ["*"], true, never>;
}
