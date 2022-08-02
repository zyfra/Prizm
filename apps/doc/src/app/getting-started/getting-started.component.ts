import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'zui-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GettingStartedComponent {
}
