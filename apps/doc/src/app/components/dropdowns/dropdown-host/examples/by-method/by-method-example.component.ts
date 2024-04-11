import { Component, inject } from '@angular/core';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsUserCard } from '@prizm-ui/icons/full/source';

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

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(prizmIconsUserCard);
  }
}
