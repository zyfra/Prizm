import { prizmAssert } from '../utils';
/**
 * Decorator for checking input setter values against a custom assertion which
 * takes value passed to input setter and component instance as arguments.
 * It specifically checks for undefined values and prevents calls to the
 * original setter in this case.
 */
export function prizmRequiredSetter(assertion, ...args) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (target, key, { configurable, enumerable, get, set }) => {
    const { name } = target.constructor;
    return {
      configurable,
      enumerable,
      get,
      set(value) {
        if (value !== undefined && assertion) {
          prizmAssert.assert(
            assertion.call(this, value),
            `${String(key)} in ${name} received:`,
            value,
            ...args
          );
        }
        if (!set || value === undefined) {
          prizmAssert.assert(value !== undefined, errorSet(key, name));
          return;
        }
        set.call(this, value);
      },
    };
  };
}
function errorSet(key, component) {
  return `Undefined was passed as ${String(key)} to ${component}, setter will not be called`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZWQtc2V0dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb3JlL3NyYy9saWIvZGVjb3JhdG9ycy9yZXF1aXJlZC1zZXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV2Qzs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxtQkFBbUIsQ0FDakMsU0FBbUMsRUFDbkMsR0FBRyxJQUFlO0lBRWxCLDZEQUE2RDtJQUM3RCxhQUFhO0lBQ2IsT0FBTyxDQUNMLE1BQStCLEVBQy9CLEdBQUcsRUFDSCxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBc0IsRUFDdEMsRUFBRTtRQUN0QixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUVwQyxPQUFPO1lBQ0wsWUFBWTtZQUNaLFVBQVU7WUFDVixHQUFHO1lBQ0gsR0FBRyxDQUFVLEtBQVc7Z0JBQ3RCLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxTQUFTLEVBQUU7b0JBQ3BDLFdBQVcsQ0FBQyxNQUFNLENBQ2hCLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUMzQixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLFlBQVksRUFDckMsS0FBSyxFQUNMLEdBQUcsSUFBSSxDQUNSLENBQUM7aUJBQ0g7Z0JBRUQsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO29CQUMvQixXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUUsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUU3RCxPQUFPO2lCQUNSO2dCQUVELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLEdBQW9CLEVBQUUsU0FBaUI7SUFDdkQsT0FBTywyQkFBMkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLFNBQVMsNkJBQTZCLENBQUM7QUFDN0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaXptQXNzZXJ0IH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIERlY29yYXRvciBmb3IgY2hlY2tpbmcgaW5wdXQgc2V0dGVyIHZhbHVlcyBhZ2FpbnN0IGEgY3VzdG9tIGFzc2VydGlvbiB3aGljaFxuICogdGFrZXMgdmFsdWUgcGFzc2VkIHRvIGlucHV0IHNldHRlciBhbmQgY29tcG9uZW50IGluc3RhbmNlIGFzIGFyZ3VtZW50cy5cbiAqIEl0IHNwZWNpZmljYWxseSBjaGVja3MgZm9yIHVuZGVmaW5lZCB2YWx1ZXMgYW5kIHByZXZlbnRzIGNhbGxzIHRvIHRoZVxuICogb3JpZ2luYWwgc2V0dGVyIGluIHRoaXMgY2FzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByaXptUmVxdWlyZWRTZXR0ZXI8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+LCBLIGV4dGVuZHMga2V5b2YgVD4oXG4gIGFzc2VydGlvbj86IChhOiB1bmtub3duKSA9PiBib29sZWFuLFxuICAuLi5hcmdzOiB1bmtub3duW11cbik6IE1ldGhvZERlY29yYXRvciB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gKFxuICAgIHRhcmdldDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gICAga2V5LFxuICAgIHsgY29uZmlndXJhYmxlLCBlbnVtZXJhYmxlLCBnZXQsIHNldCB9OiBQcm9wZXJ0eURlc2NyaXB0b3JcbiAgKTogUHJvcGVydHlEZXNjcmlwdG9yID0+IHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRhcmdldC5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiB7XG4gICAgICBjb25maWd1cmFibGUsXG4gICAgICBlbnVtZXJhYmxlLFxuICAgICAgZ2V0LFxuICAgICAgc2V0KHRoaXM6IFQsIHZhbHVlOiBUW0tdKTogdm9pZCB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIGFzc2VydGlvbikge1xuICAgICAgICAgIHByaXptQXNzZXJ0LmFzc2VydChcbiAgICAgICAgICAgIGFzc2VydGlvbi5jYWxsKHRoaXMsIHZhbHVlKSxcbiAgICAgICAgICAgIGAke1N0cmluZyhrZXkpfSBpbiAke25hbWV9IHJlY2VpdmVkOmAsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIC4uLmFyZ3NcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzZXQgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByaXptQXNzZXJ0LmFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkLCBlcnJvclNldChrZXksIG5hbWUpKTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldC5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXJyb3JTZXQoa2V5OiBzdHJpbmcgfCBzeW1ib2wsIGNvbXBvbmVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGBVbmRlZmluZWQgd2FzIHBhc3NlZCBhcyAke1N0cmluZyhrZXkpfSB0byAke2NvbXBvbmVudH0sIHNldHRlciB3aWxsIG5vdCBiZSBjYWxsZWRgO1xufVxuIl19
