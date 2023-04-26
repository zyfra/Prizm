import { Component, ChangeDetectionStrategy } from '@angular/core';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'prizm-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransitionComponent {
  public storybookBaseUrl = environment.storybookBaseUrl;
}
