import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  Inject,
  Input,
} from '@angular/core';
import { merge } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmFocusVisibleService } from '../../directives/focus-visible/focus-visible.service';
import { PRIZM_FOCUSABLE_ITEM_ACCESSOR } from '../../tokens/focusable-item-accessor';
import {
  PrizmFocusableElementAccessor,
  PrizmNativeFocusableElement,
} from '../../types/focusable-element-accessor';
import { prizmTypedFromEvent } from '../../observables';
import { prizmIsNativeFocused } from '../../util/is-native-focused';
import { PrizmHorizontalDirection } from '../../types/direction';
import { PrizmThemeService } from '@prizm-ui/theme';
import { PrizmDestroyService } from '@prizm-ui/helpers';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `a[prizmLink], button[prizmLink]`,
  templateUrl: `./link.component.html`,
  styleUrls: [`./link.component.less`],
  providers: [
    {
      provide: PRIZM_FOCUSABLE_ITEM_ACCESSOR,
      useExisting: forwardRef(() => PrizmLinkComponent),
    },
    PrizmFocusVisibleService,
    PrizmDestroyService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: `prizmLink`,
})
export class PrizmLinkComponent implements PrizmFocusableElementAccessor {
  @Input()
  @HostBinding(`class._pseudo`)
  @prizmDefaultProp()
  pseudo = false;

  // TODO: 2.0 Remove `null`
  @Input()
  @prizmDefaultProp()
  icon: string | null = null;

  @Input()
  @prizmDefaultProp()
  iconAlign: PrizmHorizontalDirection = `right`;

  @Input()
  @HostBinding(`class._icon-rotated`)
  @prizmDefaultProp()
  iconRotated = false;

  @Input()
  @HostBinding(`attr.data-host-mode`)
  @prizmDefaultProp()
  mode: 'positive' | 'negative' | null = null;

  @HostBinding(`class._focus-visible`)
  focusVisible = false;

  @HostBinding('attr.testId')
  readonly testId = 'prizm_link';

  readonly focusedChange = merge(
    prizmTypedFromEvent(this.elementRef.nativeElement, `focusin`).pipe(mapTo(true)),
    prizmTypedFromEvent(this.elementRef.nativeElement, `focusout`).pipe(mapTo(false))
  );

  constructor(
    @Inject(ElementRef)
    private readonly elementRef: ElementRef<PrizmNativeFocusableElement>,
    public readonly mode$: PrizmThemeService,
    @Inject(PrizmFocusVisibleService)
    focusVisible$: PrizmFocusVisibleService
  ) {
    focusVisible$.subscribe(visible => {
      this.focusVisible = visible;
    });
  }

  get nativeFocusableElement(): PrizmNativeFocusableElement {
    return this.elementRef.nativeElement;
  }

  get focused(): boolean {
    return prizmIsNativeFocused(this.nativeFocusableElement);
  }

  get hasIcon(): boolean {
    return this.icon !== null;
  }

  get iconAlignLeft(): boolean {
    return this.hasIcon && this.iconAlign === `left`;
  }

  get iconAlignRight(): boolean {
    return this.hasIcon && this.iconAlign === `right`;
  }
}
