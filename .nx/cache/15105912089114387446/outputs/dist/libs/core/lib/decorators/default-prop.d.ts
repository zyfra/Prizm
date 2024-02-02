import { PrizmBooleanHandler } from '../types/handler';
/**
 * Decorator for checking input values for undefined. You can also pass
 * optional assertion to check input against.
 *
 * CAUTION: This decorator overwrites other getters and setters.
 */
export declare function prizmDefaultProp<T extends Record<string, any>, K extends keyof T>(assertion?: PrizmBooleanHandler<T[K]>, ...args: unknown[]): PropertyDecorator;
