import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  inject,
  Input,
  Optional,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PrizmAbstractTestId, prizmPx } from '@prizm-ui/core';
import { PrizmIconsRegistry } from './prizm-icons.registry';
import { PRIZM_ICONS_LOADER } from './token';

/**
 * Component to display SVG icons.
 */
@Component({
  selector: 'prizm-icons',
  template: ` <ng-content></ng-content> `,
  styleUrls: ['./prizm-icons.component.less'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmIconsComponent extends PrizmAbstractTestId {
  private svgIcon!: SVGElement;
  private iconName!: string;

  // Injects the icon loader token.
  private iconsLoader = inject(PRIZM_ICONS_LOADER);

  constructor(
    private element: ElementRef,
    private iconRegistry: PrizmIconsRegistry,
    @Optional() @Inject(DOCUMENT) private document: Document
  ) {
    super();
  }

  /**
   * Sets the name of the icon to be displayed and attempts to fetch and append the icon to the host element.
   * @param iconName - The name of the icon to fetch and display.
   */
  @Input()
  set name(iconName: string) {
    this.iconName = iconName;

    // Remove the previous SVG icon if present.
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }

    // Get the SVG data and create an SVG element.
    const svgData = this.iconRegistry.getIcon(iconName).subscribe(svgData => {
      if (!svgData) return;
      this.svgIcon = this.svgElementFromString(svgData);
      this.element.nativeElement.appendChild(this.svgIcon);
    });
  }

  /**
   * Host binding to set the color style on the host element.
   */
  @HostBinding('style.color')
  @Input()
  color!: string;

  /**
   * Generates a test ID based on the icon name.
   */
  override get generateManeTestId(): string {
    return 'ui_icon' + (this.iconName ? `--${this.iconName}` : '');
  }

  /**
   * Host binding to set the width style on the host element. Defaults to '16px'.
   */
  @HostBinding('style.width')
  _size = '16px';

  /**
   * Sets the size of the icon and updates the host element's style.
   * @param size - The size of the icon in pixels or as a string with a unit.
   */
  @Input()
  set size(size: string | number) {
    this._size = typeof size === 'number' ? prizmPx(size) : size;
  }

  /**
   * Converts a string of SVG data into an SVGElement.
   * @param svgContent - The SVG content as a string.
   * @returns The created SVGElement.
   */
  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }
}
