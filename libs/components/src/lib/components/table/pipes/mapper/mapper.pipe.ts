import { Pipe, PipeTransform } from '@angular/core';

export type PrizmMapper<T, G> = (item: T, ...args: any[]) => G;

@Pipe({ name: `prizmMapper` })
export class PrizmMapperPipe implements PipeTransform {
  /**
   * Maps object to an arbitrary result through a mapper function
   *
   * @param value an item to transform
   * @param mapper a mapping function
   * @param args arbitrary number of additional arguments
   */
  public transform<T, G>(value: T, mapper: PrizmMapper<T, G>, ...args: any[]): G {
    return mapper(value, ...args);
  }
}
