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
import { PrizmIconsSvgRegistry } from './prizm-icons-svg.registry';
import { PrizmAbstractTestId, prizmPx } from '@prizm-ui/core';

/**
 * @deprecated
 * use PrizmIconsComponent OR PrizmIcons16Component
 *
 * Component to display SVG icons by using the `PrizmIconsSvgRegistry`.
 */
@Component({
  selector: 'prizm-icons-svg', // Defines the custom element tag for this component.
  template: ` <ng-content></ng-content> `, // Allows for content projection within the component.
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
  standalone: true, // Marks the component as standalone, meaning it doesn't need to be declared in an NgModule.
  changeDetection: ChangeDetectionStrategy.OnPush, // Optimizes change detection for performance.
})
export class PrizmIconsSvgComponent extends PrizmAbstractTestId {
  private svgIcon!: SVGElement;
  private iconName!: string;

  /**
   * Host binding to set the color style on the host element.
   */
  @HostBinding('style.color')
  @Input()
  color!: string;

  /**
   * Host binding to set the width style on the host element. Defaults to '16px'.
   */
  @HostBinding('style.width')
  _size = '16px';

  constructor(
    private element: ElementRef,
    private iconRegistry: PrizmIconsSvgRegistry,
    @Optional() @Inject(DOCUMENT) private document: Document
  ) {
    super();
  }

  /**
   * Sets the name of the icon and appends its SVG element to the host element.
   * @param iconName - The name of the icon to display.
   */
  @Input()
  set name(iconName: string) {
    this.iconName = iconName;
    this.updateSvgIcon();
  }

  /**
   * Sets the size of the icon and updates the host element's style.
   * @param size - The size of the icon in pixels or as a string with a unit.
   */
  @Input()
  set size(size: string | number) {
    this._size = typeof size === 'number' ? prizmPx(size) : size;
  }

  /**
   * Generates a test ID based on the icon name.
   * @returns A test ID string.
   */
  override get generateMainTestId(): string {
    return 'ui_icon' + (this.iconName ? `--${this.iconName}` : '');
  }

  /**
   * Updates the SVG icon element based on the current icon name.
   */
  private updateSvgIcon(): void {
    // Remove the previous SVG icon if present.
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }

    const svgData = this.iconRegistry.getIcon(this.iconName);
    if (!svgData) return;

    this.svgIcon = this.svgElementFromString(svgData);
    this.element.nativeElement.appendChild(this.svgIcon);
  }

  /**
   * Converts a string of SVG data into an SVGElement.
   * @param svgContent - The SVG content as a string to convert.
   * @returns The created SVGElement.
   */
  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    // Return the first SVG element or create a generic SVG path if none is found.
    return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }
}
