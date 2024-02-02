/**
 * Checks for signs that element can be focused with keyboard. tabIndex above 0 is ignored to
 * only target natural focus order. Not checking the possibility of an element to
 * be focused, for example element can have display: none applied to it or any other
 * circumstances could prevent actual focus.
 */
export function prizmIsNativeKeyboardFocusable(element) {
    if (element.hasAttribute('disabled') || element.getAttribute('tabIndex') === '-1') {
        return false;
    }
    if ((element instanceof HTMLElement && element.isContentEditable) ||
        element.getAttribute('tabIndex') === '0') {
        return true;
    }
    switch (element.tagName) {
        case 'BUTTON':
        case 'SELECT':
        case 'TEXTAREA':
            return true;
        case 'VIDEO':
        case 'AUDIO':
            return element.hasAttribute('controls');
        case 'INPUT':
            return element.getAttribute('type') !== 'hidden';
        case 'A':
        case 'LINK':
            return element.hasAttribute('href');
        default:
            return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbmF0aXZlLWtleWJvYXJkLWZvY3VzYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL3V0aWwvaXMtbmF0aXZlLWtleWJvYXJkLWZvY3VzYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSw4QkFBOEIsQ0FBQyxPQUFnQjtJQUM3RCxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDakYsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQ0UsQ0FBQyxPQUFPLFlBQVksV0FBVyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUM3RCxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFDeEM7UUFDQSxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsUUFBUSxPQUFPLENBQUMsT0FBTyxFQUFFO1FBQ3ZCLEtBQUssUUFBUSxDQUFDO1FBQ2QsS0FBSyxRQUFRLENBQUM7UUFDZCxLQUFLLFVBQVU7WUFDYixPQUFPLElBQUksQ0FBQztRQUNkLEtBQUssT0FBTyxDQUFDO1FBQ2IsS0FBSyxPQUFPO1lBQ1YsT0FBTyxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFDLEtBQUssT0FBTztZQUNWLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxRQUFRLENBQUM7UUFDbkQsS0FBSyxHQUFHLENBQUM7UUFDVCxLQUFLLE1BQU07WUFDVCxPQUFPLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEM7WUFDRSxPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENoZWNrcyBmb3Igc2lnbnMgdGhhdCBlbGVtZW50IGNhbiBiZSBmb2N1c2VkIHdpdGgga2V5Ym9hcmQuIHRhYkluZGV4IGFib3ZlIDAgaXMgaWdub3JlZCB0b1xuICogb25seSB0YXJnZXQgbmF0dXJhbCBmb2N1cyBvcmRlci4gTm90IGNoZWNraW5nIHRoZSBwb3NzaWJpbGl0eSBvZiBhbiBlbGVtZW50IHRvXG4gKiBiZSBmb2N1c2VkLCBmb3IgZXhhbXBsZSBlbGVtZW50IGNhbiBoYXZlIGRpc3BsYXk6IG5vbmUgYXBwbGllZCB0byBpdCBvciBhbnkgb3RoZXJcbiAqIGNpcmN1bXN0YW5jZXMgY291bGQgcHJldmVudCBhY3R1YWwgZm9jdXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcml6bUlzTmF0aXZlS2V5Ym9hcmRGb2N1c2FibGUoZWxlbWVudDogRWxlbWVudCk6IGJvb2xlYW4ge1xuICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgfHwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RhYkluZGV4JykgPT09ICctMScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoXG4gICAgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBlbGVtZW50LmlzQ29udGVudEVkaXRhYmxlKSB8fFxuICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0YWJJbmRleCcpID09PSAnMCdcbiAgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzd2l0Y2ggKGVsZW1lbnQudGFnTmFtZSkge1xuICAgIGNhc2UgJ0JVVFRPTic6XG4gICAgY2FzZSAnU0VMRUNUJzpcbiAgICBjYXNlICdURVhUQVJFQSc6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBjYXNlICdWSURFTyc6XG4gICAgY2FzZSAnQVVESU8nOlxuICAgICAgcmV0dXJuIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdjb250cm9scycpO1xuICAgIGNhc2UgJ0lOUFVUJzpcbiAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgndHlwZScpICE9PSAnaGlkZGVuJztcbiAgICBjYXNlICdBJzpcbiAgICBjYXNlICdMSU5LJzpcbiAgICAgIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnaHJlZicpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==