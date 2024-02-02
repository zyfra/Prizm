import { Injectable } from '@angular/core';
import { PrizmCronUiBaseType } from './model';
import { getCarousel } from './util';
import { PrizmCronUiBaseState } from './cron-ui-base.state';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmCronService } from '../../services/cron';
import { PrizmCarouselArrayContent } from '../input/carousel';
import * as i0 from "@angular/core";
import * as i1 from "../../services/cron";
import * as i2 from "@prizm-ui/helpers";
export class PrizmCronUiYearState extends PrizmCronUiBaseState {
    constructor(cron, destroy$) {
        super(cron.year$, PrizmCronUiBaseType.every, PrizmCronUiBaseType, {
            value: {
                start: new Date().getFullYear().toString(),
                end: new Date().getFullYear().toString(),
            },
            list: {
                start: new PrizmCarouselArrayContent(getYears()),
                end: new PrizmCarouselArrayContent(getYears()),
            },
        }, {
            value: [],
            list: getYears().map(value => ({
                key: value,
                value: value,
            })),
        }, {
            list: {
                on: getCarousel(83, 1),
                after: new PrizmCarouselArrayContent(getYears()),
            },
            value: {
                on: '1',
                after: new Date().getFullYear().toString(),
            },
        });
        this.cron = cron;
        this.destroy$ = destroy$;
        this.currentYear = new Date().getFullYear();
    }
    updateMainState(value) {
        this.cron.updateWith({
            year: value,
        });
    }
    getYears() {
        return Array.from({ length: 50 }).map((_, idx) => idx + this.currentYear + '');
    }
}
PrizmCronUiYearState.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCronUiYearState, deps: [{ token: i1.PrizmCronService }, { token: i2.PrizmDestroyService }], target: i0.ɵɵFactoryTarget.Injectable });
PrizmCronUiYearState.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCronUiYearState });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCronUiYearState, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.PrizmCronService }, { type: i2.PrizmDestroyService }]; } });
function getYears(length = 50, from = new Date().getFullYear()) {
    return Array.from({ length: 50 }).map((_, idx) => idx + from + '');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi11aS15ZWFyLnN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9jcm9uL2Nyb24tdWkteWVhci5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRzlELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxvQkFBb0I7SUFHNUQsWUFBNEIsSUFBc0IsRUFBa0IsUUFBNkI7UUFDL0YsS0FBSyxDQUNILElBQUksQ0FBQyxLQUFLLEVBQ1YsbUJBQW1CLENBQUMsS0FBSyxFQUN6QixtQkFBbUIsRUFDbkI7WUFDRSxLQUFLLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFO2dCQUMxQyxHQUFHLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUU7YUFDekM7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLElBQUkseUJBQXlCLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hELEdBQUcsRUFBRSxJQUFJLHlCQUF5QixDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQy9DO1NBQ0YsRUFDRDtZQUNFLEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzdCLEdBQUcsRUFBRSxLQUFLO2dCQUNWLEtBQUssRUFBRSxLQUFLO2FBQ2IsQ0FBQyxDQUFDO1NBQ0osRUFDRDtZQUNFLElBQUksRUFBRTtnQkFDSixFQUFFLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3RCLEtBQUssRUFBRSxJQUFJLHlCQUF5QixDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ2pEO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLEVBQUUsRUFBRSxHQUFHO2dCQUNQLEtBQUssRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRTthQUMzQztTQUNGLENBQ0YsQ0FBQztRQWhDd0IsU0FBSSxHQUFKLElBQUksQ0FBa0I7UUFBa0IsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7UUFGeEYsZ0JBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBbUNoRCxDQUFDO0lBRU0sZUFBZSxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbkIsSUFBSSxFQUFFLEtBQUs7U0FDWixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sUUFBUTtRQUNkLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7O2lIQTlDVSxvQkFBb0I7cUhBQXBCLG9CQUFvQjsyRkFBcEIsb0JBQW9CO2tCQURoQyxVQUFVOztBQWtEWCxTQUFTLFFBQVEsQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRTtJQUM1RCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ3JFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bUNyb25VaUJhc2VUeXBlIH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBnZXRDYXJvdXNlbCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBQcml6bUNyb25VaUJhc2VTdGF0ZSB9IGZyb20gJy4vY3Jvbi11aS1iYXNlLnN0YXRlJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBQcml6bUNyb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY3Jvbic7XG5pbXBvcnQgeyBQcml6bUNhcm91c2VsQXJyYXlDb250ZW50IH0gZnJvbSAnLi4vaW5wdXQvY2Fyb3VzZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJpem1Dcm9uVWlZZWFyU3RhdGUgZXh0ZW5kcyBQcml6bUNyb25VaUJhc2VTdGF0ZSB7XG4gIHJlYWRvbmx5IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBjcm9uOiBQcml6bUNyb25TZXJ2aWNlLCBwdWJsaWMgcmVhZG9ubHkgZGVzdHJveSQ6IFByaXptRGVzdHJveVNlcnZpY2UpIHtcbiAgICBzdXBlcihcbiAgICAgIGNyb24ueWVhciQsXG4gICAgICBQcml6bUNyb25VaUJhc2VUeXBlLmV2ZXJ5LFxuICAgICAgUHJpem1Dcm9uVWlCYXNlVHlwZSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICBzdGFydDogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCksXG4gICAgICAgICAgZW5kOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSxcbiAgICAgICAgfSxcbiAgICAgICAgbGlzdDoge1xuICAgICAgICAgIHN0YXJ0OiBuZXcgUHJpem1DYXJvdXNlbEFycmF5Q29udGVudChnZXRZZWFycygpKSxcbiAgICAgICAgICBlbmQ6IG5ldyBQcml6bUNhcm91c2VsQXJyYXlDb250ZW50KGdldFllYXJzKCkpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgICBsaXN0OiBnZXRZZWFycygpLm1hcCh2YWx1ZSA9PiAoe1xuICAgICAgICAgIGtleTogdmFsdWUsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICB9KSksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaXN0OiB7XG4gICAgICAgICAgb246IGdldENhcm91c2VsKDgzLCAxKSxcbiAgICAgICAgICBhZnRlcjogbmV3IFByaXptQ2Fyb3VzZWxBcnJheUNvbnRlbnQoZ2V0WWVhcnMoKSksXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgb246ICcxJyxcbiAgICAgICAgICBhZnRlcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCksXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVNYWluU3RhdGUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY3Jvbi51cGRhdGVXaXRoKHtcbiAgICAgIHllYXI6IHZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRZZWFycygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IDUwIH0pLm1hcCgoXywgaWR4KSA9PiBpZHggKyB0aGlzLmN1cnJlbnRZZWFyICsgJycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFllYXJzKGxlbmd0aCA9IDUwLCBmcm9tID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpKTogc3RyaW5nW10ge1xuICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogNTAgfSkubWFwKChfLCBpZHgpID0+IGlkeCArIGZyb20gKyAnJyk7XG59XG4iXX0=