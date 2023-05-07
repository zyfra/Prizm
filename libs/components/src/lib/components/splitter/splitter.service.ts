import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { PrizmSplitterAreaComponent } from './area/area.component';

export class PrizmSplitterService {
  areaInputSizeChange$$ = new Subject<PrizmSplitterAreaComponent>();

  areasUpdate$$ = new Subject<void>();

  accuracy = 8;

  private toFixed(num: number): number {
    return +num.toFixed(this.accuracy);
  }

  public mathOperation(a: number, b: number, operation: string): number {
    const accuracyNumber = 10 ** this.accuracy;
    const newA = this.toFixed(a) * accuracyNumber;
    const newB = this.toFixed(b) * accuracyNumber;

    switch (operation) {
      case '-': {
        return Math.round(newA - newB) / accuracyNumber;
      }

      case '+': {
        return Math.round(newA + newB) / accuracyNumber;
      }

      case '*': {
        return (newA * newB) / accuracyNumber ** 2;
      }

      case '/': {
        return newA / newB;
      }
    }
    return NaN;
  }
}
