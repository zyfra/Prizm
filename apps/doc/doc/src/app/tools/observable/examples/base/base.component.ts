import { Component, OnInit } from '@angular/core';
import { prizmObservable } from '@prizm-ui/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

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
  test1$$!: Subject<number>;

  @prizmObservable({
    name: 'secondTest$$',
    subject: new ReplaySubject(),
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
    subject: new ReplaySubject(),
    attributes: {
      enumerable: true,
    },
  })
  test4: number;
  enumerable$$!: ReplaySubject<number>;

  @prizmObservable({
    name: symbol,
    subject: new ReplaySubject(),
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
