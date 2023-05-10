import { Observable } from 'rxjs';
import { PrizmLogExecution } from './log';

describe('PrizmLogExecution with options', () => {
  let consoleLogSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  it('should log only arguments for a simple function', () => {
    const testFunction = PrizmLogExecution({ logArguments: true, logResult: false, logExecutionTime: false })(
      {},
      'testFunction',
      {
        value: function (a: number, b: number) {
          return a + b;
        },
      }
    ).value;

    const result = testFunction(3, 4);
    expect(result).toBe(7);
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
  });

  it('should log only result for a class method', () => {
    class TestClass {
      @PrizmLogExecution({ logArguments: false, logResult: true, logExecutionTime: false, enabled: true })
      public testMethod(a: number, b: number): number {
        return a * b;
      }
    }

    const myInstance = new TestClass();
    const result = myInstance.testMethod(3, 4);
    expect(result).toBe(12);
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
  });

  it('should log only execution time for a Promise function', async () => {
    const testAsyncFunction = PrizmLogExecution({
      logArguments: false,
      logResult: false,
      logExecutionTime: true,
    })({}, 'testAsyncFunction', {
      value: async function (a: number, b: number) {
        return a + b;
      },
    }).value;

    const result = await testAsyncFunction(3, 4);
    expect(result).toBe(7);
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
  });

  it('should log arguments and result, but not execution time for an Observable function', done => {
    const testObservableFunction = PrizmLogExecution({
      logArguments: true,
      logResult: true,
      logExecutionTime: false,
    })({}, 'testObservableFunction', {
      value: function (a: number, b: number) {
        return new Observable<number>(observer => {
          observer.next(a * b);
          observer.complete();
        });
      },
    }).value;

    testObservableFunction(3, 4).subscribe((result: any) => {
      expect(result).toBe(12);
      expect(consoleLogSpy).toHaveBeenCalledTimes(3);
      done();
    });
  });

  it('should log only arguments for a class setter', () => {
    class TestClass {
      private _myProperty: number;

      @PrizmLogExecution({ logArguments: true, logResult: false, logExecutionTime: false })
      set myProperty(value: number) {
        this._myProperty = value;
      }

      get myProperty(): number {
        return this._myProperty;
      }
    }

    const myInstance = new TestClass();
    myInstance.myProperty = 42;
    expect(myInstance.myProperty).toBe(42);
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
  });

  it('should not log anything when the decorator is disabled', () => {
    class TestClass {
      @PrizmLogExecution({ enabled: false, logArguments: true, logResult: true, logExecutionTime: true })
      public testMethod(a: number, b: number): number {
        return a * b;
      }
    }

    const myInstance = new TestClass();
    const result = myInstance.testMethod(3, 4);
    expect(result).toBe(12);
    expect(consoleLogSpy).not.toHaveBeenCalled();
  });
});
