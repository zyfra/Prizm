import { Inject, Pipe } from '@angular/core';
import { PRIZM_DAYS_IN_WEEK } from '../../@core/date-time/date-time';
import { PRIZM_FIRST_DAY_OF_WEEK } from '../../tokens/first-day-of-week';
import { getDayFromMonthRowCol } from './utils';
import * as i0 from "@angular/core";
const CALENDAR_ROWS_COUNT = 6;
export class PrizmCalendarSheetPipe {
    constructor(firstDayOfWeek) {
        this.firstDayOfWeek = firstDayOfWeek;
        this.currentMonth = null;
        this.currentSheet = [];
    }
    transform(month, showAdjacentDays = false) {
        if (this.currentMonth?.monthSame(month)) {
            return this.currentSheet;
        }
        const sheet = [];
        for (let rowIndex = 0; rowIndex < CALENDAR_ROWS_COUNT; rowIndex++) {
            const row = [];
            for (let colIndex = 0; colIndex < PRIZM_DAYS_IN_WEEK; colIndex++) {
                const day = getDayFromMonthRowCol({
                    month,
                    rowIndex,
                    colIndex,
                    firstDayOfWeek: this.firstDayOfWeek,
                });
                const isPrevMonthDay = (day, relativeToMonth = month) => day.year < relativeToMonth.year || day.month < relativeToMonth.month;
                const isNextMonthDay = (day, relativeToMonth = month) => day.year > relativeToMonth.year || day.month > relativeToMonth.month;
                if (isPrevMonthDay(day) && !showAdjacentDays) {
                    continue;
                }
                if (isNextMonthDay(day) && !showAdjacentDays) {
                    break;
                }
                row.push(day);
            }
            sheet.push(row);
        }
        this.currentSheet = sheet.filter(row => row.length);
        this.currentMonth = month;
        return this.currentSheet;
    }
}
PrizmCalendarSheetPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCalendarSheetPipe, deps: [{ token: PRIZM_FIRST_DAY_OF_WEEK }], target: i0.ɵɵFactoryTarget.Pipe });
PrizmCalendarSheetPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmCalendarSheetPipe, name: "prizmCalendarSheet" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCalendarSheetPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: `prizmCalendarSheet`,
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_FIRST_DAY_OF_WEEK]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItc2hlZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL3BpcGVzL2NhbGVuZGFyLXNoZWV0L2NhbGVuZGFyLXNoZWV0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSXJFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFFaEQsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFLOUIsTUFBTSxPQUFPLHNCQUFzQjtJQUlqQyxZQUVtQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFMekMsaUJBQVksR0FBc0IsSUFBSSxDQUFDO1FBQ3ZDLGlCQUFZLEdBQXVDLEVBQUUsQ0FBQztJQUszRCxDQUFDO0lBRUcsU0FBUyxDQUFDLEtBQWlCLEVBQUUsZ0JBQWdCLEdBQUcsS0FBSztRQUMxRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMxQjtRQUVELE1BQU0sS0FBSyxHQUErQixFQUFFLENBQUM7UUFFN0MsS0FBSyxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUUsUUFBUSxHQUFHLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxFQUFFO1lBQ2pFLE1BQU0sR0FBRyxHQUFlLEVBQUUsQ0FBQztZQUUzQixLQUFLLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLEVBQUU7Z0JBQ2hFLE1BQU0sR0FBRyxHQUFHLHFCQUFxQixDQUFDO29CQUNoQyxLQUFLO29CQUNMLFFBQVE7b0JBQ1IsUUFBUTtvQkFDUixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7aUJBQ3BDLENBQUMsQ0FBQztnQkFFSCxNQUFNLGNBQWMsR0FBRyxDQUFDLEdBQWEsRUFBRSxlQUFlLEdBQUcsS0FBSyxFQUFXLEVBQUUsQ0FDekUsR0FBRyxDQUFDLElBQUksR0FBRyxlQUFlLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQztnQkFFdkUsTUFBTSxjQUFjLEdBQUcsQ0FBQyxHQUFhLEVBQUUsZUFBZSxHQUFHLEtBQUssRUFBVyxFQUFFLENBQ3pFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUM7Z0JBRXZFLElBQUksY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQzVDLFNBQVM7aUJBQ1Y7Z0JBRUQsSUFBSSxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDNUMsTUFBTTtpQkFDUDtnQkFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2Y7WUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBRTFCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzttSEFuRFUsc0JBQXNCLGtCQUt2Qix1QkFBdUI7aUhBTHRCLHNCQUFzQjsyRkFBdEIsc0JBQXNCO2tCQUhsQyxJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxvQkFBb0I7aUJBQzNCOzswQkFNSSxNQUFNOzJCQUFDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUFJJWk1fREFZU19JTl9XRUVLIH0gZnJvbSAnLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RhdGUtdGltZSc7XG5pbXBvcnQgeyBQcml6bURheSB9IGZyb20gJy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9kYXknO1xuaW1wb3J0IHsgUHJpem1Nb250aCB9IGZyb20gJy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9tb250aCc7XG5pbXBvcnQgeyBQcml6bURheU9mV2VlayB9IGZyb20gJy4uLy4uL0Bjb3JlL2VudW1zL2RheS1vZi13ZWVrJztcbmltcG9ydCB7IFBSSVpNX0ZJUlNUX0RBWV9PRl9XRUVLIH0gZnJvbSAnLi4vLi4vdG9rZW5zL2ZpcnN0LWRheS1vZi13ZWVrJztcblxuaW1wb3J0IHsgZ2V0RGF5RnJvbU1vbnRoUm93Q29sIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IENBTEVOREFSX1JPV1NfQ09VTlQgPSA2O1xuXG5AUGlwZSh7XG4gIG5hbWU6IGBwcml6bUNhbGVuZGFyU2hlZXRgLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUNhbGVuZGFyU2hlZXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHByaXZhdGUgY3VycmVudE1vbnRoOiBQcml6bU1vbnRoIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgY3VycmVudFNoZWV0OiBSZWFkb25seUFycmF5PHJlYWRvbmx5IFByaXptRGF5W10+ID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQUklaTV9GSVJTVF9EQVlfT0ZfV0VFSylcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZpcnN0RGF5T2ZXZWVrOiBQcml6bURheU9mV2Vla1xuICApIHt9XG5cbiAgcHVibGljIHRyYW5zZm9ybShtb250aDogUHJpem1Nb250aCwgc2hvd0FkamFjZW50RGF5cyA9IGZhbHNlKTogUmVhZG9ubHlBcnJheTxyZWFkb25seSBQcml6bURheVtdPiB7XG4gICAgaWYgKHRoaXMuY3VycmVudE1vbnRoPy5tb250aFNhbWUobW9udGgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50U2hlZXQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hlZXQ6IEFycmF5PHJlYWRvbmx5IFByaXptRGF5W10+ID0gW107XG5cbiAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgQ0FMRU5EQVJfUk9XU19DT1VOVDsgcm93SW5kZXgrKykge1xuICAgICAgY29uc3Qgcm93OiBQcml6bURheVtdID0gW107XG5cbiAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBQUklaTV9EQVlTX0lOX1dFRUs7IGNvbEluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZGF5ID0gZ2V0RGF5RnJvbU1vbnRoUm93Q29sKHtcbiAgICAgICAgICBtb250aCxcbiAgICAgICAgICByb3dJbmRleCxcbiAgICAgICAgICBjb2xJbmRleCxcbiAgICAgICAgICBmaXJzdERheU9mV2VlazogdGhpcy5maXJzdERheU9mV2VlayxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaXNQcmV2TW9udGhEYXkgPSAoZGF5OiBQcml6bURheSwgcmVsYXRpdmVUb01vbnRoID0gbW9udGgpOiBib29sZWFuID0+XG4gICAgICAgICAgZGF5LnllYXIgPCByZWxhdGl2ZVRvTW9udGgueWVhciB8fCBkYXkubW9udGggPCByZWxhdGl2ZVRvTW9udGgubW9udGg7XG5cbiAgICAgICAgY29uc3QgaXNOZXh0TW9udGhEYXkgPSAoZGF5OiBQcml6bURheSwgcmVsYXRpdmVUb01vbnRoID0gbW9udGgpOiBib29sZWFuID0+XG4gICAgICAgICAgZGF5LnllYXIgPiByZWxhdGl2ZVRvTW9udGgueWVhciB8fCBkYXkubW9udGggPiByZWxhdGl2ZVRvTW9udGgubW9udGg7XG5cbiAgICAgICAgaWYgKGlzUHJldk1vbnRoRGF5KGRheSkgJiYgIXNob3dBZGphY2VudERheXMpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc05leHRNb250aERheShkYXkpICYmICFzaG93QWRqYWNlbnREYXlzKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByb3cucHVzaChkYXkpO1xuICAgICAgfVxuXG4gICAgICBzaGVldC5wdXNoKHJvdyk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50U2hlZXQgPSBzaGVldC5maWx0ZXIocm93ID0+IHJvdy5sZW5ndGgpO1xuICAgIHRoaXMuY3VycmVudE1vbnRoID0gbW9udGg7XG5cbiAgICByZXR1cm4gdGhpcy5jdXJyZW50U2hlZXQ7XG4gIH1cbn1cbiJdfQ==