import {DOCUMENT} from '@angular/common';
import {ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, Input, TemplateRef,} from '@angular/core';
import {zuiIsNativeFocusedIn} from "../../util/zui-is-native-focused-in";
import {zuiBlurNativeFocused} from "../../util/zui-blur-native-focused";
import {ZuiSize} from '../../util/zui-size-bigger';

@Component({
    selector: 'zui-loader',
    templateUrl: './loader.template.html',
    styleUrls: ['./loader.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiLoaderComponent {
    @Input()
    size: ZuiSize;

    @Input()
    inheritColor: boolean = false;

    @Input()
    overlay: boolean = false;

    @Input()
    textContent: TemplateRef<any> | null = null;

    @Input()
    set showLoader(value: boolean) {
        if (value && this.focused) {
            zuiBlurNativeFocused(this.documentRef);
        }

        this.loading = value;
    }

    @HostBinding('class._loading')
    loading = true;

    constructor(
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {}

    get hasOverlay(): boolean {
        return this.overlay && this.loading;
    }

    get hasText(): boolean {
        return !!this.textContent;
    }

    // get isHorizontal(): boolean {
    //     return !zuiSizeBigger(this.size);
    // }

    get focused(): boolean {
        return zuiIsNativeFocusedIn(this.elementRef.nativeElement);
    }
}
