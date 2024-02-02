'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [1602],
  {
    1602: e => {
      e.exports =
        "import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';\n\n@Component({\n  selector: 'prizm-zoom-control-example-basic',\n  templateUrl: './zoom-control-example-basic.component.html',\n  styleUrls: ['./zoom-control-example-basic.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class ZoomControlExampleBasicComponent {\n  @ViewChild('content', { static: true }) contentElement!: ElementRef;\n  public openDropdown = false;\n  public scalesList: number[] = [200, 150, 100, 50];\n  public scaleIdx = 3;\n  public currentScale = this.scalesList[this.scaleIdx];\n\n  constructor(private cdRef: ChangeDetectorRef) {}\n\n  public get contentWidth(): number {\n    return this.contentElement.nativeElement.offsetWidth;\n  }\n\n  public scaleIncrease(): void {\n    if (this.scaleIdx > 0) {\n      this.scaleIdx--;\n      this.currentScale = this.scalesList[this.scaleIdx];\n    }\n    this.cdRef.markForCheck();\n  }\n\n  public closeDropdown(): void {\n    this.openDropdown = false;\n  }\n\n  public scaleDecrease(): void {\n    if (this.scaleIdx < this.scalesList.length - 1) {\n      this.scaleIdx++;\n      this.currentScale = this.scalesList[this.scaleIdx];\n    }\n    this.cdRef.markForCheck();\n  }\n\n  public chooseScale(i: number): void {\n    this.scaleIdx = i;\n    this.currentScale = this.scalesList[this.scaleIdx];\n    this.cdRef.markForCheck();\n  }\n\n  public setScale(val: number): void {\n    this.currentScale = val;\n    this.cdRef.markForCheck();\n  }\n}\n";
    },
  },
]);
