import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prizm-splitter-areas-control-example',
  templateUrl: './areas-control.component.html',
  styleUrls: ['./areas-control.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmSplitterAreasControlExampleComponent {
  area1Size = 25;
  area2Size = 25;
  area3Size = 25;
  area4Size = 25;

  showArea1 = true;
  showArea2 = true;
  showArea3 = true;
  showArea4 = true;

  public changeAreas(): void {
    if (this.showArea1) {
      this.showArea1 = false;
      this.showArea4 = false;
      this.showArea2 = true;
      this.showArea3 = true;
      this.area2Size = 25;
      this.area3Size = 75;
    } else {
      this.showArea1 = true;
      this.showArea4 = true;
      this.showArea2 = false;
      this.showArea3 = false;
      this.area1Size = 75;
      this.area4Size = 25;
    }
  }
}
