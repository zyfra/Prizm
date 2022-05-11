import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableTestComponent {
  public value = [{ code: '1', name: 'UserName', category: 'Remont', quantity: '1' }];
}
