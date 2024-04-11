import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import {
  prizmIconsArrowsLeftRightToLines,
  prizmIconsArrowsMaximize,
  prizmIconsArrowsUpDownToLines,
  prizmIconsBorderOuter,
  prizmIconsMagnifyingGlassMinus,
  prizmIconsMagnifyingGlassPlus,
  prizmIconsTriangleDown,
} from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-zoom-control-example-basic',
  templateUrl: './zoom-control-example-basic.component.html',
  styleUrls: ['./zoom-control-example-basic.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoomControlExampleBasicComponent {
  @ViewChild('content', { static: true }) contentElement!: ElementRef;
  public openDropdown = false;
  public scalesList: number[] = [200, 150, 100, 50];
  public scaleIdx = 3;
  public currentScale = this.scalesList[this.scaleIdx];

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor(private cdRef: ChangeDetectorRef) {
    this.iconsFullRegistry.registerIcons(
      prizmIconsTriangleDown,
      prizmIconsMagnifyingGlassMinus,
      prizmIconsMagnifyingGlassPlus,
      prizmIconsArrowsMaximize,
      prizmIconsBorderOuter,
      prizmIconsArrowsUpDownToLines,
      prizmIconsArrowsLeftRightToLines
    );
  }

  public get contentWidth(): number {
    return this.contentElement.nativeElement.offsetWidth;
  }

  public scaleIncrease(): void {
    if (this.scaleIdx > 0) {
      this.scaleIdx--;
      this.currentScale = this.scalesList[this.scaleIdx];
    }
    this.cdRef.markForCheck();
  }

  public closeDropdown(): void {
    this.openDropdown = false;
  }

  public scaleDecrease(): void {
    if (this.scaleIdx < this.scalesList.length - 1) {
      this.scaleIdx++;
      this.currentScale = this.scalesList[this.scaleIdx];
    }
    this.cdRef.markForCheck();
  }

  public chooseScale(i: number): void {
    this.scaleIdx = i;
    this.currentScale = this.scalesList[this.scaleIdx];
    this.cdRef.markForCheck();
  }

  public setScale(val: number): void {
    this.currentScale = val;
    this.cdRef.markForCheck();
  }
}
