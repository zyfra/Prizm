import { Component } from '@angular/core';

@Component({
  selector: 'prizm-dropdown-cell-chips-example',
  templateUrl: './dropdown-cell-chips-example.component.html',
  styles: [
    `
      .container {
        display: flex;
        align-items: center;
        gap: 24px;
        padding: 16px;
        background-color: var(--prizm-v3-background-fill-secondary);
      }

      prizm-dropdown-cell {
        min-width: 200px;
      }
    `,
  ],
})
export class PrizmDropdownCellChipsExampleComponent {}
