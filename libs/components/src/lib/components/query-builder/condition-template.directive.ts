import { Directive, Input, TemplateRef, inject } from '@angular/core';
import { ConditionNodeContext, ConditionNodeForm } from './model';
import { FormGroup } from '@angular/forms';

/**
 * Captures the condition node's template.
 */
@Directive({
  selector: '[prizmCondition]',
  exportAs: 'prizmCondition',
  standalone: true,
})
export class PrizmConditionTemplate {
  readonly template: TemplateRef<ConditionNodeContext> = inject(TemplateRef);

  /**
   * Can be used to setup form controls, e.g. set the default value.
   */
  @Input({ alias: 'prizmConditionPrepare' }) prepare: (context: FormGroup<ConditionNodeForm>) => void =
    () => {};

  static ngTemplateContextGuard(dir: PrizmConditionTemplate, ctx: unknown): ctx is ConditionNodeContext {
    return true;
  }
}
