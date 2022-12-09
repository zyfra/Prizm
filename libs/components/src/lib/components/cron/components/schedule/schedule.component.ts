import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PrizmCronUiListItem } from '../../model';

@Component({
  selector: 'prizm-cron-schedule',
  styleUrls: ['./schedule.component.less'],
  templateUrl: './schedule.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmCronScheduleComponent {
  @Input()
  public items: PrizmCronUiListItem[] = [];

  @Input()
  public selected: string[] =[];

  @Output()
  public selectedChange = new EventEmitter<string[]>();

  public isSelected(item: PrizmCronUiListItem): boolean {
    return this.selected.indexOf(item.key) !== -1;
  }

  public select(item: PrizmCronUiListItem): void {
    const isSelected = this.isSelected(item);
    if (isSelected) {
      this.selected = this.selected.filter(i => i !== item.key);
    } else {
      this.selected.push(item.key);
    }

    this.selectedChange.emit(this.selected);
  }
}
