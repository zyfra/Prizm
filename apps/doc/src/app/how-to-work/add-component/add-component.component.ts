import { Component, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'apps/doc/src/environments/environment';

@Component({
  selector: 'prizm-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddComponentComponent {
  public storybookBaseUrl = environment.storybookBaseUrl;
}
