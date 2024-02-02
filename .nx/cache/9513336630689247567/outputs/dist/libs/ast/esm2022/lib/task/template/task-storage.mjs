"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizmTemplateTaskStorage = void 0;
class PrizmTemplateTaskStorage {
    constructor() {
        this.storageByType = new Map();
    }
    setByType(type, value) {
        this.storageByType.set(type, value);
    }
    get obj() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return Object.fromEntries(this.storageByType.entries());
    }
    updateByType(type, value) {
        const old = this.getByType(type) ?? {};
        this.setByType(type, {
            ...old,
            ...value,
        });
    }
    getByType(type) {
        return this.storageByType.get(type) ?? null;
    }
    clear() {
        this.storageByType.clear();
    }
}
exports.PrizmTemplateTaskStorage = PrizmTemplateTaskStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay1zdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hc3Qvc3JjL2xpYi90YXNrL3RlbXBsYXRlL3Rhc2stc3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLHdCQUF3QjtJQUFyQztRQUNtQixrQkFBYSxHQUFHLElBQUksR0FBRyxFQUFtQyxDQUFDO0lBc0I5RSxDQUFDO0lBckJRLFNBQVMsQ0FBQyxJQUFZLEVBQUUsS0FBOEI7UUFDM0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxJQUFJLEdBQUc7UUFDTCw2REFBNkQ7UUFDN0QsYUFBYTtRQUNiLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNNLFlBQVksQ0FBQyxJQUFZLEVBQUUsS0FBOEI7UUFDOUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDbkIsR0FBRyxHQUFHO1lBQ04sR0FBRyxLQUFLO1NBQ1QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLFNBQVMsQ0FBQyxJQUFZO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQzlDLENBQUM7SUFDTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUF2QkQsNERBdUJDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFByaXptVGVtcGxhdGVUYXNrU3RvcmFnZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc3RvcmFnZUJ5VHlwZSA9IG5ldyBNYXA8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4oKTtcbiAgcHVibGljIHNldEJ5VHlwZSh0eXBlOiBzdHJpbmcsIHZhbHVlOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZUJ5VHlwZS5zZXQodHlwZSwgdmFsdWUpO1xuICB9XG4gIGdldCBvYmooKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyh0aGlzLnN0b3JhZ2VCeVR5cGUuZW50cmllcygpKTtcbiAgfVxuICBwdWJsaWMgdXBkYXRlQnlUeXBlKHR5cGU6IHN0cmluZywgdmFsdWU6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogdm9pZCB7XG4gICAgY29uc3Qgb2xkID0gdGhpcy5nZXRCeVR5cGUodHlwZSkgPz8ge307XG4gICAgdGhpcy5zZXRCeVR5cGUodHlwZSwge1xuICAgICAgLi4ub2xkLFxuICAgICAgLi4udmFsdWUsXG4gICAgfSk7XG4gIH1cbiAgcHVibGljIGdldEJ5VHlwZSh0eXBlOiBzdHJpbmcpOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2VCeVR5cGUuZ2V0KHR5cGUpID8/IG51bGw7XG4gIH1cbiAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZUJ5VHlwZS5jbGVhcigpO1xuICB9XG59XG4iXX0=