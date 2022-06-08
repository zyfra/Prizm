import {ChangeDetectorRef, Directive, Inject, Input, Self, TemplateRef} from '@angular/core';

/**
 * ng-template wrapper directive also stores {@link ChangeDetectorRef} to properly handle change detection.
 */
@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: 'ng-template[polymorpheus]',
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ['polymorpheus'],
    exportAs: 'polymorpheus',
})
export class PolymorpheusTemplate<C extends Record<any, any>> {
    @Input() polymorpheus: C | string = '';

    constructor(
        @Inject(TemplateRef)
        @Self()
        readonly template: TemplateRef<C>,
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
    ) {}

    public static ngTemplateContextGuard<T>(
      _dir: PolymorpheusTemplate<T>,
      _ctx: any,
    ): _ctx is T extends string ? any : T {
      return true;
    }

    public check(): void {
        this.changeDetectorRef.markForCheck();
    }

}
