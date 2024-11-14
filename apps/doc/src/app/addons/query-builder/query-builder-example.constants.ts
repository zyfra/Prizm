import { ExpressionModel } from '@prizm-ui/addon-query-builder';

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

/**
 * 4-level complex expression
 */
export const DEEP_EXPRESSION: ExpressionModel = {
  operator: 'AND',
  conditions: [],
  children: [
    {
      operator: 'AND',
      conditions: [],
      children: [
        {
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
        },
        {
          operator: 'AND',
          exclude: true,
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
        },
      ],
    },
  ],
};
