import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmInteractiveState } from '../../../directives/wrapper';
import { prizmNullableSame } from '../../../util/common/nullable-same';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { PrizmHoveredDirective } from '../../../directives/hovered';
import { PrizmPressedDirective, PrizmScrollIntoViewDirective } from '../../../directives';
import { PrizmRangeState } from '../../../@core';
import { PrizmPrimitiveTimePickerItem } from './types/types';

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
  disabledItems: PrizmPrimitiveTimePickerItem[] = [];

  @Input()
  @prizmDefaultProp()
  hoveredItem: PrizmPrimitiveTimePickerItem | null = null;

  @Output()
  readonly timeClick = new EventEmitter<number>();

  public pressedItem: PrizmPrimitiveTimePickerItem | null = null;

  override readonly testId_ = 'ui_primitive_time_picker';

  public itemIsChosen(item: PrizmPrimitiveTimePickerItem): PrizmRangeState | null {
    if (this.selectedItem === undefined) return null;
    return item.value === this.selectedItem ? PrizmRangeState.Single : null;
  }

  public getItemState(item: PrizmPrimitiveTimePickerItem): PrizmInteractiveState | null {
    const { disabledItems, pressedItem, hoveredItem } = this;
    if (disabledItems.find(el => item.value === el.value)) {
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
  }
}
