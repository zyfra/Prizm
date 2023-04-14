```ts
import { Component } from '@angular/core';
import { prizmAutoEmit } from '@prizm-ui/core';

@Component({
  selector: 'prizm-observable-base-example',
})
export class PrizmObservableBaseExampleComponent {
  @Input()
  @prizmAutoEmit()
  inputOne = 100;

  public plus() {
    this.inputOne++;
  }
}
```
