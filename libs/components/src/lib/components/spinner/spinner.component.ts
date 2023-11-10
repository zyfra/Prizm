import { CommonModule, DOCUMENT } from '@angular/common';
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
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { PolymorphOutletDirective } from '../../directives/polymorph';

@Component({
  selector: 'prizm-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, PolymorphOutletDirective],
})
export class PrizmSpinnerComponent extends PrizmAbstractTestId {
  @Input()
  size: PrizmSize = 's';

  @Input()
  inheritColor = false;

  @Input()
  textContent: TemplateRef<unknown> | null = null;

  @HostBinding('class._loading')
  loading = true;

  override readonly testId_ = 'ui_spinner';

  constructor(
    @Inject(DOCUMENT) private readonly documentRef: Document,
    @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>
  ) {
    super();
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
