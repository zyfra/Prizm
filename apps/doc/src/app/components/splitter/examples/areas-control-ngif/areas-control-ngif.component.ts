import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prizm-splitter-areas-control-ngif-example',
  templateUrl: './areas-control-ngif.component.html',
  styleUrls: ['./areas-control-ngif.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmSplitterAreasControlNgIfExampleComponent {
  area1Size = 25;
  area2Size = 25;
  area3Size = 25;
  area4Size = 25;

  showArea1 = true;
  showArea2 = true;
  showArea3 = true;
  showArea4 = true;

  public change(): void {
    if (this.showArea1) {
      this.showArea1 = false;
      this.showArea4 = false;

      this.area2Size = 50;
      this.area3Size = 50;
    } else {
      this.showArea1 = true;
      this.showArea4 = true;
      this.area1Size = 25;
      this.area2Size = 25;
      this.area3Size = 25;
      this.area4Size = 25;
    }
  }
}
