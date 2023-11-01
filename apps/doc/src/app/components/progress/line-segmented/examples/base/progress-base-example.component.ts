import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { map, startWith, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'prizm-progress-base-example',
  templateUrl: './progress-base-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }

      [prizmProgressLabel] {
        width: 100%;
      }

      .label-wrapper {
        width: 50%;
      }
    `,
  ],
})
export class PrizmProgressBaseExampleComponent {
  readonly max = 30;
  readonly value$ = timer(300, 500).pipe(
    map(i => i + 2),
    takeWhile(i => i != this.max + 1),
    startWith(2)
  );
  readonly colors = [`var(---prizm-v3-status-warning-primary-default)`, `lightskyblue`, `#3682db`, `red`];
}
