import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';

@Injectable({providedIn: "root"})
export class PrizmHintService {
  private readonly subHoveredSource$ = new ReplaySubject<{id: string, hovered: boolean}>();

  public childHovered(hintId: string): Observable<boolean> {
    return this.subHoveredSource$.pipe(
      filter(({id}) => id === hintId),
      map(({hovered}) => hovered),
      startWith(false)
    )
  }

  public emit(hintId: string, hovered: boolean): void {
    this.subHoveredSource$.next({id: hintId, hovered});
  }
}
