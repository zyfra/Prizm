import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'prizm-dropdown-host-example-by-method',
  templateUrl: './by-method-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        flex-flow: column;
        gap: 8px;
        padding: 16px;
      }

      .buttons {
        display: flex;
        gap: 8px;
        margin: 8px 0 16px 0;
      }
    `,
  ],
})
export class PrizmDropdownHostExampleByMethodComponent {
  open = false;
  constructor(public readonly cdRef: ChangeDetectorRef) {}
}
