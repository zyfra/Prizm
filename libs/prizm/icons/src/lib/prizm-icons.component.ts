import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, Input, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PrizmIconsRegistry } from './prizm-icons.registry';
import { prizmPx } from '@prizm-ui/core';

@Component({
  selector: 'prizm-icons',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`:host {display: inline-flex; height: auto;}`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrizmIconsComponent {
  private svgIcon: SVGElement;

  @Input()
  set name(iconName: string) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.iconRegistry.getIcon(iconName);
    if (!svgData) return;
    this.svgIcon = this.svgElementFromString(svgData);
    this.element.nativeElement.appendChild(this.svgIcon);
  }

  @HostBinding('style.width')
  _size: string = '16px';


  @Input()
  set size(size: string | number) {
    this._size = typeof size === 'number'
    ? prizmPx(size)
    : size;
  }

  constructor(private element: ElementRef, private iconRegistry: PrizmIconsRegistry,
              @Optional() @Inject(DOCUMENT) private document: any) {
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }
}
