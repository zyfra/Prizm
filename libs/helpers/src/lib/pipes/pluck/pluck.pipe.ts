import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prizmPluck',
})
export class PrizmPluckPipe implements PipeTransform {
  public transform<T, K extends keyof T>(input: T, arr: [K], defaultValue?: unknown): T[K];
  public transform<T, K extends keyof T, K2 extends keyof T[K]>(
    input: T,
    arr: [K, K2],
    defaultValue?: unknown
  ): T[K][K2];
  public transform<T, K extends keyof T, K2 extends keyof T[K], K3 extends keyof T[K][K2]>(
    input: T,
    arr: [K, K2, K3],
    defaultValue?: unknown
  ): T[K][K2][K3];
  public transform<
    T,
    K extends keyof T,
    K2 extends keyof T[K],
    K3 extends keyof T[K][K2],
    K4 extends keyof T[K][K2][K3]
  >(input: T, arr: [K, K2, K3, K4], defaultValue?: unknown): T[K][K2][K3][K4];
  public transform<
    T,
    K extends keyof T,
    K2 extends keyof T[K],
    K3 extends keyof T[K][K2],
    K4 extends keyof T[K][K2][K3],
    K5 extends keyof T[K][K2][K3][K4]
  >(input: T, arr: [K, K2, K3, K4, K5], defaultValue?: unknown): T[K][K2][K3][K4][K5];
  public transform<
    T,
    K extends keyof T,
    K2 extends keyof T[K],
    K3 extends keyof T[K][K2],
    K4 extends keyof T[K][K2][K3],
    K5 extends keyof T[K][K2][K3][K4],
    K6 extends keyof T[K][K2][K3][K4][K5]
  >(input: T, arr: [K, K2, K3, K4, K5, K6], defaultValue?: unknown): T[K][K2][K3][K4][K5][K6];
  // public transform<T, K extends keyof T>(input: T, key: K, defaultValue?: unknown): T[K]
  public transform<T, K extends keyof T, K2 extends keyof T[K], K3 extends keyof T[K][K2]>(
    input: T,
    key: K | [K] | [K, K2] | [K, K2, K3],
    defaultValue: unknown = null
  ): unknown {
    if (!input || typeof input !== 'object') {
      throw new Error('prizmPluck in input instead of object or array, get ' + input);
    }
    if (key == null) {
      throw new Error('prizmPluck in key instead of valid key, get ' + key);
    }

    if (Array.isArray(key)) {
      let result = input as any;
      for (const k of key) {
        result = result?.[k];
      }
      return result ?? defaultValue;
    }

    return input?.[key] ?? defaultValue;
  }
}
