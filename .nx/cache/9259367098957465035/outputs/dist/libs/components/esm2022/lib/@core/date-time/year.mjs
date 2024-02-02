import { prizmInRange } from '../../util/math/in-range';
import { prizmNormalizeToIntNumber } from '../../util/math/normalize-to-int-number';
import { PRIZM_DAYS_IN_LEAP_YEAR, PRIZM_DAYS_IN_NORMAL_YEAR, PRIZM_DAYS_IN_WEEK, PRIZM_MAX_YEAR, PRIZM_MIN_YEAR, } from './date-time';
import { prizmAssert, prizmPadStart } from '@prizm-ui/core';
/**
 * Immutable year object
 * @nosideeffects
 */
export class PrizmYear {
    constructor(year) {
        this.year = year;
        prizmAssert.assert(PrizmYear.isValidYear(year));
    }
    /**
     * Checks year for validity
     */
    static isValidYear(year) {
        return Number.isInteger(year) && prizmInRange(year, PRIZM_MIN_YEAR, PRIZM_MAX_YEAR + 1);
    }
    /**
     * Check if passed year is a leap year
     */
    static isLeapYear(year) {
        prizmAssert.assert(PrizmYear.isValidYear(year));
        return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    }
    /**
     * Returns amount of leap years from year 0 to the passed one
     */
    static getAbsoluteLeapYears(year) {
        prizmAssert.assert(PrizmYear.isValidYear(year));
        return Math.ceil(year / 400) + (Math.ceil(year / 4) - Math.ceil(year / 100));
    }
    /**
     * @deprecated DONT USE IT (will be deleted soon)
     *
     * Returns day of week offset of the beginning of the passed year
     *
     * @param year
     * @param absoluteLeapYears amount of leap years prior to the passed one
     * @return offset in days
     */
    static getYearStartDaysOffset(year, absoluteLeapYears) {
        prizmAssert.assert(PrizmYear.isValidYear(year));
        prizmAssert.assert(Number.isInteger(absoluteLeapYears));
        prizmAssert.assert(year >= absoluteLeapYears);
        prizmAssert.assert(absoluteLeapYears >= 0);
        return ((absoluteLeapYears * PRIZM_DAYS_IN_LEAP_YEAR +
            (year - absoluteLeapYears) * PRIZM_DAYS_IN_NORMAL_YEAR +
            5) %
            PRIZM_DAYS_IN_WEEK);
    }
    static lengthBetween(from, to) {
        return to.year - from.year;
    }
    /**
     * Normalizes year by clamping it between min and max years
     */
    static normalizeYearPart(year) {
        return prizmNormalizeToIntNumber(year, PRIZM_MIN_YEAR, PRIZM_MAX_YEAR);
    }
    get formattedYear() {
        return prizmPadStart(String(this.year), 4, `0`);
    }
    get isLeapYear() {
        return PrizmYear.isLeapYear(this.year);
    }
    /**
     * Returns amount of leap years from year 0 to current
     */
    get absoluteLeapYears() {
        return PrizmYear.getAbsoluteLeapYears(this.year);
    }
    /**
     * @deprecated DONT USE IT (will be deleted soon)
     *
     * Returns day of week offset of the beginning of the current year
     */
    get yearStartDaysOffset() {
        return PrizmYear.getYearStartDaysOffset(this.year, this.absoluteLeapYears);
    }
    /**
     * Passed year is after current
     */
    yearBefore({ year }) {
        return this.year < year;
    }
    /**
     * Passed year is the same or after current
     */
    yearSameOrBefore({ year }) {
        return this.year <= year;
    }
    /**
     * Passed year is the same as current
     */
    yearSame({ year }) {
        return this.year === year;
    }
    /**
     * Passed year is either the same of before the current
     */
    yearSameOrAfter({ year }) {
        return this.year >= year;
    }
    /**
     * Passed year is before current
     */
    yearAfter({ year }) {
        return this.year > year;
    }
    // TODO: 2.0 Consider removing `backwards` option
    /**
     * Immutably offsets year
     */
    append({ year = 0 }, backwards = false) {
        prizmAssert.assert(Number.isInteger(year));
        if (backwards) {
            year *= -1;
        }
        const resultYear = this.year + year;
        prizmAssert.assert(PrizmYear.isValidYear(resultYear));
        return new PrizmYear(resultYear);
    }
    toString() {
        return this.formattedYear;
    }
    valueOf() {
        return this.year;
    }
    /**
     * Returns the primitive value of the given Date object.
     * Depending on the argument, the method can return either a string or a number.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
     */
    [Symbol.toPrimitive](hint) {
        return Date.prototype[Symbol.toPrimitive].call(this, hint);
    }
    toJSON() {
        return this.formattedYear;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL0Bjb3JlL2RhdGUtdGltZS95ZWFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUVwRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLHlCQUF5QixFQUN6QixrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLGNBQWMsR0FDZixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVEOzs7R0FHRztBQUNILE1BQU0sT0FBTyxTQUFTO0lBQ3BCLFlBQXFCLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQy9CLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBWTtRQUNwQyxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFRDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBWTtRQUNuQyxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVoRCxPQUFPLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMs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QUFDO0lBQzFCLENBQUM7SUFFRCxpREFBaUQ7SUFDakQ7O09BRUc7SUFDSSxNQUFNLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFpQixFQUFFLFNBQVMsR0FBRyxLQUFLO1FBQzFELFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTNDLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ1o7UUFFRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVwQyxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUV0RCxPQUFPLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxRQUFRO1FBQ2IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFFTSxPQUFPO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBWTtRQUN0QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVNLE1BQU07UUFDWCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpem1ZZWFyTGlrZSB9IGZyb20gJy4uLy4uL3R5cGVzL3llYXItbGlrZSc7XG5pbXBvcnQgeyBwcml6bUluUmFuZ2UgfSBmcm9tICcuLi8uLi91dGlsL21hdGgvaW4tcmFuZ2UnO1xuaW1wb3J0IHsgcHJpem1Ob3JtYWxpemVUb0ludE51bWJlciB9IGZyb20gJy4uLy4uL3V0aWwvbWF0aC9ub3JtYWxpemUtdG8taW50LW51bWJlcic7XG5cbmltcG9ydCB7XG4gIFBSSVpNX0RBWVNfSU5fTEVBUF9ZRUFSLFxuICBQUklaTV9EQVlTX0lOX05PUk1BTF9ZRUFSLFxuICBQUklaTV9EQVlTX0lOX1dFRUssXG4gIFBSSVpNX01BWF9ZRUFSLFxuICBQUklaTV9NSU5fWUVBUixcbn0gZnJvbSAnLi9kYXRlLXRpbWUnO1xuaW1wb3J0IHsgcHJpem1Bc3NlcnQsIHByaXptUGFkU3RhcnQgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5cbi8qKlxuICogSW1tdXRhYmxlIHllYXIgb2JqZWN0XG4gKiBAbm9zaWRlZWZmZWN0c1xuICovXG5leHBvcnQgY2xhc3MgUHJpem1ZZWFyIGltcGxlbWVudHMgUHJpem1ZZWFyTGlrZSB7XG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHllYXI6IG51bWJlcikge1xuICAgIHByaXptQXNzZXJ0LmFzc2VydChQcml6bVllYXIuaXNWYWxpZFllYXIoeWVhcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB5ZWFyIGZvciB2YWxpZGl0eVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpc1ZhbGlkWWVhcih5ZWFyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih5ZWFyKSAmJiBwcml6bUluUmFuZ2UoeWVhciwgUFJJWk1fTUlOX1lFQVIsIFBSSVpNX01BWF9ZRUFSICsgMSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgcGFzc2VkIHllYXIgaXMgYSBsZWFwIHllYXJcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaXNMZWFwWWVhcih5ZWFyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBwcml6bUFzc2VydC5hc3NlcnQoUHJpem1ZZWFyLmlzVmFsaWRZZWFyKHllYXIpKTtcblxuICAgIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8ICh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFtb3VudCBvZiBsZWFwIHllYXJzIGZyb20geWVhciAwIHRvIHRoZSBwYXNzZWQgb25lXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldEFic29sdXRlTGVhcFllYXJzKHllYXI6IG51bWJlcik6IG51bWJlciB7XG4gICAgcHJpem1Bc3NlcnQuYXNzZXJ0KFByaXptWWVhci5pc1ZhbGlkWWVhcih5ZWFyKSk7XG5cbiAgICByZXR1cm4gTWF0aC5jZWlsKHllYXIgLyA0MDApICsgKE1hdGguY2VpbCh5ZWFyIC8gNCkgLSBNYXRoLmNlaWwoeWVhciAvIDEwMCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIERPTlQgVVNFIElUICh3aWxsIGJlIGRlbGV0ZWQgc29vbilcbiAgICpcbiAgICogUmV0dXJucyBkYXkgb2Ygd2VlayBvZmZzZXQgb2YgdGhlIGJlZ2lubmluZyBvZiB0aGUgcGFzc2VkIHllYXJcbiAgICpcbiAgICogQHBhcmFtIHllYXJcbiAgICogQHBhcmFtIGFic29sdXRlTGVhcFllYXJzIGFtb3VudCBvZiBsZWFwIHllYXJzIHByaW9yIHRvIHRoZSBwYXNzZWQgb25lXG4gICAqIEByZXR1cm4gb2Zmc2V0IGluIGRheXNcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0WWVhclN0YXJ0RGF5c09mZnNldCh5ZWFyOiBudW1iZXIsIGFic29sdXRlTGVhcFllYXJzOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHByaXptQXNzZXJ0LmFzc2VydChQcml6bVllYXIuaXNWYWxpZFllYXIoeWVhcikpO1xuICAgIHByaXptQXNzZXJ0LmFzc2VydChOdW1iZXIuaXNJbnRlZ2VyKGFic29sdXRlTGVhcFllYXJzKSk7XG4gICAgcHJpem1Bc3NlcnQuYXNzZXJ0KHllYXIgPj0gYWJzb2x1dGVMZWFwWWVhcnMpO1xuICAgIHByaXptQXNzZXJ0LmFzc2VydChhYnNvbHV0ZUxlYXBZZWFycyA+PSAwKTtcblxuICAgIHJldHVybiAoXG4gICAgICAoYWJzb2x1dGVMZWFwWWVhcnMgKiBQUklaTV9EQVlTX0lOX0xFQVBfWUVBUiArXG4gICAgICAgICh5ZWFyIC0gYWJzb2x1dGVMZWFwWWVhcnMpICogUFJJWk1fREFZU19JTl9OT1JNQUxfWUVBUiArXG4gICAgICAgIDUpICVcbiAgICAgIFBSSVpNX0RBWVNfSU5fV0VFS1xuICAgICk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGxlbmd0aEJldHdlZW4oZnJvbTogUHJpem1ZZWFyLCB0bzogUHJpem1ZZWFyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdG8ueWVhciAtIGZyb20ueWVhcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3JtYWxpemVzIHllYXIgYnkgY2xhbXBpbmcgaXQgYmV0d2VlbiBtaW4gYW5kIG1heCB5ZWFyc1xuICAgKi9cbiAgcHJvdGVjdGVkIHN0YXRpYyBub3JtYWxpemVZZWFyUGFydCh5ZWFyOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBwcml6bU5vcm1hbGl6ZVRvSW50TnVtYmVyKHllYXIsIFBSSVpNX01JTl9ZRUFSLCBQUklaTV9NQVhfWUVBUik7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZvcm1hdHRlZFllYXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcHJpem1QYWRTdGFydChTdHJpbmcodGhpcy55ZWFyKSwgNCwgYDBgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNMZWFwWWVhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gUHJpem1ZZWFyLmlzTGVhcFllYXIodGhpcy55ZWFyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFtb3VudCBvZiBsZWFwIHllYXJzIGZyb20geWVhciAwIHRvIGN1cnJlbnRcbiAgICovXG4gIHB1YmxpYyBnZXQgYWJzb2x1dGVMZWFwWWVhcnMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gUHJpem1ZZWFyLmdldEFic29sdXRlTGVhcFllYXJzKHRoaXMueWVhcik7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgRE9OVCBVU0UgSVQgKHdpbGwgYmUgZGVsZXRlZCBzb29uKVxuICAgKlxuICAgKiBSZXR1cm5zIGRheSBvZiB3ZWVrIG9mZnNldCBvZiB0aGUgYmVnaW5uaW5nIG9mIHRoZSBjdXJyZW50IHllYXJcbiAgICovXG4gIHB1YmxpYyBnZXQgeWVhclN0YXJ0RGF5c09mZnNldCgpOiBudW1iZXIge1xuICAgIHJldHVybiBQcml6bVllYXIuZ2V0WWVhclN0YXJ0RGF5c09mZnNldCh0aGlzLnllYXIsIHRoaXMuYWJzb2x1dGVMZWFwWWVhcnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhc3NlZCB5ZWFyIGlzIGFmdGVyIGN1cnJlbnRcbiAgICovXG4gIHB1YmxpYyB5ZWFyQmVmb3JlKHsgeWVhciB9OiBQcml6bVllYXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy55ZWFyIDwgeWVhcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXNzZWQgeWVhciBpcyB0aGUgc2FtZSBvciBhZnRlciBjdXJyZW50XG4gICAqL1xuICBwdWJsaWMgeWVhclNhbWVPckJlZm9yZSh7IHllYXIgfTogUHJpem1ZZWFyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMueWVhciA8PSB5ZWFyO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhc3NlZCB5ZWFyIGlzIHRoZSBzYW1lIGFzIGN1cnJlbnRcbiAgICovXG4gIHB1YmxpYyB5ZWFyU2FtZSh7IHllYXIgfTogUHJpem1ZZWFyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMueWVhciA9PT0geWVhcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXNzZWQgeWVhciBpcyBlaXRoZXIgdGhlIHNhbWUgb2YgYmVmb3JlIHRoZSBjdXJyZW50XG4gICAqL1xuICBwdWJsaWMgeWVhclNhbWVPckFmdGVyKHsgeWVhciB9OiBQcml6bVllYXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy55ZWFyID49IHllYXI7XG4gIH1cblxuICAvKipcbiAgICogUGFzc2VkIHllYXIgaXMgYmVmb3JlIGN1cnJlbnRcbiAgICovXG4gIHB1YmxpYyB5ZWFyQWZ0ZXIoeyB5ZWFyIH06IFByaXptWWVhcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnllYXIgPiB5ZWFyO1xuICB9XG5cbiAgLy8gVE9ETzogMi4wIENvbnNpZGVyIHJlbW92aW5nIGBiYWNrd2FyZHNgIG9wdGlvblxuICAvKipcbiAgICogSW1tdXRhYmx5IG9mZnNldHMgeWVhclxuICAgKi9cbiAgcHVibGljIGFwcGVuZCh7IHllYXIgPSAwIH06IFByaXptWWVhckxpa2UsIGJhY2t3YXJkcyA9IGZhbHNlKTogUHJpem1ZZWFyIHtcbiAgICBwcml6bUFzc2VydC5hc3NlcnQoTnVtYmVyLmlzSW50ZWdlcih5ZWFyKSk7XG5cbiAgICBpZiAoYmFja3dhcmRzKSB7XG4gICAgICB5ZWFyICo9IC0xO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdFllYXIgPSB0aGlzLnllYXIgKyB5ZWFyO1xuXG4gICAgcHJpem1Bc3NlcnQuYXNzZXJ0KFByaXptWWVhci5pc1ZhbGlkWWVhcihyZXN1bHRZZWFyKSk7XG5cbiAgICByZXR1cm4gbmV3IFByaXptWWVhcihyZXN1bHRZZWFyKTtcbiAgfVxuXG4gIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZvcm1hdHRlZFllYXI7XG4gIH1cblxuICBwdWJsaWMgdmFsdWVPZigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnllYXI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcHJpbWl0aXZlIHZhbHVlIG9mIHRoZSBnaXZlbiBEYXRlIG9iamVjdC5cbiAgICogRGVwZW5kaW5nIG9uIHRoZSBhcmd1bWVudCwgdGhlIG1ldGhvZCBjYW4gcmV0dXJuIGVpdGhlciBhIHN0cmluZyBvciBhIG51bWJlci5cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlL0BAdG9QcmltaXRpdmVcbiAgICovXG4gIHB1YmxpYyBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50OiBzdHJpbmcpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiBEYXRlLnByb3RvdHlwZVtTeW1ib2wudG9QcmltaXRpdmVdLmNhbGwodGhpcywgaGludCk7XG4gIH1cblxuICBwdWJsaWMgdG9KU09OKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0dGVkWWVhcjtcbiAgfVxufVxuIl19