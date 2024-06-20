import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import {
  prizmIconsArrowRotateRight,
  prizmIconsCirclePlus,
  prizmIconsLabel,
} from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-input-icon-buttons-example',
  templateUrl: './input-icon-buttons-example.component.html',
  styleUrls: ['./input-icon-buttons-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputIconButtonsExampleComponent {
  public disabled = false;
  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(prizmIconsCirclePlus, prizmIconsArrowRotateRight, prizmIconsLabel);
  }

  public handleButtonClick() {
    console.log('Button clicked!');
  }
}
