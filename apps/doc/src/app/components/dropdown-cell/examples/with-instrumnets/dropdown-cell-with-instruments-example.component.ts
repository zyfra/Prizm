import { Component } from '@angular/core';

@Component({
  selector: 'prizm-dropdown-cell-with-instrumnets-example',
  templateUrl: './dropdown-cell-with-instruments-example.component.html',
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
export class PrizmDropdownCellWithInstrumnetsExampleComponent {
  readonly cells = [
    {
      title: 'My Cell',
      disabled: false,
      selected: false,
      count: 10,
    },
    {
      title: 'My Selected Cell',
      disabled: false,
      selected: true,
      count: 9,
    },
    {
      title: 'My Disabled Cell',
      disabled: true,
      selected: false,
      count: 0,
    },
  ];
}
