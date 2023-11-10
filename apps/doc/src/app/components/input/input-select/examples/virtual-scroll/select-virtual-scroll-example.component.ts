import { Component } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'prizm-select-virtual-scroll-example',
  templateUrl: './select-virtual-scroll-example.component.html',
  styles: [
    `
      prizm-scrollbar {
        height: 200px;
        width: 100%;
      }

      cdk-virtual-scroll-viewport {
        height: 200px;
      }
    `,
  ],
})
export class PrizmSelectVirtualScrollExampleComponent {
  readonly items = new Array(1000).fill('ITEM').map((item, idx) => `${item} #${idx + 1}`);

  readonly control = new UntypedFormControl(this.items[1], [Validators.required]);

  public setDefaultValue(): void {
    this.control.setValue(this.items[0], { emitEvent: false });
  }
}
