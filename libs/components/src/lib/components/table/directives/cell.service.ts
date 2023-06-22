import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class PrizmCellService {
  readonly changes$$ = new ReplaySubject<void>(0);
}
