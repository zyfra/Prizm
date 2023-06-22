import { Inject, Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'spaceNumber',
})
export class SpaceNumberPipe implements PipeTransform {
  constructor(@Inject(DecimalPipe) private readonly decimal: DecimalPipe) {}

  public transform(value: string | number, ...args: string[]): string {
    return this.decimal.transform(value, ...args).replace(',', ' ');
  }
}
