import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prizm-paginator-basic-example',
  templateUrl: './query-builder-basic-example.component.html',
  styleUrls: ['./query-builder-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorBasicExampleComponent {
  public disabled = false;
}
