import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'zyfra-button',
  templateUrl: './zyfra-button.component.html',
  styles: ['./zyfra-button.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraButtonComponent {
  @Input() label: string;
  @Input() type: string = 'button'; // | 'reset' | 'submit';
  @Input() icon: string;
  @Input() iconPos: string = 'left';
  @Input() disabled: boolean;
  @Input() badge: string;
  @Input() style: string;
  @Input() styleClass: string;

  @Output() click: EventEmitter<unknown> = new EventEmitter();
  @Output() focus: EventEmitter<unknown> = new EventEmitter();
  @Output() blur: EventEmitter<unknown> = new EventEmitter();

  public onClick(event: Event): void {
    this.click.emit(event);
  }
  public onFocus(event: Event): void {
    this.focus.emit(event);
  }
  public onBlur(event: Event): void {
    this.blur.emit(event);
  }
}
