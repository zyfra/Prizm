import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type SpinnerColor = 'primary' | 'secondary' | 'info' | 'warning' | 'danger' | 'success';

@Component({
  selector: 'zyfra-spinner',
  templateUrl: './zyfra-spinner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraSpinnerComponent {
  @Input() size = '100px';
  @Input() style: Record<string, string | number>;
  @Input() styleClass: string;
  @Input() strokeWidth = '2';
  @Input() fill = 'none';
  @Input() animationDuration = '2s';
  @Input() color: SpinnerColor = 'primary';

  get spinnerStyle(): Record<string, string | number> {
    return {
      ...this.style,
      width: this.size,
      height: this.size,
    };
  }
}
