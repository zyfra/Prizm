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
import { PrizmSize, prizmSizeBigger } from '../../util/size-bigger';

@Component({
  selector: 'prizm-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmSpinnerComponent {
  @Input()
  size: PrizmSize = 's';

  @Input()
  inheritColor = false;

  @Input()
  textContent: TemplateRef<unknown> | null = null;

  @HostBinding('class._loading')
  loading = true;

  @HostBinding('attr.testId')
  readonly testId = 'prizm_loader';

  constructor(
    @Inject(DOCUMENT) private readonly documentRef: Document,
    @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>
  ) {}

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
