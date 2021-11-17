import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Output,
  EventEmitter,
} from '@angular/core';

export type TZyfraButtonIconPosision = 'left' | 'right' | 'top' | 'bottom';

@Component({
  selector: 'zyfra-button',
  templateUrl: './zyfra-button.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraButtonComponent {
  @Input() label: string;
  @Input() type = 'button';
  @Input() icon: string;
  @Input() iconPos: TZyfraButtonIconPosision = 'left';
  @Input() disabled: boolean;
  @Input() badge: string;
  @Input() style: string;
  @Input() styleClass: string;

  @Output() onClick = new EventEmitter<PointerEvent>();
  @Output() onFocus = new EventEmitter<FocusEvent>();
  @Output() onBlur = new EventEmitter<FocusEvent>();

  // останавливаю всплытие клика (именно так. через HostListener не работает)
  nativeClick(event: Event): void {
    if (this.disabled) {
      event.stopPropagation();
    }
  }

  click(event: PointerEvent): void {
    this.onClick.emit(event);
  }

  focus(event: FocusEvent): void {
    this.onFocus.emit(event);
  }

  blur(event: FocusEvent): void {
    this.onBlur.emit(event);
  }
}
