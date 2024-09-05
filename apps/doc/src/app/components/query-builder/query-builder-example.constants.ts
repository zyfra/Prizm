import { ExpressionModel } from '@prizm-ui/components';

export const SIMPLE_EXPRESSION: ExpressionModel = {
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
};
