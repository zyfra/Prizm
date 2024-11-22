import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmInteractiveState } from '../../../directives/wrapper';
import { PrizmBooleanHandler } from '../../../types/handler';
import { prizmNullableSame } from '../../../util/common/nullable-same';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { PrizmHoveredDirective } from '../../../directives/hovered';
import { PrizmPressedDirective, PrizmScrollIntoViewDirective } from '../../../directives';
import { PrizmPrimitiveTimePickerItem } from './types/types';
import { PrizmRangeState } from '../../../@core';

@Component({
  selector: `prizm-primitive-time-picker`,
  templateUrl: `./primitive-time-picker.component.html`,
  styleUrls: [`./primitive-time-picker.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, PrizmHoveredDirective, PrizmPressedDirective, PrizmScrollIntoViewDirective],
})
export class PrizmPrimitiveTimePickerComponent extends PrizmAbstractTestId {
  @Input()
  timeSheet!: PrizmPrimitiveTimePickerItem[];

  @Input()
  selectedItem: number | undefined;

  @Input()
  @prizmDefaultProp()
  disabledItemHandler: PrizmBooleanHandler<PrizmPrimitiveTimePickerItem> = PRIZM_ALWAYS_FALSE_HANDLER;

  @Input()
  @prizmDefaultProp()
  hoveredItem: PrizmPrimitiveTimePickerItem | null = null;

  @Input()
  @prizmDefaultProp()
  showAdjacent = true;

  @Output()
  readonly hoveredItemChange = new EventEmitter<PrizmPrimitiveTimePickerItem | null>();

  @Output()
  readonly timeClick = new EventEmitter<number>();

  public pressedItem: PrizmPrimitiveTimePickerItem | null = null;

  override readonly testId_ = 'ui_primitive_time_picker';

  public itemIsChosen(item: PrizmPrimitiveTimePickerItem): PrizmRangeState | null {
    if (this.selectedItem === undefined) return null;
    return item.value === this.selectedItem ? PrizmRangeState.Single : null;
  }

  public getItemState(item: PrizmPrimitiveTimePickerItem): PrizmInteractiveState | null {
    const { disabledItemHandler, pressedItem, hoveredItem } = this;
    if (disabledItemHandler(item)) {
      return PrizmInteractiveState.Disabled;
    }

    if (pressedItem?.value === item.value) {
      return PrizmInteractiveState.Pressed;
    }

    if (hoveredItem?.value === item.value) {
      return PrizmInteractiveState.Hovered;
    }

    return null;
  }

  public itemIsUnavailable(item: PrizmPrimitiveTimePickerItem): boolean {
    // TODO: implement
    return false;
  }

  public onItemHovered(item: PrizmPrimitiveTimePickerItem | false): void {
    this.updateHoveredItem(item || null);
  }

  public onItemPressed(item: PrizmPrimitiveTimePickerItem | false): void {
    this.pressedItem = item || null;
  }

  public onItemClick(item: number): void {
    this.timeClick.emit(item);
  }

  public scrollItemIntoView(item: number): boolean {
    return this.selectedItem === item;
  }

  private updateHoveredItem(time: PrizmPrimitiveTimePickerItem | null): void {
    if (prizmNullableSame(this.hoveredItem, time, (a, b) => a.value === b.value)) {
      return;
    }

    this.hoveredItem = time;
    this.hoveredItemChange.emit(time);
  }
}
