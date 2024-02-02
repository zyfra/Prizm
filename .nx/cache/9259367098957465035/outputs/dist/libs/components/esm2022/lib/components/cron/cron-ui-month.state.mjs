import { Injectable } from '@angular/core';
import { PrizmCronUiBaseType } from './model';
import { getCarousel } from './util';
import { PrizmCronUiBaseState } from './cron-ui-base.state';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PRIZM_CRON_UI_MONTH_CRON_KEYS } from './const';
import { PrizmCronService } from '../../services/cron';
import * as i0 from "@angular/core";
import * as i1 from "../../services/cron";
import * as i2 from "@prizm-ui/helpers";
export class PrizmCronUiMonthState extends PrizmCronUiBaseState {
    constructor(cron, destroy$) {
        super(cron.month$, PrizmCronUiBaseType.every, PrizmCronUiBaseType, {
            value: {
                start: '1',
                end: '2',
            },
            list: {
                start: getCarousel(12, 1),
                end: getCarousel(12, 1),
            },
        }, {
            value: [],
            list: Object.values(PRIZM_CRON_UI_MONTH_CRON_KEYS).map((value, idx) => ({
                key: PRIZM_CRON_UI_MONTH_CRON_KEYS[idx],
                value: idx.toString(),
            })),
        }, {
            list: {
                on: getCarousel(12, 1),
                after: getCarousel(12, 1),
            },
            value: {
                on: '2',
                after: '1',
            },
        });
        this.cron = cron;
        this.destroy$ = destroy$;
    }
    updateMainState(value) {
        this.cron.updateWith({
            month: value,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCronUiMonthState, deps: [{ token: i1.PrizmCronService }, { token: i2.PrizmDestroyService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCronUiMonthState }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCronUiMonthState, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.PrizmCronService }, { type: i2.PrizmDestroyService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi11aS1tb250aC5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvY3Jvbi9jcm9uLXVpLW1vbnRoLnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDckMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBR3ZELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxvQkFBb0I7SUFDN0QsWUFBNEIsSUFBc0IsRUFBa0IsUUFBNkI7UUFDL0YsS0FBSyxDQUNILElBQUksQ0FBQyxNQUFNLEVBQ1gsbUJBQW1CLENBQUMsS0FBSyxFQUN6QixtQkFBbUIsRUFDbkI7WUFDRSxLQUFLLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsR0FBRyxFQUFFLEdBQUc7YUFDVDtZQUNELElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3pCLEdBQUcsRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUN4QjtTQUNGLEVBQ0Q7WUFDRSxLQUFLLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLDZCQUE2QixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDdEUsR0FBRyxFQUFFLDZCQUE2QixDQUFDLEdBQUcsQ0FBQztnQkFDdkMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUU7YUFDdEIsQ0FBQyxDQUFDO1NBQ0osRUFDRDtZQUNFLElBQUksRUFBRTtnQkFDSixFQUFFLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3RCLEtBQUssRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUMxQjtZQUNELEtBQUssRUFBRTtnQkFDTCxFQUFFLEVBQUUsR0FBRztnQkFDUCxLQUFLLEVBQUUsR0FBRzthQUNYO1NBQ0YsQ0FDRixDQUFDO1FBaEN3QixTQUFJLEdBQUosSUFBSSxDQUFrQjtRQUFrQixhQUFRLEdBQVIsUUFBUSxDQUFxQjtJQWlDakcsQ0FBQztJQUVNLGVBQWUsQ0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ25CLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs4R0F4Q1UscUJBQXFCO2tIQUFyQixxQkFBcUI7OzJGQUFyQixxQkFBcUI7a0JBRGpDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bUNyb25VaUJhc2VUeXBlIH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBnZXRDYXJvdXNlbCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBQcml6bUNyb25VaUJhc2VTdGF0ZSB9IGZyb20gJy4vY3Jvbi11aS1iYXNlLnN0YXRlJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBQUklaTV9DUk9OX1VJX01PTlRIX0NST05fS0VZUyB9IGZyb20gJy4vY29uc3QnO1xuaW1wb3J0IHsgUHJpem1Dcm9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Nyb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJpem1Dcm9uVWlNb250aFN0YXRlIGV4dGVuZHMgUHJpem1Dcm9uVWlCYXNlU3RhdGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgY3JvbjogUHJpem1Dcm9uU2VydmljZSwgcHVibGljIHJlYWRvbmx5IGRlc3Ryb3kkOiBQcml6bURlc3Ryb3lTZXJ2aWNlKSB7XG4gICAgc3VwZXIoXG4gICAgICBjcm9uLm1vbnRoJCxcbiAgICAgIFByaXptQ3JvblVpQmFzZVR5cGUuZXZlcnksXG4gICAgICBQcml6bUNyb25VaUJhc2VUeXBlLFxuICAgICAge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIHN0YXJ0OiAnMScsXG4gICAgICAgICAgZW5kOiAnMicsXG4gICAgICAgIH0sXG4gICAgICAgIGxpc3Q6IHtcbiAgICAgICAgICBzdGFydDogZ2V0Q2Fyb3VzZWwoMTIsIDEpLFxuICAgICAgICAgIGVuZDogZ2V0Q2Fyb3VzZWwoMTIsIDEpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgICBsaXN0OiBPYmplY3QudmFsdWVzKFBSSVpNX0NST05fVUlfTU9OVEhfQ1JPTl9LRVlTKS5tYXAoKHZhbHVlLCBpZHgpID0+ICh7XG4gICAgICAgICAga2V5OiBQUklaTV9DUk9OX1VJX01PTlRIX0NST05fS0VZU1tpZHhdLFxuICAgICAgICAgIHZhbHVlOiBpZHgudG9TdHJpbmcoKSxcbiAgICAgICAgfSkpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGlzdDoge1xuICAgICAgICAgIG9uOiBnZXRDYXJvdXNlbCgxMiwgMSksXG4gICAgICAgICAgYWZ0ZXI6IGdldENhcm91c2VsKDEyLCAxKSxcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICBvbjogJzInLFxuICAgICAgICAgIGFmdGVyOiAnMScsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVNYWluU3RhdGUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY3Jvbi51cGRhdGVXaXRoKHtcbiAgICAgIG1vbnRoOiB2YWx1ZSxcbiAgICB9KTtcbiAgfVxufVxuIl19