import { Component } from '@angular/core';

@Component({
  selector: 'prizm-dropdown-cell-base-example',
  templateUrl: './dropdown-cell-base-example.component.html',
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 16px;
        background-color: var(--prizm-v3-background-fill-secondary);
      }

      prizm-dropdown-cell {
        max-width: 300px;
      }
    `,
  ],
})
export class PrizmDropdownCellBaseExampleComponent {
  public open = false;
}
