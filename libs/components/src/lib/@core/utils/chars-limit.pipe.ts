import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charLimit',
})
export class CharLimitPipe implements PipeTransform {
  transform(str: string, charLengthLimit: number): string {
    if (typeof str !== 'string') return str;
    return str.length > charLengthLimit ? str.slice(0, charLengthLimit) + '...' : str;
  }
}
