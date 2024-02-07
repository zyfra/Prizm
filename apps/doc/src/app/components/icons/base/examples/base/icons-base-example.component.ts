import { Component, inject, OnInit } from '@angular/core';
import { PrizmIconsComponent, PrizmIconsFullComponent, prizmIconsNameToClass } from '@prizm-ui/icons';
import { PrizmIconsFullRegistry, PrizmIconsRegistry } from '@prizm-ui/icons/core';
import {
  prizmIconsArrowsCross,
  prizmIconsArrowUp,
  prizmIconsBag,
  prizmIconsBubbleMessage,
} from '@prizm-ui/icons/base';
import {
  prizmIconsArrowsCross as prizmIconsArrowsCrossFull,
  prizmIconsArrowUp as prizmIconsArrowUpFull,
  prizmIconsBag as prizmIconsBagFull,
  prizmIconsBubbleMessage as prizmIconsBubbleMessageFull,
} from '@prizm-ui/icons/full';

@Component({
  selector: 'prizm-icons-base-example',
  templateUrl: './icons-base-example.component.html',
  styleUrls: ['./icons-base-example.component.less'],
  standalone: true,
  imports: [PrizmIconsComponent, PrizmIconsFullComponent],
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

  protected readonly prizmIconsNameToClass = prizmIconsNameToClass;
}
