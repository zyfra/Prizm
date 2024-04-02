import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'prizmFileName', standalone: true })
export class PrizmFileNamePipe implements PipeTransform {
  public transform(fileFullName: string): string {
    return fileFullName.split('.').slice(0, -1).join('.');
  }
}
