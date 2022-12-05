import {
  Component,
  ChangeDetectionStrategy,
  Input,
  AfterContentInit,
  ContentChildren,
  ElementRef,
  QueryList,
  ViewChild,
  HostBinding,
} from '@angular/core';
import { GridItemComponent } from './components/grid-item/grid-item.component';

@Component({
  selector: 'prizm-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent implements AfterContentInit {
  @Input() @HostBinding('attr.columns') public cols: '8' | '12' = '12';
  @Input() public rows = '10';

  @ViewChild('container', { static: true }) container: ElementRef;
  @ContentChildren(GridItemComponent, { read: ElementRef }) public gridItems: QueryList<ElementRef>;
  @ContentChildren(GridItemComponent) public gridItemsData: QueryList<GridItemComponent>;

  @HostBinding('attr.testId')
  readonly testId = 'prizm_grid';

  public ngAfterContentInit(): void {
    const containerElement = this.container.nativeElement;
    containerElement.style['grid-template-columns'] = `repeat(${this.cols}, 1fr)`;

    const gridItemsElement = [...this.gridItems];
    const gridItemsData = [...this.gridItemsData];

    gridItemsElement.forEach((item, idx) => {
      const row = gridItemsData[idx].rowPos;
      const col = gridItemsData[idx].colPos;

      item.nativeElement.style['grid-column'] = col.replace(':', ' / span ');
      item.nativeElement.style['grid-row'] = row.replace(':', ' / span ');
    });
  }
}
