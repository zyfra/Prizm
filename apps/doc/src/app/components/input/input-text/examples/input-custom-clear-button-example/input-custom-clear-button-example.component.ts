import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsXmark } from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-input-custom-clear-button-example',
  templateUrl: './input-custom-clear-button-example.component.html',
  styleUrls: ['./input-custom-clear-button-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputCustomClearButtonExampleComponent {
  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(prizmIconsXmark);
  }
}
