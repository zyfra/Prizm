import { Component } from '@angular/core';
import { delay } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'prizm-to-observable-base-example',
  templateUrl: './to-obsrvable-base-example.component.html',
})
export class PrizmToObservableBaseExampleComponent {
  delay = delay(3000);
  counter = 0;
  counter$ = new BehaviorSubject(this.counter);
}
