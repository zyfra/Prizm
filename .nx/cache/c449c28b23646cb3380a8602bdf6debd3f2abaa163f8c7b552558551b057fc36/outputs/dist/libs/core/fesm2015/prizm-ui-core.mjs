import { __awaiter } from 'tslib';
import { defer, Subject } from 'rxjs';
import * as i0 from '@angular/core';
import { QueryList, Directive, Input, HostBinding } from '@angular/core';

/**
 * @deprecated use String.prototype.padStart in 2.0 (after Chrome 49 support is dropped)
 * Pads a string with symbols in the beginning
 *
 * @param sourceString
 * @param minResultLength
 * @param padString string to pad with
 */
function prizmPadStart(sourceString, minResultLength, padString = ` `) {
    const padSize = minResultLength - sourceString.length;
    if (padSize <= 0) {
        return sourceString;
    }
    return padString.repeat(padSize / padString.length).slice(0, padSize) + sourceString;
}

var PRIZM_LOG_LEVEL;
(function (PRIZM_LOG_LEVEL) {
    PRIZM_LOG_LEVEL[PRIZM_LOG_LEVEL["warn"] = 0] = "warn";
    PRIZM_LOG_LEVEL[PRIZM_LOG_LEVEL["error"] = 1] = "error";
    PRIZM_LOG_LEVEL[PRIZM_LOG_LEVEL["log"] = 2] = "log";
})(PRIZM_LOG_LEVEL || (PRIZM_LOG_LEVEL = {}));
const prizmAssert = {
    enabled: [],
    defaultLevel: PRIZM_LOG_LEVEL.error,
    get assertBy() {
        return (assertion, level, ...args) => {
            if (assertion)
                return;
            if (!this.enabled.includes(level))
                return;
            switch (level) {
                case PRIZM_LOG_LEVEL.error:
                    return void console.error(...args);
                case PRIZM_LOG_LEVEL.warn:
                    return void console.warn(...args);
                case PRIZM_LOG_LEVEL.log:
                    return void console.log(...args);
            }
        };
    },
    get assert() {
        return (assertion, ...args) => {
            return this.assertBy(assertion, this.defaultLevel, ...args);
        };
    },
    get assertWarning() {
        return (assertion, ...args) => {
            return this.assertBy(assertion, PRIZM_LOG_LEVEL.warn, ...args);
        };
    },
};

function prizmPx(value) {
    prizmAssert.assert(Number.isFinite(value), `Value must be finite number`);
    return `${value}px`;
}

function prizmCapitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function prizmGetNumberWithZero(n) {
    if (n < 10) {
        return `0${n}`;
    }
    return n + '';
}

function prizmGetFPS() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => requestAnimationFrame(t1 => requestAnimationFrame(t2 => resolve(1000 / (t2 - t1)))));
    });
}
function prizmGetFPS$() {
    return defer(() => prizmGetFPS());
}

/**
 * Decorator for checking input values for undefined. You can also pass
 * optional assertion to check input against.
 *
 * CAUTION: This decorator overwrites other getters and setters.
 */
function prizmDefaultProp(assertion, ...args) {
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

function prizmAutoEmit(options = {}) {
    return (target, key) => {
        var _a, _b;
        const defaultValue = (_a = options.defaultValue) !== null && _a !== void 0 ? _a : null;
        const memberName = key;
        const hiddenPropertyName = (_b = options.name) !== null && _b !== void 0 ? _b : `${memberName}Change`;
        let lastValue;
        Object.defineProperty(target, memberName, {
            set(newValue) {
                var _a, _b;
                const value = (lastValue = newValue !== null && newValue !== void 0 ? newValue : defaultValue);
                const method = this[hiddenPropertyName];
                if (typeof (method === null || method === void 0 ? void 0 : method.next) !== 'function') {
                    console.error('prizmAutoEmit: Can find subject', {
                        method,
                        hiddenPropertyName,
                        value,
                        self: this,
                    });
                    return;
                }
                method.next((_b = (typeof (options === null || options === void 0 ? void 0 : options.calculate) === 'function' ? (_a = options === null || options === void 0 ? void 0 : options.calculate) === null || _a === void 0 ? void 0 : _a.call(options, value, this) : value)) !== null && _b !== void 0 ? _b : defaultValue);
            },
            get() {
                return lastValue;
            },
        });
    };
}

function prizmObservable(options = {}) {
    return (rTarget, key) => {
        var _a, _b, _c, _d;
        const postfix = (_a = options.postfix) !== null && _a !== void 0 ? _a : '$$';
        const defaultValue = (_b = options.defaultValue) !== null && _b !== void 0 ? _b : null;
        const subject = typeof options.subject === 'function' ? options.subject() : (_c = options.subject) !== null && _c !== void 0 ? _c : new Subject();
        const memberName = key;
        let lastValue;
        const hiddenPropertyName = (_d = options.name) !== null && _d !== void 0 ? _d : `${memberName}${postfix}`;
        function createBaseProperty(obj) {
            var _a;
            Object.defineProperty(obj, hiddenPropertyName, Object.assign(Object.assign({ enumerable: false }, ((_a = options === null || options === void 0 ? void 0 : options.attributes) !== null && _a !== void 0 ? _a : {})), { value: subject }));
        }
        Object.defineProperty(rTarget, memberName, {
            set(newValue) {
                const value = (lastValue = (newValue !== null && newValue !== void 0 ? newValue : defaultValue));
                let method = this[hiddenPropertyName];
                if (!(method === null || method === void 0 ? void 0 : method.next)) {
                    createBaseProperty(this);
                    method = this[hiddenPropertyName];
                }
                method.next(value);
            },
            get() {
                const method = this[hiddenPropertyName];
                if (!(method === null || method === void 0 ? void 0 : method.next)) {
                    createBaseProperty(this);
                    subject.next((lastValue = defaultValue));
                }
                return lastValue;
            },
        });
    };
}

class PrizmPureException extends Error {
    constructor() {
        super('prizmPure can only be used with functions or getters');
    }
}

/**
 * Implements lazy initialization for getter or memoization of a function call similar to pure {@link: Pipe}.
 * Replaces getter with its calculated value upon first call or keeps track of last call arguments and returned
 * value for function, skipping calculation when arguments are strictly the same.
 *
 * @throws error if used not on getter or function
 *
 * CAUTION: `this` is not available inside such functions/getters, they must be pure.
 */
function prizmPure(
// eslint-disable-next-line @typescript-eslint/ban-types
_target, propertyKey, { get, enumerable, value }) {
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
                const isPure = originalFnWasCalledLeastAtOnce &&
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

/**
 * Decorator for checking input setter values against a custom assertion which
 * takes value passed to input setter and component instance as arguments.
 * It specifically checks for undefined values and prevents calls to the
 * original setter in this case.
 */
function prizmRequiredSetter(assertion, ...args) {
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
                    prizmAssert.assert(assertion.call(this, value), `${String(key)} in ${name} received:`, value, ...args);
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

/**
 * For type safety when using @ContentChildren and @ViewChildren
 *
 * NOTE: Be careful subscribing to 'changes'
 */
const PRIZM_EMPTY_QUERY = new QueryList();
const PRIZM_EMPTY_ARRAY = [];
// eslint-disable-next-line @typescript-eslint/no-empty-function
const PRIZM_EMPTY_FUNCTION = () => { };

class PrizmAbstractTestId {
    get testId() {
        return this.generateManeTestId + (this.testIdPostfix ? `--${this.testIdPostfix}` : '');
    }
    set testId(value) {
        this.testIdPostfix = value;
    }
    get generateManeTestId() {
        return this.testId_;
    }
}
PrizmAbstractTestId.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmAbstractTestId, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PrizmAbstractTestId.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmAbstractTestId, inputs: { testId: "testId" }, host: { properties: { "attr.data-testid": "this.testId" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmAbstractTestId, decorators: [{
            type: Directive,
            args: [{}]
        }], propDecorators: { testId: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.data-testid']
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { PRIZM_EMPTY_ARRAY, PRIZM_EMPTY_FUNCTION, PRIZM_EMPTY_QUERY, PRIZM_LOG_LEVEL, PrizmAbstractTestId, PrizmPureException, prizmAssert, prizmAutoEmit, prizmCapitalizeFirstLetter, prizmDefaultProp, prizmGetFPS, prizmGetFPS$, prizmGetNumberWithZero, prizmObservable, prizmPadStart, prizmPure, prizmPx, prizmRequiredSetter };
//# sourceMappingURL=prizm-ui-core.mjs.map
