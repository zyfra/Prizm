import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prizm-paginator-basic-example',
  templateUrl: './paginator-basic-example.component.html',
  styleUrls: ['./paginator-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorBasicExampleComponent {
  public disabled = false;
}
