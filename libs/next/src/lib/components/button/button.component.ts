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
import { ZUI_BUTTON_OPTIONS, ZuiButtonOptions, ZuiContent } from './button-options';
import { AbstractZuiInteractive } from '../../abstract/interactive';
import { zuiIsNativeFocused } from '../../util/is-native-focused';
import { ZuiSize } from '../../util/size-bigger';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { takeUntil, tap } from 'rxjs/operators';
import { zuiPressedObservable } from '../../observables/pressed-observable';
import { ZuiAppearance, ZuiAppearanceType } from '../../types/appearance.types';
import { zuiWatch } from '../../observables/watch';
import { zuiDefaultProp } from '../../decorators';
import { ZUI_FOCUSABLE_ITEM_ACCESSOR } from '../../tokens';
import { ZuiFocusableElementAccessor } from '../../types';
import { ZuiFocusVisibleService } from '../../directives/focus-visible/focus-visible.service';
import { ZuiHoveredService } from '../../services';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[zuiButton], button[zuiIconButton], a[zuiButton], a[zuiIconButton]',
  styleUrls: ['./button.component.less'],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ZuiDestroyService,
    {
      provide: ZUI_FOCUSABLE_ITEM_ACCESSOR,
      useExisting: forwardRef(() => ZuiButtonComponent),
    },
    ZuiFocusVisibleService
  ],
})
export class ZuiButtonComponent extends AbstractZuiInteractive
  implements ZuiFocusableElementAccessor {
  @Input()
  @HostBinding('attr.data-size')
  @zuiDefaultProp()
  size: ZuiSize = this.options.size;

  /** can pass template or icon class */
  @Input()
  icon: ZuiContent;

  /** can pass template or icon class */
  @Input()
  iconRight: ZuiContent;

  @Input()
  @HostBinding('attr.data-appearance')
  @zuiDefaultProp()
  appearance: ZuiAppearance = this.options.appearance;

  @Input()
  @HostBinding('attr.data-appearance-type')
  @zuiDefaultProp()
  appearanceType: ZuiAppearanceType = this.options.appearanceType;

  @Input()
  @zuiDefaultProp()
  disabled = false;

  @Input()
  @HostBinding('class._loading')
  @zuiDefaultProp()
  showLoader = false;

  @HostBinding('attr.disabled')
  get nativeDisabled(): '' | null {
    return this.computedDisabled || this.showLoader ? '' : null;
  }

  @HostBinding('tabIndex')
  get tabIndex(): number {
    return this.focusable ? 0 : -1;
  }

  @HostListener('focusin', ['true'])
  @HostListener('focusout', ['false'])
  public onFocused(focused: boolean): void {
    this.updateFocused(focused);
  }

  get focused(): boolean {
    return !this.showLoader && zuiIsNativeFocused(this.elementRef.nativeElement);
  }

  constructor(
    @Inject(ZUI_BUTTON_OPTIONS) private readonly options: ZuiButtonOptions,
    private readonly elementRef: ElementRef,
    private readonly focusVisible$: ZuiFocusVisibleService,
    private readonly hoveredService: ZuiHoveredService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly destroy$: ZuiDestroyService,
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

    zuiPressedObservable(elementRef.nativeElement, {
      onlyTrusted: true,
    })
      .pipe(
        tap(pressed => {
          this.updatePressed(pressed);
        }),
        zuiWatch(changeDetectorRef),
        takeUntil(destroy$),
      ).subscribe();
  }

  get nativeFocusableElement(): HTMLElement | null {
    return this.nativeDisabled ? null : this.elementRef.nativeElement;
  }
  public isTemplateRef(icon: ZuiContent): icon is TemplateRef<unknown> {
    return icon instanceof TemplateRef;
  }

  get loaderSize(): ZuiSize {
    return this.size === 'l' || this.size === 'xl' ? 'm' : 's';
  }
}
