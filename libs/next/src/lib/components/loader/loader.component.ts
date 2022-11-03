import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  TemplateRef,
} from '@angular/core';
import { pzmIsNativeFocusedIn } from '../../util/is-native-focused-in';
import { pzmBlurNativeFocused } from '../../util/blur-native-focused';
import { PrizmSize, pzmSizeBigger } from '../../util/size-bigger';

@Component({
    selector: 'pzm-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmLoaderComponent {
    @Input()
    size: PrizmSize = 's';

    @Input()
    inheritColor = false;

    @Input()
    overlay = false;

    @Input()
    textContent: TemplateRef<unknown> | null = null;

    @Input()
    set showLoader(value: boolean) {
        if (value && this.focused) {
            pzmBlurNativeFocused(this.documentRef);
        }

        this.loading = value;
    }

    @HostBinding('class._loading')
    loading = true;

    @HostBinding('attr.testId')
    readonly testId = 'pzm_loader';

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
        return !pzmSizeBigger(this.size);
    }

    get focused(): boolean {
        return pzmIsNativeFocusedIn(this.elementRef.nativeElement);
    }
}
