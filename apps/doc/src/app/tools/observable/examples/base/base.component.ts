import { Component } from '@angular/core';
import { prizmObservable } from '@prizm-ui/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

const symbol = Symbol('test symbol');

@Component({
  selector: 'prizm-observable-base-example',
  templateUrl: './base.component.html',
  styles: [
    `
      .block {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmObservableBaseExampleComponent {
  @prizmObservable()
  test1: number;
  test1$$!: ReplaySubject<number>;

  @prizmObservable({
    name: 'secondTest$$',
  })
  test2: number;
  secondTest$$!: ReplaySubject<number>;

  @prizmObservable({
    defaultValue: null,
    subject: new BehaviorSubject(null),
  })
  test3: number;
  test3$$!: BehaviorSubject<number>;

  @prizmObservable({
    name: 'enumerable$$',
    attributes: {
      enumerable: true,
    },
  })
  test4: number;
  enumerable$$!: ReplaySubject<number>;

  @prizmObservable({
    name: symbol,
    attributes: {
      enumerable: true,
    },
  })
  test5: number;

  public getFromSymbol(): Observable<any> {
    return this[symbol];
  }

  public plus(): void {
    this.test5++;
    this.test4++;
    this.test3++;
    this.test2++;
    this.test1++;
  }
}
