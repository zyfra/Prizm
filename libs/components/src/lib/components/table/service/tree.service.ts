import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Compare } from '@prizm-ui/helpers';

@Injectable()
export class PrizmTableTreeService {
  public readonly showDirectChildrenMap = new Map<number, boolean | null>();
  private readonly showAllChildrenMap = new Map<number, boolean>();
  private readonly changes$$ = new ReplaySubject(1);
  public readonly changes$ = this.changes$$.asObservable();
  private readonly nestedStructure = new Map<number, number>();
  public canShowChild(idx: number): Observable<boolean> {
    return this.changes$.pipe(
      startWith(null),
      map(() => this.isChildrenOpened(idx))
    );
  }

  public isChildrenOpened(idx: number): boolean {
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
    return Boolean(result);
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
    const allCurrentIdChildren = Array.from(flipped.get(idx) ?? []);
    return [
      ...allCurrentIdChildren,
      ...allCurrentIdChildren.reduce((base, idx) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
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

  private showHideAll(show: boolean, idx?: number | null) {
    let children: number[];
    if (typeof idx === 'number') {
      children = [...this.findAllChildren(idx), idx];
    } else {
      children = [...this.showDirectChildrenMap.keys()];
    }
    for (const child of children) {
      this.showHideAllNested(child, show);
      this.showDirectChildrenMap.set(child, show);
    }
    this.changes$$.next(this.showDirectChildrenMap);
  }

  public showAllChildren(idx?: number | null) {
    this.showHideAll(true, idx);
  }

  public hideAllChildren(idx?: number | null) {
    this.showHideAll(false, idx);
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

  public init(idx: number): void {
    this.showDirectChildrenMap.set(idx, null);
  }
}
