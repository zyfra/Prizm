"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prizmSemVerUpdate = void 0;
function prizmSemVerUpdate(currentVersion, change) {
    const newVersion = { ...currentVersion };
    const keys = ['major', 'minor', 'patch', 'prereleaseNumber'];
    keys.forEach(key => {
        switch (change[key]) {
            case '*':
                break;
            case 'up': {
                const version = (newVersion[key] ?? -1);
                newVersion[key] = version + 1;
                break;
            }
            case 'down':
                if (newVersion[key] === 0) {
                    throw new Error(`Can't decrement ${key} below 0.`);
                }
                newVersion[key] = (newVersion[key] || 1) - 1;
                break;
            default:
                if (typeof change[key] === 'number') {
                    newVersion[key] = change[key];
                }
        }
    });
    if (change.buildMetadata) {
        newVersion.buildMetadata = change.buildMetadata;
    }
    if (change.prerelease) {
        newVersion.prerelease = change.prerelease;
    }
    return newVersion;
}
exports.prizmSemVerUpdate = prizmSemVerUpdate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hc3Qvc3JjL2xpYi9zZW12ZXIvdXBkYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLFNBQWdCLGlCQUFpQixDQUMvQixjQUFvQyxFQUNwQyxNQUFnQztJQUVoQyxNQUFNLFVBQVUsR0FBeUIsRUFBRSxHQUFHLGNBQWMsRUFBRSxDQUFDO0lBQy9ELE1BQU0sSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsa0JBQWtCLENBQVUsQ0FBQztJQUN0RSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2pCLFFBQVEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLEtBQUssR0FBRztnQkFDTixNQUFNO1lBRVIsS0FBSyxJQUFJLENBQUMsQ0FBQztnQkFDVCxNQUFNLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBVyxDQUFDO2dCQUNsRCxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFFOUIsTUFBTTthQUNQO1lBQ0QsS0FBSyxNQUFNO2dCQUNULElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDekIsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxXQUFXLENBQUMsQ0FBQztpQkFDcEQ7Z0JBQ0QsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0MsTUFBTTtZQUNSO2dCQUNFLElBQUksT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxFQUFFO29CQUNuQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBVyxDQUFDO2lCQUN6QztTQUNKO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUU7UUFDeEIsVUFBVSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO0tBQ2pEO0lBRUQsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO1FBQ3JCLFVBQVUsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztLQUMzQztJQUVELE9BQU8sVUFBeUIsQ0FBQztBQUNuQyxDQUFDO0FBdkNELDhDQXVDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXptU2VtVmVyLCBQcml6bVNlbVZlclVwZGF0ZUNvbW1hbmQgfSBmcm9tICcuL21vZGVsJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByaXptU2VtVmVyVXBkYXRlKFxuICBjdXJyZW50VmVyc2lvbjogUGFydGlhbDxQcml6bVNlbVZlcj4sXG4gIGNoYW5nZTogUHJpem1TZW1WZXJVcGRhdGVDb21tYW5kXG4pOiBQcml6bVNlbVZlciB7XG4gIGNvbnN0IG5ld1ZlcnNpb246IFBhcnRpYWw8UHJpem1TZW1WZXI+ID0geyAuLi5jdXJyZW50VmVyc2lvbiB9O1xuICBjb25zdCBrZXlzID0gWydtYWpvcicsICdtaW5vcicsICdwYXRjaCcsICdwcmVyZWxlYXNlTnVtYmVyJ10gYXMgY29uc3Q7XG4gIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgIHN3aXRjaCAoY2hhbmdlW2tleV0pIHtcbiAgICAgIGNhc2UgJyonOlxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAndXAnOiB7XG4gICAgICAgIGNvbnN0IHZlcnNpb24gPSAobmV3VmVyc2lvbltrZXldID8/IC0xKSBhcyBudW1iZXI7XG4gICAgICAgIG5ld1ZlcnNpb25ba2V5XSA9IHZlcnNpb24gKyAxO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgIGlmIChuZXdWZXJzaW9uW2tleV0gPT09IDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IGRlY3JlbWVudCAke2tleX0gYmVsb3cgMC5gKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdWZXJzaW9uW2tleV0gPSAobmV3VmVyc2lvbltrZXldIHx8IDEpIC0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAodHlwZW9mIGNoYW5nZVtrZXldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIG5ld1ZlcnNpb25ba2V5XSA9IGNoYW5nZVtrZXldIGFzIG51bWJlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGNoYW5nZS5idWlsZE1ldGFkYXRhKSB7XG4gICAgbmV3VmVyc2lvbi5idWlsZE1ldGFkYXRhID0gY2hhbmdlLmJ1aWxkTWV0YWRhdGE7XG4gIH1cblxuICBpZiAoY2hhbmdlLnByZXJlbGVhc2UpIHtcbiAgICBuZXdWZXJzaW9uLnByZXJlbGVhc2UgPSBjaGFuZ2UucHJlcmVsZWFzZTtcbiAgfVxuXG4gIHJldHVybiBuZXdWZXJzaW9uIGFzIFByaXptU2VtVmVyO1xufVxuIl19