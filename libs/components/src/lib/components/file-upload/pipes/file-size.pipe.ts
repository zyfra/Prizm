import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'prizmFileSize', standalone: true })
export class PrizmFileSizePipe implements PipeTransform {
  public transform(size: number): string {
    if (size < 1024) {
      return size + 'bytes';
    } else if (size > 1024 && size < 1048576) {
      return (size / 1024).toFixed(1) + 'KB';
    } else if (size > 1048576) {
      return (size / 1048576).toFixed(1) + 'MB';
    }

    return '';
  }
}
