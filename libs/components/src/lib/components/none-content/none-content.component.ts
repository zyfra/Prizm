import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PrizmTestIdDirective } from '@prizm-ui/helpers';

@Component({
  selector: 'prizm-none-content',
  templateUrl: './none-content.component.html',
  styleUrls: ['./none-content.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  hostDirectives: [
    {
      directive: PrizmTestIdDirective,
      inputs: ['testId'],
    },
  ],
})
export class PrizmNoneContentComponent {
  private readonly testIdDirective = inject(PrizmTestIdDirective, { host: true });

  constructor() {
    this.testIdDirective.generateMainTestId = 'ui_none-content';
  }
}
