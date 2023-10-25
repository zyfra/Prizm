import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  HostListener,
  Inject,
  Injector,
  Input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';

import { PrizmInputControl } from '../common/base/input-control.class';
import { PrizmInputCarouselContent } from './carousel-content/carousel-content.interface';
import { PrizmInputNgControl } from '../common';
import { takeUntil, tap } from 'rxjs/operators';
import { PrizmInputCarousel } from './types';

@Component({
  selector: 'prizm-input-carousel',
  templateUrl: './input-carousel.component.html',
  styleUrls: ['./input-carousel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: PrizmInputControl,
      useExisting: PrizmInputCarouselComponent,
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmInputCarouselComponent),
      multi: true,
    },
    PrizmDestroyService,
  ],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[class.ng-filled]': '!empty',
    class: 'prizm-carousel',
    '[attr.tabindex]': "disabled ? null : '0'",
  },
})
export class PrizmInputCarouselComponent
  extends PrizmInputNgControl<unknown>
  implements ControlValueAccessor, PrizmInputCarousel
{
  override readonly testId_ = 'ui-area--carousel';
  @Input() carouselContent!: PrizmInputCarouselContent;

  @Input() lightMode = false;

  hasClearButton = false;
  nativeElementType = 'carousel';
  focused = false;

  constructor(
    @Inject(Injector) injector: Injector,
    private el: ElementRef,
    private readonly cdr: ChangeDetectorRef
  ) {
    super(injector);
  }

  public override ngOnInit() {
    super.ngOnInit();

    this.value$
      .pipe(
        tap(value => this.carouselContent.setCurrentValue(value)),
        tap(() => this.changeDetectorRef.markForCheck()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public left(): void {
    if (this.carouselContent.controlsState.leftCtrlDisabled) return;
    this.carouselContent.left();
    this.updateFromContent();
  }

  public stepLeft(): void {
    if (this.carouselContent.controlsState.stepleftCtrlDisabled) return;
    this.carouselContent.stepLeft();
    this.updateFromContent();
  }

  public stepRight(): void {
    if (this.carouselContent.controlsState.stepRightCtrlDisabled) return;
    this.carouselContent.stepRight();
    this.updateFromContent();
  }

  public right(): void {
    if (this.carouselContent.controlsState.rightCtrlDisabled) return;
    this.carouselContent.right();
    this.updateFromContent();
  }

  private updateFromContent(): void {
    super.updateValue(this.carouselContent.currentValue);

    this.cdr.detectChanges();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  @HostListener('focus', ['$event'])
  onFocus(): void {
    this.focused = true;
    this.stateChanges.next();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  @HostListener('blur', ['$event'])
  onBlur(): void {
    this.focused = false;
    this.stateChanges.next();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  @HostListener('keydown.arrowleft', ['$event']) onArrowLeft(event: KeyboardEvent): void {
    event.preventDefault();
    this.stepLeft();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  @HostListener('keydown.arrowright', ['$event']) onArrowRight(event: KeyboardEvent): void {
    event.preventDefault();
    this.stepRight();
  }

  public override clear(ev: MouseEvent) {
    super.clear(ev);
    this.carouselContent.setCurrentValue(null);
  }

  public focus(): void {
    this.el.nativeElement.focus();
  }
}
