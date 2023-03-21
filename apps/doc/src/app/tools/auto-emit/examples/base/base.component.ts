import { Component, EventEmitter, Input } from '@angular/core';
import { prizmAutoEmit, prizmObservable } from '@prizm-ui/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

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
  inputOneChange = new EventEmitter<number>();

  @Input()
  @prizmAutoEmit()
  inputOne = 100;

  secondTest$$ = new Subject<number>();
  @prizmAutoEmit({
    name: 'secondTest$$',
  })
  test2 = 200;

  calculated$$ = new BehaviorSubject<number>(0);
  @prizmAutoEmit({
    defaultValue: null,
    name: 'calculated$$',
    calculate: (value: number, self: PrizmObservableBaseExampleComponent) => value * 2,
  })
  test3 = 300;

  test2PlusCurrent$$ = new BehaviorSubject<number>(0);
  @prizmAutoEmit({
    defaultValue: null,
    name: 'test2PlusCurrent$$',
    calculate: (value: number, self: PrizmObservableBaseExampleComponent) => {
      return self.test2 + value;
    },
  })
  test4 = 800;

  public plus(): void {
    this.test4++;
    this.test3++;
    this.test2++;
    this.inputOne++;
  }
}
