import { Injectable } from '@angular/core';
import { PrizmCronUiBaseType } from './model';
import { getArrWithStringNumbers, getCarousel } from './util';
import { PrizmCronUiBaseState } from './cron-ui-base.state';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmCronService } from '../../services/cron';
import * as i0 from "@angular/core";
import * as i1 from "../../services/cron";
import * as i2 from "@prizm-ui/helpers";
export class PrizmCronUiHourState extends PrizmCronUiBaseState {
    constructor(cron, destroy$) {
        super(cron.hour$, PrizmCronUiBaseType.every, PrizmCronUiBaseType, {
            value: {
                start: '0',
                end: '1',
            },
            list: {
                start: getCarousel(24, 0),
                end: getCarousel(24, 0),
            },
        }, {
            value: ['0'],
            list: getArrWithStringNumbers(24, 0, false).map((i, idx) => ({
                key: i,
                value: i,
            })),
        }, {
            list: {
                on: getCarousel(24, 1),
                after: getCarousel(24, 0),
            },
            value: {
                on: '1',
                after: '0',
            },
        });
        this.cron = cron;
        this.destroy$ = destroy$;
    }
    updateMainState(value) {
        this.cron.updateWith({
            hour: value,
        });
    }
}
PrizmCronUiHourState.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCronUiHourState, deps: [{ token: i1.PrizmCronService }, { token: i2.PrizmDestroyService }], target: i0.ɵɵFactoryTarget.Injectable });
PrizmCronUiHourState.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCronUiHourState });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCronUiHourState, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.PrizmCronService }, { type: i2.PrizmDestroyService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi11aS1ob3VyLnN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9jcm9uL2Nyb24tdWktaG91ci5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUM5QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBR3ZELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxvQkFBb0I7SUFDNUQsWUFBNEIsSUFBc0IsRUFBa0IsUUFBNkI7UUFDL0YsS0FBSyxDQUNILElBQUksQ0FBQyxLQUFLLEVBQ1YsbUJBQW1CLENBQUMsS0FBSyxFQUN6QixtQkFBbUIsRUFDbkI7WUFDRSxLQUFLLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsR0FBRyxFQUFFLEdBQUc7YUFDVDtZQUNELElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3pCLEdBQUcsRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUN4QjtTQUNGLEVBQ0Q7WUFDRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDWixJQUFJLEVBQUUsdUJBQXVCLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUMzRCxHQUFHLEVBQUUsQ0FBQztnQkFDTixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUMsQ0FBQztTQUNKLEVBQ0Q7WUFDRSxJQUFJLEVBQUU7Z0JBQ0osRUFBRSxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUN0QixLQUFLLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDMUI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsRUFBRSxFQUFFLEdBQUc7Z0JBQ1AsS0FBSyxFQUFFLEdBQUc7YUFDWDtTQUNGLENBQ0YsQ0FBQztRQWhDd0IsU0FBSSxHQUFKLElBQUksQ0FBa0I7UUFBa0IsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7SUFpQ2pHLENBQUM7SUFFTSxlQUFlLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNuQixJQUFJLEVBQUUsS0FBSztTQUNaLENBQUMsQ0FBQztJQUNMLENBQUM7O2lIQXhDVSxvQkFBb0I7cUhBQXBCLG9CQUFvQjsyRkFBcEIsb0JBQW9CO2tCQURoQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1Dcm9uVWlCYXNlVHlwZSB9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgZ2V0QXJyV2l0aFN0cmluZ051bWJlcnMsIGdldENhcm91c2VsIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IFByaXptQ3JvblVpQmFzZVN0YXRlIH0gZnJvbSAnLi9jcm9uLXVpLWJhc2Uuc3RhdGUnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IFByaXptQ3JvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jcm9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByaXptQ3JvblVpSG91clN0YXRlIGV4dGVuZHMgUHJpem1Dcm9uVWlCYXNlU3RhdGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgY3JvbjogUHJpem1Dcm9uU2VydmljZSwgcHVibGljIHJlYWRvbmx5IGRlc3Ryb3kkOiBQcml6bURlc3Ryb3lTZXJ2aWNlKSB7XG4gICAgc3VwZXIoXG4gICAgICBjcm9uLmhvdXIkLFxuICAgICAgUHJpem1Dcm9uVWlCYXNlVHlwZS5ldmVyeSxcbiAgICAgIFByaXptQ3JvblVpQmFzZVR5cGUsXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgc3RhcnQ6ICcwJyxcbiAgICAgICAgICBlbmQ6ICcxJyxcbiAgICAgICAgfSxcbiAgICAgICAgbGlzdDoge1xuICAgICAgICAgIHN0YXJ0OiBnZXRDYXJvdXNlbCgyNCwgMCksXG4gICAgICAgICAgZW5kOiBnZXRDYXJvdXNlbCgyNCwgMCksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogWycwJ10sXG4gICAgICAgIGxpc3Q6IGdldEFycldpdGhTdHJpbmdOdW1iZXJzKDI0LCAwLCBmYWxzZSkubWFwKChpLCBpZHgpID0+ICh7XG4gICAgICAgICAga2V5OiBpLFxuICAgICAgICAgIHZhbHVlOiBpLFxuICAgICAgICB9KSksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaXN0OiB7XG4gICAgICAgICAgb246IGdldENhcm91c2VsKDI0LCAxKSxcbiAgICAgICAgICBhZnRlcjogZ2V0Q2Fyb3VzZWwoMjQsIDApLFxuICAgICAgICB9LFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIG9uOiAnMScsXG4gICAgICAgICAgYWZ0ZXI6ICcwJyxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZU1haW5TdGF0ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jcm9uLnVwZGF0ZVdpdGgoe1xuICAgICAgaG91cjogdmFsdWUsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==