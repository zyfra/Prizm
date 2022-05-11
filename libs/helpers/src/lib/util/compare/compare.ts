export abstract class Compare {
  public static isTruthy<T>(value: T): boolean {
    return Boolean(value) === true;
  }

  public static isFalsy<T>(value: T): boolean {
    return Boolean(value) === false;
  }

  public static isUndefined<T>(value: T): value is undefined {
    return value === undefined;
  }

  public static isNullish<T>(value: T): value is null | undefined {
    return value == null;
  }

  public static isNotNullish<T>(value: T): value is NonNullable<T> {
    return value != null;
  }

  public static isNull<T>(value: T): value is null {
    return value === null;
  }

  public static isEqualDates(a: Date, b: Date): boolean {
    return a === b || a.getTime() === b.getTime();
  }
}
