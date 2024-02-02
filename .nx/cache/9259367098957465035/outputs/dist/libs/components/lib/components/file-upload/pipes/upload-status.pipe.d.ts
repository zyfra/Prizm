import { PipeTransform } from '@angular/core';
import { UploadingStatusEnum } from '../file-upload.enums';
import * as i0 from "@angular/core";
export declare class PrizmUploadStatusPipe implements PipeTransform {
    transform(progress: number, error: boolean): UploadingStatusEnum;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmUploadStatusPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PrizmUploadStatusPipe, "prizmUploadStatus", true>;
}
