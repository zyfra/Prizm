import { InjectionToken } from '@angular/core';
import { PrizmToastPosition } from './types';
import { ToastComponent } from './toast/toast.component';
/** Default values for the toast options. */
export const PRIZM_TOAST_DEFAULT_OPTIONS = {
    position: PrizmToastPosition.TOP_RIGHT,
    timer: 5000,
    title: '',
    appearance: 'info',
    isPlatform: false,
    data: {},
    /* You can use also different components for each appearance*/
    templateSuccess: ToastComponent,
    templateDanger: ToastComponent,
    templateWarning: ToastComponent,
    templateInfo: ToastComponent,
};
export const PRIZM_TOAST_OPTIONS = new InjectionToken('Default parameters for toast component', {
    factory: () => PRIZM_TOAST_DEFAULT_OPTIONS,
});
export const prizmToastOptionsProvider = (options) => ({
    provide: PRIZM_TOAST_OPTIONS,
    useValue: { ...PRIZM_TOAST_DEFAULT_OPTIONS, ...options },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Qtb3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvdG9hc3QvdG9hc3Qtb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQTJDLGtCQUFrQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQWV6RCw0Q0FBNEM7QUFDNUMsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQTZCO0lBQ25FLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxTQUFTO0lBQ3RDLEtBQUssRUFBRSxJQUFJO0lBQ1gsS0FBSyxFQUFFLEVBQUU7SUFDVCxVQUFVLEVBQUUsTUFBTTtJQUNsQixVQUFVLEVBQUUsS0FBSztJQUNqQixJQUFJLEVBQUUsRUFBRTtJQUNSLDhEQUE4RDtJQUM5RCxlQUFlLEVBQUUsY0FBYztJQUMvQixjQUFjLEVBQUUsY0FBYztJQUM5QixlQUFlLEVBQUUsY0FBYztJQUMvQixZQUFZLEVBQUUsY0FBYztDQUM3QixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxjQUFjLENBQ25ELHdDQUF3QyxFQUN4QztJQUNFLE9BQU8sRUFBRSxHQUF1QyxFQUFFLENBQUMsMkJBQTJCO0NBQy9FLENBQ0YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUFrRSxDQUN0RyxPQUEwQyxFQUMxQyxFQUFFLENBQUMsQ0FBQztJQUNKLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUIsUUFBUSxFQUFFLEVBQUUsR0FBRywyQkFBMkIsRUFBRSxHQUFHLE9BQU8sRUFBRTtDQUN6RCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgVHlwZSwgVmFsdWVQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1Ub2FzdEFwcGVhcmFuY2UsIFByaXptVG9hc3RPcHRpb25zLCBQcml6bVRvYXN0UG9zaXRpb24gfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi90b2FzdC90b2FzdC5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByaXptVG9hc3REZWZhdWx0T3B0aW9ucyB7XG4gIHJlYWRvbmx5IHBvc2l0aW9uOiBQcml6bVRvYXN0UG9zaXRpb247XG4gIHJlYWRvbmx5IHRpbWVyOiBudW1iZXI7XG4gIHJlYWRvbmx5IGRhdGE6IFByaXptVG9hc3RPcHRpb25zWydkYXRhJ107XG4gIHJlYWRvbmx5IHRpdGxlOiBQcml6bVRvYXN0T3B0aW9uc1sndGl0bGUnXTtcbiAgcmVhZG9ubHkgYXBwZWFyYW5jZTogUHJpem1Ub2FzdEFwcGVhcmFuY2U7XG4gIHJlYWRvbmx5IHRlbXBsYXRlU3VjY2VzczogVHlwZTx1bmtub3duPjtcbiAgcmVhZG9ubHkgdGVtcGxhdGVEYW5nZXI6IFR5cGU8dW5rbm93bj47XG4gIHJlYWRvbmx5IHRlbXBsYXRlV2FybmluZzogVHlwZTx1bmtub3duPjtcbiAgcmVhZG9ubHkgdGVtcGxhdGVJbmZvOiBUeXBlPHVua25vd24+O1xuICByZWFkb25seSBpc1BsYXRmb3JtOiBib29sZWFuO1xufVxuXG4vKiogRGVmYXVsdCB2YWx1ZXMgZm9yIHRoZSB0b2FzdCBvcHRpb25zLiAqL1xuZXhwb3J0IGNvbnN0IFBSSVpNX1RPQVNUX0RFRkFVTFRfT1BUSU9OUzogUHJpem1Ub2FzdERlZmF1bHRPcHRpb25zID0ge1xuICBwb3NpdGlvbjogUHJpem1Ub2FzdFBvc2l0aW9uLlRPUF9SSUdIVCxcbiAgdGltZXI6IDUwMDAsXG4gIHRpdGxlOiAnJyxcbiAgYXBwZWFyYW5jZTogJ2luZm8nLFxuICBpc1BsYXRmb3JtOiBmYWxzZSxcbiAgZGF0YToge30sXG4gIC8qIFlvdSBjYW4gdXNlIGFsc28gZGlmZmVyZW50IGNvbXBvbmVudHMgZm9yIGVhY2ggYXBwZWFyYW5jZSovXG4gIHRlbXBsYXRlU3VjY2VzczogVG9hc3RDb21wb25lbnQsXG4gIHRlbXBsYXRlRGFuZ2VyOiBUb2FzdENvbXBvbmVudCxcbiAgdGVtcGxhdGVXYXJuaW5nOiBUb2FzdENvbXBvbmVudCxcbiAgdGVtcGxhdGVJbmZvOiBUb2FzdENvbXBvbmVudCxcbn07XG5cbmV4cG9ydCBjb25zdCBQUklaTV9UT0FTVF9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuPFByaXptVG9hc3REZWZhdWx0T3B0aW9ucz4oXG4gICdEZWZhdWx0IHBhcmFtZXRlcnMgZm9yIHRvYXN0IGNvbXBvbmVudCcsXG4gIHtcbiAgICBmYWN0b3J5OiAoKTogdHlwZW9mIFBSSVpNX1RPQVNUX0RFRkFVTFRfT1BUSU9OUyA9PiBQUklaTV9UT0FTVF9ERUZBVUxUX09QVElPTlMsXG4gIH1cbik7XG5cbmV4cG9ydCBjb25zdCBwcml6bVRvYXN0T3B0aW9uc1Byb3ZpZGVyOiAob3B0aW9uczogUGFydGlhbDxQcml6bVRvYXN0RGVmYXVsdE9wdGlvbnM+KSA9PiBWYWx1ZVByb3ZpZGVyID0gKFxuICBvcHRpb25zOiBQYXJ0aWFsPFByaXptVG9hc3REZWZhdWx0T3B0aW9ucz5cbikgPT4gKHtcbiAgcHJvdmlkZTogUFJJWk1fVE9BU1RfT1BUSU9OUyxcbiAgdXNlVmFsdWU6IHsgLi4uUFJJWk1fVE9BU1RfREVGQVVMVF9PUFRJT05TLCAuLi5vcHRpb25zIH0sXG59KTtcbiJdfQ==