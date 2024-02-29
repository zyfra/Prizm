import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PolymorphContent } from '../../directives/polymorph/types/content';
import { PolymorphModule } from '../../directives';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: `prizm-tree-button`,
  templateUrl: `./tree-button.component.html`,
  styleUrls: [`./tree-button.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PolymorphModule, CommonModule, PrizmIconsFullComponent],
  exportAs: 'prizmTreeButton',
})
export class PrizmTreeButtonComponent<T extends Partial<Record<keyof T, any>>> {
  @Input()
  @prizmDefaultProp()
  icon: PolymorphContent = ``;

  @Input()
  @prizmDefaultProp()
  open = false;

  @Input()
  @prizmDefaultProp()
  manualChange = false;

  @Input()
  @prizmDefaultProp()
  removeIcon = false;

  @Input()
  @prizmDefaultProp()
  visibilityIcon = true;

  @Input()
  @prizmDefaultProp()
  iconOpen: PolymorphContent<{ size: number }> = 'chevron-down';

  @Input()
  @prizmDefaultProp()
  iconClose: PolymorphContent<{ size: number }> = 'chevron-right';

  @Input()
  @prizmDefaultProp()
  level = 0;

  @Input()
  @prizmDefaultProp()
  size = 16;

  @Input()
  @prizmDefaultProp()
  factor = 6;

  get space(): string {
    return new Array(this.level * this.factor).fill('&nbsp;').join('');
  }

  @Output()
  readonly openChange = new EventEmitter<boolean>();

  public changeOpenState(open: boolean): void {
    this.open = open;
    this.openChange.emit(this.open);
  }

  public toggle(): void {
    this.open = !this.open;
    this.openChange.emit(this.open);
  }
}
