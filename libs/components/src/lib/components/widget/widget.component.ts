import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { PolymorphContent } from '../../directives';
import { PrizmShadowType } from '../../directives/shadow';
import { AbstractPrizmTestId } from '../../abstract/interactive';

@Component({
  selector: 'prizm-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class PrizmWidgetComponent extends AbstractPrizmTestId {
  @Input() public header: PolymorphContent = '';
  @Input() public title: PolymorphContent = '';
  @Input() public icons: PolymorphContent[] = [];
  @Output() public iconClick: EventEmitter<string> = new EventEmitter();
  readonly shadow: PrizmShadowType = 'none';

  override readonly testId_ = 'ui_area--widget';
}
