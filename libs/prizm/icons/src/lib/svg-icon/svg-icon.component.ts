import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, Input, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PrizmIconsRegistryService } from '../prizm-icons-registry.service';
import { prizmDefaultProp } from '@prizm-ui/core';

@Component({
  selector: 'prizm-icons-svg',
  template: `
        <ng-content></ng-content>
[ICON]
        <div class="prizm-icons-charts-diagrams_bar-basic"></div>
        <br>
        <br>
        [[SVG]]

        <svg>
          <use xlink:href="#prizm-icons-charts-diagrams_bar-basic"></use>
        </svg>
    `,
  styleUrls: [
    './svg-icon.component.less'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrizmIconsSvgComponent {
  private svgIcon: SVGElement;

  @Input()
  set name(iconName: string) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.dinosaurIconRegistry.getIcon(iconName);
    this.svgIcon = this.svgElementFromString(svgData);
    this.element.nativeElement.appendChild(this.svgIcon);
  }

  @Input()
  @prizmDefaultProp()
  @HostBinding('style.--prizm-icons-size')
  size: string = '24px';


  constructor(
    private element: ElementRef, private dinosaurIconRegistry: PrizmIconsRegistryService,
    @Optional() @Inject(DOCUMENT) private document: any) {
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }
}
