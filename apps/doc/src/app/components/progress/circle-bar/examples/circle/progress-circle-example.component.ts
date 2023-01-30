import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { map, startWith, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'prizm-progress-circle-example',
  templateUrl: './progress-circle-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }

      .block {
        display: flex;
        gap: 4rem;
      }

      .percent {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
      }
    `,
  ],
})
export class PrizmProgressCircleExampleComponent {
  readonly value$ = timer(300, 500).pipe(
    map(i => i + 30),
    takeWhile(i => i != 101),
    startWith(30)
  );
  readonly colors = [`var(--prizm-index-warning)`, `lightskyblue`, `#3682db`, `red`];
  readonly max = 100;
}
