import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PrizmAbstractTestId, prizmIsValidSizeString, prizmPx } from '@prizm-ui/core';
import { BehaviorSubject, of, switchMap, takeUntil, tap } from 'rxjs';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PRIZM_ICONS_LOADER, PrizmIconsRegistry } from '@prizm-ui/icons/core';
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
export class PrizmIconsComponent extends PrizmAbstractTestId implements OnInit {
  private svgIcon!: SVGElement;
  private iconName!: string;

  private document = inject(DOCUMENT);
  private iconRegistry = inject(PrizmIconsRegistry);
  private element = inject(ElementRef);
  readonly nameTransformer = inject(PRIZM_ICONS_NAME_TRANSFORMER, {
    optional: true,
  });
  readonly destroy$ = inject(PrizmDestroyService);
  // Injects the icon loader token.
  protected iconsLoader = inject(PRIZM_ICONS_LOADER, {
    optional: true,
  });

  ngOnInit(): void {
    this.name$
      .pipe(
        switchMap(iconCurrentName => {
          if (!iconCurrentName) return of(null);
          this.iconName = iconCurrentName;

          // Get the SVG data and create an SVG element.
          return this.iconRegistry.getIcon(this.iconName, this.iconsLoader);
        }),
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
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private readonly name$ = new BehaviorSubject<string | null>(null);
  /**
   * @method name
   * @description This method sets the name of the icon to be displayed and attempts to fetch and append the icon to the host element.
   * @param {string} iconName - The name of the icon to fetch and display.
   */
  @Input()
  set name(iconName: string) {
    const iconCurrentName = this.nameTransformer ? this.nameTransformer(iconName) : iconName;
    this.name$.next(iconCurrentName);
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

  @HostBinding('style.width') protected _styleWidth: string = '24px';

  /**
   * Sets the size of the icon and updates the host element's style.
   * Accepts either a string with units or a number, which is converted to pixels.
   *
   * @param {string | number} size - The size to set, either as a string with units or a number.
   */
  @Input()
  set size(size: string | number) {
    if (typeof size === 'number' || !prizmIsValidSizeString(size)) {
      this._styleWidth = prizmPx(size);
    } else if (prizmIsValidSizeString(size)) {
      this._styleWidth = size;
    } else {
      console.warn('Invalid size value:', size);
    }
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
