import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon16Defs } from '../../../../../libs/components/src/lib/icon/story/icon-16-definitions';

@Component({
  selector: 'zyfra-icon-test',
  templateUrl: './icon-test.component.html',
  styleUrls: ['./icon-test.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraIconTestComponent {
  defs = Icon16Defs;
  className = 'zyfra-icon-16';
}
