import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prizm-paginator-basic-left-example',
  templateUrl: './paginator-basic-left-example.component.html',
  styleUrls: ['./paginator-basic-left-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorBasicLeftExampleComponent {
  public disabled = false;
}
