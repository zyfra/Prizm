import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  HostBinding,
  Input,
  QueryList,
  ViewChild,
} from '@angular/core';
import { PrizmGridItemComponent } from './components/grid-item/grid-item.component';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { prizmEmptyQueryList } from '@prizm-ui/helpers';

@Component({
  selector: 'prizm-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class PrizmGridComponent extends PrizmAbstractTestId implements AfterContentInit {
  @Input() @HostBinding('attr.columns') public cols: '8' | '12' = '12';
  @Input() public rows = '10';

  @ViewChild('container', { static: true }) container!: ElementRef;

  @ContentChildren(PrizmGridItemComponent, { read: ElementRef })
  public gridItems: QueryList<ElementRef> = prizmEmptyQueryList();

  @ContentChildren(PrizmGridItemComponent)
  public gridItemsData: QueryList<PrizmGridItemComponent> = prizmEmptyQueryList();

  override readonly testId_ = 'ui-area--grid';

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
