export function prizmCanScroll(element, rootElement, vertical, scrollEnd) {
    return vertical
        ? canScrollVertical(element, rootElement, scrollEnd)
        : canScrollHorizontal(element, rootElement, scrollEnd);
}
function canScrollVertical(element, rootElement, scrollEnd) {
    let currentElement = element;
    while (currentElement !== rootElement.parentElement) {
        if ((Math.floor(currentElement.scrollTop) > 0 && !scrollEnd) ||
            (Math.ceil(currentElement.scrollTop + currentElement.clientHeight) < currentElement.scrollHeight &&
                scrollEnd)) {
            return true;
        }
        if (currentElement.parentElement) {
            currentElement = currentElement.parentElement;
        }
        else {
            return false;
        }
    }
    return false;
}
function canScrollHorizontal(element, rootElement, scrollEnd) {
    let currentElement = element;
    while (currentElement !== rootElement.parentElement) {
        if ((Math.floor(currentElement.scrollLeft) > 0 && !scrollEnd) ||
            (Math.ceil(currentElement.scrollLeft + currentElement.clientWidth) < currentElement.scrollWidth &&
                scrollEnd)) {
            return true;
        }
        if (currentElement.parentElement) {
            currentElement = currentElement.parentElement;
        }
        else {
            return false;
        }
    }
    return false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuLXNjcm9sbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL3V0aWwvZG9tL2Nhbi1zY3JvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxVQUFVLGNBQWMsQ0FDNUIsT0FBZ0IsRUFDaEIsV0FBb0IsRUFDcEIsUUFBaUIsRUFDakIsU0FBa0I7SUFFbEIsT0FBTyxRQUFRO1FBQ2IsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQzNELENBQUM7QUFFRCxTQUFTLGlCQUFpQixDQUFDLE9BQWdCLEVBQUUsV0FBb0IsRUFBRSxTQUFrQjtJQUNuRixJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUM7SUFFN0IsT0FBTyxjQUFjLEtBQUssV0FBVyxDQUFDLGFBQWEsRUFBRTtRQUNuRCxJQUNFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3hELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxZQUFZLENBQUMsR0FBRyxjQUFjLENBQUMsWUFBWTtnQkFDOUYsU0FBUyxDQUFDLEVBQ1o7WUFDQSxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBSSxjQUFjLENBQUMsYUFBYSxFQUFFO1lBQ2hDLGNBQWMsR0FBRyxjQUFjLENBQUMsYUFBYSxDQUFDO1NBQy9DO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxTQUFTLG1CQUFtQixDQUFDLE9BQWdCLEVBQUUsV0FBb0IsRUFBRSxTQUFrQjtJQUNyRixJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUM7SUFFN0IsT0FBTyxjQUFjLEtBQUssV0FBVyxDQUFDLGFBQWEsRUFBRTtRQUNuRCxJQUNFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3pELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FBQyxXQUFXLENBQUMsR0FBRyxjQUFjLENBQUMsV0FBVztnQkFDN0YsU0FBUyxDQUFDLEVBQ1o7WUFDQSxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBSSxjQUFjLENBQUMsYUFBYSxFQUFFO1lBQ2hDLGNBQWMsR0FBRyxjQUFjLENBQUMsYUFBYSxDQUFDO1NBQy9DO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcHJpem1DYW5TY3JvbGwoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIHJvb3RFbGVtZW50OiBFbGVtZW50LFxuICB2ZXJ0aWNhbDogYm9vbGVhbixcbiAgc2Nyb2xsRW5kOiBib29sZWFuXG4pOiBib29sZWFuIHtcbiAgcmV0dXJuIHZlcnRpY2FsXG4gICAgPyBjYW5TY3JvbGxWZXJ0aWNhbChlbGVtZW50LCByb290RWxlbWVudCwgc2Nyb2xsRW5kKVxuICAgIDogY2FuU2Nyb2xsSG9yaXpvbnRhbChlbGVtZW50LCByb290RWxlbWVudCwgc2Nyb2xsRW5kKTtcbn1cblxuZnVuY3Rpb24gY2FuU2Nyb2xsVmVydGljYWwoZWxlbWVudDogRWxlbWVudCwgcm9vdEVsZW1lbnQ6IEVsZW1lbnQsIHNjcm9sbEVuZDogYm9vbGVhbik6IGJvb2xlYW4ge1xuICBsZXQgY3VycmVudEVsZW1lbnQgPSBlbGVtZW50O1xuXG4gIHdoaWxlIChjdXJyZW50RWxlbWVudCAhPT0gcm9vdEVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgIGlmIChcbiAgICAgIChNYXRoLmZsb29yKGN1cnJlbnRFbGVtZW50LnNjcm9sbFRvcCkgPiAwICYmICFzY3JvbGxFbmQpIHx8XG4gICAgICAoTWF0aC5jZWlsKGN1cnJlbnRFbGVtZW50LnNjcm9sbFRvcCArIGN1cnJlbnRFbGVtZW50LmNsaWVudEhlaWdodCkgPCBjdXJyZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgJiZcbiAgICAgICAgc2Nyb2xsRW5kKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgIGN1cnJlbnRFbGVtZW50ID0gY3VycmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY2FuU2Nyb2xsSG9yaXpvbnRhbChlbGVtZW50OiBFbGVtZW50LCByb290RWxlbWVudDogRWxlbWVudCwgc2Nyb2xsRW5kOiBib29sZWFuKTogYm9vbGVhbiB7XG4gIGxldCBjdXJyZW50RWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgd2hpbGUgKGN1cnJlbnRFbGVtZW50ICE9PSByb290RWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgaWYgKFxuICAgICAgKE1hdGguZmxvb3IoY3VycmVudEVsZW1lbnQuc2Nyb2xsTGVmdCkgPiAwICYmICFzY3JvbGxFbmQpIHx8XG4gICAgICAoTWF0aC5jZWlsKGN1cnJlbnRFbGVtZW50LnNjcm9sbExlZnQgKyBjdXJyZW50RWxlbWVudC5jbGllbnRXaWR0aCkgPCBjdXJyZW50RWxlbWVudC5zY3JvbGxXaWR0aCAmJlxuICAgICAgICBzY3JvbGxFbmQpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudEVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgY3VycmVudEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuIl19