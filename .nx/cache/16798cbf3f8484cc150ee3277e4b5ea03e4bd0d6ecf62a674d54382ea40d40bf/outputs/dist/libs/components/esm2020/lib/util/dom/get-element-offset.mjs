import { prizmAssert } from '@prizm-ui/core';
export function prizmGetElementOffset(host, element) {
    prizmAssert.assert(host.contains(element), 'Host must contain element');
    let { offsetTop, offsetLeft, offsetParent } = element;
    while (offsetParent && offsetParent instanceof HTMLElement && offsetParent !== host) {
        offsetTop += offsetParent.offsetTop;
        offsetLeft += offsetParent.offsetLeft;
        offsetParent = offsetParent.offsetParent;
    }
    return { offsetTop, offsetLeft };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWVsZW1lbnQtb2Zmc2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvdXRpbC9kb20vZ2V0LWVsZW1lbnQtb2Zmc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxNQUFNLFVBQVUscUJBQXFCLENBQ25DLElBQWEsRUFDYixPQUFvQjtJQUVwQixXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztJQUV4RSxJQUFJLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsR0FBRyxPQUFPLENBQUM7SUFFdEQsT0FBTyxZQUFZLElBQUksWUFBWSxZQUFZLFdBQVcsSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFO1FBQ25GLFNBQVMsSUFBSSxZQUFZLENBQUMsU0FBUyxDQUFDO1FBQ3BDLFVBQVUsSUFBSSxZQUFZLENBQUMsVUFBVSxDQUFDO1FBQ3RDLFlBQVksR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDO0tBQzFDO0lBRUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQztBQUNuQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJpem1Bc3NlcnQgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcml6bUdldEVsZW1lbnRPZmZzZXQoXG4gIGhvc3Q6IEVsZW1lbnQsXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50XG4pOiB7IG9mZnNldFRvcDogbnVtYmVyOyBvZmZzZXRMZWZ0OiBudW1iZXIgfSB7XG4gIHByaXptQXNzZXJ0LmFzc2VydChob3N0LmNvbnRhaW5zKGVsZW1lbnQpLCAnSG9zdCBtdXN0IGNvbnRhaW4gZWxlbWVudCcpO1xuXG4gIGxldCB7IG9mZnNldFRvcCwgb2Zmc2V0TGVmdCwgb2Zmc2V0UGFyZW50IH0gPSBlbGVtZW50O1xuXG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0UGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgb2Zmc2V0UGFyZW50ICE9PSBob3N0KSB7XG4gICAgb2Zmc2V0VG9wICs9IG9mZnNldFBhcmVudC5vZmZzZXRUb3A7XG4gICAgb2Zmc2V0TGVmdCArPSBvZmZzZXRQYXJlbnQub2Zmc2V0TGVmdDtcbiAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50O1xuICB9XG5cbiAgcmV0dXJuIHsgb2Zmc2V0VG9wLCBvZmZzZXRMZWZ0IH07XG59XG4iXX0=