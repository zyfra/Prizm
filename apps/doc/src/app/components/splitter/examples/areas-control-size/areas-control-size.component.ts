import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prizm-splitter-areas-control-size-example',
  templateUrl: './areas-control-size.component.html',
  styleUrls: ['./areas-control-size.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmSplitterAreasControlSizeExampleComponent {
  area1Size = 25;
  area2Size = 25;
  area3Size = 25;
  area4Size = 25;

  public change(): void {
    if (this.area1Size === 25) {
      this.area1Size = 40;
      this.area2Size = 40;
      this.area3Size = 10;
      this.area4Size = 10;
    } else {
      this.area1Size = 25;
      this.area2Size = 25;
      this.area3Size = 25;
      this.area4Size = 25;
    }
  }
}
