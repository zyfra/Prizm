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

    //.progress-block {
    //  display: flex;
    //  gap: 8px;
    //  align-items: center;
    //}
  `]
})
export class ZuiProgressBaseExampleComponent {
  readonly max = 30;
  readonly value$ = timer(300, 500).pipe(
      map(i => i + 2),
      takeWhile(i => i != this.max + 1),
      startWith(2),
  );
  readonly colors = [
    `var(--zui-index-warning)`,
    `lightskyblue`,
    `#3682db`,
    `red`,
  ];
}
