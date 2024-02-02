'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [46960],
  {
    46960: n => {
      n.exports =
        "import { Component, ChangeDetectionStrategy } from '@angular/core';\n\n@Component({\n  selector: 'prizm-input-as-carousel-example',\n  templateUrl: './input-as-carousel.component.html',\n  styleUrls: ['./input-as-carousel.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class PrizmCarouselInputAsCarouselExampleComponent {\n  currentIndex = 2;\n  carouselData = ['prizm1', 'prizm2', 'prizm3', 'prizm4', 'prizm5'];\n\n  public prev(): void {\n    if (this.currentIndex === 0) {\n      this.currentIndex = this.carouselData.length - 1;\n    } else {\n      this.currentIndex--;\n    }\n  }\n\n  public next(): void {\n    if (this.currentIndex === this.carouselData.length - 1) {\n      this.currentIndex = 0;\n    } else {\n      this.currentIndex++;\n    }\n  }\n\n  public setValue(value: string): void {\n    this.carouselData[this.currentIndex] = value;\n  }\n}\n";
    },
  },
]);
