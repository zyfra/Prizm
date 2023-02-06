import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class PrizmTableDataService<T> {
  private data$$ = new BehaviorSubject<T[]>([]);

  get data(): T[] {
    return this.data$$.value;
  }
  get data$(): Observable<T[]> {
    return this.data$$.asObservable();
  }
  public set(data: T[]): void {
    this.data$$.next(data);
  }
}
