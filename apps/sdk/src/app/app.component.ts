import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { APP_TOKEN } from './app.token';
import { TabPanelItem } from './app.types';

@Component({
  selector: 'zyfra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public title = 'sdk';

  constructor(@Inject(APP_TOKEN) public components: TabPanelItem[]) {}
}
