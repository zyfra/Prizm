import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { IBreadcrumb } from '@prizm-ui/components';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import {
  prizmIconsBatteryFull,
  prizmIconsHouseMini,
  prizmIconsUser,
  prizmIconsUserArrowsSwap,
} from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-breadcrumbs-example-with-icon',
  templateUrl: './breadcrumbs-example-with-icon.component.html',
  styleUrls: ['./breadcrumbs-example-with-icon.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsExampleWithIconComponent {
  public breadcrumbs: IBreadcrumb[] = [
    {
      name: '',
      icon: 'house-mini',
    },
    {
      name: 'Lady',
      icon: 'user',
    },
    {
      name: "I'm your knight in",
      icon: 'user-arrows-swap',
    },
    {
      name: 'Battery',
      icon: 'battery-full',
    },
  ];

  private currentBreadcrumb: IBreadcrumb | null = null;

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(
      prizmIconsHouseMini,
      prizmIconsUser,
      prizmIconsBatteryFull,
      prizmIconsUserArrowsSwap
    );
  }

  public breadcrumbChange(current: IBreadcrumb): void {
    this.currentBreadcrumb = current;
  }
}
