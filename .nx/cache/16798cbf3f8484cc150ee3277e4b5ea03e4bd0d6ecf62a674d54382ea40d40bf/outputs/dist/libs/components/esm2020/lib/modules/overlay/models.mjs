var prizmOverlayBaseType;
(function (prizmOverlayBaseType) {
    prizmOverlayBaseType["TOP"] = "t";
    prizmOverlayBaseType["LEFT"] = "l";
    prizmOverlayBaseType["RIGHT"] = "r";
    prizmOverlayBaseType["BOTTOM"] = "b";
})(prizmOverlayBaseType || (prizmOverlayBaseType = {}));
var prizmOverlayYSide;
(function (prizmOverlayYSide) {
    prizmOverlayYSide["TOP"] = "t";
    prizmOverlayYSide["LEFT"] = "l";
    prizmOverlayYSide["RIGHT"] = "r";
    prizmOverlayYSide["BOTTOM"] = "b";
    prizmOverlayYSide["TOP_LEFT"] = "tl";
    prizmOverlayYSide["TOP_RIGHT"] = "tr";
    prizmOverlayYSide["BOTTOM_LEFT"] = "bl";
    prizmOverlayYSide["BOTTOM_RIGHT"] = "br";
})(prizmOverlayYSide || (prizmOverlayYSide = {}));
var prizmOverlayLeftSide;
(function (prizmOverlayLeftSide) {
    prizmOverlayLeftSide["LEFT_TOP"] = "lt";
    prizmOverlayLeftSide["RIGHT_TOP"] = "rt";
    prizmOverlayLeftSide["LEFT_BOTTOM"] = "lb";
    prizmOverlayLeftSide["RIGHT_BOTTOM"] = "rb";
})(prizmOverlayLeftSide || (prizmOverlayLeftSide = {}));
var prizmOverlayInnerSide;
(function (prizmOverlayInnerSide) {
    prizmOverlayInnerSide["CENTER"] = "c";
})(prizmOverlayInnerSide || (prizmOverlayInnerSide = {}));
export const PrizmOverlayOutsidePlacement = {
    ...prizmOverlayYSide,
    ...prizmOverlayLeftSide,
};
export const PrizmOverlayBasePlacement = {
    ...prizmOverlayBaseType,
};
export const PrizmOverlayInsidePlacement = {
    ...prizmOverlayYSide,
    ...prizmOverlayInnerSide,
};
export var PrizmOverlaySlidePlacement;
(function (PrizmOverlaySlidePlacement) {
    PrizmOverlaySlidePlacement["LEFT"] = "l";
    PrizmOverlaySlidePlacement["RIGHT"] = "r";
})(PrizmOverlaySlidePlacement || (PrizmOverlaySlidePlacement = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvbW9kdWxlcy9vdmVybGF5L21vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQSxJQUFLLG9CQUtKO0FBTEQsV0FBSyxvQkFBb0I7SUFDdkIsaUNBQVMsQ0FBQTtJQUNULGtDQUFVLENBQUE7SUFDVixtQ0FBVyxDQUFBO0lBQ1gsb0NBQVksQ0FBQTtBQUNkLENBQUMsRUFMSSxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBS3hCO0FBSUQsSUFBSyxpQkFTSjtBQVRELFdBQUssaUJBQWlCO0lBQ3BCLDhCQUFTLENBQUE7SUFDVCwrQkFBVSxDQUFBO0lBQ1YsZ0NBQVcsQ0FBQTtJQUNYLGlDQUFZLENBQUE7SUFDWixvQ0FBZSxDQUFBO0lBQ2YscUNBQWdCLENBQUE7SUFDaEIsdUNBQWtCLENBQUE7SUFDbEIsd0NBQW1CLENBQUE7QUFDckIsQ0FBQyxFQVRJLGlCQUFpQixLQUFqQixpQkFBaUIsUUFTckI7QUFJRCxJQUFLLG9CQUtKO0FBTEQsV0FBSyxvQkFBb0I7SUFDdkIsdUNBQWUsQ0FBQTtJQUNmLHdDQUFnQixDQUFBO0lBQ2hCLDBDQUFrQixDQUFBO0lBQ2xCLDJDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFMSSxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBS3hCO0FBSUQsSUFBSyxxQkFFSjtBQUZELFdBQUsscUJBQXFCO0lBQ3hCLHFDQUFZLENBQUE7QUFDZCxDQUFDLEVBRkkscUJBQXFCLEtBQXJCLHFCQUFxQixRQUV6QjtBQUlELE1BQU0sQ0FBQyxNQUFNLDRCQUE0QixHQUFHO0lBQzFDLEdBQUcsaUJBQWlCO0lBQ3BCLEdBQUcsb0JBQW9CO0NBQ3hCLENBQUM7QUFHRixNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBRztJQUN2QyxHQUFHLG9CQUFvQjtDQUN4QixDQUFDO0FBR0YsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQUc7SUFDekMsR0FBRyxpQkFBaUI7SUFDcEIsR0FBRyxxQkFBcUI7Q0FDekIsQ0FBQztBQUdGLE1BQU0sQ0FBTixJQUFZLDBCQUdYO0FBSEQsV0FBWSwwQkFBMEI7SUFDcEMsd0NBQVUsQ0FBQTtJQUNWLHlDQUFXLENBQUE7QUFDYixDQUFDLEVBSFcsMEJBQTBCLEtBQTFCLDBCQUEwQixRQUdyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bU92ZXJsYXlBYnN0cmFjdFBvc2l0aW9uIH0gZnJvbSAnLi9wb3NpdGlvbi9wb3NpdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpem1PdmVybGF5UG9zaXRpb25NZXRhIHtcbiAgdG9wPzogbnVtYmVyO1xuICBsZWZ0PzogbnVtYmVyO1xuICBib3R0b20/OiBudW1iZXI7XG4gIHJpZ2h0PzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXIgfCBzdHJpbmc7XG4gIHdpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xuICBwb3NpdGlvbj86IHN0cmluZztcbiAgZXh0cmE/OiBzdHJpbmc7XG59XG5cbmVudW0gcHJpem1PdmVybGF5QmFzZVR5cGUge1xuICBUT1AgPSAndCcsXG4gIExFRlQgPSAnbCcsXG4gIFJJR0hUID0gJ3InLFxuICBCT1RUT00gPSAnYicsXG59XG5cbnR5cGUgUHJpem1PdmVybGF5QmFzZVR5cGUgPSAndCcgfCAnbCcgfCAncicgfCAnYic7XG5cbmVudW0gcHJpem1PdmVybGF5WVNpZGUge1xuICBUT1AgPSAndCcsXG4gIExFRlQgPSAnbCcsXG4gIFJJR0hUID0gJ3InLFxuICBCT1RUT00gPSAnYicsXG4gIFRPUF9MRUZUID0gJ3RsJyxcbiAgVE9QX1JJR0hUID0gJ3RyJyxcbiAgQk9UVE9NX0xFRlQgPSAnYmwnLFxuICBCT1RUT01fUklHSFQgPSAnYnInLFxufVxuXG50eXBlIFByaXptT3ZlcmxheVlTaWRlVHlwZSA9ICd0JyB8ICdsJyB8ICdyJyB8ICdiJyB8ICd0bCcgfCAndHInIHwgJ2JsJyB8ICdicic7XG5cbmVudW0gcHJpem1PdmVybGF5TGVmdFNpZGUge1xuICBMRUZUX1RPUCA9ICdsdCcsXG4gIFJJR0hUX1RPUCA9ICdydCcsXG4gIExFRlRfQk9UVE9NID0gJ2xiJyxcbiAgUklHSFRfQk9UVE9NID0gJ3JiJyxcbn1cblxuZXhwb3J0IHR5cGUgUHJpem1PdmVybGF5TGVmdFNpZGVUeXBlID0gJ2x0JyB8ICdydCcgfCAnbGInIHwgJ3JiJztcblxuZW51bSBwcml6bU92ZXJsYXlJbm5lclNpZGUge1xuICBDRU5URVIgPSAnYycsXG59XG5cbmV4cG9ydCB0eXBlIFByaXptT3ZlcmxheUlubmVyU2lkZVR5cGUgPSAnYyc7XG5cbmV4cG9ydCBjb25zdCBQcml6bU92ZXJsYXlPdXRzaWRlUGxhY2VtZW50ID0ge1xuICAuLi5wcml6bU92ZXJsYXlZU2lkZSxcbiAgLi4ucHJpem1PdmVybGF5TGVmdFNpZGUsXG59O1xuZXhwb3J0IHR5cGUgUHJpem1PdmVybGF5T3V0c2lkZVBsYWNlbWVudCA9IFByaXptT3ZlcmxheVlTaWRlVHlwZSB8IFByaXptT3ZlcmxheUxlZnRTaWRlVHlwZTtcblxuZXhwb3J0IGNvbnN0IFByaXptT3ZlcmxheUJhc2VQbGFjZW1lbnQgPSB7XG4gIC4uLnByaXptT3ZlcmxheUJhc2VUeXBlLFxufTtcbmV4cG9ydCB0eXBlIFByaXptT3ZlcmxheUJhc2VQbGFjZW1lbnQgPSBQcml6bU92ZXJsYXlCYXNlVHlwZTtcblxuZXhwb3J0IGNvbnN0IFByaXptT3ZlcmxheUluc2lkZVBsYWNlbWVudCA9IHtcbiAgLi4ucHJpem1PdmVybGF5WVNpZGUsXG4gIC4uLnByaXptT3ZlcmxheUlubmVyU2lkZSxcbn07XG5leHBvcnQgdHlwZSBQcml6bU92ZXJsYXlJbnNpZGVQbGFjZW1lbnQgPSBQcml6bU92ZXJsYXlZU2lkZVR5cGUgfCBQcml6bU92ZXJsYXlJbm5lclNpZGVUeXBlO1xuXG5leHBvcnQgZW51bSBQcml6bU92ZXJsYXlTbGlkZVBsYWNlbWVudCB7XG4gIExFRlQgPSAnbCcsXG4gIFJJR0hUID0gJ3InLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByaXptT3ZlcmxheUNvbnRhaW5lclNpemUge1xuICB3aWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICBoZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcml6bU92ZXJsYXlDb25maWcge1xuICBiYWNrZHJvcDogYm9vbGVhbjtcbiAgc3R5bGVWYXJzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGNvbnRhaW5lckNsYXNzOiBzdHJpbmc7XG4gIHdyYXBwZXJDbGFzczogc3RyaW5nO1xuICBiYWNrZHJvcENsYXNzOiBzdHJpbmc7XG4gIGxpc3RlbldpbmRvd0V2ZW50czogYm9vbGVhbjtcbiAgY2xvc2VPbkRvY0NsaWNrOiBib29sZWFuO1xuICBib2R5Q2xhc3M6IHN0cmluZztcbiAgY2xvc2VPbkVzYzogYm9vbGVhbjtcbiAgd2luZG93UmVzaXplQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gIGRvY0NsaWNrQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpem1PdmVybGF5Q29tcG9uZW50VHlwZTxUPiB7XG4gIG5ldyAoLi4uYXJnczogYW55W10pOiBUO1xufVxuXG5leHBvcnQgdHlwZSBQcml6bU92ZXJsYXlJZCA9IHN0cmluZztcblxuZXhwb3J0IHR5cGUgUHJpem1PdmVybGF5RXZlbnROYW1lID1cbiAgfCAnel9vcGVuJ1xuICB8ICd6X2Nsb3NlJ1xuICB8ICd6X2R5bnBvcydcbiAgfCAnel9kZXRhY2gnXG4gIHwgJ3pfcG9zdXBkYXRlJ1xuICB8ICd6X2NvbXBpbnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByaXptT3ZlcmxheUV2ZW50IHtcbiAgZnJvbTogUHJpem1PdmVybGF5SWQ7XG4gIG5hbWU6IFByaXptT3ZlcmxheUV2ZW50TmFtZTtcbiAgZGF0YT86IGFueTtcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gUHJpem1PdmVybGF5Q29udGVudFR5cGUge1xuICBTVFJJTkcgPSAncycsXG4gIEhUTUwgPSAnaCcsXG4gIFRFTVBMQVRFID0gJ3QnLFxuICBDT01QT05FTlQgPSAnYycsXG59XG5leHBvcnQgdHlwZSBQcml6bU92ZXJsYXlDb250ZW50RGF0YSA9IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gfCBQcml6bU92ZXJsYXlDb21wb25lbnRUeXBlPGFueT47XG5leHBvcnQgdHlwZSBQcml6bU92ZXJsYXlDb250ZW50UHJvcHMgPSB7IFt4OiBzdHJpbmddOiBhbnkgfSB8IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBQcml6bU92ZXJsYXlDb250ZW50IHtcbiAgdHlwZT86IFByaXptT3ZlcmxheUNvbnRlbnRUeXBlO1xuICBkYXRhOiBQcml6bU92ZXJsYXlDb250ZW50RGF0YTtcbiAgcHJvcHM/OiBQcml6bU92ZXJsYXlDb250ZW50UHJvcHM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpem1PdmVybGF5SW5wdXRzIHtcbiAgcG9zaXRpb246IFByaXptT3ZlcmxheUFic3RyYWN0UG9zaXRpb24gfCBudWxsO1xuICBjb25maWc6IFByaXptT3ZlcmxheUNvbmZpZztcbiAgY29udGVudDogUHJpem1PdmVybGF5Q29udGVudDtcbiAgcGFyZW50Q29udGFpbmVyOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZDtcbiAgemlkOiBQcml6bU92ZXJsYXlJZCB8IG51bGw7XG59XG4iXX0=