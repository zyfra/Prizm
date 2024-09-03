import { Directive, Input, TemplateRef, inject } from '@angular/core';
import { ConditionNodeContext, ConditionNodeForm } from './model';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: 'prizm-query-builder ng-template[prizmCondition]',
  exportAs: 'prizmCondition',
  standalone: true,
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class PrizmConditionTemplate {
  readonly template: TemplateRef<ConditionNodeContext> = inject(TemplateRef);

  @Input() prepare: (context: FormGroup<ConditionNodeForm>) => void = () => {};

  static ngTemplateContextGuard(dir: PrizmConditionTemplate, ctx: unknown): ctx is ConditionNodeContext {
    return true;
  }
}
