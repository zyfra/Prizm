import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';

@Component({
  selector: 'prizm-splitter-area',
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        flex: 0 0 auto;
        overflow: hidden;
        touch-action: none;
        height: 100%;
        width: 100%;
      }
    `,
  ],
  providers: [PrizmDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmSplitterAreaComponent {
  @HostBinding('style.flex-basis.%') currentSize: number | null = null;
  @HostBinding('style.order') order = 0;

  @Input() size = 0;
  @Input() minSize = 0;

  @HostBinding('style.display') get display(): 'none' | 'block' {
    return this.size === null ? 'none' : 'block';
  }
}
