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
import { PRIZM_BUTTON_OPTIONS, PrizmButtonOptions, PrizmContent } from './button-options';
import { AbstractPrizmInteractive } from '../../abstract/interactive';
import { prizmIsNativeFocused } from '../../util/is-native-focused';
import { PrizmSize } from '../../util/size-bigger';
import { PrizmCallFuncPipe, PrizmDestroyService } from '@prizm-ui/helpers';
import { takeUntil, tap } from 'rxjs/operators';
import { prizmPressedObservable } from '../../observables/pressed-observable';
import { PrizmAppearance, PrizmAppearanceType } from '../../types/appearance.types';
import { prizmWatch } from '../../observables/watch';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_FOCUSABLE_ITEM_ACCESSOR } from '../../tokens';
import { PrizmFocusableElementAccessor } from '../../types';
import { PrizmFocusVisibleService } from '../../directives/focus-visible/focus-visible.service';
import { PrizmHoveredService } from '../../services';
import { PolymorphContent } from '../../directives/polymorph/types/content';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import { PrizmIconModule } from '../icon';
import { PrizmLoaderModule } from '../loader';
import { PrizmWrapperComponent } from '../../directives/wrapper/wrapper.component';
import { PolymorphOutletDirective } from '../../directives/polymorph/directives/outlet';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[prizmButton], button[prizmIconButton], a[prizmButton], a[prizmIconButton]',
  styleUrls: ['./button.component.less'],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    PrizmWrapperComponent,
    PolymorphOutletDirective,
    PrizmIconModule,
    PrizmLoaderModule,
    PrizmCallFuncPipe,
  ],
  providers: [
    PrizmDestroyService,
    {
      provide: PRIZM_FOCUSABLE_ITEM_ACCESSOR,
      useExisting: forwardRef(() => PrizmButtonComponent),
    },
    PrizmFocusVisibleService,
  ],
})
export class PrizmButtonComponent extends AbstractPrizmInteractive implements PrizmFocusableElementAccessor {
  @Input()
  @HostBinding('attr.data-size')
  @prizmDefaultProp()
  size: PrizmSize = this.options.size;

  /** can pass template or icon class */
  @Input()
  icon!: PolymorphContent<{ size: PrizmSize }>;

  /** can pass template or icon class */
  @Input()
  iconRight!: PolymorphContent<{ size: PrizmSize }>;

  @Input()
  @HostBinding('attr.data-appearance')
  @prizmDefaultProp()
  appearance: PrizmAppearance = this.options.appearance;

  @Input()
  @HostBinding('attr.data-appearance-type')
  @prizmDefaultProp()
  appearanceType: PrizmAppearanceType = this.options.appearanceType;

  @Input()
  @prizmDefaultProp()
  get disabled() {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  @Input()
  @HostBinding('class._loading')
  @prizmDefaultProp()
  showLoader = false;

  @HostBinding('attr.disabled')
  get nativeDisabled(): '' | null {
    return this.computedDisabled || this.showLoader ? '' : null;
  }

  @HostBinding('tabIndex')
  get tabIndex(): number {
    return this.focusable ? 0 : -1;
  }

  override get generateManeTestId() {
    return this.hasIcon ? 'ui_button' : 'ui_icon_button';
  }

  @HostListener('focusin', ['true'])
  @HostListener('focusout', ['false'])
  public onFocused(focused: boolean): void {
    this.updateFocused(focused);
  }

  get focused(): boolean {
    return !this.showLoader && prizmIsNativeFocused(this.elementRef.nativeElement);
  }

  constructor(
    @Inject(PRIZM_BUTTON_OPTIONS) private readonly options: PrizmButtonOptions,
    private readonly elementRef: ElementRef,
    private readonly focusVisible$: PrizmFocusVisibleService,
    private readonly hoveredService: PrizmHoveredService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly destroy$: PrizmDestroyService
  ) {
    super();

    this.hoveredService
      .createHovered$(this.elementRef.nativeElement)
      .pipe(
        tap(hovered => this.updateHovered(hovered)),
        tap(() => this.changeDetectorRef.markForCheck()),
        takeUntil(this.destroy$)
      )
      .subscribe();

    focusVisible$.pipe(takeUntil(destroy$)).subscribe(focusVisible => {
      this.updateFocusVisible(focusVisible);
    });

    prizmPressedObservable(elementRef.nativeElement, {
      onlyTrusted: true,
    })
      .pipe(
        tap(pressed => {
          this.updatePressed(pressed);
        }),
        prizmWatch(changeDetectorRef),
        takeUntil(destroy$)
      )
      .subscribe();
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

  get hasIcon(): boolean {
    return !!(this.icon || this.iconRight);
  }
}
