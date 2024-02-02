/**
 * @deprecated use String.prototype.padStart in 2.0 (after Chrome 49 support is dropped)
 * Pads a string with symbols in the beginning
 *
 * @param sourceString
 * @param minResultLength
 * @param padString string to pad with
 */
export function prizmPadStart(sourceString, minResultLength, padString = ` `) {
    const padSize = minResultLength - sourceString.length;
    if (padSize <= 0) {
        return sourceString;
    }
    return padString.repeat(padSize / padString.length).slice(0, padSize) + sourceString;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFkLXN0YXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb3JlL3NyYy9saWIvdXRpbHMvZm9ybWF0L3BhZC1zdGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxVQUFVLGFBQWEsQ0FBQyxZQUFvQixFQUFFLGVBQXVCLEVBQUUsU0FBUyxHQUFHLEdBQUc7SUFDMUYsTUFBTSxPQUFPLEdBQUcsZUFBZSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7SUFFdEQsSUFBSSxPQUFPLElBQUksQ0FBQyxFQUFFO1FBQ2hCLE9BQU8sWUFBWSxDQUFDO0tBQ3JCO0lBRUQsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsR0FBRyxZQUFZLENBQUM7QUFDdkYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGRlcHJlY2F0ZWQgdXNlIFN0cmluZy5wcm90b3R5cGUucGFkU3RhcnQgaW4gMi4wIChhZnRlciBDaHJvbWUgNDkgc3VwcG9ydCBpcyBkcm9wcGVkKVxuICogUGFkcyBhIHN0cmluZyB3aXRoIHN5bWJvbHMgaW4gdGhlIGJlZ2lubmluZ1xuICpcbiAqIEBwYXJhbSBzb3VyY2VTdHJpbmdcbiAqIEBwYXJhbSBtaW5SZXN1bHRMZW5ndGhcbiAqIEBwYXJhbSBwYWRTdHJpbmcgc3RyaW5nIHRvIHBhZCB3aXRoXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcml6bVBhZFN0YXJ0KHNvdXJjZVN0cmluZzogc3RyaW5nLCBtaW5SZXN1bHRMZW5ndGg6IG51bWJlciwgcGFkU3RyaW5nID0gYCBgKTogc3RyaW5nIHtcbiAgY29uc3QgcGFkU2l6ZSA9IG1pblJlc3VsdExlbmd0aCAtIHNvdXJjZVN0cmluZy5sZW5ndGg7XG5cbiAgaWYgKHBhZFNpemUgPD0gMCkge1xuICAgIHJldHVybiBzb3VyY2VTdHJpbmc7XG4gIH1cblxuICByZXR1cm4gcGFkU3RyaW5nLnJlcGVhdChwYWRTaXplIC8gcGFkU3RyaW5nLmxlbmd0aCkuc2xpY2UoMCwgcGFkU2l6ZSkgKyBzb3VyY2VTdHJpbmc7XG59XG4iXX0=