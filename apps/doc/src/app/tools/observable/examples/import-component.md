```ts
import { Component } from '@angular/core';
import { prizmObservable } from '@prizm-ui/core';

@Component({
  selector: 'prizm-observable-base-example',
})
export class PrizmObservableBaseExampleComponent {
  @prizmObservable()
  test1: number;
  test1$$!: ReplaySubject<number>;

  public plus() {
    this.test1++;
  }
}
```
