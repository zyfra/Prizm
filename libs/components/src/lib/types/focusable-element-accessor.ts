import { Observable } from 'rxjs';
export interface PrizmNativeFocusableElement extends Element, HTMLOrSVGElement {}
/**
 * Public interface for any focusable component or directive
 */
export interface PrizmFocusableElementAccessor {
  nativeFocusableElement: PrizmNativeFocusableElement | null;
  focused: boolean;
  readonly focusedChange: Observable<boolean>;
}
