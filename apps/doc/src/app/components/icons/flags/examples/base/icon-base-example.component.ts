import { Component } from '@angular/core';
import {
  prizmIconFlagSvgAs,
  PrizmIconSvgFlagSvgEnum,
  PrizmFlagIconsRegistry,
  prizmIconFlagSvgRu,
} from '@prizm-ui/flag-icons';

@Component({
  selector: 'prizm-icon-base-example',
  templateUrl: './icon-base-example.component.html',
})
export class PrizmIconSvgBaseExampleComponent {
  readonly PrizmIconSvgFlagSvgEnum = PrizmIconSvgFlagSvgEnum;
  constructor(private readonly iconFlagsRegistry: PrizmFlagIconsRegistry) {
    this.iconFlagsRegistry.registerIcons([prizmIconFlagSvgAs, prizmIconFlagSvgRu]);
  }
}
