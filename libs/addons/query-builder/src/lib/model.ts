import { FormControl, FormGroup } from '@angular/forms';

export type LOGICAL_OPERATOR = 'AND' | 'OR';

/**
 * @public
 * */
export interface ExpressionModel {
  /** Оператор объединения для вложенных запросов и выражений. */
  readonly operator: LOGICAL_OPERATOR;

  /** Если `true`, результаты удовлетворяющие выражению должны быть исключены (aka `NOT`). */
  readonly exclude?: boolean;

  readonly conditions: ConditionModel[];

  readonly children?: ExpressionModel[];
}

export interface ConditionModel<T = unknown> {
  readonly field: string | null;
  readonly operator: string | null;
  readonly value: T | null;
}

/**
 * @internal
 */
export interface ExpressionNodeForm {
  operator: FormControl<LOGICAL_OPERATOR>;
  exclude: FormControl<boolean>;
}

/**
 * @internal
 */
export interface ConditionNodeForm {
  field: FormControl<string | null>;
  operator: FormControl<string | null>;
  value: FormControl<any>;
}

export interface ConditionNodeContext {
  $implicit: ConditionNodeForm;
}

/**
 * @public
 * */
export type ConditionPrepareFn = (context: FormGroup<ConditionNodeForm>) => void;
