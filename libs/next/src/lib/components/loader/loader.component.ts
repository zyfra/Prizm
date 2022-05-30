import {DOCUMENT} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  TemplateRef,
} from '@angular/core';
// import {sizeBigger} from '@taiga-ui/core/utils/miscellaneous';
import {isNativeFocusedIn} from "../../util/is-native-focused-in";
import {blurNativeFocused} from "../../util/blur-native-focused";
import {ZuiSize} from "../button";

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
            blurNativeFocused(this.documentRef);
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

    get isHorizontal(): boolean {
        return !sizeBigger(this.size);
    }

    get focused(): boolean {
        return isNativeFocusedIn(this.elementRef.nativeElement);
    }
}
