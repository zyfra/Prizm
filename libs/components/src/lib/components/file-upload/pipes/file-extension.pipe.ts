import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'prizmFileExtension', standalone: true })
export class PrizmFileExtensionPipe implements PipeTransform {
  public transform(fileFullName: string): string {
    return `.${fileFullName.split('.').pop()}` || '';
  }
}
