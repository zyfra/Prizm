import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'zyfra-split-button',
  templateUrl: './zyfra-split-button.component.html',
  styleUrls: ['./zyfra-split-button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraSplitButtonComponent {
  @Input() label: string;
  @Input() icon: string; 
  @Input() iconPos: 'left' | 'right' = 'left';
  @Input() disabled: boolean;
  @Input() style: string;
  @Input() menuStyle: string;
  @Input() menuStyleClass: string;
  @Input() styleClass: string;
  @Input() appendTo: any;
  @Input() dir: string;
  @Input() tabindex: number;
  @Input() model: MenuItem[];
  @Input() showTransitionOptions = '225ms ease-out';
  @Input() hideTransitionOptions = '195ms ease-in';

  @Output() onClick: EventEmitter<PointerEvent> = new EventEmitter();
  @Output() onDropdownClick: EventEmitter<PointerEvent> = new EventEmitter();

  nativeClick(event: Event): void {
    if (this.disabled) {
      event.stopPropagation();
    }
  }

  onClickHandler(event: PointerEvent) {
    this.onClick.emit(event);
  }

  onDropdownClickHandler(event: PointerEvent) {
    this.onDropdownClick.emit(event);
  }
}
