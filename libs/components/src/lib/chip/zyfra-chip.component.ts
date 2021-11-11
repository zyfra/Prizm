import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-chip',
  templateUrl: './zyfra-chip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraChipComponent {
  @Input() label: string;
  @Input() icon: string;
  @Input() image: string;
  @Input() removable: boolean;
  @Input() style: string;
  @Input() styleClass: string;
  @Input() removeIcon: string = 'zyfra-icon cancel-close-circle';

  /* onRemove */
  @Output() onRemove: EventEmitter<any> = new EventEmitter();

  onRemoveHandler(event) {
    this.onRemove.emit(event);
  }
}
