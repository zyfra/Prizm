import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prizmPluck',
})
export class PrizmPluckPipe implements PipeTransform {
  public transform<T, K extends keyof T>(input: T, key: K): T[K] {
    if (!Array.isArray(input)) {
      throw new Error('prizmPluck in input instead of object or array, get ' + input)
    }
    if (key == null) {
      throw new Error('prizmPluck in key instead of valid key, get ' + key)
    }

    return input[key];
  }
}
