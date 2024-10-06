import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ExpressionModel,
  PrizmInputSelectModule,
  PrizmInputTextModule,
  PrizmQueryBuilder,
} from '@prizm-ui/components';

@Component({
  selector: 'prizm-query-builder-basic-example',
  templateUrl: './query-builder-basic-example.component.html',
  styleUrls: ['./query-builder-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PrizmQueryBuilder, PrizmInputTextModule, PrizmInputSelectModule, ReactiveFormsModule],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class QueryBuilderBasicExample {
  expression = {
    operator: 'AND',
    conditions: [
      {
        field: 'firstName',
        operator: 'contains',
        value: 'John',
      },
      {
        field: 'lastName',
        operator: 'contains',
        value: 'Doe',
      },
    ],
  } as const satisfies ExpressionModel;
}
