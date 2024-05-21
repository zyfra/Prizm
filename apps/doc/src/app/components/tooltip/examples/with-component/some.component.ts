import { Component, inject } from '@angular/core';
import { PrizmOverlayControl } from '@prizm-ui/components';

@Component({
  selector: 'prizm-tooltip-some-component',
  template: `
    <div>Header</div>
    <div class="button-box">
      <button *ngFor="let item of items" prizmButton>{{ item }}</button>

      <button (click)="overlayControl.close()" prizmButton appearance="danger">Закрыть</button>
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
export class PrizmTooltipSomeComponent {
  readonly overlayControl = inject(PrizmOverlayControl);
  readonly items = ['Edit', 'Download', 'Rename', 'Edit', 'Download', 'Rename', 'Delete'];
}
