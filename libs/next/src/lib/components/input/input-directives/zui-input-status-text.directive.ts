import { Directive, Injector, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { DefaultInputInvalidTextClass } from '../input-invalid-subtext/input-invalid-text-base-class.directive';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { PolymorpheusContent } from '../../../directives/polymorpheus';

@Directive({
  selector: '[zuiInputStatusText]',
  providers: [ZuiDestroyService],
})
export class ZuiInputStatusTextDirective extends DefaultInputInvalidTextClass {
  public templateRef: TemplateRef<any>;
  public readonly changed: Subject<void> = new Subject<void>();

  constructor(injector: Injector) {
    super(injector);

    this.templateRef = injector.get(TemplateRef);
  }

  protected override setInvalidText(text: string): void {
    super.setInvalidText(text);

    this.changed.next();
  }

  public getStatusMessage(): PolymorpheusContent {
    return this.invalidText || this.templateRef;
  }
}
