import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prizm-paginator-options-example',
  templateUrl: './paginator-options-example.component.html',
  styleUrls: ['./paginator-options-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorOptionsExampleComponent {
  public disabled = false;
}
