import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken } from '@angular/core';
import { WINDOW } from '@ng-web-apis/common';
import { merge, of, timer } from 'rxjs';
import { distinctUntilChanged, filter, map, mapTo, repeatWhen, share, startWith, switchMap, take, takeUntil, withLatestFrom, } from 'rxjs/operators';
import { prizmTypedFromEvent } from '../observables/typed-from-event';
import { prizmGetActualTarget } from '../util/dom/get-actual-target';
import { prizmGetDocumentOrShadowRoot } from '../util/dom/prizm-get-document-or-shadow-root';
export const PRIZM_ACTIVE_ELEMENT = new InjectionToken(`Active element on the document for ActiveZone`, {
    factory: () => {
        const removedElement$ = inject(PRIZM_REMOVED_ELEMENT);
        const windowRef = inject(WINDOW);
        const documentRef = inject(DOCUMENT);
        const focusout$ = prizmTypedFromEvent(windowRef, `focusout`);
        const focusin$ = prizmTypedFromEvent(windowRef, `focusin`);
        const blur$ = prizmTypedFromEvent(windowRef, `blur`);
        const mousedown$ = prizmTypedFromEvent(windowRef, `mousedown`);
        const mouseup$ = prizmTypedFromEvent(windowRef, `mouseup`);
        return merge(focusout$.pipe(takeUntil(mousedown$), repeatWhen(() => mouseup$), withLatestFrom(removedElement$), filter(([event, removedElement]) => isValidFocusout(prizmGetActualTarget(event), removedElement)), map(([{ relatedTarget }]) => relatedTarget)), blur$.pipe(map(() => documentRef.activeElement), filter(element => !!element && element.matches(`iframe`))), focusin$.pipe(switchMap(event => {
            const target = prizmGetActualTarget(event);
            const root = prizmGetDocumentOrShadowRoot(target);
            return root === documentRef ? of(target) : shadowRootActiveElement(root).pipe(startWith(target));
        })), mousedown$.pipe(switchMap(event => !documentRef.activeElement || documentRef.activeElement === documentRef.body
            ? of(prizmGetActualTarget(event))
            : focusout$.pipe(take(1), mapTo(prizmGetActualTarget(event)), takeUntil(timer(0)))))).pipe(distinctUntilChanged(), share());
    },
});
// Checks if focusout event should be considered leaving active zone
function isValidFocusout(target, removedElement = null) {
    return (
    // Not due to switching tabs/going to DevTools
    prizmGetDocumentOrShadowRoot(target).activeElement !== target &&
        // Not due to button/input becoming disabled
        !target.disabled &&
        // Not due to element being removed from DOM
        (!removedElement || !removedElement.contains(target)));
}
function shadowRootActiveElement(root) {
    return merge(prizmTypedFromEvent(root, `focusin`).pipe(map(({ target }) => target)), prizmTypedFromEvent(root, `focusout`).pipe(filter(({ target, relatedTarget }) => !!relatedTarget && isValidFocusout(target)), map(({ relatedTarget }) => relatedTarget)));
}
function PRIZM_REMOVED_ELEMENT(PRIZM_REMOVED_ELEMENT) {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWVsZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi90b2tlbnMvYWN0aXZlLWVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsS0FBSyxFQUFjLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILEtBQUssRUFDTCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsSUFBSSxFQUNKLFNBQVMsRUFDVCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUU3RixNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLGNBQWMsQ0FDcEQsK0NBQStDLEVBQy9DO0lBQ0UsT0FBTyxFQUFFLEdBQW9CLEVBQUU7UUFDN0IsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDdEQsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxNQUFNLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQyxT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QUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQ3RFLG1CQUFtQixDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQ3hDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUNqRixHQUFHLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FDMUMsQ0FDRixDQUFDO0FBQ0osQ0FBQztBQUNELFNBQVMscUJBQXFCLENBQUMscUJBQTBCO0lBQ3ZELE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUMvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgaW5qZWN0LCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnQG5nLXdlYi1hcGlzL2NvbW1vbic7XG5pbXBvcnQgeyBtZXJnZSwgT2JzZXJ2YWJsZSwgb2YsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIG1hcFRvLFxuICByZXBlYXRXaGVuLFxuICBzaGFyZSxcbiAgc3RhcnRXaXRoLFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHRha2VVbnRpbCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHByaXptVHlwZWRGcm9tRXZlbnQgfSBmcm9tICcuLi9vYnNlcnZhYmxlcy90eXBlZC1mcm9tLWV2ZW50JztcbmltcG9ydCB7IHByaXptR2V0QWN0dWFsVGFyZ2V0IH0gZnJvbSAnLi4vdXRpbC9kb20vZ2V0LWFjdHVhbC10YXJnZXQnO1xuaW1wb3J0IHsgcHJpem1HZXREb2N1bWVudE9yU2hhZG93Um9vdCB9IGZyb20gJy4uL3V0aWwvZG9tL3ByaXptLWdldC1kb2N1bWVudC1vci1zaGFkb3ctcm9vdCc7XG5cbmV4cG9ydCBjb25zdCBQUklaTV9BQ1RJVkVfRUxFTUVOVCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxPYnNlcnZhYmxlPEV2ZW50VGFyZ2V0IHwgbnVsbD4+KFxuICBgQWN0aXZlIGVsZW1lbnQgb24gdGhlIGRvY3VtZW50IGZvciBBY3RpdmVab25lYCxcbiAge1xuICAgIGZhY3Rvcnk6ICgpOiBPYnNlcnZhYmxlPGFueT4gPT4ge1xuICAgICAgY29uc3QgcmVtb3ZlZEVsZW1lbnQkID0gaW5qZWN0KFBSSVpNX1JFTU9WRURfRUxFTUVOVCk7XG4gICAgICBjb25zdCB3aW5kb3dSZWYgPSBpbmplY3QoV0lORE9XKTtcbiAgICAgIGNvbnN0IGRvY3VtZW50UmVmID0gaW5qZWN0KERPQ1VNRU5UKTtcbiAgICAgIGNvbnN0IGZvY3Vzb3V0JCA9IHByaXptVHlwZWRGcm9tRXZlbnQod2luZG93UmVmLCBgZm9jdXNvdXRgKTtcbiAgICAgIGNvbnN0IGZvY3VzaW4kID0gcHJpem1UeXBlZEZyb21FdmVudCh3aW5kb3dSZWYsIGBmb2N1c2luYCk7XG4gICAgICBjb25zdCBibHVyJCA9IHByaXptVHlwZWRGcm9tRXZlbnQod2luZG93UmVmLCBgYmx1cmApO1xuICAgICAgY29uc3QgbW91c2Vkb3duJCA9IHByaXptVHlwZWRGcm9tRXZlbnQod2luZG93UmVmLCBgbW91c2Vkb3duYCk7XG4gICAgICBjb25zdCBtb3VzZXVwJCA9IHByaXptVHlwZWRGcm9tRXZlbnQod2luZG93UmVmLCBgbW91c2V1cGApO1xuXG4gICAgICByZXR1cm4gbWVyZ2UoXG4gICAgICAgIGZvY3Vzb3V0JC5waXBlKFxuICAgICAgICAgIHRha2VVbnRpbChtb3VzZWRvd24kKSxcbiAgICAgICAgICByZXBlYXRXaGVuKCgpID0+IG1vdXNldXAkKSxcbiAgICAgICAgICB3aXRoTGF0ZXN0RnJvbShyZW1vdmVkRWxlbWVudCQpLFxuICAgICAgICAgIGZpbHRlcigoW2V2ZW50LCByZW1vdmVkRWxlbWVudF0pID0+XG4gICAgICAgICAgICBpc1ZhbGlkRm9jdXNvdXQocHJpem1HZXRBY3R1YWxUYXJnZXQoZXZlbnQpLCByZW1vdmVkRWxlbWVudCBhcyBFbGVtZW50KVxuICAgICAgICAgICksXG4gICAgICAgICAgbWFwKChbeyByZWxhdGVkVGFyZ2V0IH1dKSA9PiByZWxhdGVkVGFyZ2V0KVxuICAgICAgICApLFxuICAgICAgICBibHVyJC5waXBlKFxuICAgICAgICAgIG1hcCgoKSA9PiBkb2N1bWVudFJlZi5hY3RpdmVFbGVtZW50KSxcbiAgICAgICAgICBmaWx0ZXIoZWxlbWVudCA9PiAhIWVsZW1lbnQgJiYgZWxlbWVudC5tYXRjaGVzKGBpZnJhbWVgKSlcbiAgICAgICAgKSxcbiAgICAgICAgZm9jdXNpbiQucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gcHJpem1HZXRBY3R1YWxUYXJnZXQoZXZlbnQpO1xuICAgICAgICAgICAgY29uc3Qgcm9vdCA9IHByaXptR2V0RG9jdW1lbnRPclNoYWRvd1Jvb3QodGFyZ2V0KSBhcyBEb2N1bWVudDtcblxuICAgICAgICAgICAgcmV0dXJuIHJvb3QgPT09IGRvY3VtZW50UmVmID8gb2YodGFyZ2V0KSA6IHNoYWRvd1Jvb3RBY3RpdmVFbGVtZW50KHJvb3QpLnBpcGUoc3RhcnRXaXRoKHRhcmdldCkpO1xuICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgIG1vdXNlZG93biQucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoZXZlbnQgPT5cbiAgICAgICAgICAgICFkb2N1bWVudFJlZi5hY3RpdmVFbGVtZW50IHx8IGRvY3VtZW50UmVmLmFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50UmVmLmJvZHlcbiAgICAgICAgICAgICAgPyBvZihwcml6bUdldEFjdHVhbFRhcmdldChldmVudCkpXG4gICAgICAgICAgICAgIDogZm9jdXNvdXQkLnBpcGUodGFrZSgxKSwgbWFwVG8ocHJpem1HZXRBY3R1YWxUYXJnZXQoZXZlbnQpKSwgdGFrZVVudGlsKHRpbWVyKDApKSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICkucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLCBzaGFyZSgpKTtcbiAgICB9LFxuICB9XG4pO1xuXG4vLyBDaGVja3MgaWYgZm9jdXNvdXQgZXZlbnQgc2hvdWxkIGJlIGNvbnNpZGVyZWQgbGVhdmluZyBhY3RpdmUgem9uZVxuZnVuY3Rpb24gaXNWYWxpZEZvY3Vzb3V0KHRhcmdldDogYW55LCByZW1vdmVkRWxlbWVudDogRWxlbWVudCB8IG51bGwgPSBudWxsKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgLy8gTm90IGR1ZSB0byBzd2l0Y2hpbmcgdGFicy9nb2luZyB0byBEZXZUb29sc1xuICAgIHByaXptR2V0RG9jdW1lbnRPclNoYWRvd1Jvb3QodGFyZ2V0KS5hY3RpdmVFbGVtZW50ICE9PSB0YXJnZXQgJiZcbiAgICAvLyBOb3QgZHVlIHRvIGJ1dHRvbi9pbnB1dCBiZWNvbWluZyBkaXNhYmxlZFxuICAgICF0YXJnZXQuZGlzYWJsZWQgJiZcbiAgICAvLyBOb3QgZHVlIHRvIGVsZW1lbnQgYmVpbmcgcmVtb3ZlZCBmcm9tIERPTVxuICAgICghcmVtb3ZlZEVsZW1lbnQgfHwgIXJlbW92ZWRFbGVtZW50LmNvbnRhaW5zKHRhcmdldCkpXG4gICk7XG59XG5cbmZ1bmN0aW9uIHNoYWRvd1Jvb3RBY3RpdmVFbGVtZW50KHJvb3Q6IERvY3VtZW50KTogT2JzZXJ2YWJsZTxFdmVudFRhcmdldCB8IG51bGw+IHtcbiAgcmV0dXJuIG1lcmdlKFxuICAgIHByaXptVHlwZWRGcm9tRXZlbnQocm9vdCwgYGZvY3VzaW5gKS5waXBlKG1hcCgoeyB0YXJnZXQgfSkgPT4gdGFyZ2V0KSksXG4gICAgcHJpem1UeXBlZEZyb21FdmVudChyb290LCBgZm9jdXNvdXRgKS5waXBlKFxuICAgICAgZmlsdGVyKCh7IHRhcmdldCwgcmVsYXRlZFRhcmdldCB9KSA9PiAhIXJlbGF0ZWRUYXJnZXQgJiYgaXNWYWxpZEZvY3Vzb3V0KHRhcmdldCkpLFxuICAgICAgbWFwKCh7IHJlbGF0ZWRUYXJnZXQgfSkgPT4gcmVsYXRlZFRhcmdldClcbiAgICApXG4gICk7XG59XG5mdW5jdGlvbiBQUklaTV9SRU1PVkVEX0VMRU1FTlQoUFJJWk1fUkVNT1ZFRF9FTEVNRU5UOiBhbnkpOiBuZXZlciB7XG4gIHRocm93IG5ldyBFcnJvcignRnVuY3Rpb24gbm90IGltcGxlbWVudGVkLicpO1xufVxuIl19