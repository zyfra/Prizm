import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PrizmTableCellSorter, PrizmTableCellSortOrder } from './model';

@Injectable()
export class PrizmTableSorterService<T> {
  private readonly map = new Map<string, PrizmTableCellSorter<T>>();
  private readonly sorters$$ = new BehaviorSubject<PrizmTableCellSorter<T>[]>([]);

  public get changes$(): Observable<PrizmTableCellSorter<T>[]> {
    return this.sorters$$.asObservable();
  }
  public sortCell(sorter: PrizmTableCellSorter<T>, clearPrevious: boolean): void {
    if (clearPrevious) this.map.clear();
    const { options } = sorter;
    const { id, order } = options;
    if (!order) {
      this.map.delete(id);
    } else this.map.set(id, sorter);
    this.emit();
  }

  public cell$(id: string): Observable<PrizmTableCellSorter<T>> {
    return this.sorters$$.pipe(map(() => this.cell(id)));
  }

  public cell(id: string): PrizmTableCellSorter<T> {
    return this.map.get(id);
  }

  public cellOrder(id: string): PrizmTableCellSortOrder {
    return this.cell(id)?.options.order;
  }
  public nextOrder(id: string): PrizmTableCellSortOrder {
    const current = this.cellOrder(id);
    switch (current) {
      case 'asc':
        return 'desc';
      case 'desc':
        return null;

      default:
        return 'asc';
    }
  }

  public sort$(data: T[]): Observable<T[]> {
    return this.sorters$$.pipe(map(i => this.sort(data)));
  }

  public sort(data: T[]): T[] {
    const all = [...this.map.values()];
    return [...(data ?? [])].sort((a: T, b: T) => {
      for (const item of all) {
        const result = item.sorter(a, b, item.options);
        if (result) return result;
      }

      return 0;
    });
  }

  private emit(): void {
    this.sorters$$.next([...this.map.values()]);
  }

  public isActive(id: string): boolean {
    return !!this.map.get(id);
  }
}
