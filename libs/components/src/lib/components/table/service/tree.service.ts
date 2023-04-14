import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PrizmTableTreeService {
  private readonly map = new Map<number, boolean>();
  private readonly changes$$ = new ReplaySubject(1);
  public readonly changes$ = this.changes$$.asObservable();

  public canShowChild(id: number): Observable<boolean> {
    return this.changes$.pipe(map(() => Boolean(this.map.get(id))));
  }

  public showChildren(idx: number): void {
    this.updateMap(idx, true);
  }

  public hideChildren(idx: number): void {
    this.updateMap(idx, false);
  }

  public toggleChildren(idx: number): void {
    this.map.get(idx) ? this.hideChildren(idx) : this.showChildren(idx);
  }

  private updateMap(idx: number, value: boolean): void {
    this.map.set(idx, value);
    this.changes$$.next(this.map);
  }

  public isChildrenOpened(idx: number): boolean {
    return Boolean(this.map.get(idx));
  }
}
