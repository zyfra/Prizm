import { prizmAssert } from '../utils';
/**
 * Decorator for checking input values for undefined. You can also pass
 * optional assertion to check input against.
 *
 * CAUTION: This decorator overwrites other getters and setters.
 */
export function prizmDefaultProp(assertion, ...args) {
    return (target, key) => {
        const { name } = target.constructor;
        const errorGetDefaultMessage = errorGetDefault(key, name);
        const errorSetDefaultMessage = errorSetDefault(key, name);
        Object.defineProperty(target, key, {
            get() {
                prizmAssert.assertWarning(false, errorGetDefaultMessage);
                return undefined;
            },
            set(initialValue) {
                const isValid = initialValue !== undefined;
                const errorMessage = errorSetDefaultInitial(key, name);
                let currentValue = initialValue;
                prizmAssert.assertWarning(isValid, errorMessage);
                if (isValid && assertion) {
                    prizmAssert.assertWarning(assertion.call(this, initialValue), `${String(key)} in ${name} received:`, initialValue, ...args);
                }
                Object.defineProperty(this, key, {
                    get() {
                        return currentValue;
                    },
                    set(value) {
                        const isValid = value !== undefined;
                        const backupValue = initialValue;
                        prizmAssert.assertWarning(isValid, errorSetDefaultMessage, String(backupValue));
                        if (isValid && assertion) {
                            prizmAssert.assertWarning(assertion.call(this, value), `${String(key)} in ${name} received:`, value, ...args);
                        }
                        currentValue = isValid ? value : backupValue;
                    },
                });
            },
        });
    };
}
function errorGetDefault(key, component) {
    return `Default value for ${String(key)} was not provided in ${component}, error in Prizm UI`;
}
function errorSetDefault(key, component) {
    return `Undefined was passed as ${String(key)} to ${component}, which is invalid input, using default value:`;
}
function errorSetDefaultInitial(key, component) {
    return `Undefined was passed as default value for ${String(key)} to ${component}, error in Prizm`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1wcm9wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb3JlL3NyYy9saWIvZGVjb3JhdG9ycy9kZWZhdWx0LXByb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV2Qzs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxnQkFBZ0IsQ0FDOUIsU0FBcUMsRUFDckMsR0FBRyxJQUFlO0lBRWxCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFRLEVBQUU7UUFDM0IsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDcEMsTUFBTSxzQkFBc0IsR0FBRyxlQUFlLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFELE1BQU0sc0JBQXNCLEdBQUcsZUFBZSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxRCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDakMsR0FBRztnQkFDRCxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO2dCQUV6RCxPQUFPLFNBQVMsQ0FBQztZQUNuQixDQUFDO1lBQ0QsR0FBRyxDQUFVLFlBQWtCO2dCQUM3QixNQUFNLE9BQU8sR0FBRyxZQUFZLEtBQUssU0FBUyxDQUFDO2dCQUMzQyxNQUFNLFlBQVksR0FBRyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZELElBQUksWUFBWSxHQUFHLFlBQVksQ0FBQztnQkFFaEMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBRWpELElBQUksT0FBTyxJQUFJLFNBQVMsRUFBRTtvQkFDeEIsV0FBVyxDQUFDLGFBQWEsQ0FDdkIsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLEVBQ2xDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksWUFBWSxFQUNyQyxZQUFZLEVBQ1osR0FBRyxJQUFJLENBQ1IsQ0FBQztpQkFDSDtnQkFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7b0JBQy9CLEdBQUc7d0JBQ0QsT0FBTyxZQUFZLENBQUM7b0JBQ3RCLENBQUM7b0JBQ0QsR0FBRyxDQUFVLEtBQVc7d0JBQ3RCLE1BQU0sT0FBTyxHQUFHLEtBQUssS0FBSyxTQUFTLENBQUM7d0JBQ3BDLE1BQU0sV0FBVyxHQUFHLFlBQVksQ0FBQzt3QkFFakMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBRWhGLElBQUksT0FBTyxJQUFJLFNBQVMsRUFBRTs0QkFDeEIsV0FBVyxDQUFDLGFBQWEsQ0FDdkIsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQzNCLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksWUFBWSxFQUNyQyxLQUFLLEVBQ0wsR0FBRyxJQUFJLENBQ1IsQ0FBQzt5QkFDSDt3QkFFRCxZQUFZLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztvQkFDL0MsQ0FBQztpQkFDRixDQUFDLENBQUM7WUFDTCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsZUFBZSxDQUFDLEdBQW9CLEVBQUUsU0FBaUI7SUFDOUQsT0FBTyxxQkFBcUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsU0FBUyxxQkFBcUIsQ0FBQztBQUNoRyxDQUFDO0FBRUQsU0FBUyxlQUFlLENBQUMsR0FBb0IsRUFBRSxTQUFpQjtJQUM5RCxPQUFPLDJCQUEyQixNQUFNLENBQ3RDLEdBQUcsQ0FDSixPQUFPLFNBQVMsZ0RBQWdELENBQUM7QUFDcEUsQ0FBQztBQUVELFNBQVMsc0JBQXNCLENBQUMsR0FBb0IsRUFBRSxTQUFpQjtJQUNyRSxPQUFPLDZDQUE2QyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sU0FBUyxrQkFBa0IsQ0FBQztBQUNwRyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpem1Cb29sZWFuSGFuZGxlciB9IGZyb20gJy4uL3R5cGVzL2hhbmRsZXInO1xuaW1wb3J0IHsgcHJpem1Bc3NlcnQgfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogRGVjb3JhdG9yIGZvciBjaGVja2luZyBpbnB1dCB2YWx1ZXMgZm9yIHVuZGVmaW5lZC4gWW91IGNhbiBhbHNvIHBhc3NcbiAqIG9wdGlvbmFsIGFzc2VydGlvbiB0byBjaGVjayBpbnB1dCBhZ2FpbnN0LlxuICpcbiAqIENBVVRJT046IFRoaXMgZGVjb3JhdG9yIG92ZXJ3cml0ZXMgb3RoZXIgZ2V0dGVycyBhbmQgc2V0dGVycy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByaXptRGVmYXVsdFByb3A8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4sIEsgZXh0ZW5kcyBrZXlvZiBUPihcbiAgYXNzZXJ0aW9uPzogUHJpem1Cb29sZWFuSGFuZGxlcjxUW0tdPixcbiAgLi4uYXJnczogdW5rbm93bltdXG4pOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gIHJldHVybiAodGFyZ2V0LCBrZXkpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRhcmdldC5jb25zdHJ1Y3RvcjtcbiAgICBjb25zdCBlcnJvckdldERlZmF1bHRNZXNzYWdlID0gZXJyb3JHZXREZWZhdWx0KGtleSwgbmFtZSk7XG4gICAgY29uc3QgZXJyb3JTZXREZWZhdWx0TWVzc2FnZSA9IGVycm9yU2V0RGVmYXVsdChrZXksIG5hbWUpO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICBnZXQoKTogdW5kZWZpbmVkIHtcbiAgICAgICAgcHJpem1Bc3NlcnQuYXNzZXJ0V2FybmluZyhmYWxzZSwgZXJyb3JHZXREZWZhdWx0TWVzc2FnZSk7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0sXG4gICAgICBzZXQodGhpczogVCwgaW5pdGlhbFZhbHVlOiBUW0tdKSB7XG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBpbml0aWFsVmFsdWUgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3JTZXREZWZhdWx0SW5pdGlhbChrZXksIG5hbWUpO1xuICAgICAgICBsZXQgY3VycmVudFZhbHVlID0gaW5pdGlhbFZhbHVlO1xuXG4gICAgICAgIHByaXptQXNzZXJ0LmFzc2VydFdhcm5pbmcoaXNWYWxpZCwgZXJyb3JNZXNzYWdlKTtcblxuICAgICAgICBpZiAoaXNWYWxpZCAmJiBhc3NlcnRpb24pIHtcbiAgICAgICAgICBwcml6bUFzc2VydC5hc3NlcnRXYXJuaW5nKFxuICAgICAgICAgICAgYXNzZXJ0aW9uLmNhbGwodGhpcywgaW5pdGlhbFZhbHVlKSxcbiAgICAgICAgICAgIGAke1N0cmluZyhrZXkpfSBpbiAke25hbWV9IHJlY2VpdmVkOmAsXG4gICAgICAgICAgICBpbml0aWFsVmFsdWUsXG4gICAgICAgICAgICAuLi5hcmdzXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcbiAgICAgICAgICBnZXQoKTogVFtLXSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFZhbHVlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0KHRoaXM6IFQsIHZhbHVlOiBUW0tdKSB7XG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkID0gdmFsdWUgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNvbnN0IGJhY2t1cFZhbHVlID0gaW5pdGlhbFZhbHVlO1xuXG4gICAgICAgICAgICBwcml6bUFzc2VydC5hc3NlcnRXYXJuaW5nKGlzVmFsaWQsIGVycm9yU2V0RGVmYXVsdE1lc3NhZ2UsIFN0cmluZyhiYWNrdXBWYWx1ZSkpO1xuXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCAmJiBhc3NlcnRpb24pIHtcbiAgICAgICAgICAgICAgcHJpem1Bc3NlcnQuYXNzZXJ0V2FybmluZyhcbiAgICAgICAgICAgICAgICBhc3NlcnRpb24uY2FsbCh0aGlzLCB2YWx1ZSksXG4gICAgICAgICAgICAgICAgYCR7U3RyaW5nKGtleSl9IGluICR7bmFtZX0gcmVjZWl2ZWQ6YCxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAuLi5hcmdzXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSA9IGlzVmFsaWQgPyB2YWx1ZSA6IGJhY2t1cFZhbHVlO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXJyb3JHZXREZWZhdWx0KGtleTogc3RyaW5nIHwgc3ltYm9sLCBjb21wb25lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgRGVmYXVsdCB2YWx1ZSBmb3IgJHtTdHJpbmcoa2V5KX0gd2FzIG5vdCBwcm92aWRlZCBpbiAke2NvbXBvbmVudH0sIGVycm9yIGluIFByaXptIFVJYDtcbn1cblxuZnVuY3Rpb24gZXJyb3JTZXREZWZhdWx0KGtleTogc3RyaW5nIHwgc3ltYm9sLCBjb21wb25lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgVW5kZWZpbmVkIHdhcyBwYXNzZWQgYXMgJHtTdHJpbmcoXG4gICAga2V5XG4gICl9IHRvICR7Y29tcG9uZW50fSwgd2hpY2ggaXMgaW52YWxpZCBpbnB1dCwgdXNpbmcgZGVmYXVsdCB2YWx1ZTpgO1xufVxuXG5mdW5jdGlvbiBlcnJvclNldERlZmF1bHRJbml0aWFsKGtleTogc3RyaW5nIHwgc3ltYm9sLCBjb21wb25lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgVW5kZWZpbmVkIHdhcyBwYXNzZWQgYXMgZGVmYXVsdCB2YWx1ZSBmb3IgJHtTdHJpbmcoa2V5KX0gdG8gJHtjb21wb25lbnR9LCBlcnJvciBpbiBQcml6bWA7XG59XG4iXX0=