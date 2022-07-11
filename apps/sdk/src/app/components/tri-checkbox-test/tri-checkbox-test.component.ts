import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-tri-checkbox-test',
  templateUrl: './tri-checkbox-test.component.html',
  styleUrls: ['./tri-checkbox-test.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TriCheckboxTestComponent {
  public model = true;
  public label = 'Чекбокс';
}
