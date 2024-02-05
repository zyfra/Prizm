import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PRIZM_ICONS_16_LOADER, PRIZM_ICONS_LOADER } from './token';
import { PrizmIconsComponent } from './prizm-icons.component';
import { PrizmIconsRegistry } from './prizm-icons.registry';
import { PrizmIcons16Registry } from './prizm-icons-16.registry';

/**
 * Component to display 16px SVG icons.
 * It provides a specific icon loader for 16px icons and extends the functionality of PrizmIconsComponent.
 */
@Component({
  selector: 'prizm-icons-16', // Defines the custom element tag to use this component
  template: ` <ng-content></ng-content> `, // Allows for content projection within the component
  styleUrls: ['./prizm-icons.component.less'], // Reuses the same styles as the base icon component
  standalone: true, // Marks the component as standalone, meaning it doesn't need to be declared in an NgModule
  changeDetection: ChangeDetectionStrategy.OnPush, // Optimizes change detection for performance
  providers: [
    {
      // Specifies that this component uses a different icon loader for 16px icons
      provide: PRIZM_ICONS_LOADER,
      useExisting: PRIZM_ICONS_16_LOADER,
    },
    {
      // Specifies that this component uses a different registry
      provide: PrizmIconsRegistry,
      useExisting: PrizmIcons16Registry,
    },
  ],
})
export class PrizmIcons16Component extends PrizmIconsComponent {
  // No additional logic required here as of now.
  // Future customizations for 16px icons can be implemented in this class.
}
