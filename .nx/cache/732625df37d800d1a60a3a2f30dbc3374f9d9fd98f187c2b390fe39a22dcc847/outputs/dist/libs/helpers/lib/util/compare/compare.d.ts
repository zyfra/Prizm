export declare abstract class Compare {
    static isTruthy<T>(value: T): boolean;
    static isFalsy<T>(value: T): boolean;
    static isUndefined(value: unknown): value is undefined;
    static isNullish(value: unknown): value is null | undefined;
    static isNotNullish<T>(value: unknown): value is NonNullable<T>;
    static isNull(value: unknown): value is null;
    static isEqualDates(a: Date, b: Date): boolean;
}
