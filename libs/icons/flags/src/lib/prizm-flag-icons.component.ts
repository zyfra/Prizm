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
import { PrizmFlagIconsRegistry } from './prizm-flag-icons.registry';

import { PrizmAbstractTestId, prizmPx } from '@prizm-ui/core';

@Component({
  selector: 'prizm-flag-icons',
  template: `<ng-content></ng-content>`,
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
export class PrizmFlagIconsComponent extends PrizmAbstractTestId {
  private svgIcon: SVGElement;
  private name_: string;
  @Input()
  set name(iconName: string) {
    this.name_ = iconName;
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.iconRegistry.getIcon(iconName);
    if (!svgData) return;
    this.svgIcon = this.svgElementFromString(svgData);
    this.element.nativeElement.appendChild(this.svgIcon);
  }
  get name() {
    return this.name_;
  }

  @HostBinding('style.width')
  _size = '16px';

  @Input()
  set size(size: string | number) {
    this._size = typeof size === 'number' ? prizmPx(size) : size;
  }

  override get generateManeTestId(): string {
    return 'ui_flag_icons' + (this.name ? `--${this.name}` : '');
  }

  constructor(
    private element: ElementRef,
    private iconRegistry: PrizmFlagIconsRegistry,
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
