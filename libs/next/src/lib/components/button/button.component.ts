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
import { PZM_BUTTON_OPTIONS, PzmButtonOptions, PzmContent } from './button-options';
import { AbstractPzmInteractive } from '../../abstract/interactive';
import { pzmIsNativeFocused } from '../../util/is-native-focused';
import { PzmSize } from '../../util/size-bigger';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { takeUntil, tap } from 'rxjs/operators';
import { pzmPressedObservable } from '../../observables/pressed-observable';
import { PzmAppearance, PzmAppearanceType } from '../../types/appearance.types';
import { pzmWatch } from '../../observables/watch';
import { pzmDefaultProp } from '../../decorators';
import { PZM_FOCUSABLE_ITEM_ACCESSOR } from '../../tokens';
import { PzmFocusableElementAccessor } from '../../types';
import { PzmFocusVisibleService } from '../../directives/focus-visible/focus-visible.service';
import { PzmHoveredService } from '../../services';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[pzmButton], button[pzmIconButton], a[pzmButton], a[pzmIconButton]',
  styleUrls: ['./button.component.less'],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PzmDestroyService,
    {
      provide: PZM_FOCUSABLE_ITEM_ACCESSOR,
      useExisting: forwardRef(() => PzmButtonComponent),
    },
    PzmFocusVisibleService
  ],
})
export class PzmButtonComponent extends AbstractPzmInteractive
  implements PzmFocusableElementAccessor {
  @Input()
  @HostBinding('attr.data-size')
  @pzmDefaultProp()
  size: PzmSize = this.options.size;

  /** can pass template or icon class */
  @Input()
  icon: PzmContent;

  /** can pass template or icon class */
  @Input()
  iconRight: PzmContent;

  @Input()
  @HostBinding('attr.data-appearance')
  @pzmDefaultProp()
  appearance: PzmAppearance = this.options.appearance;

  @Input()
  @HostBinding('attr.data-appearance-type')
  @pzmDefaultProp()
  appearanceType: PzmAppearanceType = this.options.appearanceType;

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
    @Inject(PZM_BUTTON_OPTIONS) private readonly options: PzmButtonOptions,
    private readonly elementRef: ElementRef,
    private readonly focusVisible$: PzmFocusVisibleService,
    private readonly hoveredService: PzmHoveredService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly destroy$: PzmDestroyService,
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
  public isTemplateRef(icon: PzmContent): icon is TemplateRef<unknown> {
    return icon instanceof TemplateRef;
  }

  get loaderSize(): PzmSize {
    return this.size === 'l' || this.size === 'xl' ? 'm' : 's';
  }
}
