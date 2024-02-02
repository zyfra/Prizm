import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
export function PrizmLogExecution(options = {}) {
    const { enabled = true, logArguments = true, logResult = true, logExecutionTime = true } = options;
    // eslint-disable-next-line @typescript-eslint/ban-types
    return (target, propertyKey, descriptor) => {
        const originalMethod = descriptor.value;
        if (!enabled)
            return descriptor;
        if (descriptor.set) {
            const originalSetter = descriptor.set;
            descriptor.set = function (value) {
                const className = target.constructor.name;
                const propertyName = propertyKey;
                const fullPropertyName = `${className}.${propertyName}`;
                console.log(`Вызов сеттера: ${fullPropertyName}`);
                if (logArguments) {
                    console.log('Аргумент:', value);
                }
                const startTime = performance.now();
                originalSetter.call(this, value);
                if (logExecutionTime) {
                    const endTime = performance.now();
                    console.log(`Время выполнения: ${endTime - startTime} мс`);
                }
            };
        }
        else if (descriptor.value) {
            descriptor.value = function (...args) {
                const className = target.constructor.name;
                const functionName = propertyKey || target.constructor.name;
                const fullFunctionName = propertyKey ? `${className}.${functionName}` : functionName;
                console.log(fullFunctionName, `Вызов функции`);
                if (logArguments) {
                    console.log(fullFunctionName, 'Аргументы:', args);
                }
                const startTime = performance.now();
                let result = originalMethod.apply(this, args);
                if (result instanceof Promise) {
                    result = result.then(res => {
                        if (logResult) {
                            console.log(fullFunctionName, 'Результат:', res);
                        }
                        if (logExecutionTime) {
                            const endTime = performance.now();
                            console.log(fullFunctionName, `Время выполнения: ${endTime - startTime} мс`);
                        }
                        return res;
                    });
                }
                else if (result instanceof Observable) {
                    result = result.pipe(tap(res => {
                        if (logResult) {
                            console.log(fullFunctionName, 'Результат:', res);
                        }
                        if (logExecutionTime) {
                            const endTime = performance.now();
                            console.log(fullFunctionName, `Время выполнения: ${endTime - startTime} мс`);
                        }
                    }));
                }
                else {
                    if (logResult) {
                        console.log(fullFunctionName, 'Результат:', result);
                    }
                    if (logExecutionTime) {
                        const endTime = performance.now();
                        console.log(fullFunctionName, `Время выполнения: ${endTime - startTime} мс`);
                    }
                }
                return result;
            };
        }
        return descriptor;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9oZWxwZXJzL3NyYy9saWIvdXRpbC9kZWNvcmF0b3JzL2xvZy9sb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFTckMsTUFBTSxVQUFVLGlCQUFpQixDQUFDLFVBQTJCLEVBQUU7SUFDN0QsTUFBTSxFQUFFLE9BQU8sR0FBRyxJQUFJLEVBQUUsWUFBWSxHQUFHLElBQUksRUFBRSxTQUFTLEdBQUcsSUFBSSxFQUFFLGdCQUFnQixHQUFHLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQztJQUVuRyx3REFBd0Q7SUFDeEQsT0FBTyxDQUFDLE1BQWMsRUFBRSxXQUFtQixFQUFFLFVBQThCLEVBQXNCLEVBQUU7UUFDakcsTUFBTSxjQUFjLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUV4QyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU8sVUFBVSxDQUFDO1FBRWhDLElBQUksVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNsQixNQUFNLGNBQWMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBRXRDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsVUFBVSxLQUFVO2dCQUNuQyxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDMUMsTUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFDO2dCQUNqQyxNQUFNLGdCQUFnQixHQUFHLEdBQUcsU0FBUyxJQUFJLFlBQVksRUFBRSxDQUFDO2dCQUV4RCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixnQkFBZ0IsRUFBRSxDQUFDLENBQUM7Z0JBRWxELElBQUksWUFBWSxFQUFFO29CQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxL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Q0FBQyxDQUFDO3FCQUM5RTtpQkFDRjtnQkFFRCxPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDLENBQUM7U0FDSDtRQUVELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpem1Mb2dPcHRpb25zIHtcbiAgbG9nQXJndW1lbnRzPzogYm9vbGVhbjtcbiAgbG9nUmVzdWx0PzogYm9vbGVhbjtcbiAgbG9nRXhlY3V0aW9uVGltZT86IGJvb2xlYW47XG4gIGVuYWJsZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUHJpem1Mb2dFeGVjdXRpb24ob3B0aW9uczogUHJpem1Mb2dPcHRpb25zID0ge30pOiBhbnkge1xuICBjb25zdCB7IGVuYWJsZWQgPSB0cnVlLCBsb2dBcmd1bWVudHMgPSB0cnVlLCBsb2dSZXN1bHQgPSB0cnVlLCBsb2dFeGVjdXRpb25UaW1lID0gdHJ1ZSB9ID0gb3B0aW9ucztcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuICByZXR1cm4gKHRhcmdldDogT2JqZWN0LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpOiBQcm9wZXJ0eURlc2NyaXB0b3IgPT4ge1xuICAgIGNvbnN0IG9yaWdpbmFsTWV0aG9kID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICAgIGlmICghZW5hYmxlZCkgcmV0dXJuIGRlc2NyaXB0b3I7XG5cbiAgICBpZiAoZGVzY3JpcHRvci5zZXQpIHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsU2V0dGVyID0gZGVzY3JpcHRvci5zZXQ7XG5cbiAgICAgIGRlc2NyaXB0b3Iuc2V0ID0gZnVuY3Rpb24gKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gdGFyZ2V0LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHByb3BlcnR5S2V5O1xuICAgICAgICBjb25zdCBmdWxsUHJvcGVydHlOYW1lID0gYCR7Y2xhc3NOYW1lfS4ke3Byb3BlcnR5TmFtZX1gO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGDQktGL0LfQvtCyINGB0LXRgtGC0LXRgNCwOiAke2Z1bGxQcm9wZXJ0eU5hbWV9YCk7XG5cbiAgICAgICAgaWYgKGxvZ0FyZ3VtZW50cykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCfQkNGA0LPRg9C80LXQvdGCOicsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICBvcmlnaW5hbFNldHRlci5jYWxsKHRoaXMsIHZhbHVlKTtcblxuICAgICAgICBpZiAobG9nRXhlY3V0aW9uVGltZSkge1xuICAgICAgICAgIGNvbnN0IGVuZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhg0JLRgNC10LzRjyDQstGL0L/QvtC70L3QtdC90LjRjzogJHtlbmRUaW1lIC0gc3RhcnRUaW1lfSDQvNGBYCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChkZXNjcmlwdG9yLnZhbHVlKSB7XG4gICAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKC4uLmFyZ3M6IGFueVtdKTogYW55IHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gdGFyZ2V0LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIGNvbnN0IGZ1bmN0aW9uTmFtZSA9IHByb3BlcnR5S2V5IHx8IHRhcmdldC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICBjb25zdCBmdWxsRnVuY3Rpb25OYW1lID0gcHJvcGVydHlLZXkgPyBgJHtjbGFzc05hbWV9LiR7ZnVuY3Rpb25OYW1lfWAgOiBmdW5jdGlvbk5hbWU7XG5cbiAgICAgICAgY29uc29sZS5sb2coZnVsbEZ1bmN0aW9uTmFtZSwgYNCS0YvQt9C+0LIg0YTRg9C90LrRhtC40LhgKTtcblxuICAgICAgICBpZiAobG9nQXJndW1lbnRzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZnVsbEZ1bmN0aW9uTmFtZSwgJ9CQ0YDQs9GD0LzQtdC90YLRizonLCBhcmdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gb3JpZ2luYWxNZXRob2QuYXBwbHkodGhpcywgYXJncyk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKGxvZ1Jlc3VsdCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmdWxsRnVuY3Rpb25OYW1lLCAn0KDQtdC30YPQu9GM0YLQsNGCOicsIHJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobG9nRXhlY3V0aW9uVGltZSkge1xuICAgICAgICAgICAgICBjb25zdCBlbmRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZ1bGxGdW5jdGlvbk5hbWUsIGDQktGA0LXQvNGPINCy0YvQv9C+0LvQvdC10L3QuNGPOiAke2VuZFRpbWUgLSBzdGFydFRpbWV9INC80YFgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0IGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5waXBlKFxuICAgICAgICAgICAgdGFwKHJlcyA9PiB7XG4gICAgICAgICAgICAgIGlmIChsb2dSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmdWxsRnVuY3Rpb25OYW1lLCAn0KDQtdC30YPQu9GM0YLQsNGCOicsIHJlcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGxvZ0V4ZWN1dGlvblRpbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZnVsbEZ1bmN0aW9uTmFtZSwgYNCS0YDQtdC80Y8g0LLRi9C/0L7Qu9C90LXQvdC40Y86ICR7ZW5kVGltZSAtIHN0YXJ0VGltZX0g0LzRgWApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGxvZ1Jlc3VsdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZnVsbEZ1bmN0aW9uTmFtZSwgJ9Cg0LXQt9GD0LvRjNGC0LDRgjonLCByZXN1bHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobG9nRXhlY3V0aW9uVGltZSkge1xuICAgICAgICAgICAgY29uc3QgZW5kVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZnVsbEZ1bmN0aW9uTmFtZSwgYNCS0YDQtdC80Y8g0LLRi9C/0L7Qu9C90LXQvdC40Y86ICR7ZW5kVGltZSAtIHN0YXJ0VGltZX0g0LzRgWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICB9O1xufVxuIl19