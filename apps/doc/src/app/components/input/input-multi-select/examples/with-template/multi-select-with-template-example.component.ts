import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsUserCheck } from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-multi-select-with-template-example',
  templateUrl: './multi-select-with-template-example.component.html',
  styles: [
    `
      .item {
        display: flex;
        gap: 0.5rem;
      }
    `,
  ],
})
export class PrizmInputMultiSelectWithTemplateExampleComponent {
  readonly items = ['One', 'Two', 'Three'];
  readonly valueControl = new UntypedFormControl(['Two']);

  protected readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(prizmIconsUserCheck);
  }
}
