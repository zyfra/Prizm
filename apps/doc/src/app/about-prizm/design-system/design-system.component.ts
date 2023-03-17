import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'prizm-design-system',
  templateUrl: './design-system.component.html',
  styleUrls: ['./design-system.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignSystemComponent {
  public storybookBaseUrl: string = environment.storybookBaseUrl;
}
