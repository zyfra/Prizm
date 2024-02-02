import { Injectable } from '@angular/core';
import { PrizmCronUiBaseType } from './model';
import { PrizmCronUiBaseState } from './cron-ui-base.state';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmCronService } from '../../services/cron';
import * as i0 from "@angular/core";
import * as i1 from "../../services/cron";
import * as i2 from "@prizm-ui/helpers";
export class PrizmCronUiSecondState extends PrizmCronUiBaseState {
    constructor(cron, destroy$) {
        super(cron.second$, PrizmCronUiBaseType.every, PrizmCronUiBaseType);
        this.cron = cron;
        this.destroy$ = destroy$;
    }
    updateMainState(value) {
        this.cron.updateWith({
            second: value,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCronUiSecondState, deps: [{ token: i1.PrizmCronService }, { token: i2.PrizmDestroyService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCronUiSecondState }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCronUiSecondState, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.PrizmCronService }, { type: i2.PrizmDestroyService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi11aS1zZWNvbmQuc3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2Nyb24vY3Jvbi11aS1zZWNvbmQuc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDOUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFHdkQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLG9CQUFvQjtJQUM5RCxZQUE0QixJQUFzQixFQUFrQixRQUE2QjtRQUMvRixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUQxQyxTQUFJLEdBQUosSUFBSSxDQUFrQjtRQUFrQixhQUFRLEdBQVIsUUFBUSxDQUFxQjtJQUVqRyxDQUFDO0lBRU0sZUFBZSxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbkIsTUFBTSxFQUFFLEtBQUs7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDOzhHQVRVLHNCQUFzQjtrSEFBdEIsc0JBQXNCOzsyRkFBdEIsc0JBQXNCO2tCQURsQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1Dcm9uVWlCYXNlVHlwZSB9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgUHJpem1Dcm9uVWlCYXNlU3RhdGUgfSBmcm9tICcuL2Nyb24tdWktYmFzZS5zdGF0ZSc7XG5pbXBvcnQgeyBQcml6bURlc3Ryb3lTZXJ2aWNlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgUHJpem1Dcm9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Nyb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJpem1Dcm9uVWlTZWNvbmRTdGF0ZSBleHRlbmRzIFByaXptQ3JvblVpQmFzZVN0YXRlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGNyb246IFByaXptQ3JvblNlcnZpY2UsIHB1YmxpYyByZWFkb25seSBkZXN0cm95JDogUHJpem1EZXN0cm95U2VydmljZSkge1xuICAgIHN1cGVyKGNyb24uc2Vjb25kJCwgUHJpem1Dcm9uVWlCYXNlVHlwZS5ldmVyeSwgUHJpem1Dcm9uVWlCYXNlVHlwZSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlTWFpblN0YXRlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNyb24udXBkYXRlV2l0aCh7XG4gICAgICBzZWNvbmQ6IHZhbHVlLFxuICAgIH0pO1xuICB9XG59XG4iXX0=