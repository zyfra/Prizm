export function prizmIsEdgeOlderThan(version, userAgent) {
    const EDGE = 'edge/';
    const currentVersion = parseInt(userAgent.slice(userAgent.toLowerCase().indexOf(EDGE) + EDGE.length), 10);
    return currentVersion < version;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtZWRnZS1vbGRlci10aGFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvdXRpbC9icm93c2VyL2lzLWVkZ2Utb2xkZXItdGhhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsb0JBQW9CLENBQUMsT0FBZSxFQUFFLFNBQWlCO0lBQ3JFLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUNyQixNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUUxRyxPQUFPLGNBQWMsR0FBRyxPQUFPLENBQUM7QUFDbEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBwcml6bUlzRWRnZU9sZGVyVGhhbih2ZXJzaW9uOiBudW1iZXIsIHVzZXJBZ2VudDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IEVER0UgPSAnZWRnZS8nO1xuICBjb25zdCBjdXJyZW50VmVyc2lvbiA9IHBhcnNlSW50KHVzZXJBZ2VudC5zbGljZSh1c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKEVER0UpICsgRURHRS5sZW5ndGgpLCAxMCk7XG5cbiAgcmV0dXJuIGN1cnJlbnRWZXJzaW9uIDwgdmVyc2lvbjtcbn1cbiJdfQ==