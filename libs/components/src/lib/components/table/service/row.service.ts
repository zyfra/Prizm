import { Injectable } from '@angular/core';
import { prizmPure } from '@prizm-ui/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Compare } from '@prizm-ui/helpers';

@Injectable()
export class PrizmTableRowService {
  private idxCount = -1;

  public incrementIdx(): void {
    this.idxCount++;
  }
  public getIdx(): number {
    return this.idxCount;
  }
}
