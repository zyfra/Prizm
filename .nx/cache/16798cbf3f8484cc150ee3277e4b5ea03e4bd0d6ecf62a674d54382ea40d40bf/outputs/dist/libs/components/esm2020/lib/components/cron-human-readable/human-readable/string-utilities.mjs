export class PrizmCronHRStringUtilities {
    /**
     * Takes a string with '%s' placeholders and replaces them with provided values.
     * Works like sprintf in C or string.Format in C#.
     * @static
     * @param {string} template - The string template with enclosed %s replacements
     * @param {...string[]} values - The ordered replacement text
     * @returns {string}
     */
    static format(template, ...values) {
        return template.replace(/%s/g, function (substring, ...args) {
            return values.shift();
        });
    }
    /**
     *
     * Given a string and an array of search strings, determines if the string
     * contains any value from the array.
     * @static
     * @param {string} text - The string to search
     * @param {string[]} searchStrings - The array of values to search for
     * @returns {boolean}
     */
    static containsAny(text, searchStrings) {
        return searchStrings.some(c => {
            return text.indexOf(c) > -1;
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLXV0aWxpdGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvY3Jvbi1odW1hbi1yZWFkYWJsZS9odW1hbi1yZWFkYWJsZS9zdHJpbmctdXRpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTywwQkFBMEI7SUFDckM7Ozs7Ozs7T0FPRztJQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBZ0IsRUFBRSxHQUFHLE1BQWdCO1FBQ3hELE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsVUFBVSxTQUFpQixFQUFFLEdBQUcsSUFBVztZQUN4RSxPQUFPLE1BQU0sQ0FBQyxLQUFLLEVBQVksQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBWSxFQUFFLGFBQXVCO1FBQzdELE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUHJpem1Dcm9uSFJTdHJpbmdVdGlsaXRpZXMge1xuICAvKipcbiAgICogVGFrZXMgYSBzdHJpbmcgd2l0aCAnJXMnIHBsYWNlaG9sZGVycyBhbmQgcmVwbGFjZXMgdGhlbSB3aXRoIHByb3ZpZGVkIHZhbHVlcy5cbiAgICogV29ya3MgbGlrZSBzcHJpbnRmIGluIEMgb3Igc3RyaW5nLkZvcm1hdCBpbiBDIy5cbiAgICogQHN0YXRpY1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgLSBUaGUgc3RyaW5nIHRlbXBsYXRlIHdpdGggZW5jbG9zZWQgJXMgcmVwbGFjZW1lbnRzXG4gICAqIEBwYXJhbSB7Li4uc3RyaW5nW119IHZhbHVlcyAtIFRoZSBvcmRlcmVkIHJlcGxhY2VtZW50IHRleHRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZm9ybWF0KHRlbXBsYXRlOiBzdHJpbmcsIC4uLnZhbHVlczogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoc3Vic3RyaW5nOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB2YWx1ZXMuc2hpZnQoKSBhcyBzdHJpbmc7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogR2l2ZW4gYSBzdHJpbmcgYW5kIGFuIGFycmF5IG9mIHNlYXJjaCBzdHJpbmdzLCBkZXRlcm1pbmVzIGlmIHRoZSBzdHJpbmdcbiAgICogY29udGFpbnMgYW55IHZhbHVlIGZyb20gdGhlIGFycmF5LlxuICAgKiBAc3RhdGljXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGhlIHN0cmluZyB0byBzZWFyY2hcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gc2VhcmNoU3RyaW5ncyAtIFRoZSBhcnJheSBvZiB2YWx1ZXMgdG8gc2VhcmNoIGZvclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgY29udGFpbnNBbnkodGV4dDogc3RyaW5nLCBzZWFyY2hTdHJpbmdzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBzZWFyY2hTdHJpbmdzLnNvbWUoYyA9PiB7XG4gICAgICByZXR1cm4gdGV4dC5pbmRleE9mKGMpID4gLTE7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==