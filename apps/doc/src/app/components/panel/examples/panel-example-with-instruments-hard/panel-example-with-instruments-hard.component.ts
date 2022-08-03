import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zui-panel-with-instruments-hard',
  templateUrl: './panel-example-with-instruments-hard.component.html',
  styleUrls: ['./panel-example-with-instruments-hard.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelExampleWithInstrumentsHardComponent {
  public tabs: string[] = ['Первый', 'Второй', 'Третий', 'Четвертый', 'Пятый'];
  public selectedTabNumber = 0;

  public toggleValue = true;

  public tabClick(idx: number): void {
    this.selectedTabNumber = idx;
  }
}
