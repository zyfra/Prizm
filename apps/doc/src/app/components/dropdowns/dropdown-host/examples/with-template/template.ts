import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'prizm-dropdown-host-example-with-template',
  templateUrl: './template.html',
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
export class PrizmDropdownHostExampleWithTemplateComponent {
  open: boolean = false;

  constructor(public readonly cdRef: ChangeDetectorRef) {}
}
