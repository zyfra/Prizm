import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'zui-tooltip-some-component',
  template: `
    <div>Header</div>
    <div class="button-box">
      <button zuiButton *ngFor="let item of items">{{item}}</button>
    </div>
    <div>Footer</div>
  `,
  styles: [`
    .button-box {
      display: grid;
      grid-template-rows: 1fr;
      gap: 8px;
    }

    button {
      width: 100%;
    }
  `]
})
export class ZuiTooltipSomeComponent {
  readonly items = [
    'Edit',
    'Download',
    'Rename',
    'Edit',
    'Download',
    'Rename',
    'Delete'
  ];
}
