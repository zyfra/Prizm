import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import {
  prizmIconsArrowRotateRight,
  prizmIconsCirclePlus,
  prizmIconsTempBadgesTagMultiple,
} from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-input-icon-buttons-example',
  templateUrl: './input-icon-buttons-example.component.html',
  styleUrls: ['./input-icon-buttons-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputIconButtonsExampleComponent {
  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(
      prizmIconsCirclePlus,
      prizmIconsArrowRotateRight,
      prizmIconsTempBadgesTagMultiple
    );
  }
}
