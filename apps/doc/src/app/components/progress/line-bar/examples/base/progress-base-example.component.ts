import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { map, startWith, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'zui-progress-base-example',
  templateUrl: './progress-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }

    [zuiProgressLabel] {
      width: 100%;
    }

    .label-wrapper {
      width: 50%;
    }

    .progress {
      &:nth-child(1) {
        color: #a3ecb3;
      }
      &:nth-child(2) {
        color: #39b54a;
      }
    }
  `]
})
export class ZuiProgressBaseExampleComponent {
  readonly value$ = timer(300, 500).pipe(
      map(i => i + 30),
      takeWhile(i => i != 101),
      startWith(30),
  );
  readonly colors = [
    `var(--zui-index-warning)`,
    `lightskyblue`,
    `#3682db`,
    `red`,
  ];
  readonly max = 100;
}
