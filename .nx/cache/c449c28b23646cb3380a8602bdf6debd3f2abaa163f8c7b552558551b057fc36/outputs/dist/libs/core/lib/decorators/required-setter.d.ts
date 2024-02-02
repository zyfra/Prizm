/**
 * Decorator for checking input setter values against a custom assertion which
 * takes value passed to input setter and component instance as arguments.
 * It specifically checks for undefined values and prevents calls to the
 * original setter in this case.
 */
export declare function prizmRequiredSetter<T extends Record<string, unknown>, K extends keyof T>(assertion?: (a: unknown) => boolean, ...args: unknown[]): MethodDecorator;
