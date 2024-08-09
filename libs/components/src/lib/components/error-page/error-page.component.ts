import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'prizm-error-page',
  templateUrl: 'error-page.component.html',
  styleUrls: ['error-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class PrizmErrorPageComponent extends PrizmAbstractTestId {
  @Input() code!: number;
  @Input() title!: string;
  override readonly testId_ = 'ui_error-page';
}
