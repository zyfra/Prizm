import { ChangeDetectionStrategy, Component, HostBinding, Optional } from '@angular/core';
import { PrizmIconsComponent } from './icons.component';
import {
  PRIZM_ICONS_FULL_LOADER,
  PRIZM_ICONS_LOADER,
  PrizmIconsFullRegistry,
  PrizmIconsRegistry,
} from '@prizm-ui/icons/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';

/**
 * Component to display full size SVG icons.
 * It provides a specific icon loader for full icons and extends the functionality of PrizmIconsComponent.
 */
@Component({
  selector: 'prizm-icons-full', // Defines the custom element tag to use this component
  template: ` <ng-content></ng-content> `, // Allows for content projection within the component
  styleUrls: ['./icons.component.less'], // Reuses the same styles as the base icon component
  standalone: true, // Marks the component as standalone, meaning it doesn't need to be declared in an NgModule
  changeDetection: ChangeDetectionStrategy.OnPush, // Optimizes change detection for performance
  providers: [
    {
      // Specifies that this component uses a different icon loader for 16px icons
      provide: PRIZM_ICONS_LOADER,
      useFactory: (icons?: any) => {
        return icons ?? null;
      },
      deps: [[new Optional(), PRIZM_ICONS_FULL_LOADER]],
    },
    {
      // Specifies that this component uses a different registry
      provide: PrizmIconsRegistry,
      useExisting: PrizmIconsFullRegistry,
    },
    PrizmDestroyService,
  ],
})
export class PrizmIconsFullComponent extends PrizmIconsComponent {
  // No additional logic required here as of now.
  // Future customizations for 16px icons can be implemented in this class.
  @HostBinding('style.width') protected override _styleWidth: string = '16px';
}
