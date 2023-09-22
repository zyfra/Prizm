import { Component } from '@angular/core';

@Component({
  selector: 'prizm-hint-some-component',
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
        padding: 8px;
      }

      button {
        width: 100%;
      }
    `,
  ],
})
export class PrizmHintSomeComponent {
  readonly items = ['Edit', 'Download', 'Rename', 'Edit', 'Download', 'Rename', 'Delete'];
}
