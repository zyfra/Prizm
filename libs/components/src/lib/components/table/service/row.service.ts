import { Injectable } from '@angular/core';
import { prizmPure } from '@prizm-ui/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Compare } from '@prizm-ui/helpers';

@Injectable()
export class PrizmTableRowService {
  private idxCount = -1;
  private readonly map = new Map<unknown, number>();

  public saveId(id: unknown, idx: number): void {
    this.map.set(id, idx);
  }
  public getIdxById(id: unknown): number | null {
    return this.map.get(id) ?? null;
  }

  public incrementIdx(): void {
    this.idxCount++;
  }
  public getLastIncrementedIdx(): number {
    return this.idxCount;
  }
}
