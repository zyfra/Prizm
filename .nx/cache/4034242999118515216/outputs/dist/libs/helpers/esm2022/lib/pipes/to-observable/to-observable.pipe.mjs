import { Pipe } from '@angular/core';
import { BehaviorSubject, defer, isObservable, of } from 'rxjs';
import * as operators from 'rxjs/operators';
import { shareReplay } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class PrizmToObservablePipe {
    transform(value, operators = []) {
        if (typeof value?.then === 'function') {
            value = defer(() => value);
        }
        let $ = of(value);
        if (!isObservable(value)) {
            if (!this.subject$$ || this.lastOperators !== operators) {
                this.subject$$ = new BehaviorSubject(value);
                this.lastObservable$$ = this.addOperatorsToObservable(this.subject$$, (this.lastOperators = operators)).pipe(shareReplay(1));
                $ = this.lastObservable$$;
            }
            else {
                this.subject$$.next(value);
                return this.lastObservable$$;
            }
        }
        else {
            $ = value;
        }
        return this.addOperatorsToObservable($, operators);
    }
    addOperatorsToObservable($, operators) {
        const operatorsArray = (operators ?? [])
            .map(operator => {
            if (typeof operator === 'string')
                return this.getOperatorFunction(operator);
            if (Array.isArray(operator)) {
                const [key, ...args] = operator;
                return this.getOperatorFunctionByKey(key, args);
            }
            return operator;
        })
            .filter(Boolean);
        return operators?.length ? $.pipe(...operatorsArray) : $;
    }
    getOperatorFunction(str) {
        const result = this.parseFunctionString(str);
        if (!result)
            return null;
        return this.getOperatorFunctionByKey(result.functionName, result?.args);
    }
    getOperatorFunctionByKey(key, args) {
        const method = operators[key];
        if (typeof method !== 'function')
            return null;
        return method(...args);
    }
    parseFunctionString(str) {
        const regex = /^(\w+)\((.*)\)$/;
        const match = str.match(regex);
        if (!match) {
            return null;
        }
        const functionName = match[1];
        const argsString = match[2].trim();
        const args = argsString ? argsString.split(',').map(arg => JSON.parse(arg.trim())) : [];
        return { functionName, args };
    }
    ngOnDestroy() {
        this.subject$$?.complete();
        this.subject$$?.unsubscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmToObservablePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.1.8", ngImport: i0, type: PrizmToObservablePipe, isStandalone: true, name: "prizmToObservable" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmToObservablePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'prizmToObservable', standalone: true }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8tb2JzZXJ2YWJsZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9oZWxwZXJzL3NyYy9saWIvcGlwZXMvdG8tb2JzZXJ2YWJsZS90by1vYnNlcnZhYmxlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFhLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1RSxPQUFPLEtBQUssU0FBUyxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFJN0MsTUFBTSxPQUFPLHFCQUFxQjtJQUl6QixTQUFTLENBQ2QsS0FBcUMsRUFDckMsWUFBeUMsRUFBRTtRQUUzQyxJQUFJLE9BQVEsS0FBb0IsRUFBRSxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQ3JELEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBbUIsQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxDQUFDLEdBQWtCLEVBQUUsQ0FBQyxLQUFVLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssU0FBUyxFQUFFO2dCQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUNuRCxJQUFJLENBQUMsU0FBaUQsRUFDdEQsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxDQUNqQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FB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QUM7OEdBL0VVLHFCQUFxQjs0R0FBckIscUJBQXFCOzsyRkFBckIscUJBQXFCO2tCQURqQyxJQUFJO21CQUFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgZGVmZXIsIGlzT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIG9wZXJhdG9ycyBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBzaGFyZVJlcGxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByaXptVG9PYnNlcnZhYmxlT3BlcmF0b3IgfSBmcm9tICcuL21vZGVsJztcblxuQFBpcGUoeyBuYW1lOiAncHJpem1Ub09ic2VydmFibGUnLCBzdGFuZGFsb25lOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgUHJpem1Ub09ic2VydmFibGVQaXBlPFQ+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJqZWN0JCQhOiBCZWhhdmlvclN1YmplY3Q8VCB8IHVua25vd24+O1xuICBwcml2YXRlIGxhc3RPYnNlcnZhYmxlJCQhOiBPYnNlcnZhYmxlPFQgfCB1bmtub3duPjtcbiAgcHJpdmF0ZSBsYXN0T3BlcmF0b3JzITogUHJpem1Ub09ic2VydmFibGVPcGVyYXRvcltdO1xuICBwdWJsaWMgdHJhbnNmb3JtKFxuICAgIHZhbHVlOiBUIHwgT2JzZXJ2YWJsZTxUPiB8IFByb21pc2U8VD4sXG4gICAgb3BlcmF0b3JzOiBQcml6bVRvT2JzZXJ2YWJsZU9wZXJhdG9yW10gPSBbXVxuICApOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBpZiAodHlwZW9mICh2YWx1ZSBhcyBQcm9taXNlPFQ+KT8udGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFsdWUgPSBkZWZlcigoKSA9PiB2YWx1ZSBhcyBQcm9taXNlPFQ+KTtcbiAgICB9XG4gICAgbGV0ICQ6IE9ic2VydmFibGU8VD4gPSBvZih2YWx1ZSBhcyBUKTtcbiAgICBpZiAoIWlzT2JzZXJ2YWJsZSh2YWx1ZSkpIHtcbiAgICAgIGlmICghdGhpcy5zdWJqZWN0JCQgfHwgdGhpcy5sYXN0T3BlcmF0b3JzICE9PSBvcGVyYXRvcnMpIHtcbiAgICAgICAgdGhpcy5zdWJqZWN0JCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHVua25vd24+KHZhbHVlKTtcbiAgICAgICAgdGhpcy5sYXN0T2JzZXJ2YWJsZSQkID0gdGhpcy5hZGRPcGVyYXRvcnNUb09ic2VydmFibGUoXG4gICAgICAgICAgdGhpcy5zdWJqZWN0JCQgYXMgT2JzZXJ2YWJsZTx1bmtub3duPiBhcyBPYnNlcnZhYmxlPFQ+LFxuICAgICAgICAgICh0aGlzLmxhc3RPcGVyYXRvcnMgPSBvcGVyYXRvcnMpXG4gICAgICAgICkucGlwZShzaGFyZVJlcGxheSgxKSk7XG4gICAgICAgICQgPSB0aGlzLmxhc3RPYnNlcnZhYmxlJCQgYXMgT2JzZXJ2YWJsZTxUPjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3ViamVjdCQkLm5leHQodmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcy5sYXN0T2JzZXJ2YWJsZSQkIGFzIE9ic2VydmFibGU8VD47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICQgPSB2YWx1ZSBhcyBPYnNlcnZhYmxlPFQ+O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFkZE9wZXJhdG9yc1RvT2JzZXJ2YWJsZSgkLCBvcGVyYXRvcnMpIGFzIE9ic2VydmFibGU8VD47XG4gIH1cblxuICBwcml2YXRlIGFkZE9wZXJhdG9yc1RvT2JzZXJ2YWJsZShcbiAgICAkOiBPYnNlcnZhYmxlPFQ+LFxuICAgIG9wZXJhdG9yczogUHJpem1Ub09ic2VydmFibGVPcGVyYXRvcltdXG4gICk6IE9ic2VydmFibGU8dW5rbm93bj4ge1xuICAgIGNvbnN0IG9wZXJhdG9yc0FycmF5ID0gKG9wZXJhdG9ycyA/PyBbXSlcbiAgICAgIC5tYXAob3BlcmF0b3IgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIG9wZXJhdG9yID09PSAnc3RyaW5nJykgcmV0dXJuIHRoaXMuZ2V0T3BlcmF0b3JGdW5jdGlvbihvcGVyYXRvcik7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wZXJhdG9yKSkge1xuICAgICAgICAgIGNvbnN0IFtrZXksIC4uLmFyZ3NdID0gb3BlcmF0b3I7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3BlcmF0b3JGdW5jdGlvbkJ5S2V5KGtleSBhcyBzdHJpbmcsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcGVyYXRvcjtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuXG4gICAgcmV0dXJuIG9wZXJhdG9ycz8ubGVuZ3RoID8gJC5waXBlKC4uLihvcGVyYXRvcnNBcnJheSBhcyBbXSkpIDogJDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3BlcmF0b3JGdW5jdGlvbihzdHI6IHN0cmluZyk6IHVua25vd24ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucGFyc2VGdW5jdGlvblN0cmluZyhzdHIpO1xuICAgIGlmICghcmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5nZXRPcGVyYXRvckZ1bmN0aW9uQnlLZXkocmVzdWx0LmZ1bmN0aW9uTmFtZSwgcmVzdWx0Py5hcmdzKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3BlcmF0b3JGdW5jdGlvbkJ5S2V5KGtleTogc3RyaW5nLCBhcmdzOiB1bmtub3duW10pOiB1bmtub3duIHtcbiAgICBjb25zdCBtZXRob2QgPSBvcGVyYXRvcnNba2V5IGFzIGtleW9mIHR5cGVvZiBvcGVyYXRvcnNdIGFzIGFueTtcbiAgICBpZiAodHlwZW9mIG1ldGhvZCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIG1ldGhvZCguLi5hcmdzKTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VGdW5jdGlvblN0cmluZyhzdHI6IHN0cmluZyk6IHtcbiAgICBmdW5jdGlvbk5hbWU6IHN0cmluZztcbiAgICBhcmdzOiBzdHJpbmdbXTtcbiAgfSB8IG51bGwge1xuICAgIGNvbnN0IHJlZ2V4ID0gL14oXFx3KylcXCgoLiopXFwpJC87XG4gICAgY29uc3QgbWF0Y2ggPSBzdHIubWF0Y2gocmVnZXgpO1xuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBmdW5jdGlvbk5hbWUgPSBtYXRjaFsxXTtcbiAgICBjb25zdCBhcmdzU3RyaW5nID0gbWF0Y2hbMl0udHJpbSgpO1xuICAgIGNvbnN0IGFyZ3MgPSBhcmdzU3RyaW5nID8gYXJnc1N0cmluZy5zcGxpdCgnLCcpLm1hcChhcmcgPT4gSlNPTi5wYXJzZShhcmcudHJpbSgpKSkgOiBbXTtcbiAgICByZXR1cm4geyBmdW5jdGlvbk5hbWUsIGFyZ3MgfTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3ViamVjdCQkPy5jb21wbGV0ZSgpO1xuICAgIHRoaXMuc3ViamVjdCQkPy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=