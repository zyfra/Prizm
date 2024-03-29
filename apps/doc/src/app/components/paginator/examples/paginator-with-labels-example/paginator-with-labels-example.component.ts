import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prizm-paginator-with-labels-example',
  templateUrl: './paginator-with-labels-example.component.html',
  styleUrls: ['./paginator-with-labels-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorWithLabelsExampleComponent {
  public disabled = false;
}
