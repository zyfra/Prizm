import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import {
  prizmIconsAngleLeft,
  prizmIconsAngleRight,
  prizmIconsCircleCheckEmpty,
  prizmIconsCircleXmark,
} from '@prizm-ui/icons/full/source';

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

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(
      prizmIconsCircleCheckEmpty,
      prizmIconsCircleXmark,
      prizmIconsAngleLeft,
      prizmIconsAngleRight
    );
  }

  public ngOnInit(): void {
    this.value2Disabled.disable();
  }
}
