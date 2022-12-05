import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { PolymorphContent } from '../../directives';
import { PrizmShadowType } from '../../directives/shadow';

@Component({
    selector: 'prizm-widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
})
export class PrizmWidgetComponent {
  @Input() public header: PolymorphContent = '';
  @Input() public title: PolymorphContent = '';
  @Input() public icons: PolymorphContent[] = [];
  @Output() public iconClick: EventEmitter<string> = new EventEmitter();
  readonly shadow: PrizmShadowType = 'none';

  @HostBinding('attr.testId')
  readonly testId = 'prizm_widget';
}
