import { Injectable } from '@angular/core';
import { PrizmInputInZoneDirective } from './input-in-zone.directive';
import { Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PrizmInputZoneService {
  private readonly map = new Map<number, PrizmInputInZoneDirective>();
  private readonly changes$$ = new Subject<void>();
  public readonly changes$ = this.changes$$.asObservable();
  get elements() {
    return Array.from(this.map.values());
  }
  public readonly elements$: Observable<PrizmInputInZoneDirective[]> = this.changes$.pipe(
    startWith(null),
    map(() => this.elements)
  );

  public set(idx: number, input: PrizmInputInZoneDirective): void {
    this.map.set(idx, input);
    this.changes$$.next();
  }

  public getIdx(input: PrizmInputInZoneDirective): number {
    for (const entry of Array.from(this.map.entries())) {
      if (entry[1] === input) return entry[0];
    }
    return -1;
  }

  public getByIdx(idx: number): PrizmInputInZoneDirective | null {
    return this.map.get(idx) ?? null;
  }

  public add(input: PrizmInputInZoneDirective): number {
    const idx = Math.max(-1, ...Array.from(this.map.keys())) + 1;
    this.map.set(idx, input);
    this.changes$$.next();
    return idx;
  }

  public delete(idx: number): void {
    this.map.delete(idx);
    this.changes$$.next();
  }
}
