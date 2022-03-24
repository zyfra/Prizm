import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BlockableUI } from 'primeng/api';

@Component({
  selector: 'zyfra-block-ui',
  templateUrl: './zyfra-block-ui.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraBlockUiComponent {
  /**
   * Name of the local ng-template variable referring to another component.
   */
  @Input() target: BlockableUI;
  /**
   * Whether to automatically manage layering.
   */
  @Input() autoZIndex: boolean = true;
  /**
   * Base zIndex value to use in layering.
   */
  @Input() baseZIndex: number = 0;
  /**
   * Style class of the component.
   */
  @Input() styleClass: string;
  /**
   * Controls the blocked state.
   */
  @Input() blocked: boolean = false;
}
