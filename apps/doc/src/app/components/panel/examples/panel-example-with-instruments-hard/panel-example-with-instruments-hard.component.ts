import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prizm-panel-with-instruments-hard',
  templateUrl: './panel-example-with-instruments-hard.component.html',
  styleUrls: ['./panel-example-with-instruments-hard.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelExampleWithInstrumentsHardComponent {
  public tabs: string[] = ['Первый', 'Второй', 'Третий', 'Четвертый', 'Пятый'];
  public activeTabIndex = 0;

  public toggleValue = true;

  public activeTabIndexChange(idx: number): void {
    this.activeTabIndex = idx;
  }
}
