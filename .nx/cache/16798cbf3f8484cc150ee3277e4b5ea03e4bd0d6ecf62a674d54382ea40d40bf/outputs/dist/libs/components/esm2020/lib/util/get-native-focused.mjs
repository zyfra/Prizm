/**
 * Returns current active element, including shadow dom
 *
 * @return element or null
 */
export function prizmGetNativeFocused(documentRef) {
    if (!documentRef.activeElement || !documentRef.activeElement.shadowRoot) {
        return documentRef.activeElement;
    }
    let element = documentRef.activeElement.shadowRoot.activeElement;
    while (element && element.shadowRoot) {
        element = element.shadowRoot.activeElement;
    }
    return element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LW5hdGl2ZS1mb2N1c2VkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvdXRpbC9nZXQtbmF0aXZlLWZvY3VzZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxXQUFxQjtJQUN6RCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1FBQ3ZFLE9BQU8sV0FBVyxDQUFDLGFBQWEsQ0FBQztLQUNsQztJQUVELElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztJQUVqRSxPQUFPLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1FBQ3BDLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztLQUM1QztJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJldHVybnMgY3VycmVudCBhY3RpdmUgZWxlbWVudCwgaW5jbHVkaW5nIHNoYWRvdyBkb21cbiAqXG4gKiBAcmV0dXJuIGVsZW1lbnQgb3IgbnVsbFxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJpem1HZXROYXRpdmVGb2N1c2VkKGRvY3VtZW50UmVmOiBEb2N1bWVudCk6IEVsZW1lbnQgfCBudWxsIHtcbiAgaWYgKCFkb2N1bWVudFJlZi5hY3RpdmVFbGVtZW50IHx8ICFkb2N1bWVudFJlZi5hY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3QpIHtcbiAgICByZXR1cm4gZG9jdW1lbnRSZWYuYWN0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnRSZWYuYWN0aXZlRWxlbWVudC5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgd2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudC5zaGFkb3dSb290KSB7XG4gICAgZWxlbWVudCA9IGVsZW1lbnQuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iXX0=