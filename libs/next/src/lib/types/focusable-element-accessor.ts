import { Observable } from 'rxjs';
export interface PzmNativeFocusableElement extends Element, HTMLOrSVGElement {
}
/**
 * Public interface for any focusable component or directive
 */
export interface PzmFocusableElementAccessor {
  nativeFocusableElement: PzmNativeFocusableElement | null;
  focused: boolean;
  readonly focusedChange: Observable<boolean>;
}
