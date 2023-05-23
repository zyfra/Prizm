import { Component } from '@angular/core';

@Component({
  selector: 'prizm-tooltip-some-component',
  template: `
    <div>Header</div>
    <div class="button-box">
      <button *ngFor="let item of items" prizmButton>{{ item }}</button>
    </div>
    <div>Footer</div>
  `,
  styles: [
    `
      .button-box {
        display: grid;
        grid-template-rows: 1fr;
        gap: 8px;
      }

      button {
        width: 100%;
      }
    `,
  ],
})
export class PrizmTooltipSomeComponent {
  readonly items = ['Edit', 'Download', 'Rename', 'Edit', 'Download', 'Rename', 'Delete'];
}
