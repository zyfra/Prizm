import { Component, ChangeDetectionStrategy } from '@angular/core';

interface IGridItem {
  colPos: string;
  rowPos: string;
}

@Component({
  selector: 'prizm-grid-example-basic',
  templateUrl: './grid-example-basic.component.html',
  styleUrls: ['./grid-example-basic.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridExampleBasicComponent {
  public grids8: IGridItem[] = [
    { colPos: '1:8', rowPos: '1' },
    { colPos: '1:3', rowPos: '2:8' },
    { colPos: '4', rowPos: '2:8' },
    { colPos: '5', rowPos: '2:8' },
    { colPos: '6', rowPos: '2:8' },
    { colPos: '7', rowPos: '2:8' },
    { colPos: '8', rowPos: '2:8' },
  ];

  public grids12: IGridItem[] = [
    { colPos: '1:12', rowPos: '1:2' },
    { colPos: '1:3', rowPos: '3:14' },
    { colPos: '4', rowPos: '3:14' },
    { colPos: '5', rowPos: '3:14' },
    { colPos: '6', rowPos: '3:14' },
    { colPos: '7', rowPos: '3:14' },
    { colPos: '8', rowPos: '3:14' },
    { colPos: '9', rowPos: '3:14' },
    { colPos: '10', rowPos: '3:14' },
    { colPos: '11', rowPos: '3:14' },
    { colPos: '12', rowPos: '3:14' },
  ];
}
