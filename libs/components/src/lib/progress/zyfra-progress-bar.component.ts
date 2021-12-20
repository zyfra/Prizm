import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'zyfra-progress-bar',
  templateUrl: './zyfra-progress-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraProgressBarComponent {
  @Input() value: number = null;
  @Input() showValue: boolean = true;
  @Input() unit: string = '%';
  @Input() mode: 'determinate' | 'indeterminate' = 'determinate';
  @Input() style: { [key: string]: string | null } = null;
  @Input() styleClass: string = null;
  @Input() size: 'normal' | 'mini' = 'normal';
  @Input() color: 'primary' | 'secondary' | 'info' | 'warning' | 'danger' | 'success' = 'primary';

  public get styleClasses(): string {
    return `zyfra-progress_size-${this.size} zyfra-progress_color-${this.color} ${this.styleClass}`;
  }
}
