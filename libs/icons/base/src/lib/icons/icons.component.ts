import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  inject,
  Input,
  OnDestroy,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PrizmAbstractTestId, prizmPx } from '@prizm-ui/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PRIZM_ICONS_LOADER } from '@prizm-ui/icons/base';
import { PrizmIconsRegistry } from '@prizm-ui/icons/core';
import { PRIZM_ICONS_NAME_TRANSFORMER } from './icons.options';

/**
 * @component PrizmIconsComponent
 * @description This component is used to display SVG icons.
 */
@Component({
  selector: 'prizm-icons',
  template: ` <ng-content></ng-content> `,
  styleUrls: ['./icons.component.less'],
  standalone: true,
  providers: [PrizmDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmIconsComponent extends PrizmAbstractTestId implements OnDestroy {
  private svgIcon!: SVGElement;
  private iconName!: string;

  // Injects the icon loader token.
  protected iconsLoader = inject(PRIZM_ICONS_LOADER);
  private destroyIcons$ = new Subject<void>();
  private document = inject(DOCUMENT);
  private iconRegistry = inject(PrizmIconsRegistry);
  private element = inject(ElementRef);
  readonly nameTransformer = inject(PRIZM_ICONS_NAME_TRANSFORMER, {
    optional: true,
  });

  /**
   * @method ngOnDestroy
   * @description This method is used to clean up resources when the component is destroyed.
   */
  ngOnDestroy(): void {
    this.destroyIcons$.next();
    this.destroyIcons$.complete();
  }

  /**
   * @method name
   * @description This method sets the name of the icon to be displayed and attempts to fetch and append the icon to the host element.
   * @param {string} iconName - The name of the icon to fetch and display.
   */
  @Input()
  set name(iconName: string) {
    const iconCurrentName = this.nameTransformer ? this.nameTransformer(iconName) : iconName;
    if (!iconCurrentName) return;
    this.iconName = iconCurrentName;
    this.destroyIcons$.next();
    // Get the SVG data and create an SVG element.
    this.iconRegistry
      .getIcon(this.iconName, this.iconsLoader)
      .pipe(
        tap(() => {
          // Remove the previous SVG icon if present.
          if (this.svgIcon) {
            this.element.nativeElement.removeChild(this.svgIcon);
          }
        }),
        tap(svgData => {
          if (!svgData) return;
          this.svgIcon = this.svgElementFromString(svgData);
          this.element.nativeElement.appendChild(this.svgIcon);
        }),
        takeUntil(this.destroyIcons$)
      )
      .subscribe();
  }

  /**
   * @method color
   * @description This method sets the color of the icon.
   */
  @HostBinding('style.color')
  @Input()
  color!: string;

  /**
   * @method generateMainTestId
   * @description This method generates a test ID based on the icon name.
   */
  override get generateMainTestId(): string {
    return 'ui_icon' + (this.iconName ? `--${this.iconName}` : '');
  }

  /**
   * @method _size
   * @description This method sets the width of the icon. Defaults to '16px'.
   */
  @HostBinding('style.width')
  _size = '16px';

  /**
   * @method size
   * @description This method sets the size of the icon and updates the host element's style.
   * @param {string | number} size - The size of the icon in pixels or as a string with a unit.
   */
  @Input()
  set size(size: string | number) {
    this._size = typeof size === 'number' ? prizmPx(size) : size;
  }

  /**
   * @method svgElementFromString
   * @description This method converts a string of SVG data into an SVGElement.
   * @param {string} svgContent - The SVG content as a string.
   * @returns {SVGElement} - The created SVGElement.
   */
  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }
}
