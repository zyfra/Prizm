import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'prizm-dropdown-host-custom-style-example',
  templateUrl: './custom-style-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        flex-flow: column;
        gap: 8px;
        padding: 16px;
      }

      [prizmButton] {
        width: 100%;
      }
    `,
  ],
})
export class PrizmDropdownHostCustomStyleComponent {
  open = false;
  constructor(public readonly cdRef: ChangeDetectorRef) {}
}
