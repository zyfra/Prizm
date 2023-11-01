import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { PrizmSliderCnobValuePosition } from './types';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'prizm-slider-cnob',
  template: `<span class="value value--{{ showValueOn }}" *ngIf="value !== null">
    {{ value }}
  </span>`,
  styleUrls: ['./slider-cnob.component.less'],

  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[attr.tabindex]': "disabled ? null : '0'",
    '[attr.disabled]': "disabled ? '' : null",
  },
})
export class PrizmSliderCnobComponent {
  @Input() @HostBinding('attr.index') index!: number;
  @Input() value!: number | null;
  @Input() showValueOn!: PrizmSliderCnobValuePosition;
  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  @Output()
  dragStart = new EventEmitter<{
    index: number;
    shiftX: number;
    shiftY: number;
  }>();

  @HostListener('pointerdown', ['$event']) public pointerdown(event: PointerEvent): void {
    if (this.disabled) {
      event.preventDefault();
      return;
    }

    this.el.nativeElement.setPointerCapture(event.pointerId);

    const bcr = this.el.nativeElement.getBoundingClientRect();
    const shiftX = event.clientX - bcr.left;
    const shiftY = event.clientY - bcr.bottom;

    this.dragStart.next({
      index: this.index,
      shiftX,
      shiftY,
    });
  }

  @HostListener('dragstart', ['$event']) private nativeDragStart(event: Event): void {
    event.preventDefault();
  }

  constructor(private el: ElementRef<HTMLElement>) {}
}
