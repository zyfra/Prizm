import { Directive, Input, TemplateRef, inject } from '@angular/core';
import { ConditionNodeContext, ConditionPrepareFn } from './model';

/**
 * Captures the condition node's template.
 */
@Directive({
  selector: '[prizmCondition]',
  exportAs: 'prizmCondition',
  standalone: true,
})
export class PrizmConditionDefDirective {
  readonly template: TemplateRef<ConditionNodeContext> = inject(TemplateRef);

  /**
   * Can be used to setup form controls, e.g. set the default value.
   */
  @Input({ alias: 'prizmConditionPrepare' }) prepare: ConditionPrepareFn = () => {};

  public static ngTemplateContextGuard(
    dir: PrizmConditionDefDirective,
    ctx: unknown
  ): ctx is ConditionNodeContext {
    return true;
  }
}
