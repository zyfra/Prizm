import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PrizmDay } from '../../../@core/date-time/day';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmInteractiveState } from '../../../directives/wrapper';
import { PrizmBooleanHandler } from '../../../types/handler';
import { prizmNullableSame } from '../../../util/common/nullable-same';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { PrizmCallFuncPipe } from '@prizm-ui/helpers';
import { PrizmHoveredDirective } from '../../../directives/hovered';
import { PrizmPressedDirective, PrizmRepeatTimesDirective } from '../../../directives';

@Component({
  selector: `prizm-primitive-time-picker`,
  templateUrl: `./primitive-time-picker.component.html`,
  styleUrls: [`./primitive-time-picker.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    PrizmRepeatTimesDirective,
    PrizmCallFuncPipe,
    PrizmHoveredDirective,
    PrizmPressedDirective,
  ],
})
export class PrizmPrimitiveTimePickerComponent extends PrizmAbstractTestId {
  pressedItem: PrizmDay | null = null;

  @Input()
  timeSheet: any;

  @Input()
  @prizmDefaultProp()
  disabledItemHandler: PrizmBooleanHandler<PrizmDay> = PRIZM_ALWAYS_FALSE_HANDLER;

  @Input()
  @prizmDefaultProp()
  hoveredItem: PrizmDay | null = null;

  @Input()
  @prizmDefaultProp()
  showAdjacent = true;

  @Output()
  readonly hoveredItemChange = new EventEmitter<PrizmDay | null>();

  @Output()
  readonly timeClick = new EventEmitter<{ key: string; value: string }>();

  override readonly testId_ = 'ui_primitive_time_picker';

  public getItemState(item: PrizmDay): PrizmInteractiveState | null {
    // TODO: implement

    return null;
  }

  public itemIsUnavailable(item: PrizmDay): boolean {
    // TODO: implement
    return false;
  }

  public onItemHovered(item: PrizmDay | false): void {
    this.updateHoveredItem(item || null);
  }

  public onItemPressed(item: PrizmDay | false): void {
    this.pressedItem = item || null;
  }

  public onItemClick(item: { key: string; value: string }): void {
    this.timeClick.emit(item);
  }

  private updateHoveredItem(day: PrizmDay | null): void {
    if (prizmNullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
      return;
    }

    this.hoveredItem = day;
    this.hoveredItemChange.emit(day);
  }
}
