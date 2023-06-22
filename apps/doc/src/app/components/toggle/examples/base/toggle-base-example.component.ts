import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-toggle-base-example',
  templateUrl: './toggle-base-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmToggleBaseExampleComponent implements OnInit {
  public value = true;
  public readonly value2 = new UntypedFormControl(false);
  public valueDisabled = false;
  public readonly value2Disabled = new UntypedFormControl(false);

  public ngOnInit(): void {
    this.value2Disabled.disable();
  }
}
