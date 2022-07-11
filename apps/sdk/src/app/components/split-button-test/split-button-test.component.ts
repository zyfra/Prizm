import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'zyfra-split-button-test',
  templateUrl: './split-button-test.component.html',
  styleUrls: ['./split-button-test.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitButtonTestComponent {
  public items = [
    { label: 'Item1', icon: 'pi pi-refresh' },
    { label: 'Item2', icon: 'pi pi-times' },
    { separator: true },
    { label: 'Item3', icon: 'pi pi-times' },
  ];
}
