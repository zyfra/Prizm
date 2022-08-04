import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PolymorphContent } from '../../directives';
import { ZuiShadowType } from '../../directives/shadow';

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
  @Input() public icons: PolymorphContent = [];
  @Output() public iconClick: EventEmitter<string> = new EventEmitter();
  readonly shadow: ZuiShadowType = 'none';
}
