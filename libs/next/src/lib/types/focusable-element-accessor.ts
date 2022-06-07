import { Observable } from 'rxjs';
export interface ZuiNativeFocusableElement extends Element, HTMLOrSVGElement {
}
/**
 * Public interface for any focusable component or directive
 */
export interface ZuiFocusableElementAccessor {
  nativeFocusableElement: ZuiNativeFocusableElement | null;
  focused: boolean;
  readonly focusedChange: Observable<boolean>;
}
