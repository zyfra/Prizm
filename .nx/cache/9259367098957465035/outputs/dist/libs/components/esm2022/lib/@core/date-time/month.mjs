import { prizmInRange } from '../../util/math/in-range';
import { prizmNormalizeToIntNumber } from '../../util/math/normalize-to-int-number';
import { PRIZM_DAYS_IN_WEEK, PRIZM_MAX_MONTH, PRIZM_MIN_MONTH, PRIZM_MONTHS_IN_YEAR } from './date-time';
import { PrizmYear } from './year';
import { prizmAssert, prizmPadStart } from '@prizm-ui/core';
/**
 * Immutable object consisting of year and month
 */
export class PrizmMonth extends PrizmYear {
    /**
     * @param year
     * @param month (starting with 0)
     */
    constructor(year, month) {
        super(year);
        this.month = month;
        prizmAssert.assert(PrizmMonth.isValidMonth(year, month));
    }
    /**
     * Tests month and year for validity
     */
    static isValidMonth(year, month) {
        return PrizmYear.isValidYear(year) && PrizmMonth.isValidMonthPart(month);
    }
    /**
     * Returns number of days in a month
     */
    static getMonthDaysCount(month, isLeapYear) {
        prizmAssert.assert(PrizmMonth.isValidMonthPart(month));
        switch (month) {
            case 1 /* PrizmMonthNumber.February */:
                return isLeapYear ? 29 : 28;
            case 3 /* PrizmMonthNumber.April */:
            case 5 /* PrizmMonthNumber.June */:
            case 8 /* PrizmMonthNumber.September */:
            case 10 /* PrizmMonthNumber.November */:
                return 30;
            default:
                return 31;
        }
    }
    /**
     * Returns current month and year based on local time zone
     * @nosideeffects
     */
    static currentLocal() {
        const nativeDate = new Date();
        return new PrizmMonth(nativeDate.getFullYear(), nativeDate.getMonth());
    }
    /**
     * Returns current month and year based on UTC
     */
    static currentUtc() {
        const nativeDate = new Date();
        return new PrizmMonth(nativeDate.getUTCFullYear(), nativeDate.getUTCMonth());
    }
    static lengthBetween(from, to) {
        const absoluteFrom = from.month + from.year * 12;
        const absoluteTo = to.month + to.year * 12;
        return absoluteTo - absoluteFrom;
    }
    /**
     * Normalizes number by clamping it between min and max month
     */
    static normalizeMonthPart(month) {
        return prizmNormalizeToIntNumber(month, PRIZM_MIN_MONTH, PRIZM_MAX_MONTH);
    }
    /**
     * Tests month for validity
     */
    static isValidMonthPart(month) {
        return Number.isInteger(month) && prizmInRange(month, PRIZM_MIN_MONTH, PRIZM_MAX_MONTH + 1);
    }
    get formattedMonthPart() {
        return prizmPadStart(String(this.month + 1), 2, `0`);
    }
    /**
     * @deprecated
     * Formatter month and year
     */
    get formattedMonth() {
        return `${this.formattedMonthPart}.${this.formattedYear}`;
    }
    /**
     * @deprecated DONT USE IT (will be deleted soon)
     *
     * Calculates number of weeks in a month (counting non-full weeks)
     */
    get weeksRowsCount() {
        return Math.ceil((this.monthStartDaysOffset + this.daysCount) / PRIZM_DAYS_IN_WEEK);
    }
    /**
     * Returns days in a month
     */
    get daysCount() {
        return PrizmMonth.getMonthDaysCount(this.month, this.isLeapYear);
    }
    /**
     * @deprecated DONT USE IT (will be deleted soon)
     *
     * Computes day of week offset of the beginning of the month
     */
    get monthStartDaysOffset() {
        let result = this.yearStartDaysOffset;
        for (let currentMonth = 0; currentMonth <= this.month - 1; currentMonth++) {
            result += PrizmMonth.getMonthDaysCount(currentMonth, this.isLeapYear);
        }
        return result % PRIZM_DAYS_IN_WEEK;
    }
    /**
     * Passed month and year are after current
     */
    monthBefore(another) {
        return this.yearBefore(another) || (this.yearSame(another) && this.month < another.month);
    }
    /**
     * Passed month and year are after or the same as current
     */
    monthSameOrBefore(another) {
        return this.yearBefore(another) || (this.yearSame(another) && this.month <= another.month);
    }
    /**
     * Passed month and year are the same as current
     */
    monthSame(another) {
        return this.yearSame(another) && this.month === another.month;
    }
    /**
     * Passed month and year are either before or equal to current
     */
    monthSameOrAfter(another) {
        return this.yearAfter(another) || (this.yearSame(another) && this.month >= another.month);
    }
    /**
     * Passed month and year are before current
     */
    monthAfter(another) {
        return this.yearAfter(another) || (this.yearSame(another) && this.month > another.month);
    }
    // TODO: 2.0 Consider removing `backwards` option
    /**
     * Immutably alters current month and year by passed offset
     *
     * @param offset
     * @param backwards shift date backwards
     * @return new month and year object as a result of offsetting current
     */
    append({ year = 0, month = 0 }, backwards = false) {
        if (backwards) {
            year *= -1;
            month *= -1;
        }
        const totalMonths = (this.year + year) * PRIZM_MONTHS_IN_YEAR + this.month + month;
        return new PrizmMonth(Math.floor(totalMonths / PRIZM_MONTHS_IN_YEAR), totalMonths % PRIZM_MONTHS_IN_YEAR);
    }
    toString() {
        return this.formattedMonth;
    }
    valueOf() {
        return this.toLocalNativeDate().valueOf();
    }
    toJSON() {
        return `${super.toJSON()}-${this.formattedMonthPart}`;
    }
    /**
     * Returns native {@link Date} based on local time zone
     */
    toLocalNativeDate() {
        return new Date(this.year, this.month);
    }
    /**
     * Returns native {@link Date} based on UTC
     */
    toUtcNativeDate() {
        return new Date(Date.UTC(this.year, this.month));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9AY29yZS9kYXRlLXRpbWUvbW9udGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBR3BGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDbkMsT0FBTyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RDs7R0FFRztBQUNILE1BQU0sT0FBTyxVQUFXLFNBQVEsU0FBUztJQUN2Qzs7O09BR0c7SUFDSCxZQUFZLElBQVksRUFBVyxLQUFhO1FBQzlDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQURxQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBRTlDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQUMsWUFBWSxDQUFDLElBQVksRUFBRSxLQUFhO1FBQ3BELE9BQU8sU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVEOztPQUVHO0lBQ0ksTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWEsRUFBRSxVQUFtQjtRQUNoRSxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFD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QUFTLEdBQUcsS0FBSztRQUMvRSxJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNYLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNiO1FBRUQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLG9CQUFvQixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRW5GLE9BQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLENBQUMsRUFBRSxXQUFXLEdBQUcsb0JBQW9CLENBQUMsQ0FBQztJQUM1RyxDQUFDO0lBRWUsUUFBUTtRQUN0QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUVlLE9BQU87UUFDckIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRWUsTUFBTTtRQUNwQixPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3hELENBQUM7SUFFRDs7T0FFRztJQUNJLGlCQUFpQjtRQUN0QixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7T0FFRztJQUNJLGVBQWU7UUFDcEIsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpem1Nb250aExpa2UgfSBmcm9tICcuLi8uLi90eXBlcy9tb250aC1saWtlJztcbmltcG9ydCB7IHByaXptSW5SYW5nZSB9IGZyb20gJy4uLy4uL3V0aWwvbWF0aC9pbi1yYW5nZSc7XG5pbXBvcnQgeyBwcml6bU5vcm1hbGl6ZVRvSW50TnVtYmVyIH0gZnJvbSAnLi4vLi4vdXRpbC9tYXRoL25vcm1hbGl6ZS10by1pbnQtbnVtYmVyJztcbmltcG9ydCB7IFByaXptTW9udGhOdW1iZXIgfSBmcm9tICcuLi9lbnVtcy9tb250aC1udW1iZXInO1xuXG5pbXBvcnQgeyBQUklaTV9EQVlTX0lOX1dFRUssIFBSSVpNX01BWF9NT05USCwgUFJJWk1fTUlOX01PTlRILCBQUklaTV9NT05USFNfSU5fWUVBUiB9IGZyb20gJy4vZGF0ZS10aW1lJztcbmltcG9ydCB7IFByaXptWWVhciB9IGZyb20gJy4veWVhcic7XG5pbXBvcnQgeyBwcml6bUFzc2VydCwgcHJpem1QYWRTdGFydCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcblxuLyoqXG4gKiBJbW11dGFibGUgb2JqZWN0IGNvbnNpc3Rpbmcgb2YgeWVhciBhbmQgbW9udGhcbiAqL1xuZXhwb3J0IGNsYXNzIFByaXptTW9udGggZXh0ZW5kcyBQcml6bVllYXIgaW1wbGVtZW50cyBQcml6bU1vbnRoTGlrZSB7XG4gIC8qKlxuICAgKiBAcGFyYW0geWVhclxuICAgKiBAcGFyYW0gbW9udGggKHN0YXJ0aW5nIHdpdGggMClcbiAgICovXG4gIGNvbnN0cnVjdG9yKHllYXI6IG51bWJlciwgcmVhZG9ubHkgbW9udGg6IG51bWJlcikge1xuICAgIHN1cGVyKHllYXIpO1xuICAgIHByaXptQXNzZXJ0LmFzc2VydChQcml6bU1vbnRoLmlzVmFsaWRNb250aCh5ZWFyLCBtb250aCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlc3RzIG1vbnRoIGFuZCB5ZWFyIGZvciB2YWxpZGl0eVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpc1ZhbGlkTW9udGgoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIFByaXptWWVhci5pc1ZhbGlkWWVhcih5ZWFyKSAmJiBQcml6bU1vbnRoLmlzVmFsaWRNb250aFBhcnQobW9udGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgbnVtYmVyIG9mIGRheXMgaW4gYSBtb250aFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRNb250aERheXNDb3VudChtb250aDogbnVtYmVyLCBpc0xlYXBZZWFyOiBib29sZWFuKTogbnVtYmVyIHtcbiAgICBwcml6bUFzc2VydC5hc3NlcnQoUHJpem1Nb250aC5pc1ZhbGlkTW9udGhQYXJ0KG1vbnRoKSk7XG5cbiAgICBzd2l0Y2ggKG1vbnRoKSB7XG4gICAgICBjYXNlIFByaXptTW9udGhOdW1iZXIuRmVicnVhcnk6XG4gICAgICAgIHJldHVybiBpc0xlYXBZZWFyID8gMjkgOiAyODtcbiAgICAgIGNhc2UgUHJpem1Nb250aE51bWJlci5BcHJpbDpcbiAgICAgIGNhc2UgUHJpem1Nb250aE51bWJlci5KdW5lOlxuICAgICAgY2FzZSBQcml6bU1vbnRoTnVtYmVyLlNlcHRlbWJlcjpcbiAgICAgIGNhc2UgUHJpem1Nb250aE51bWJlci5Ob3ZlbWJlcjpcbiAgICAgICAgcmV0dXJuIDMwO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDMxO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGN1cnJlbnQgbW9udGggYW5kIHllYXIgYmFzZWQgb24gbG9jYWwgdGltZSB6b25lXG4gICAqIEBub3NpZGVlZmZlY3RzXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGN1cnJlbnRMb2NhbCgpOiBQcml6bU1vbnRoIHtcbiAgICBjb25zdCBuYXRpdmVEYXRlID0gbmV3IERhdGUoKTtcblxuICAgIHJldHVybiBuZXcgUHJpem1Nb250aChuYXRpdmVEYXRlLmdldEZ1bGxZZWFyKCksIG5hdGl2ZURhdGUuZ2V0TW9udGgoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBjdXJyZW50IG1vbnRoIGFuZCB5ZWFyIGJhc2VkIG9uIFVUQ1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjdXJyZW50VXRjKCk6IFByaXptTW9udGgge1xuICAgIGNvbnN0IG5hdGl2ZURhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgcmV0dXJuIG5ldyBQcml6bU1vbnRoKG5hdGl2ZURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgbmF0aXZlRGF0ZS5nZXRVVENNb250aCgpKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgbGVuZ3RoQmV0d2Vlbihmcm9tOiBQcml6bU1vbnRoLCB0bzogUHJpem1Nb250aCk6IG51bWJlciB7XG4gICAgY29uc3QgYWJzb2x1dGVGcm9tID0gZnJvbS5tb250aCArIGZyb20ueWVhciAqIDEyO1xuICAgIGNvbnN0IGFic29sdXRlVG8gPSB0by5tb250aCArIHRvLnllYXIgKiAxMjtcblxuICAgIHJldHVybiBhYnNvbHV0ZVRvIC0gYWJzb2x1dGVGcm9tO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZXMgbnVtYmVyIGJ5IGNsYW1waW5nIGl0IGJldHdlZW4gbWluIGFuZCBtYXggbW9udGhcbiAgICovXG4gIHByb3RlY3RlZCBzdGF0aWMgbm9ybWFsaXplTW9udGhQYXJ0KG1vbnRoOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBwcml6bU5vcm1hbGl6ZVRvSW50TnVtYmVyKG1vbnRoLCBQUklaTV9NSU5fTU9OVEgsIFBSSVpNX01BWF9NT05USCk7XG4gIH1cblxuICAvKipcbiAgICogVGVzdHMgbW9udGggZm9yIHZhbGlkaXR5XG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBpc1ZhbGlkTW9udGhQYXJ0KG1vbnRoOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcihtb250aCkgJiYgcHJpem1JblJhbmdlKG1vbnRoLCBQUklaTV9NSU5fTU9OVEgsIFBSSVpNX01BWF9NT05USCArIDEpO1xuICB9XG5cbiAgZ2V0IGZvcm1hdHRlZE1vbnRoUGFydCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBwcml6bVBhZFN0YXJ0KFN0cmluZyh0aGlzLm1vbnRoICsgMSksIDIsIGAwYCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICogRm9ybWF0dGVyIG1vbnRoIGFuZCB5ZWFyXG4gICAqL1xuICBnZXQgZm9ybWF0dGVkTW9udGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5mb3JtYXR0ZWRNb250aFBhcnR9LiR7dGhpcy5mb3JtYXR0ZWRZZWFyfWA7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgRE9OVCBVU0UgSVQgKHdpbGwgYmUgZGVsZXRlZCBzb29uKVxuICAgKlxuICAgKiBDYWxjdWxhdGVzIG51bWJlciBvZiB3ZWVrcyBpbiBhIG1vbnRoIChjb3VudGluZyBub24tZnVsbCB3ZWVrcylcbiAgICovXG4gIGdldCB3ZWVrc1Jvd3NDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmNlaWwoKHRoaXMubW9udGhTdGFydERheXNPZmZzZXQgKyB0aGlzLmRheXNDb3VudCkgLyBQUklaTV9EQVlTX0lOX1dFRUspO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZGF5cyBpbiBhIG1vbnRoXG4gICAqL1xuICBwdWJsaWMgZ2V0IGRheXNDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiBQcml6bU1vbnRoLmdldE1vbnRoRGF5c0NvdW50KHRoaXMubW9udGgsIHRoaXMuaXNMZWFwWWVhcik7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgRE9OVCBVU0UgSVQgKHdpbGwgYmUgZGVsZXRlZCBzb29uKVxuICAgKlxuICAgKiBDb21wdXRlcyBkYXkgb2Ygd2VlayBvZmZzZXQgb2YgdGhlIGJlZ2lubmluZyBvZiB0aGUgbW9udGhcbiAgICovXG4gIHB1YmxpYyBnZXQgbW9udGhTdGFydERheXNPZmZzZXQoKTogbnVtYmVyIHtcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy55ZWFyU3RhcnREYXlzT2Zmc2V0O1xuXG4gICAgZm9yIChsZXQgY3VycmVudE1vbnRoID0gMDsgY3VycmVudE1vbnRoIDw9IHRoaXMubW9udGggLSAxOyBjdXJyZW50TW9udGgrKykge1xuICAgICAgcmVzdWx0ICs9IFByaXptTW9udGguZ2V0TW9udGhEYXlzQ291bnQoY3VycmVudE1vbnRoLCB0aGlzLmlzTGVhcFllYXIpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQgJSBQUklaTV9EQVlTX0lOX1dFRUs7XG4gIH1cblxuICAvKipcbiAgICogUGFzc2VkIG1vbnRoIGFuZCB5ZWFyIGFyZSBhZnRlciBjdXJyZW50XG4gICAqL1xuICBwdWJsaWMgbW9udGhCZWZvcmUoYW5vdGhlcjogUHJpem1Nb250aCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnllYXJCZWZvcmUoYW5vdGhlcikgfHwgKHRoaXMueWVhclNhbWUoYW5vdGhlcikgJiYgdGhpcy5tb250aCA8IGFub3RoZXIubW9udGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhc3NlZCBtb250aCBhbmQgeWVhciBhcmUgYWZ0ZXIgb3IgdGhlIHNhbWUgYXMgY3VycmVudFxuICAgKi9cbiAgcHVibGljIG1vbnRoU2FtZU9yQmVmb3JlKGFub3RoZXI6IFByaXptTW9udGgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy55ZWFyQmVmb3JlKGFub3RoZXIpIHx8ICh0aGlzLnllYXJTYW1lKGFub3RoZXIpICYmIHRoaXMubW9udGggPD0gYW5vdGhlci5tb250aCk7XG4gIH1cblxuICAvKipcbiAgICogUGFzc2VkIG1vbnRoIGFuZCB5ZWFyIGFyZSB0aGUgc2FtZSBhcyBjdXJyZW50XG4gICAqL1xuICBwdWJsaWMgbW9udGhTYW1lKGFub3RoZXI6IFByaXptTW9udGgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy55ZWFyU2FtZShhbm90aGVyKSAmJiB0aGlzLm1vbnRoID09PSBhbm90aGVyLm1vbnRoO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhc3NlZCBtb250aCBhbmQgeWVhciBhcmUgZWl0aGVyIGJlZm9yZSBvciBlcXVhbCB0byBjdXJyZW50XG4gICAqL1xuICBwdWJsaWMgbW9udGhTYW1lT3JBZnRlcihhbm90aGVyOiBQcml6bU1vbnRoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMueWVhckFmdGVyKGFub3RoZXIpIHx8ICh0aGlzLnllYXJTYW1lKGFub3RoZXIpICYmIHRoaXMubW9udGggPj0gYW5vdGhlci5tb250aCk7XG4gIH1cblxuICAvKipcbiAgICogUGFzc2VkIG1vbnRoIGFuZCB5ZWFyIGFyZSBiZWZvcmUgY3VycmVudFxuICAgKi9cbiAgcHVibGljIG1vbnRoQWZ0ZXIoYW5vdGhlcjogUHJpem1Nb250aCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnllYXJBZnRlcihhbm90aGVyKSB8fCAodGhpcy55ZWFyU2FtZShhbm90aGVyKSAmJiB0aGlzLm1vbnRoID4gYW5vdGhlci5tb250aCk7XG4gIH1cblxuICAvLyBUT0RPOiAyLjAgQ29uc2lkZXIgcmVtb3ZpbmcgYGJhY2t3YXJkc2Agb3B0aW9uXG4gIC8qKlxuICAgKiBJbW11dGFibHkgYWx0ZXJzIGN1cnJlbnQgbW9udGggYW5kIHllYXIgYnkgcGFzc2VkIG9mZnNldFxuICAgKlxuICAgKiBAcGFyYW0gb2Zmc2V0XG4gICAqIEBwYXJhbSBiYWNrd2FyZHMgc2hpZnQgZGF0ZSBiYWNrd2FyZHNcbiAgICogQHJldHVybiBuZXcgbW9udGggYW5kIHllYXIgb2JqZWN0IGFzIGEgcmVzdWx0IG9mIG9mZnNldHRpbmcgY3VycmVudFxuICAgKi9cbiAgcHVibGljIG92ZXJyaWRlIGFwcGVuZCh7IHllYXIgPSAwLCBtb250aCA9IDAgfTogUHJpem1Nb250aExpa2UsIGJhY2t3YXJkcyA9IGZhbHNlKTogUHJpem1Nb250aCB7XG4gICAgaWYgKGJhY2t3YXJkcykge1xuICAgICAgeWVhciAqPSAtMTtcbiAgICAgIG1vbnRoICo9IC0xO1xuICAgIH1cblxuICAgIGNvbnN0IHRvdGFsTW9udGhzID0gKHRoaXMueWVhciArIHllYXIpICogUFJJWk1fTU9OVEhTX0lOX1lFQVIgKyB0aGlzLm1vbnRoICsgbW9udGg7XG5cbiAgICByZXR1cm4gbmV3IFByaXptTW9udGgoTWF0aC5mbG9vcih0b3RhbE1vbnRocyAvIFBSSVpNX01PTlRIU19JTl9ZRUFSKSwgdG90YWxNb250aHMgJSBQUklaTV9NT05USFNfSU5fWUVBUik7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXR0ZWRNb250aDtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSB2YWx1ZU9mKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudG9Mb2NhbE5hdGl2ZURhdGUoKS52YWx1ZU9mKCk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgdG9KU09OKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3N1cGVyLnRvSlNPTigpfS0ke3RoaXMuZm9ybWF0dGVkTW9udGhQYXJ0fWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBuYXRpdmUge0BsaW5rIERhdGV9IGJhc2VkIG9uIGxvY2FsIHRpbWUgem9uZVxuICAgKi9cbiAgcHVibGljIHRvTG9jYWxOYXRpdmVEYXRlKCk6IERhdGUge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLnllYXIsIHRoaXMubW9udGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgbmF0aXZlIHtAbGluayBEYXRlfSBiYXNlZCBvbiBVVENcbiAgICovXG4gIHB1YmxpYyB0b1V0Y05hdGl2ZURhdGUoKTogRGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKHRoaXMueWVhciwgdGhpcy5tb250aCkpO1xuICB9XG59XG4iXX0=