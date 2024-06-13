import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'prizmFileSize', standalone: true })
export class PrizmFileSizePipe implements PipeTransform {
  public transform(size: number): {
    value: number | string;
    key: 'file_size__byte' | 'file_size__kb' | 'file_size__mb' | null;
  } {
    if (size < 1024) {
      return {
        value: size,
        key: 'file_size__byte',
      };
    } else if (size >= 1024 && size < 1048576) {
      return {
        value: (size / 1024).toFixed(1),
        key: 'file_size__kb',
      };
    } else if (size >= 1048576) {
      return {
        value: (size / 1048576).toFixed(1),
        key: 'file_size__mb',
      };
    }

    return {
      value: size,
      key: null,
    };
  }
}
