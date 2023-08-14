import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'prizm-select-panel-example',
  templateUrl: './select-panel-example.component.html',
  styleUrls: ['./select-panel-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmSelectPanelExampleComponent {
  showPanel = false;

  data = new Array(5).fill(null).map((item, index) => ({
    label: { title: `чипс иерархии ${index + 1}`, subtitle: 'Путь  \\ путь \\  путь' },
    checked: false,
  }));

  filteredData = [...this.data];

  constructor(public readonly cdRef: ChangeDetectorRef) {}

  get someChecked(): boolean {
    return this.data.some(item => item.checked) && this.allChecked === false;
  }

  get allChecked(): boolean {
    return this.data.every(item => item.checked);
  }

  public show(): void {
    this.showPanel = true;
    this.filter('');
  }

  public hide(): void {
    this.showPanel = false;
    this.cdRef.markForCheck();
  }

  public onChange(value: boolean): void {
    for (const option of this.data) {
      option.checked = value;
    }
  }

  public filter(value: string): void {
    if (value) {
      this.filteredData = this.data.filter(item => item.label.title.includes(value));
      return;
    }
    this.filteredData = [...this.data];
  }
}
