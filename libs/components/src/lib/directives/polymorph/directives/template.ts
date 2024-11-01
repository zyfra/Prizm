import { ChangeDetectorRef, Directive, inject, TemplateRef } from '@angular/core';

/**
 * ng-template wrapper directive also stores {@link ChangeDetectorRef} to properly handle change detection.
 */
@Directive({
  standalone: true,
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'ng-template[polymorph]',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['polymorph'],
  exportAs: 'polymorph',
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class PolymorphTemplate<C = any> {
  private readonly cdr = inject(ChangeDetectorRef);
  public readonly template: TemplateRef<C> = inject(TemplateRef<C>, { self: true });
  public polymorph: C | '' = '';

  public static ngTemplateContextGuard<T>(
    _dir: PolymorphTemplate<T>,
    _ctx: any
  ): _ctx is T extends '' ? any : T {
    return true;
  }

  public check(): void {
    this.cdr.markForCheck();
  }
}
