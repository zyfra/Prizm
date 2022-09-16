import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, HostBinding, Inject, Input } from '@angular/core';
import { merge } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { zuiDefaultProp } from '../../decorators/default-prop';
import { ZuiFocusVisibleService } from '../../directives/focus-visible/focus-visible.service';
import { ZUI_FOCUSABLE_ITEM_ACCESSOR } from '../../tokens/focusable-item-accessor';
import { ZuiFocusableElementAccessor, ZuiNativeFocusableElement } from '../../types/focusable-element-accessor';
import { zuiTypedFromEvent } from '../../observables';
import { zuiIsNativeFocused } from '../../util/is-native-focused';
import { ZuiHorizontalDirection } from '../../types/direction';
import { ZuiThemeService } from '../../services/theme.service';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: `a[zuiLink], button[zuiLink]`,
    templateUrl: `./link.component.html`,
    styleUrls: [`./link.component.less`],
    providers: [
        {
            provide: ZUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => ZuiLinkComponent),
        },
        ZuiFocusVisibleService,
        ZuiDestroyService,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `zuiLink`,
})
export class ZuiLinkComponent implements ZuiFocusableElementAccessor {
    @Input()
    @HostBinding(`class._pseudo`)
    @zuiDefaultProp()
    pseudo = false;

    // TODO: 2.0 Remove `null`
    @Input()
    @zuiDefaultProp()
    icon: string | null = null;

    @Input()
    @zuiDefaultProp()
    iconAlign: ZuiHorizontalDirection = `right`;

    @Input()
    @HostBinding(`class._icon-rotated`)
    @zuiDefaultProp()
    iconRotated = false;

    @Input()
    @HostBinding(`attr.data-host-mode`)
    @zuiDefaultProp()
    mode: 'positive' | 'negative' | null = null;

    @HostBinding(`class._focus-visible`)
    focusVisible = false;

    @HostBinding('attr.testId')
    readonly testId = 'zui_link';

    readonly focusedChange = merge(
        zuiTypedFromEvent(this.elementRef.nativeElement, `focusin`).pipe(mapTo(true)),
        zuiTypedFromEvent(this.elementRef.nativeElement, `focusout`).pipe(mapTo(false)),
    );

    constructor(
        @Inject(ElementRef)
        private readonly elementRef: ElementRef<ZuiNativeFocusableElement>,
        public readonly mode$: ZuiThemeService,
        @Inject(ZuiFocusVisibleService)
        focusVisible$: ZuiFocusVisibleService,
    ) {
        focusVisible$.subscribe(visible => {
            this.focusVisible = visible;
        });
    }

    get nativeFocusableElement(): ZuiNativeFocusableElement {
        return this.elementRef.nativeElement;
    }

    get focused(): boolean {
        return zuiIsNativeFocused(this.nativeFocusableElement);
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
