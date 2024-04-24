import { Component, inject } from '@angular/core';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsUserCard } from '@prizm-ui/icons/full/source';

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
  open = false;

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(prizmIconsUserCard);
  }
}
