import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PrizmPluckPipe implements PipeTransform {
    transform<T, K extends keyof T & string>(input: T | null, arr: K, defaultValue?: unknown): T extends null ? null : T[K];
    transform<T, K extends keyof T & string>(input: T | null, arr: [K], defaultValue?: unknown): T extends null ? null : T[K];
    transform<T, K extends keyof T, K2 extends keyof T[K]>(input: T | null, arr: [K, K2], defaultValue?: unknown): T[K][K2];
    transform<T, K extends keyof T, K2 extends keyof T[K], K3 extends keyof T[K][K2]>(input: T | null, arr: [K, K2, K3], defaultValue?: unknown): T extends null ? null : T[K][K2][K3];
    transform<T, K extends keyof T, K2 extends keyof T[K], K3 extends keyof T[K][K2], K4 extends keyof T[K][K2][K3]>(input: T | null, arr: [K, K2, K3, K4], defaultValue?: unknown): T extends null ? null : T[K][K2][K3][K4];
    transform<T, K extends keyof T, K2 extends keyof T[K], K3 extends keyof T[K][K2], K4 extends keyof T[K][K2][K3], K5 extends keyof T[K][K2][K3][K4]>(input: T | null, arr: [K, K2, K3, K4, K5], defaultValue?: unknown): T extends null ? null : T[K][K2][K3][K4][K5];
    transform<T, K extends keyof T, K2 extends keyof T[K], K3 extends keyof T[K][K2], K4 extends keyof T[K][K2][K3], K5 extends keyof T[K][K2][K3][K4], K6 extends keyof T[K][K2][K3][K4][K5]>(input: T | null, arr: [K, K2, K3, K4, K5, K6], defaultValue?: unknown): T extends null ? null : T[K][K2][K3][K4][K5][K6];
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmPluckPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PrizmPluckPipe, "prizmPluck", true>;
}
