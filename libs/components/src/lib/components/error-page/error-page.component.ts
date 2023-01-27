import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'prizm-error-page',
  templateUrl: 'error-page.component.html',
  styleUrls: ['error-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmErrorPageComponent {
  @Input() code!: number;
  @Input() title!: string;
}
