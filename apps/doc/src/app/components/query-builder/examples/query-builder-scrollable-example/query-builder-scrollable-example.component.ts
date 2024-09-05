import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ExpressionModel,
  PrizmInputSelectModule,
  PrizmInputTextModule,
  PrizmQueryBuilder,
  PrizmScrollbarComponent,
  PrizmSplitterModule,
} from '@prizm-ui/components';

@Component({
  selector: 'prizm-query-builder-scrollable-example',
  templateUrl: './query-builder-scrollable-example.component.html',
  styleUrls: ['./query-builder-scrollable-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    PrizmQueryBuilder,
    PrizmInputTextModule,
    PrizmInputSelectModule,
    ReactiveFormsModule,
    PrizmScrollbarComponent,
    PrizmSplitterModule,
  ],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class QueryBuilderScrollableExample {
  /**
   * 4-level deep expression
   */
  expression = {
    operator: 'AND',
    conditions: [
      { field: 'firstName', operator: 'contains', value: 'John' },
      { field: 'lastName', operator: 'contains', value: 'Doe' },
    ],
    children: [
      {
        operator: 'AND',
        conditions: [
          { field: 'age', operator: '>=', value: 18 },
          { field: 'age', operator: '<', value: 30 },
        ],
        children: [
          {
            operator: 'OR',
            conditions: [{ field: 'experience', operator: '>=', value: 3 }],
          },
        ],
      },
      {
        operator: 'AND',
        conditions: [
          { field: 'age', operator: '>=', value: 30 },
          { field: 'age', operator: '<', value: 40 },
        ],
      },
    ],
  } as const satisfies ExpressionModel;
}
