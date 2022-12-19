import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'prizm-design-system',
  templateUrl: './design-system.component.html',
  styleUrls: ['./design-system.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesignSystemComponent {}
