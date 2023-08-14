import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'prizm-input-chips-item-example',
  templateUrl: './input-chips-item-example.component.html',
  styleUrls: ['./input-chips-item-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputChipsItemExampleComponent {
  public deletable = true;
}
