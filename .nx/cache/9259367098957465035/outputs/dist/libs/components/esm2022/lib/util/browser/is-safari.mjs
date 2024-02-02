export function prizmIsSafari(element) {
    const documentRef = element.ownerDocument;
    const windowRef = documentRef && documentRef.defaultView;
    return !!windowRef && 'safari' in windowRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtc2FmYXJpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvdXRpbC9icm93c2VyL2lzLXNhZmFyaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsYUFBYSxDQUFDLE9BQWdCO0lBQzVDLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDMUMsTUFBTSxTQUFTLEdBQUcsV0FBVyxJQUFJLFdBQVcsQ0FBQyxXQUFXLENBQUM7SUFFekQsT0FBTyxDQUFDLENBQUMsU0FBUyxJQUFJLFFBQVEsSUFBSSxTQUFTLENBQUM7QUFDOUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBwcml6bUlzU2FmYXJpKGVsZW1lbnQ6IEVsZW1lbnQpOiBib29sZWFuIHtcbiAgY29uc3QgZG9jdW1lbnRSZWYgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gIGNvbnN0IHdpbmRvd1JlZiA9IGRvY3VtZW50UmVmICYmIGRvY3VtZW50UmVmLmRlZmF1bHRWaWV3O1xuXG4gIHJldHVybiAhIXdpbmRvd1JlZiAmJiAnc2FmYXJpJyBpbiB3aW5kb3dSZWY7XG59XG4iXX0=