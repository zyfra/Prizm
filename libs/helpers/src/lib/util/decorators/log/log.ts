import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface PrizmLogOptions {
  logArguments?: boolean;
  logResult?: boolean;
  logExecutionTime?: boolean;
  enabled?: boolean;
}

export function PrizmLogExecution(options: PrizmLogOptions = {}): any {
  const { enabled = true, logArguments = true, logResult = true, logExecutionTime = true } = options;

  // eslint-disable-next-line @typescript-eslint/ban-types
  return (target: Object, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
    const originalMethod = descriptor.value;

    if (!enabled) return descriptor;

    if (descriptor.set) {
      const originalSetter = descriptor.set;

      descriptor.set = function (value: any): void {
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
    } else if (descriptor.value) {
      descriptor.value = function (...args: any[]): any {
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
        } else if (result instanceof Observable) {
          result = result.pipe(
            tap(res => {
              if (logResult) {
                console.log(fullFunctionName, 'Результат:', res);
              }
              if (logExecutionTime) {
                const endTime = performance.now();
                console.log(fullFunctionName, `Время выполнения: ${endTime - startTime} мс`);
              }
            })
          );
        } else {
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
