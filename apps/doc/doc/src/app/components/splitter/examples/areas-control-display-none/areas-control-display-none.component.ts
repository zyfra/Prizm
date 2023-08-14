import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prizm-splitter-areas-control-dispaly-none-example',
  templateUrl: './areas-control-display-none.component.html',
  styleUrls: ['./areas-control-display-none.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmSplitterAreasControlDisplayNoneExampleComponent {
  area1Size = 25;
  area2Size = 25;
  area3Size = 25;
  area4Size = 25;

  public change(): void {
    if (this.area1Size !== null) {
      this.area1Size = null;
      this.area2Size = 50;
      this.area3Size = 50;
      this.area4Size = null;
    } else {
      this.area1Size = 25;
      this.area2Size = 25;
      this.area3Size = 25;
      this.area4Size = 25;
    }
  }
}
