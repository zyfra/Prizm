import { Component } from '@angular/core';

@Component({
  selector: 'prizm-tree-array-example',
  templateUrl: './tree-array-example.component.html',
})
export class TreeArrayExampleComponent {
  readonly data = [
    'Top level 1',
    ['Second level item', ['Third level 1', 'Third level 2', 'Third level 3']],
    'Top level 2',
    'Top level 3',
    ['Second 1', 'Second 2'],
  ];
}
