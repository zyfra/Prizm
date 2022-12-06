import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, Input, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PrizmIconFlagsRegistry } from './prizm-icon-flag.registry';
import { prizmPx } from '@prizm-ui/core';

@Component({
  selector: 'prizm-icon-flags',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`:host {display: inline-flex; height: auto;}`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrizmIconFlagsComponent {
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

  constructor(private element: ElementRef, private iconRegistry: PrizmIconFlagsRegistry,
              @Optional() @Inject(DOCUMENT) private document: any) {
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }
}
