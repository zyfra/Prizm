import { PRIZM_RANGE_SEPARATOR_CHAR } from './date-time';
import { prizmAssert } from '@prizm-ui/core';
/**
 * An immutable range of two {@link PrizmMonth} objects
 */
export class PrizmMonthRange {
    constructor(from, to) {
        this.from = from;
        this.to = to;
        if (from && to)
            prizmAssert.assert(from.monthSameOrBefore(to));
    }
    static sort(month1, month2) {
        return month1.monthSameOrBefore(month2)
            ? new PrizmMonthRange(month1, month2)
            : new PrizmMonthRange(month2, month1);
    }
    get isSingleMonth() {
        return this.from.monthSame(this.to);
    }
    /**
     * @deprecated
     */
    get formattedMonthRange() {
        return `${this.from.formattedMonth}${PRIZM_RANGE_SEPARATOR_CHAR}${this.to.formattedMonth}`;
    }
    isMonthInRange(month) {
        return month.monthSameOrAfter(this.from) && month.monthSameOrBefore(this.to);
    }
    isYearInRange(month) {
        return month.yearSameOrAfter(this.from) && month.yearSameOrBefore(this.to);
    }
    monthSame(another) {
        return this.from.monthSame(another.from) && this.to.monthSame(another.to);
    }
    toString() {
        return `${this.from}${PRIZM_RANGE_SEPARATOR_CHAR}${this.to}`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtcmFuZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9AY29yZS9kYXRlLXRpbWUvbW9udGgtcmFuZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3Qzs7R0FFRztBQUNILE1BQU0sT0FBTyxlQUFlO0lBQzFCLFlBQXFCLElBQWdCLEVBQVcsRUFBYztRQUF6QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVcsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUM1RCxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRU0sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFrQixFQUFFLE1BQWtCO1FBQ3ZELE9BQU8sTUFBTSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQztZQUNyQyxDQUFDLENBQUMsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztZQUNyQyxDQUFDLENBQUMsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLDBCQUEwQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDN0YsQ0FBQztJQUVNLGNBQWMsQ0FBQyxLQUFpQjtRQUNyQyxPQUFPLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRU0sYUFBYSxDQUFDLEtBQWdCO1FBQ25DLE9BQU8sS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRU0sU0FBUyxDQUFDLE9BQXdCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRU0sUUFBUTtRQUNiLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLDBCQUEwQixHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQUklaTV9SQU5HRV9TRVBBUkFUT1JfQ0hBUiB9IGZyb20gJy4vZGF0ZS10aW1lJztcbmltcG9ydCB7IFByaXptTW9udGggfSBmcm9tICcuL21vbnRoJztcbmltcG9ydCB7IFByaXptWWVhciB9IGZyb20gJy4veWVhcic7XG5pbXBvcnQgeyBwcml6bUFzc2VydCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcblxuLyoqXG4gKiBBbiBpbW11dGFibGUgcmFuZ2Ugb2YgdHdvIHtAbGluayBQcml6bU1vbnRofSBvYmplY3RzXG4gKi9cbmV4cG9ydCBjbGFzcyBQcml6bU1vbnRoUmFuZ2Uge1xuICBjb25zdHJ1Y3RvcihyZWFkb25seSBmcm9tOiBQcml6bU1vbnRoLCByZWFkb25seSB0bzogUHJpem1Nb250aCkge1xuICAgIGlmIChmcm9tICYmIHRvKSBwcml6bUFzc2VydC5hc3NlcnQoZnJvbS5tb250aFNhbWVPckJlZm9yZSh0bykpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBzb3J0KG1vbnRoMTogUHJpem1Nb250aCwgbW9udGgyOiBQcml6bU1vbnRoKTogUHJpem1Nb250aFJhbmdlIHtcbiAgICByZXR1cm4gbW9udGgxLm1vbnRoU2FtZU9yQmVmb3JlKG1vbnRoMilcbiAgICAgID8gbmV3IFByaXptTW9udGhSYW5nZShtb250aDEsIG1vbnRoMilcbiAgICAgIDogbmV3IFByaXptTW9udGhSYW5nZShtb250aDIsIG1vbnRoMSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzU2luZ2xlTW9udGgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZnJvbS5tb250aFNhbWUodGhpcy50byk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIHB1YmxpYyBnZXQgZm9ybWF0dGVkTW9udGhSYW5nZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLmZyb20uZm9ybWF0dGVkTW9udGh9JHtQUklaTV9SQU5HRV9TRVBBUkFUT1JfQ0hBUn0ke3RoaXMudG8uZm9ybWF0dGVkTW9udGh9YDtcbiAgfVxuXG4gIHB1YmxpYyBpc01vbnRoSW5SYW5nZShtb250aDogUHJpem1Nb250aCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBtb250aC5tb250aFNhbWVPckFmdGVyKHRoaXMuZnJvbSkgJiYgbW9udGgubW9udGhTYW1lT3JCZWZvcmUodGhpcy50byk7XG4gIH1cblxuICBwdWJsaWMgaXNZZWFySW5SYW5nZShtb250aDogUHJpem1ZZWFyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG1vbnRoLnllYXJTYW1lT3JBZnRlcih0aGlzLmZyb20pICYmIG1vbnRoLnllYXJTYW1lT3JCZWZvcmUodGhpcy50byk7XG4gIH1cblxuICBwdWJsaWMgbW9udGhTYW1lKGFub3RoZXI6IFByaXptTW9udGhSYW5nZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZyb20ubW9udGhTYW1lKGFub3RoZXIuZnJvbSkgJiYgdGhpcy50by5tb250aFNhbWUoYW5vdGhlci50byk7XG4gIH1cblxuICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5mcm9tfSR7UFJJWk1fUkFOR0VfU0VQQVJBVE9SX0NIQVJ9JHt0aGlzLnRvfWA7XG4gIH1cbn1cbiJdfQ==