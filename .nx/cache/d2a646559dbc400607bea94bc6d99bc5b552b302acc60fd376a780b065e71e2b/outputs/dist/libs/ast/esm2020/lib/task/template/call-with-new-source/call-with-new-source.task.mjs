"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizmCallWithNewSourceTemplateTask = void 0;
const abstract_1 = require("../abstract");
const save_to_call_on_demand_1 = require("../save-to-call-on-demand");
class PrizmCallWithNewSourceTemplateTask extends abstract_1.PrizmAstTaskTemplate {
    constructor() {
        super(...arguments);
        this.type = 'call-with-new-source';
    }
    run(node, payload, context) {
        const fullStorageByType = context.storage.getByType(save_to_call_on_demand_1.PrizmSaveToCallOnDemandTemplateTaskType);
        const ids = Array.isArray(payload.id) ? payload.id : [payload.id];
        for (const id of ids) {
            const storage = fullStorageByType?.[id];
            if (!storage)
                continue;
            node = context.processor.runAction(node, storage.action, ({ task }) => ({
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                task: task,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                sourceNode: storage.context.sourceNode,
                ...storage.context,
            }));
        }
        return { ...node };
    }
}
exports.PrizmCallWithNewSourceTemplateTask = PrizmCallWithNewSourceTemplateTask;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbC13aXRoLW5ldy1zb3VyY2UudGFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYXN0L3NyYy9saWIvdGFzay90ZW1wbGF0ZS9jYWxsLXdpdGgtbmV3LXNvdXJjZS9jYWxsLXdpdGgtbmV3LXNvdXJjZS50YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDBDQUFtRDtBQUVuRCxzRUFHbUM7QUFFbkMsTUFBYSxrQ0FBbUMsU0FBUSwrQkFBeUQ7SUFBakg7O1FBQ1csU0FBSSxHQUFHLHNCQUFzQixDQUFDO0lBMkJ6QyxDQUFDO0lBekJRLEdBQUcsQ0FDUixJQUF1QixFQUN2QixPQUFtRCxFQUNuRCxPQUFnQztRQUVoQyxNQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGdFQUF1QyxDQUFDLENBQUM7UUFDN0YsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLEtBQUssTUFBTSxFQUFFLElBQUksR0FBRyxFQUFFO1lBQ3BCLE1BQU0sT0FBTyxHQUFHLGlCQUFpQixFQUFFLENBQUMsRUFBRSxDQUFvRCxDQUFDO1lBRTNGLElBQUksQ0FBQyxPQUFPO2dCQUFFLFNBQVM7WUFFdkIsSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDdEUsNkRBQTZEO2dCQUM3RCxhQUFhO2dCQUNiLElBQUksRUFBRSxJQUFXO2dCQUNqQiw2REFBNkQ7Z0JBQzdELGFBQWE7Z0JBQ2IsVUFBVSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVTtnQkFDdEMsR0FBRyxPQUFPLENBQUMsT0FBTzthQUNuQixDQUFDLENBQUMsQ0FBQztTQUNMO1FBRUQsT0FBTyxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztDQUNGO0FBNUJELGdGQTRCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElQcml6bUNhbGxXaXRoTmV3U291cmNlVGVtcGxhdGVUYXNrLCBJUHJpem1DYWxsV2l0aE5ld1NvdXJjZVRlbXBsYXRlVGFza1BheWxvYWQgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IFByaXptQXN0VGVtcGxhdGVDb250ZXh0IH0gZnJvbSAnLi4vbW9kZWwnO1xuaW1wb3J0IHsgUHJpem1Bc3RUYXNrVGVtcGxhdGUgfSBmcm9tICcuLi9hYnN0cmFjdCc7XG5pbXBvcnQgeyBQcml6bVRlbXBsYXRlTm9kZSB9IGZyb20gJy4uL3Rhc2snO1xuaW1wb3J0IHtcbiAgSVByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrU3RvcmFnZURhdGEsXG4gIFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrVHlwZSxcbn0gZnJvbSAnLi4vc2F2ZS10by1jYWxsLW9uLWRlbWFuZCc7XG5cbmV4cG9ydCBjbGFzcyBQcml6bUNhbGxXaXRoTmV3U291cmNlVGVtcGxhdGVUYXNrIGV4dGVuZHMgUHJpem1Bc3RUYXNrVGVtcGxhdGU8SVByaXptQ2FsbFdpdGhOZXdTb3VyY2VUZW1wbGF0ZVRhc2s+IHtcbiAgcmVhZG9ubHkgdHlwZSA9ICdjYWxsLXdpdGgtbmV3LXNvdXJjZSc7XG5cbiAgcHVibGljIHJ1bihcbiAgICBub2RlOiBQcml6bVRlbXBsYXRlTm9kZSxcbiAgICBwYXlsb2FkOiBJUHJpem1DYWxsV2l0aE5ld1NvdXJjZVRlbXBsYXRlVGFza1BheWxvYWQsXG4gICAgY29udGV4dDogUHJpem1Bc3RUZW1wbGF0ZUNvbnRleHRcbiAgKTogUHJpem1UZW1wbGF0ZU5vZGUge1xuICAgIGNvbnN0IGZ1bGxTdG9yYWdlQnlUeXBlID0gY29udGV4dC5zdG9yYWdlLmdldEJ5VHlwZShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFza1R5cGUpO1xuICAgIGNvbnN0IGlkcyA9IEFycmF5LmlzQXJyYXkocGF5bG9hZC5pZCkgPyBwYXlsb2FkLmlkIDogW3BheWxvYWQuaWRdO1xuICAgIGZvciAoY29uc3QgaWQgb2YgaWRzKSB7XG4gICAgICBjb25zdCBzdG9yYWdlID0gZnVsbFN0b3JhZ2VCeVR5cGU/LltpZF0gYXMgSVByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrU3RvcmFnZURhdGE7XG5cbiAgICAgIGlmICghc3RvcmFnZSkgY29udGludWU7XG5cbiAgICAgIG5vZGUgPSBjb250ZXh0LnByb2Nlc3Nvci5ydW5BY3Rpb24obm9kZSwgc3RvcmFnZS5hY3Rpb24sICh7IHRhc2sgfSkgPT4gKHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRhc2s6IHRhc2sgYXMgYW55LFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgc291cmNlTm9kZTogc3RvcmFnZS5jb250ZXh0LnNvdXJjZU5vZGUsXG4gICAgICAgIC4uLnN0b3JhZ2UuY29udGV4dCxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyAuLi5ub2RlIH07XG4gIH1cbn1cbiJdfQ==