import { Component, inject } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsUserCheck } from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-select-with-template-example',
  templateUrl: './select-with-template-example.component.html',
  styles: [
    `
      .item {
        display: flex;
        gap: 0.5rem;
      }
    `,
  ],
})
export class PrizmSelectWithTemplateExampleComponent {
  readonly items = ['Красный', 'Зеленый', 'Синий'];
  readonly control = new UntypedFormControl();

  protected readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(prizmIconsUserCheck);
  }

  public getColor(item: string): string {
    switch (item) {
      case 'Красный':
        return 'red';
      case 'Зеленый':
        return 'green';
      case 'Синий':
      default:
        return 'blue';
    }
  }
}
