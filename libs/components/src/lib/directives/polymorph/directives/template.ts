import { ChangeDetectorRef, Directive, Inject, Input, Self, TemplateRef } from '@angular/core';

/**
 * ng-template wrapper directive also stores {@link ChangeDetectorRef} to properly handle change detection.
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'ng-template[polymorph]',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['polymorph'],
  exportAs: 'polymorph',
  standalone: true,
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class PolymorphTemplate<C = any> {
  @Input() polymorph: C | '' = '';

  constructor(
    @Inject(TemplateRef)
    @Self()
    readonly template: TemplateRef<C>,
    @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  public static ngTemplateContextGuard<T>(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    _dir: PolymorphTemplate<T>,
    _ctx: any
  ): _ctx is T extends string ? any : T {
    return true;
  }

  public check(): void {
    this.changeDetectorRef.markForCheck();
  }
}
