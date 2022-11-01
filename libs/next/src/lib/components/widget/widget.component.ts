import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { PolymorphContent } from '../../directives';
import { PzmShadowType } from '../../directives/shadow';

@Component({
    selector: 'zui-widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
})
export class ZuiWidgetComponent {
  @Input() public header: PolymorphContent = '';
  @Input() public title: PolymorphContent = '';
  @Input() public icons: PolymorphContent[] = [];
  @Output() public iconClick: EventEmitter<string> = new EventEmitter();
  readonly shadow: PzmShadowType = 'none';

  @HostBinding('attr.testId')
  readonly testId = 'pzm_widget';
}
