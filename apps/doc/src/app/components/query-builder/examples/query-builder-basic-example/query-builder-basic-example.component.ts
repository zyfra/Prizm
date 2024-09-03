import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmQueryBuilder } from '@prizm-ui/components';

@Component({
  selector: 'prizm-query-builder-basic-example',
  templateUrl: './query-builder-basic-example.component.html',
  styleUrls: ['./query-builder-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PrizmQueryBuilder],
})
export class QueryBuilderBasicExampleComponent {
  public disabled = false;
}
