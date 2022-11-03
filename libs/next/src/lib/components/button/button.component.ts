import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  HostListener,
  Inject,
  Input,
  TemplateRef,
} from '@angular/core';
import { PZM_BUTTON_OPTIONS, PrizmButtonOptions, PrizmContent } from './button-options';
import { AbstractPrizmInteractive } from '../../abstract/interactive';
import { pzmIsNativeFocused } from '../../util/is-native-focused';
import { PrizmSize } from '../../util/size-bigger';
import { PrizmDestroyService } from '@digital-plant/zyfra-helpers';
import { takeUntil, tap } from 'rxjs/operators';
import { pzmPressedObservable } from '../../observables/pressed-observable';
import { PrizmAppearance, PrizmAppearanceType } from '../../types/appearance.types';
import { pzmWatch } from '../../observables/watch';
import { pzmDefaultProp } from '../../decorators';
import { PZM_FOCUSABLE_ITEM_ACCESSOR } from '../../tokens';
import { PrizmFocusableElementAccessor } from '../../types';
import { PrizmFocusVisibleService } from '../../directives/focus-visible/focus-visible.service';
import { PrizmHoveredService } from '../../services';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[pzmButton], button[pzmIconButton], a[pzmButton], a[pzmIconButton]',
  styleUrls: ['./button.component.less'],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PrizmDestroyService,
    {
      provide: PZM_FOCUSABLE_ITEM_ACCESSOR,
      useExisting: forwardRef(() => PrizmButtonComponent),
    },
    PrizmFocusVisibleService
  ],
})
export class PrizmButtonComponent extends AbstractPrizmInteractive
  implements PrizmFocusableElementAccessor {
  @Input()
  @HostBinding('attr.data-size')
  @pzmDefaultProp()
  size: PrizmSize = this.options.size;

  /** can pass template or icon class */
  @Input()
  icon: PrizmContent;

  /** can pass template or icon class */
  @Input()
  iconRight: PrizmContent;

  @Input()
  @HostBinding('attr.data-appearance')
  @pzmDefaultProp()
  appearance: PrizmAppearance = this.options.appearance;

  @Input()
  @HostBinding('attr.data-appearance-type')
  @pzmDefaultProp()
  appearanceType: PrizmAppearanceType = this.options.appearanceType;

  @Input()
  @pzmDefaultProp()
  disabled = false;

  @Input()
  @HostBinding('class._loading')
  @pzmDefaultProp()
  showLoader = false;

  @HostBinding('attr.disabled')
  get nativeDisabled(): '' | null {
    return this.computedDisabled || this.showLoader ? '' : null;
  }

  @HostBinding('tabIndex')
  get tabIndex(): number {
    return this.focusable ? 0 : -1;
  }

  @HostBinding('attr.testId')
  readonly testId = 'pzm_button';

  @HostListener('focusin', ['true'])
  @HostListener('focusout', ['false'])
  public onFocused(focused: boolean): void {
    this.updateFocused(focused);
  }

  get focused(): boolean {
    return !this.showLoader && pzmIsNativeFocused(this.elementRef.nativeElement);
  }

  constructor(
    @Inject(PZM_BUTTON_OPTIONS) private readonly options: PrizmButtonOptions,
    private readonly elementRef: ElementRef,
    private readonly focusVisible$: PrizmFocusVisibleService,
    private readonly hoveredService: PrizmHoveredService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly destroy$: PrizmDestroyService,
  ) {
    super();

    this.hoveredService.createHovered$(this.elementRef.nativeElement).pipe(
      tap(hovered => this.updateHovered(hovered)),
      tap(() => this.changeDetectorRef.markForCheck()),
      takeUntil(this.destroy$),
    ).subscribe();

    focusVisible$.pipe(
      takeUntil(destroy$),
    ).subscribe(focusVisible => {
      this.updateFocusVisible(focusVisible);
    });

    pzmPressedObservable(elementRef.nativeElement, {
      onlyTrusted: true,
    })
      .pipe(
        tap(pressed => {
          this.updatePressed(pressed);
        }),
        pzmWatch(changeDetectorRef),
        takeUntil(destroy$),
      ).subscribe();
  }

  get nativeFocusableElement(): HTMLElement | null {
    return this.nativeDisabled ? null : this.elementRef.nativeElement;
  }
  public isTemplateRef(icon: PrizmContent): icon is TemplateRef<unknown> {
    return icon instanceof TemplateRef;
  }

  get loaderSize(): PrizmSize {
    return this.size === 'l' || this.size === 'xl' ? 'm' : 's';
  }
}
