import { NgZone } from '@angular/core';
import { MonoTypeOperatorFunction } from 'rxjs';
export declare function prizmZoneFull<T>(ngZone: NgZone): MonoTypeOperatorFunction<T>;
export declare function prizmZoneFree<T>(ngZone: NgZone): MonoTypeOperatorFunction<T>;
export declare function prizmZoneOptimized<T>(ngZone: NgZone): MonoTypeOperatorFunction<T>;
