import { Component } from '@angular/core';

@Component({
  selector: 'pzm-tooltip-some-component',
  template: `
    <div>Header</div>
    <div class="button-box">
      <button pzmButton *ngFor="let item of items">{{ item }}</button>
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
export class PzmTooltipSomeComponent {
  readonly items = ['Edit', 'Download', 'Rename', 'Edit', 'Download', 'Rename', 'Delete'];
}
