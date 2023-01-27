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
import { prizmIsNativeFocusedIn } from '../../util/is-native-focused-in';
import { prizmBlurNativeFocused } from '../../util/blur-native-focused';
import { PrizmSize, prizmSizeBigger } from '../../util/size-bigger';

@Component({
  selector: 'prizm-loader',
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
      prizmBlurNativeFocused(this.documentRef);
    }

    this.loading = value;
  }

  @HostBinding('class._loading')
  loading = true;

  @HostBinding('attr.testId')
  readonly testId = 'prizm_loader';

  constructor(
    @Inject(DOCUMENT) private readonly documentRef: Document,
    @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>
  ) {}

  get hasOverlay(): boolean {
    return this.overlay && this.loading;
  }

  get hasText(): boolean {
    return !!this.textContent;
  }

  get isHorizontal(): boolean {
    return !prizmSizeBigger(this.size);
  }

  get focused(): boolean {
    return prizmIsNativeFocusedIn(this.elementRef.nativeElement);
  }
}
