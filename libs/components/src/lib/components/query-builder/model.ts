import { FormControl } from '@angular/forms';

export type LOGICAL_OPERATOR = 'AND' | 'OR';

export interface ExpressionModel {
  /** Оператор объединения для вложенных запросов и выражений. */
  operator: LOGICAL_OPERATOR;

  /** Если True, результаты данного выражения исключаются из родительского. */
  exclude: boolean;

  conditions: ConditionModel[]; // TODO merge conditions & children into single prop (expressions?) for mixed use

  children: ExpressionModel[];
}

export interface ConditionModel {
  field: string | null;
  operator: string | null;
  value: string | null;
}

export interface ExpressionNodeForm {
  operator: FormControl<LOGICAL_OPERATOR>;
  exclude: FormControl<boolean>;
}

export interface ConditionNodeForm {
  field: FormControl<string | null>;
  operator: FormControl<string | null>;
  value: FormControl<string | null>;
}

export interface ConditionNodeContext {
  $implicit: ConditionNodeForm;
}
