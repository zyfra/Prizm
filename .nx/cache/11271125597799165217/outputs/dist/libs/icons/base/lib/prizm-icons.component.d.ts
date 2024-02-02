import { ElementRef } from '@angular/core';
import { PrizmIconsSvgRegistry } from './prizm-icons.registry';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import * as i0 from '@angular/core';
export declare class PrizmIconsSvgComponent extends PrizmAbstractTestId {
  private element;
  private iconRegistry;
  private document;
  private svgIcon;
  private iconName;
  set name(iconName: string);
  color: string;
  get generateManeTestId(): string;
  _size: string;
  set size(size: string | number);
  constructor(element: ElementRef, iconRegistry: PrizmIconsSvgRegistry, document: Document);
  private svgElementFromString;
  static ɵfac: i0.ɵɵFactoryDeclaration<PrizmIconsSvgComponent, [null, null, { optional: true }]>;
  static ɵcmp: i0.ɵɵComponentDeclaration<
    PrizmIconsSvgComponent,
    'prizm-icons-svg',
    never,
    {
      name: { alias: 'name'; required: false };
      color: { alias: 'color'; required: false };
      size: { alias: 'size'; required: false };
    },
    {},
    never,
    ['*'],
    false,
    never
  >;
}
