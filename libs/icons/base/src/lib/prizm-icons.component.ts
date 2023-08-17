import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  Optional,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PrizmIconsSvgRegistry } from './prizm-icons.registry';

import { PrizmAbstractTestId, prizmPx } from '@prizm-ui/core';

@Component({
  selector: 'prizm-icons-svg',
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        display: inline-flex;
        height: auto;
      }

      :host ::ng-deep > svg {
        width: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmIconsSvgComponent extends PrizmAbstractTestId {
  private svgIcon: SVGElement;
  private iconName: string;
  @Input()
  set name(iconName: string) {
    this.iconName = iconName;

    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.iconRegistry.getIcon(iconName);
    if (!svgData) return;
    this.svgIcon = this.svgElementFromString(svgData);
    this.element.nativeElement.appendChild(this.svgIcon);
  }

  @HostBinding('style.color')
  @Input()
  color: string;

  override get generateManeTestId(): string {
    return 'ui_icon' + (this.iconName ? `--${this.iconName}` : '');
  }

  @HostBinding('style.width')
  _size = '16px';

  @Input()
  set size(size: string | number) {
    this._size = typeof size === 'number' ? prizmPx(size) : size;
  }

  constructor(
    private element: ElementRef,
    private iconRegistry: PrizmIconsSvgRegistry,
    @Optional() @Inject(DOCUMENT) private document: Document
  ) {
    super();
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }
}
