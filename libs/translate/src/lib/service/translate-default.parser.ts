import { TranslateParser } from '../core';

import { isDefined } from '../util';

export class TranslateDefaultParser extends TranslateParser {
    templateMatcher: RegExp = /{{\s?([^{}\s]*)\s?}}/g;

  // eslint-disable-next-line @typescript-eslint/ban-types
    public interpolate(expr: string | Function, params?: any): string {
        // todo: пересмотреть (не ясно, нужны ли функции и причем тут параметры)
        let result: string;

        if (typeof expr === 'string') {
            result = this.interpolateString(expr, params);
        } else if (typeof expr === 'function') {
            result = this.interpolateFunction(expr, params);
        } else {
            // this should not happen, but an unrelated TranslateService test depends on it
            result = expr as string;
        }
        return result;
    }

    public getValue(target: any, key: string): string {
        const keys = typeof key === 'string' ? key.split('.') : [key];
        key = '';
        do {
            key += keys.shift();
            if (isDefined(target) && isDefined(target[key]) && (typeof target[key] === 'object' || !keys.length)) {
                target = target[key];
                key = '';
            } else if (!keys.length) {
                target = undefined;
            } else {
                // если точка является частью ключа
                key += '.';
            }
        } while (keys.length);
        return target ? target.toString() : undefined;
    }

    private interpolateFunction(fn: any, params?: any) {
        return fn(params);
    }

    private interpolateString(expr: string, params?: any) {
        if (!params) {
            return expr;
        }

        return expr.replace(this.templateMatcher, (substring: string, b: string) => {
            const r = this.getValue(params, b);
            return isDefined(r) ? r : substring;
        });
    }
}
