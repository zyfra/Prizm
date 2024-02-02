"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizmRunTasksOnNodeTemplateTask = void 0;
const abstract_1 = require("../abstract");
class PrizmRunTasksOnNodeTemplateTask extends abstract_1.PrizmAstTaskTemplate {
    constructor() {
        super(...arguments);
        this.type = 'run-tasks-on-node';
    }
    // @PrizmLogExecution()
    run(node, payload, context) {
        const tasks = payload.tasks ?? [];
        if (!payload.dontRunOnOnMain)
            for (const task of tasks) {
                node = context.processor.processAction(node, task, context);
            }
        if (payload.runOnChildren) {
            const children = node.children ?? [];
            for (const childIdx in children) {
                children[childIdx] = this.run(children[childIdx], {
                    ...payload,
                    dontRunOnOnMain: false,
                }, context);
            }
            node.children = children;
        }
        return { ...node };
    }
}
exports.PrizmRunTasksOnNodeTemplateTask = PrizmRunTasksOnNodeTemplateTask;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLXRhc2tzLW9uLW5vZGUudGFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYXN0L3NyYy9saWIvdGFzay90ZW1wbGF0ZS9ydW4tdGFza3Mtb24tbm9kZS9ydW4tdGFza3Mtb24tbm9kZS50YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDBDQUFtRDtBQUduRCxNQUFhLCtCQUFnQyxTQUFRLCtCQUFzRDtJQUEzRzs7UUFDVyxTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFnQ3RDLENBQUM7SUE5QkMsdUJBQXVCO0lBQ2hCLEdBQUcsQ0FDUixJQUF1QixFQUN2QixPQUFxRCxFQUNyRCxPQUFnQztRQUVoQyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUVsQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWU7WUFDMUIsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7Z0JBQ3hCLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzdEO1FBRUgsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQ3pCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO1lBQ3JDLEtBQUssTUFBTSxRQUFRLElBQUksUUFBUSxFQUFFO2dCQUMvQixRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FDM0IsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUNsQjtvQkFDRSxHQUFHLE9BQU87b0JBQ1YsZUFBZSxFQUFFLEtBQUs7aUJBQ3ZCLEVBQ0QsT0FBTyxDQUNSLENBQUM7YUFDSDtZQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQzFCO1FBRUQsT0FBTyxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztDQUNGO0FBakNELDBFQWlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElQcml6bVJ1blRhc2tzT25Ob2RlVGVtcGxhdGVUYXNrLCBJUHJpem1SdW5UYXNrc09uTm9kZVRlbXBsYXRlVGFza1BheWxvYWQgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IFByaXptQXN0VGVtcGxhdGVDb250ZXh0IH0gZnJvbSAnLi4vbW9kZWwnO1xuaW1wb3J0IHsgUHJpem1Bc3RUYXNrVGVtcGxhdGUgfSBmcm9tICcuLi9hYnN0cmFjdCc7XG5pbXBvcnQgeyBQcml6bVRlbXBsYXRlTm9kZSB9IGZyb20gJy4uL3Rhc2snO1xuXG5leHBvcnQgY2xhc3MgUHJpem1SdW5UYXNrc09uTm9kZVRlbXBsYXRlVGFzayBleHRlbmRzIFByaXptQXN0VGFza1RlbXBsYXRlPElQcml6bVJ1blRhc2tzT25Ob2RlVGVtcGxhdGVUYXNrPiB7XG4gIHJlYWRvbmx5IHR5cGUgPSAncnVuLXRhc2tzLW9uLW5vZGUnO1xuXG4gIC8vIEBQcml6bUxvZ0V4ZWN1dGlvbigpXG4gIHB1YmxpYyBydW4oXG4gICAgbm9kZTogUHJpem1UZW1wbGF0ZU5vZGUsXG4gICAgcGF5bG9hZDogSVByaXptUnVuVGFza3NPbk5vZGVUZW1wbGF0ZVRhc2tQYXlsb2FkPGFueT4sXG4gICAgY29udGV4dDogUHJpem1Bc3RUZW1wbGF0ZUNvbnRleHRcbiAgKTogUHJpem1UZW1wbGF0ZU5vZGUge1xuICAgIGNvbnN0IHRhc2tzID0gcGF5bG9hZC50YXNrcyA/PyBbXTtcblxuICAgIGlmICghcGF5bG9hZC5kb250UnVuT25Pbk1haW4pXG4gICAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3MpIHtcbiAgICAgICAgbm9kZSA9IGNvbnRleHQucHJvY2Vzc29yLnByb2Nlc3NBY3Rpb24obm9kZSwgdGFzaywgY29udGV4dCk7XG4gICAgICB9XG5cbiAgICBpZiAocGF5bG9hZC5ydW5PbkNoaWxkcmVuKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4gPz8gW107XG4gICAgICBmb3IgKGNvbnN0IGNoaWxkSWR4IGluIGNoaWxkcmVuKSB7XG4gICAgICAgIGNoaWxkcmVuW2NoaWxkSWR4XSA9IHRoaXMucnVuKFxuICAgICAgICAgIGNoaWxkcmVuW2NoaWxkSWR4XSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAuLi5wYXlsb2FkLFxuICAgICAgICAgICAgZG9udFJ1bk9uT25NYWluOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRleHRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIG5vZGUuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICB9XG5cbiAgICByZXR1cm4geyAuLi5ub2RlIH07XG4gIH1cbn1cbiJdfQ==