import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PrizmTableCellSorter, PrizmTableCellSortOrder } from './model';

@Injectable()
export class PrizmTableSorterService<T> {
  private readonly map = new Map<string, PrizmTableCellSorter<T>>();
  private readonly sorters$$ = new BehaviorSubject<PrizmTableCellSorter<T>[]>([]);

  get value(): PrizmTableCellSorter<T>[] {
    return [...this.map.values()];
  }

  get count(): number {
    return this.map.size;
  }
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

  public remove(id: string): void {
    this.map.delete(id);
    this.emit();
  }

  public set(sorter: PrizmTableCellSorter<T>[]): void {
    this.map.clear();
    for (const item of sorter) {
      this.map.set(item.options.id, item);
    }

    this.emit();
  }

  public cell$(id: string): Observable<PrizmTableCellSorter<T>> {
    return this.sorters$$.pipe(map(() => this.cell(id)));
  }

  public cell(id: string): PrizmTableCellSorter<T> {
    return this.map.get(id) as PrizmTableCellSorter<T>;
  }

  public cellOrder(id: string): PrizmTableCellSortOrder {
    return this.cell(id)?.options.order;
  }
  public nextOrder(id: string): PrizmTableCellSortOrder | null {
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

  public sort$(data: T[]): Observable<readonly T[]> {
    return this.sorters$$.pipe(map(() => this.sort(data)));
  }

  public sort(data: T[], all = this.value): T[] {
    return [...(data ?? [])].sort((a: T, b: T) => {
      for (const item of all) {
        if (typeof item.sorter !== 'function') return 0;
        const result = item.sorter(a, b, item.options);
        if (result) return result;
      }

      return 0;
    });
  }

  private emit(): void {
    this.sorters$$.next(this.value);
  }

  public isActive(id: string): boolean {
    return !!this.map.get(id);
  }

  public idx(id: string): number {
    return [...this.map.keys()].indexOf(id);
  }
}
