import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { PrizmSplitterComponent } from '@prizm-ui/components';

@Component({
  selector: 'prizm-splitter-size-setting-example',
  templateUrl: './size-setting.component.html',
  styleUrls: ['./size-setting.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmSplitterSizeSettingExampleComponent {
  @ViewChild(PrizmSplitterComponent, { static: true }) slider!: PrizmSplitterComponent;

  public setAreasSize(size: Array<number | null>): void {
    this.slider.setAreasSize(size);
  }

  public areasSizeChange(sizes: Array<number>): void {
    console.log(sizes);
  }
}

