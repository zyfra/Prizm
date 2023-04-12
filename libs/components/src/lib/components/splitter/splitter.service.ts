import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { PrizmSplitterAreaComponent } from './area/area.component';

export class PrizmSplitterService {
  guttersSize$$ = new BehaviorSubject(0);
  areaChange$$ = new ReplaySubject<PrizmSplitterAreaComponent>();
}

