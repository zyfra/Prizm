import { ChangeDetectionStrategy, Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import { BlockableUI } from 'primeng/api';

@Component({
  selector: 'zyfra-test-custom-blockable',
  template: `
    <div #blockElement style="border: 2px solid #eee; padding: 5px; margin-top: 10px;">
      <h2>Custom Component</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non dolor et elit elementum
        pulvinar sit amet at erat. Nam fermentum faucibus diam, et egestas ligula pharetra a. Proin pretium,
        eros id rhoncus imperdiet, neque ex convallis ipsum, ac semper tellus ipsum sit amet elit. Mauris
        finibus fermentum tristique. Vivamus ac orci ut eros vestibulum vulputate. In sodales nisl venenatis
        turpis malesuada, vitae suscipit diam ornare. Nullam lacinia orci posuere est sagittis, quis dictum
        nisi condimentum. Mauris facilisis efficitur condimentum. Mauris lacinia purus eu rutrum elementum.
        Suspendisse aliquam sapien venenatis lectus finibus faucibus. Quisque id congue dui. Aliquam erat
        volutpat. Ut gravida, ante nec porttitor imperdiet, erat orci hendrerit lacus, vitae interdum diam
        magna vitae dui.
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomBlockableComponent implements BlockableUI {
  @ViewChild('blockElement') blockElement: ElementRef<HTMLDivElement>;

  public getBlockableElement(): HTMLElement {
    return this.blockElement.nativeElement;
  }
}

@NgModule({
  declarations: [CustomBlockableComponent],
  exports: [CustomBlockableComponent],
})
export class CustomBlockableModule {}
