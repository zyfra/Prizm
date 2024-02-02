import { PrizmPureException } from '../exceptions/pure.exception';
/**
 * Implements lazy initialization for getter or memoization of a function call similar to pure {@link: Pipe}.
 * Replaces getter with its calculated value upon first call or keeps track of last call arguments and returned
 * value for function, skipping calculation when arguments are strictly the same.
 *
 * @throws error if used not on getter or function
 *
 * CAUTION: `this` is not available inside such functions/getters, they must be pure.
 */
export function prizmPure(
  // eslint-disable-next-line @typescript-eslint/ban-types
  _target,
  propertyKey,
  { get, enumerable, value }
) {
  if (get) {
    return {
      enumerable,
      get() {
        const value = get.call(this);
        Object.defineProperty(this, propertyKey, { enumerable, value });
        return value;
      },
    };
  }
  if (typeof value !== 'function') {
    throw new PrizmPureException();
  }
  const original = value;
  return {
    enumerable,
    get: function () {
      let previousArgs = [];
      let originalFnWasCalledLeastAtOnce = false;
      let pureValue;
      const patched = (...args) => {
        const isPure =
          originalFnWasCalledLeastAtOnce &&
          previousArgs.length === args.length &&
          args.every((arg, index) => arg === previousArgs[index]);
        if (isPure) {
          return pureValue;
        }
        previousArgs = args;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        pureValue = original.apply(this, args);
        originalFnWasCalledLeastAtOnce = true;
        return pureValue;
      };
      Object.defineProperty(this, propertyKey, { value: patched });
      return patched;
    },
  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29yZS9zcmMvbGliL2RlY29yYXRvcnMvcHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVsRTs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sVUFBVSxTQUFTO0FBQ3ZCLHdEQUF3RDtBQUN4RCxPQUFlLEVBQ2YsV0FBbUIsRUFDbkIsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBOEI7SUFFdEQsSUFBSSxHQUFHLEVBQUU7UUFDUCxPQUFPO1lBQ0wsVUFBVTtZQUNWLEdBQUc7Z0JBQ0QsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFN0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBRWhFLE9BQU8sS0FBSyxDQUFDO1lBQ2YsQ0FBQztTQUNGLENBQUM7S0FDSDtJQUVELElBQUksT0FBTyxLQUFLLEtBQUssVUFBVSxFQUFFO1FBQy9CLE1BQU0sSUFBSSxrQkFBa0IsRUFBRSxDQUFDO0tBQ2hDO0lBRUQsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBRXZCLE9BQU87UUFDTCxVQUFVO1FBQ1YsR0FBRyxFQUFFO1lBQ0gsSUFBSSxZQUFZLEdBQXVCLEVBQUUsQ0FBQztZQUMxQyxJQUFJLDhCQUE4QixHQUFHLEtBQUssQ0FBQztZQUMzQyxJQUFJLFNBQWtCLENBQUM7WUFFdkIsTUFBTSxPQUFPLEdBQUcsQ0FBQyxHQUFHLElBQWUsRUFBVyxFQUFFO2dCQUM5QyxNQUFNLE1BQU0sR0FDViw4QkFBOEI7b0JBQzlCLFlBQVksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU07b0JBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBRTFELElBQUksTUFBTSxFQUFFO29CQUNWLE9BQU8sU0FBUyxDQUFDO2lCQUNsQjtnQkFFRCxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUNwQiw2REFBNkQ7Z0JBQzdELGFBQWE7Z0JBQ2IsU0FBUyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN2Qyw4QkFBOEIsR0FBRyxJQUFJLENBQUM7Z0JBRXRDLE9BQU8sU0FBUyxDQUFDO1lBQ25CLENBQUMsQ0FBQztZQUVGLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBRTdELE9BQU8sT0FBdUIsQ0FBQztRQUNqQyxDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcml6bVB1cmVFeGNlcHRpb24gfSBmcm9tICcuLi9leGNlcHRpb25zL3B1cmUuZXhjZXB0aW9uJztcblxuLyoqXG4gKiBJbXBsZW1lbnRzIGxhenkgaW5pdGlhbGl6YXRpb24gZm9yIGdldHRlciBvciBtZW1vaXphdGlvbiBvZiBhIGZ1bmN0aW9uIGNhbGwgc2ltaWxhciB0byBwdXJlIHtAbGluazogUGlwZX0uXG4gKiBSZXBsYWNlcyBnZXR0ZXIgd2l0aCBpdHMgY2FsY3VsYXRlZCB2YWx1ZSB1cG9uIGZpcnN0IGNhbGwgb3Iga2VlcHMgdHJhY2sgb2YgbGFzdCBjYWxsIGFyZ3VtZW50cyBhbmQgcmV0dXJuZWRcbiAqIHZhbHVlIGZvciBmdW5jdGlvbiwgc2tpcHBpbmcgY2FsY3VsYXRpb24gd2hlbiBhcmd1bWVudHMgYXJlIHN0cmljdGx5IHRoZSBzYW1lLlxuICpcbiAqIEB0aHJvd3MgZXJyb3IgaWYgdXNlZCBub3Qgb24gZ2V0dGVyIG9yIGZ1bmN0aW9uXG4gKlxuICogQ0FVVElPTjogYHRoaXNgIGlzIG5vdCBhdmFpbGFibGUgaW5zaWRlIHN1Y2ggZnVuY3Rpb25zL2dldHRlcnMsIHRoZXkgbXVzdCBiZSBwdXJlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJpem1QdXJlPFQ+KFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuICBfdGFyZ2V0OiBvYmplY3QsXG4gIHByb3BlcnR5S2V5OiBzdHJpbmcsXG4gIHsgZ2V0LCBlbnVtZXJhYmxlLCB2YWx1ZSB9OiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxUPlxuKTogVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8VD4ge1xuICBpZiAoZ2V0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudW1lcmFibGUsXG4gICAgICBnZXQoKTogVCB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0LmNhbGwodGhpcyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHByb3BlcnR5S2V5LCB7IGVudW1lcmFibGUsIHZhbHVlIH0pO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgUHJpem1QdXJlRXhjZXB0aW9uKCk7XG4gIH1cblxuICBjb25zdCBvcmlnaW5hbCA9IHZhbHVlO1xuXG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpOiBUIHtcbiAgICAgIGxldCBwcmV2aW91c0FyZ3M6IHJlYWRvbmx5IHVua25vd25bXSA9IFtdO1xuICAgICAgbGV0IG9yaWdpbmFsRm5XYXNDYWxsZWRMZWFzdEF0T25jZSA9IGZhbHNlO1xuICAgICAgbGV0IHB1cmVWYWx1ZTogdW5rbm93bjtcblxuICAgICAgY29uc3QgcGF0Y2hlZCA9ICguLi5hcmdzOiB1bmtub3duW10pOiB1bmtub3duID0+IHtcbiAgICAgICAgY29uc3QgaXNQdXJlID1cbiAgICAgICAgICBvcmlnaW5hbEZuV2FzQ2FsbGVkTGVhc3RBdE9uY2UgJiZcbiAgICAgICAgICBwcmV2aW91c0FyZ3MubGVuZ3RoID09PSBhcmdzLmxlbmd0aCAmJlxuICAgICAgICAgIGFyZ3MuZXZlcnkoKGFyZywgaW5kZXgpID0+IGFyZyA9PT0gcHJldmlvdXNBcmdzW2luZGV4XSk7XG5cbiAgICAgICAgaWYgKGlzUHVyZSkge1xuICAgICAgICAgIHJldHVybiBwdXJlVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2aW91c0FyZ3MgPSBhcmdzO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcHVyZVZhbHVlID0gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIG9yaWdpbmFsRm5XYXNDYWxsZWRMZWFzdEF0T25jZSA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHB1cmVWYWx1ZTtcbiAgICAgIH07XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wZXJ0eUtleSwgeyB2YWx1ZTogcGF0Y2hlZCB9KTtcblxuICAgICAgcmV0dXJuIHBhdGNoZWQgYXMgdW5rbm93biBhcyBUO1xuICAgIH0sXG4gIH07XG59XG4iXX0=
