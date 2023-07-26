import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Compare } from '@prizm-ui/helpers';

@Injectable()
export class PrizmTableTreeService {
  private readonly showDirectChildrenMap = new Map<number, boolean>();
  private readonly showAllChildrenMap = new Map<number, boolean>([[0, true]]);
  private readonly changes$$ = new ReplaySubject(1);
  public readonly changes$ = this.changes$$.asObservable();
  private readonly nestedStructure = new Map<number, number>();
  /**
   * показать всех детей потомков
   * показать всех
   * parent: child,
   * parent: [child1, child2]
   * child1: [child3]
   *
   * true > показать
   * false > скрыть
   *
   * Показать все
   * показ всех потомков текущих
   *
   * */
  public canShowChild(idx: number): Observable<boolean> {
    return this.changes$.pipe(
      // map(() => Boolean(this.map.get(idx))),
      startWith(null),
      map(() => {
        let result = this.showDirectChildrenMap.get(idx);

        if (Compare.isNullish(result)) {
          const parents = this.findAllParents(idx);
          for (const parent of [idx, ...parents]) {
            const parentResult = this.showAllChildrenMap.get(parent);
            if (typeof parentResult === 'boolean') {
              result = parentResult;
              break;
            }
          }
        }

        console.log('#mz flipNestedStructure', idx, this.flipNestedStructure());
        console.log('#mz findAllChildren', idx, this.findAllChildren(idx));
        return Boolean(result);
      })
    );
  }

  private findAllParents(childIdx: number): number[] {
    const result: number[] = [];
    const parent = this.nestedStructure.get(childIdx);
    if (Compare.isNullish(parent)) return result;
    result.push(parent, ...this.findAllParents(parent));
    return result;
  }

  /**
   * flip nestedStructure to (parent: children[])
   * */
  private flipNestedStructure(map = new Map<number, Set<number>>()): Map<number, Set<number>> {
    for (const [childIdx, parentIdx] of this.nestedStructure.entries()) {
      const setFromMap = map.get(parentIdx);
      const set = setFromMap ?? new Set();
      set.add(childIdx);
      if (!setFromMap) map.set(parentIdx, set);
    }
    return map;
  }

  private findAllChildren(idx: number, flipped = this.flipNestedStructure()): number[] {
    console.log('#mz flipped', [...flipped]);
    const allCurrentIdChildren = Array.from(flipped.get(idx) ?? []);
    return [
      ...allCurrentIdChildren,
      ...allCurrentIdChildren.reduce((base, idx) => {
        base.push(...this.findAllChildren(idx, flipped));
        return base;
      }, []),
    ];
  }

  public addChildToParent(childIdx: number, parentIdx: number) {
    this.nestedStructure.set(childIdx, parentIdx);
  }

  private showHideAllNested(idx: number, show: boolean): void {
    this.showAllChildrenMap.set(idx, show);
  }

  public openAllChildren(idx: number) {
    this.showHideAllNested(idx, true);
  }

  public closeAllChildren(idx: number) {
    this.showHideAllNested(idx, false);
  }

  public showChildren(idx: number): void {
    this.updateMap(idx, true);
  }

  public hideChildren(idx: number): void {
    this.updateMap(idx, false);
  }

  public toggleChildren(idx: number): void {
    this.showDirectChildrenMap.get(idx) ? this.hideChildren(idx) : this.showChildren(idx);
  }

  private updateMap(idx: number, value: boolean): void {
    this.showDirectChildrenMap.set(idx, value);
    this.changes$$.next(this.showDirectChildrenMap);
  }

  public isChildrenOpened(idx: number): boolean {
    return Boolean(this.showDirectChildrenMap.get(idx));
  }
}
