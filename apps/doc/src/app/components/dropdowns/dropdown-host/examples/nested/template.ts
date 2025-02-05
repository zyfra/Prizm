import { Component, inject } from '@angular/core';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsUserCard } from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-dropdown-host-example-nested',
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
export class PrizmDropdownHostExampleNestedComponent {
  open = false;
  open2 = false;
  open3 = false;

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(prizmIconsUserCard);
  }
}
