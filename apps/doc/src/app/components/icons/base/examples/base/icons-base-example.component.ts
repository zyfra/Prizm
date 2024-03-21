import { Component, inject, OnInit } from '@angular/core';
import { PrizmIconsComponent, PrizmIconsFullComponent } from '@prizm-ui/icons';
import { PrizmIconsFullRegistry, PrizmIconsRegistry } from '@prizm-ui/icons/core';

//  You can import from common set
import { prizmIconsArrowUp, prizmIconsBag, prizmIconsBubbleMessage } from '@prizm-ui/icons/base/source';

// Also you can import only specific icon
// it is useful when you use dynamic importing and you want to reduce bundle size
import { prizmIconsArrowsCross } from '@prizm-ui/icons/base/source/arrows-cross';

import {
  prizmIconsArrowsCross as prizmIconsArrowsCrossFull,
  prizmIconsArrowUp as prizmIconsArrowUpFull,
  prizmIconsBag as prizmIconsBagFull,
  prizmIconsBubbleMessage as prizmIconsBubbleMessageFull,
} from '@prizm-ui/icons/full/source';
import { PrizmIfLanguageDirective } from '@prizm-ui/i18n';

@Component({
  selector: 'prizm-icons-base-example',
  templateUrl: './icons-base-example.component.html',
  styleUrls: ['./icons-base-example.component.less'],
  standalone: true,
  imports: [PrizmIconsComponent, PrizmIconsFullComponent, PrizmIfLanguageDirective],
})
export class PrizmIconsBaseExampleComponent implements OnInit {
  readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);
  readonly iconsBaseRegistry = inject(PrizmIconsRegistry);

  public ngOnInit() {
    this.iconsBaseRegistry.registerIcons([
      prizmIconsArrowUp,
      prizmIconsArrowsCross,
      prizmIconsBag,
      prizmIconsBubbleMessage,
    ]);
    this.iconsFullRegistry.registerIcons([
      prizmIconsArrowUpFull,
      prizmIconsArrowsCrossFull,
      prizmIconsBagFull,
      prizmIconsBubbleMessageFull,
    ]);
  }
}
