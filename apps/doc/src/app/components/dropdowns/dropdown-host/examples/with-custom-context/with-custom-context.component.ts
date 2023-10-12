import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'prizm-dropdown-host-example-with-custom-context',
  templateUrl: './with-custom-context.component.html',
  styles: [
    `
      .box {
        display: flex;
        flex-flow: column;
        gap: 8px;
        padding: 16px;
        color: var(--prizm-text-contrast);
      }

      [prizmButton] {
        width: 100%;
      }
    `,
  ],
})
export class PrizmDropdownHostExampleWithCustomContextComponent {
  open = false;
  customData = { customValue: 1, content: 'EXAMPLE' };

  constructor(public readonly cdRef: ChangeDetectorRef) {}
}
