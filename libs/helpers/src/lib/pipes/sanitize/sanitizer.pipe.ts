import { Pipe, PipeTransform } from '@angular/core';

import { DomSanitizer, SafeValue } from '@angular/platform-browser';

type Method = Exclude<keyof DomSanitizer, 'sanitize'>;

@Pipe({
  name: 'prizmSanitizer',
})
export class PrizmSanitizerPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  public transform(value: string, method: Method): SafeValue {
    return this.sanitizer[method](value);
  }
}
