import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { PolymorphContent } from '../../directives';
import { PrizmShadowType } from '../../directives/shadow';
import { PrizmAbstractTestId } from '../../abstract/interactive';

@Component({
  selector: 'prizm-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class PrizmWidgetComponent extends PrizmAbstractTestId {
  @Input() public header: PolymorphContent = '';
  @Input() public title: PolymorphContent = '';
  @Input() public icons: PolymorphContent[] | PolymorphContent = [];
  @Output() public iconClick: EventEmitter<string> = new EventEmitter();
  readonly shadow: PrizmShadowType = 'none';

  override readonly testId_ = 'ui_area--widget';

  get hasLine(): boolean {
    return Array.isArray(this.icons) ? this.icons.length > 0 : true;
  }
}
