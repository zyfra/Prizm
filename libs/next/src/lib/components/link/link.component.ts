import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, HostBinding, Inject, Input } from '@angular/core';
import { merge } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { pzmDefaultProp } from '../../decorators/default-prop';
import { PzmFocusVisibleService } from '../../directives/focus-visible/focus-visible.service';
import { PZM_FOCUSABLE_ITEM_ACCESSOR } from '../../tokens/focusable-item-accessor';
import { PzmFocusableElementAccessor, ZuiNativeFocusableElement } from '../../types/focusable-element-accessor';
import { pzmTypedFromEvent } from '../../observables';
import { pzmIsNativeFocused } from '../../util/is-native-focused';
import { PzmHorizontalDirection } from '../../types/direction';
import { PzmThemeService } from '../../services/theme.service';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: `a[pzmLink], button[pzmLink]`,
    templateUrl: `./link.component.html`,
    styleUrls: [`./link.component.less`],
    providers: [
        {
            provide: PZM_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => PzmLinkComponent),
        },
        PzmFocusVisibleService,
        PzmDestroyService,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `pzmLink`,
})
export class PzmLinkComponent implements PzmFocusableElementAccessor {
    @Input()
    @HostBinding(`class._pseudo`)
    @pzmDefaultProp()
    pseudo = false;

    // TODO: 2.0 Remove `null`
    @Input()
    @pzmDefaultProp()
    icon: string | null = null;

    @Input()
    @pzmDefaultProp()
    iconAlign: PzmHorizontalDirection = `right`;

    @Input()
    @HostBinding(`class._icon-rotated`)
    @pzmDefaultProp()
    iconRotated = false;

    @Input()
    @HostBinding(`attr.data-host-mode`)
    @pzmDefaultProp()
    mode: 'positive' | 'negative' | null = null;

    @HostBinding(`class._focus-visible`)
    focusVisible = false;

    @HostBinding('attr.testId')
    readonly testId = 'pzm_link';

    readonly focusedChange = merge(
        pzmTypedFromEvent(this.elementRef.nativeElement, `focusin`).pipe(mapTo(true)),
        pzmTypedFromEvent(this.elementRef.nativeElement, `focusout`).pipe(mapTo(false)),
    );

    constructor(
        @Inject(ElementRef)
        private readonly elementRef: ElementRef<ZuiNativeFocusableElement>,
        public readonly mode$: PzmThemeService,
        @Inject(PzmFocusVisibleService)
        focusVisible$: PzmFocusVisibleService,
    ) {
        focusVisible$.subscribe(visible => {
            this.focusVisible = visible;
        });
    }

    get nativeFocusableElement(): ZuiNativeFocusableElement {
        return this.elementRef.nativeElement;
    }

    get focused(): boolean {
        return pzmIsNativeFocused(this.nativeFocusableElement);
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
