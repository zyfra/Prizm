import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prizm-input-as-carousel-example',
  templateUrl: './input-as-carousel.component.html',
  styleUrls: ['./input-as-carousel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmInputCarouselInputAsCarouselExampleComponent {
  currentIndex = 2;
  carouselData = ['prizm1', 'prizm2', 'prizm3', 'prizm4', 'prizm5'];

  public prev(): void {
    if (this.currentIndex === 0) {
      this.currentIndex = this.carouselData.length - 1;
    } else {
      this.currentIndex--;
    }
  }

  public next(): void {
    if (this.currentIndex === this.carouselData.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }

  public setValue(value: string): void {
    this.carouselData[this.currentIndex] = value;
  }
}
