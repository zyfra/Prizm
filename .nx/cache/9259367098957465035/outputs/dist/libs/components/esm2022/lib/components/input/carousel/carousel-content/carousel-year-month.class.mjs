import { prizmDefaultCarouselControlsState } from './carousel-content.interface';
/**
 * TODO remove in 2.0 version
 * @deprecated
 * use PrizmInputCarouselYearMonth
 * */
export class PrizmCarouselYearMonth {
    constructor(min, max) {
        this.currentValue = undefined;
        this.min = { month: 1, year: Number.NEGATIVE_INFINITY };
        this.max = { month: 12, year: Number.POSITIVE_INFINITY };
        this.controlsState = { ...prizmDefaultCarouselControlsState };
        if (min) {
            this.min = min;
        }
        if (max) {
            this.min = min;
        }
    }
    setCurrentValue(element) {
        this.currentValue = element;
        this.updateControlsState();
    }
    get currentValueNotSet() {
        return this.currentValue === undefined;
    }
    left() {
        const newValue = { ...this.currentValue, year: this.currentValue.year - 1 };
        if (['gt', 'eq'].includes(this.compare(newValue, this.min))) {
            this.currentValue = { ...newValue };
        }
        else {
            this.currentValue = { ...this.min };
        }
        this.updateControlsState();
    }
    stepLeft() {
        if (this.currentValue.month === 1) {
            this.currentValue = { year: this.currentValue.year - 1, month: 12 };
        }
        else {
            this.currentValue = { ...this.currentValue, month: this.currentValue.month - 1 };
        }
        this.updateControlsState();
    }
    stepRight() {
        if (this.currentValue.month === 12) {
            this.currentValue = { year: this.currentValue.year + 1, month: 1 };
        }
        else {
            this.currentValue = { ...this.currentValue, month: this.currentValue.month + 1 };
        }
        this.updateControlsState();
    }
    right() {
        const newValue = { ...this.currentValue, year: this.currentValue.year + 1 };
        if (['lt', 'eq'].includes(this.compare(newValue, this.max))) {
            this.currentValue = { ...newValue };
        }
        else {
            this.currentValue = { ...this.max };
        }
        this.updateControlsState();
    }
    updateControlsState() {
        if (this.currentValue === undefined) {
            this.controlsState.leftCtrlDisabled = true;
            this.controlsState.stepleftCtrlDisabled = true;
            this.controlsState.stepRightCtrlDisabled = true;
            this.controlsState.rightCtrlDisabled = true;
            return;
        }
        if (this.compare(this.currentValue, this.min) === 'eq') {
            this.controlsState.leftCtrlDisabled = true;
            this.controlsState.stepleftCtrlDisabled = true;
            this.controlsState.stepRightCtrlDisabled = false;
            this.controlsState.rightCtrlDisabled = false;
            return;
        }
        if (this.compare(this.currentValue, this.max) === 'eq') {
            this.controlsState.leftCtrlDisabled = false;
            this.controlsState.stepleftCtrlDisabled = false;
            this.controlsState.stepRightCtrlDisabled = true;
            this.controlsState.rightCtrlDisabled = true;
            return;
        }
        this.controlsState.leftCtrlDisabled = false;
        this.controlsState.stepleftCtrlDisabled = false;
        this.controlsState.stepRightCtrlDisabled = false;
        this.controlsState.rightCtrlDisabled = false;
    }
    compare(value1, value2) {
        const v2 = value2;
        const v1 = value1;
        if (!value1 || !value1)
            return 'eq';
        if (v1.year < v2.year) {
            return 'lt';
        }
        if (v1.year > v2.year) {
            return 'gt';
        }
        if (v1.year === v2.year) {
            if (v1.month < v2.month) {
                return 'lt';
            }
            if (v1.month > v2.month) {
                return 'gt';
            }
            return 'eq';
        }
        return 'eq';
    }
}
export class PrizmInputCarouselYearMonth extends PrizmCarouselYearMonth {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwteWVhci1tb250aC5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvY2Fyb3VzZWwvY2Fyb3VzZWwtY29udGVudC9jYXJvdXNlbC15ZWFyLW1vbnRoLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQ0FBaUMsRUFBd0IsTUFBTSw4QkFBOEIsQ0FBQztBQVN2Rzs7OztLQUlLO0FBQ0wsTUFBTSxPQUFPLHNCQUFzQjtJQU1qQyxZQUFZLEdBQWlDLEVBQUUsR0FBaUM7UUFMaEYsaUJBQVksR0FBZ0MsU0FBZ0IsQ0FBQztRQUV0RCxRQUFHLEdBQWdDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDaEYsUUFBRyxHQUFnQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBWWpGLGtCQUFhLEdBQUcsRUFBRSxHQUFHLGlDQUFpQyxFQUFFLENBQUM7UUFUOUQsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNoQjtRQUVELElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFVLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBSU0sZUFBZSxDQUFDLE9BQW9DO1FBQ3pELElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxJQUFJO1FBQ1QsTUFBTSxRQUFRLEdBQUcs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QUksQ0FBQztTQUNiO1FBRUQsSUFBSSxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFO1lBQ3ZCLElBQUksRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFO2dCQUN2QixPQUFPLElBQUksQ0FBQzthQUNiO1lBRUQsSUFBSSxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUU7Z0JBQ3ZCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsc0JBQXNCO0NBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcml6bURlZmF1bHRDYXJvdXNlbENvbnRyb2xzU3RhdGUsIFByaXptQ2Fyb3VzZWxDb250ZW50IH0gZnJvbSAnLi9jYXJvdXNlbC1jb250ZW50LmludGVyZmFjZSc7XG4vKipcbiAqIFRPRE8gcmVtb3ZlIGluIDIuMCB2ZXJzaW9uXG4gKiBAZGVwcmVjYXRlZFxuICogdXNlIFByaXptSW5wdXRDYXJvdXNlbFllYXJNb250aFZhbHVlXG4gKiAqL1xuZXhwb3J0IHR5cGUgUHJpem1DYXJvdXNlbFllYXJNb250aFZhbHVlID0geyB5ZWFyOiBudW1iZXI7IG1vbnRoOiBudW1iZXIgfTtcbmV4cG9ydCB0eXBlIFByaXptSW5wdXRDYXJvdXNlbFllYXJNb250aFZhbHVlID0gUHJpem1DYXJvdXNlbFllYXJNb250aFZhbHVlO1xuXG4vKipcbiAqIFRPRE8gcmVtb3ZlIGluIDIuMCB2ZXJzaW9uXG4gKiBAZGVwcmVjYXRlZFxuICogdXNlIFByaXptSW5wdXRDYXJvdXNlbFllYXJNb250aFxuICogKi9cbmV4cG9ydCBjbGFzcyBQcml6bUNhcm91c2VsWWVhck1vbnRoIGltcGxlbWVudHMgUHJpem1DYXJvdXNlbENvbnRlbnQge1xuICBjdXJyZW50VmFsdWU6IFByaXptQ2Fyb3VzZWxZZWFyTW9udGhWYWx1ZSA9IHVuZGVmaW5lZCBhcyBhbnk7XG5cbiAgcHVibGljIG1pbjogUHJpem1DYXJvdXNlbFllYXJNb250aFZhbHVlID0geyBtb250aDogMSwgeWVhcjogTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZIH07XG4gIHB1YmxpYyBtYXg6IFByaXptQ2Fyb3VzZWxZZWFyTW9udGhWYWx1ZSA9IHsgbW9udGg6IDEyLCB5ZWFyOiBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkgfTtcblxuICBjb25zdHJ1Y3RvcihtaW4/OiBQcml6bUNhcm91c2VsWWVhck1vbnRoVmFsdWUsIG1heD86IFByaXptQ2Fyb3VzZWxZZWFyTW9udGhWYWx1ZSkge1xuICAgIGlmIChtaW4pIHtcbiAgICAgIHRoaXMubWluID0gbWluO1xuICAgIH1cblxuICAgIGlmIChtYXgpIHtcbiAgICAgIHRoaXMubWluID0gbWluIGFzIGFueTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29udHJvbHNTdGF0ZSA9IHsgLi4ucHJpem1EZWZhdWx0Q2Fyb3VzZWxDb250cm9sc1N0YXRlIH07XG5cbiAgcHVibGljIHNldEN1cnJlbnRWYWx1ZShlbGVtZW50OiBQcml6bUNhcm91c2VsWWVhck1vbnRoVmFsdWUpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IGVsZW1lbnQ7XG4gICAgdGhpcy51cGRhdGVDb250cm9sc1N0YXRlKCk7XG4gIH1cblxuICBnZXQgY3VycmVudFZhbHVlTm90U2V0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRWYWx1ZSA9PT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIGxlZnQoKTogdm9pZCB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB7IC4uLnRoaXMuY3VycmVudFZhbHVlLCB5ZWFyOiB0aGlzLmN1cnJlbnRWYWx1ZS55ZWFyIC0gMSB9O1xuICAgIGlmIChbJ2d0JywgJ2VxJ10uaW5jbHVkZXModGhpcy5jb21wYXJlKG5ld1ZhbHVlLCB0aGlzLm1pbikpKSB7XG4gICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHsgLi4ubmV3VmFsdWUgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB7IC4uLnRoaXMubWluIH07XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVDb250cm9sc1N0YXRlKCk7XG4gIH1cblxuICBwdWJsaWMgc3RlcExlZnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY3VycmVudFZhbHVlLm1vbnRoID09PSAxKSB7XG4gICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHsgeWVhcjogdGhpcy5jdXJyZW50VmFsdWUueWVhciAtIDEsIG1vbnRoOiAxMiB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHsgLi4udGhpcy5jdXJyZW50VmFsdWUsIG1vbnRoOiB0aGlzLmN1cnJlbnRWYWx1ZS5tb250aCAtIDEgfTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUNvbnRyb2xzU3RhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGVwUmlnaHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY3VycmVudFZhbHVlLm1vbnRoID09PSAxMikge1xuICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB7IHllYXI6IHRoaXMuY3VycmVudFZhbHVlLnllYXIgKyAxLCBtb250aDogMSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHsgLi4udGhpcy5jdXJyZW50VmFsdWUsIG1vbnRoOiB0aGlzLmN1cnJlbnRWYWx1ZS5tb250aCArIDEgfTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUNvbnRyb2xzU3RhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyByaWdodCgpOiB2b2lkIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHsgLi4udGhpcy5jdXJyZW50VmFsdWUsIHllYXI6IHRoaXMuY3VycmVudFZhbHVlLnllYXIgKyAxIH07XG4gICAgaWYgKFsnbHQnLCAnZXEnXS5pbmNsdWRlcyh0aGlzLmNvbXBhcmUobmV3VmFsdWUsIHRoaXMubWF4KSkpIHtcbiAgICAgIHRoaXMuY3VycmVudFZhbHVlID0geyAuLi5uZXdWYWx1ZSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHsgLi4udGhpcy5tYXggfTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUNvbnRyb2xzU3RhdGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ29udHJvbHNTdGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jdXJyZW50VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jb250cm9sc1N0YXRlLmxlZnRDdHJsRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jb250cm9sc1N0YXRlLnN0ZXBsZWZ0Q3RybERpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY29udHJvbHNTdGF0ZS5zdGVwUmlnaHRDdHJsRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jb250cm9sc1N0YXRlLnJpZ2h0Q3RybERpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb21wYXJlKHRoaXMuY3VycmVudFZhbHVlLCB0aGlzLm1pbikgPT09ICdlcScpIHtcbiAgICAgIHRoaXMuY29udHJvbHNTdGF0ZS5sZWZ0Q3RybERpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY29udHJvbHNTdGF0ZS5zdGVwbGVmdEN0cmxEaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmNvbnRyb2xzU3RhdGUuc3RlcFJpZ2h0Q3RybERpc2FibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbnRyb2xzU3RhdGUucmlnaHRDdHJsRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb21wYXJlKHRoaXMuY3VycmVudFZhbHVlLCB0aGlzLm1heCkgPT09ICdlcScpIHtcbiAgICAgIHRoaXMuY29udHJvbHNTdGF0ZS5sZWZ0Q3RybERpc2FibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbnRyb2xzU3RhdGUuc3RlcGxlZnRDdHJsRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29udHJvbHNTdGF0ZS5zdGVwUmlnaHRDdHJsRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jb250cm9sc1N0YXRlLnJpZ2h0Q3RybERpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2xzU3RhdGUubGVmdEN0cmxEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuY29udHJvbHNTdGF0ZS5zdGVwbGVmdEN0cmxEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuY29udHJvbHNTdGF0ZS5zdGVwUmlnaHRDdHJsRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNvbnRyb2xzU3RhdGUucmlnaHRDdHJsRGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcGFyZShcbiAgICB2YWx1ZTE/OiBQcml6bUNhcm91c2VsWWVhck1vbnRoVmFsdWUsXG4gICAgdmFsdWUyPzogUHJpem1DYXJvdXNlbFllYXJNb250aFZhbHVlXG4gICk6ICdsdCcgfCAnZXEnIHwgJ2d0JyB7XG4gICAgY29uc3QgdjIgPSB2YWx1ZTIgYXMgYW55O1xuICAgIGNvbnN0IHYxID0gdmFsdWUxIGFzIGFueTtcbiAgICBpZiAoIXZhbHVlMSB8fCAhdmFsdWUxKSByZXR1cm4gJ2VxJztcbiAgICBpZiAodjEueWVhciA8IHYyLnllYXIpIHtcbiAgICAgIHJldHVybiAnbHQnO1xuICAgIH1cblxuICAgIGlmICh2MS55ZWFyID4gdjIueWVhcikge1xuICAgICAgcmV0dXJuICdndCc7XG4gICAgfVxuXG4gICAgaWYgKHYxLnllYXIgPT09IHYyLnllYXIpIHtcbiAgICAgIGlmICh2MS5tb250aCA8IHYyLm1vbnRoKSB7XG4gICAgICAgIHJldHVybiAnbHQnO1xuICAgICAgfVxuXG4gICAgICBpZiAodjEubW9udGggPiB2Mi5tb250aCkge1xuICAgICAgICByZXR1cm4gJ2d0JztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnZXEnO1xuICAgIH1cblxuICAgIHJldHVybiAnZXEnO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0Q2Fyb3VzZWxZZWFyTW9udGggZXh0ZW5kcyBQcml6bUNhcm91c2VsWWVhck1vbnRoIHt9XG4iXX0=