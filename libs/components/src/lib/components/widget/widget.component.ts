import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PolymorphContent, PolymorphOutletDirective } from '../../directives';
import { PrizmShadowType } from '../../directives/shadow';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { PrizmCardComponent } from '../card';
import { PrizmIconComponent } from '../icon';
import { PrizmThemeModule } from '@prizm-ui/theme';
import { PrizmButtonModule } from '../button';

@Component({
  selector: 'prizm-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
  standalone: true,
  imports: [
    CommonModule,
    PrizmCardComponent,
    PrizmIconComponent,
    PrizmThemeModule,
    PolymorphOutletDirective,
    PrizmButtonModule,
  ],
})
export class PrizmWidgetComponent extends PrizmAbstractTestId {
  @Input() public header: PolymorphContent = '';
  @Input() public title: PolymorphContent = '';
  @Input() public icons: PolymorphContent<{ idx: number }>[] | PolymorphContent = [];
  @Output() public iconClick: EventEmitter<string> = new EventEmitter();
  readonly shadow: PrizmShadowType = 'none';

  override readonly testId_ = 'ui_area--widget';

  get hasLine(): boolean {
    return Array.isArray(this.icons) ? this.icons.length > 0 : false;
  }
}
