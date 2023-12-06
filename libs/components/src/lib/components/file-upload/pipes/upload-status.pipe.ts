import { Pipe, PipeTransform } from '@angular/core';
import { UploadingStatusEnum } from '../file-upload.enums';

@Pipe({ name: 'prizmUploadStatus', standalone: true })
export class PrizmUploadStatusPipe implements PipeTransform {
  public transform(progress: number, error: boolean): UploadingStatusEnum {
    if (error) {
      return UploadingStatusEnum.warning;
    }

    if (progress === 0) {
      return UploadingStatusEnum.idle;
    }

    if (progress === 100) {
      return UploadingStatusEnum.success;
    }

    return UploadingStatusEnum.progress;
  }
}
