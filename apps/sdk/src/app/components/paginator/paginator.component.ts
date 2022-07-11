import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-paginator-test-component',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
  public rows = 10;
  public totalRecords = 100;
  public pageLinkSize = 4;
  public rowsPerPageOptions = [25, 50, 75, 100];
}
