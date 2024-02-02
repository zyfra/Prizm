"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizmAddChildrenTemplateTask = void 0;
const abstract_1 = require("../abstract");
class PrizmAddChildrenTemplateTask extends abstract_1.PrizmAstTaskTemplate {
    constructor() {
        super(...arguments);
        this.type = 'add-children';
    }
    run(node, payload, context) {
        const attr = payload.name;
        if (!attr)
            return node;
        const childNode = {
            name: payload.name,
            attrs: { ...(payload.attrs ?? {}) },
            children: payload.children ?? [],
            type: payload.type ?? 'tag',
            voidElement: payload.voidElement ?? false,
        };
        childNode.children.push(...(node.children ?? []));
        node.children = [childNode];
        return { ...node };
    }
}
exports.PrizmAddChildrenTemplateTask = PrizmAddChildrenTemplateTask;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWNoaWxkcmVuLnRhc2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FzdC9zcmMvbGliL3Rhc2svdGVtcGxhdGUvYWRkLWNoaWxkcmVuL2FkZC1jaGlsZHJlbi50YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDBDQUFtRDtBQUduRCxNQUFhLDRCQUE2QixTQUFRLCtCQUFtRDtJQUFyRzs7UUFDVyxTQUFJLEdBQUcsY0FBYyxDQUFDO0lBd0JqQyxDQUFDO0lBdEJRLEdBQUcsQ0FDUixJQUF1QixFQUN2QixPQUE2QyxFQUM3QyxPQUFnQztRQUVoQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFdkIsTUFBTSxTQUFTLEdBQXNCO1lBQ25DLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNsQixLQUFLLEVBQUUsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsRUFBRTtZQUNuQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsSUFBSSxFQUFFO1lBQ2hDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxJQUFJLEtBQUs7WUFDM0IsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLElBQUksS0FBSztTQUMxQyxDQUFDO1FBRUYsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFNUIsT0FBTyxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztDQUNGO0FBekJELG9FQXlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElQcml6bUFkZENoaWxkcmVuVGVtcGxhdGVUYXNrLCBJUHJpem1BZGRDaGlsZHJlblRlbXBsYXRlVGFza1BheWxvYWQgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IFByaXptQXN0VGVtcGxhdGVDb250ZXh0IH0gZnJvbSAnLi4vbW9kZWwnO1xuaW1wb3J0IHsgUHJpem1Bc3RUYXNrVGVtcGxhdGUgfSBmcm9tICcuLi9hYnN0cmFjdCc7XG5pbXBvcnQgeyBQcml6bVRlbXBsYXRlTm9kZSB9IGZyb20gJy4uL3Rhc2snO1xuXG5leHBvcnQgY2xhc3MgUHJpem1BZGRDaGlsZHJlblRlbXBsYXRlVGFzayBleHRlbmRzIFByaXptQXN0VGFza1RlbXBsYXRlPElQcml6bUFkZENoaWxkcmVuVGVtcGxhdGVUYXNrPiB7XG4gIHJlYWRvbmx5IHR5cGUgPSAnYWRkLWNoaWxkcmVuJztcblxuICBwdWJsaWMgcnVuKFxuICAgIG5vZGU6IFByaXptVGVtcGxhdGVOb2RlLFxuICAgIHBheWxvYWQ6IElQcml6bUFkZENoaWxkcmVuVGVtcGxhdGVUYXNrUGF5bG9hZCxcbiAgICBjb250ZXh0OiBQcml6bUFzdFRlbXBsYXRlQ29udGV4dFxuICApOiBQcml6bVRlbXBsYXRlTm9kZSB7XG4gICAgY29uc3QgYXR0ciA9IHBheWxvYWQubmFtZTtcbiAgICBpZiAoIWF0dHIpIHJldHVybiBub2RlO1xuXG4gICAgY29uc3QgY2hpbGROb2RlOiBQcml6bVRlbXBsYXRlTm9kZSA9IHtcbiAgICAgIG5hbWU6IHBheWxvYWQubmFtZSxcbiAgICAgIGF0dHJzOiB7IC4uLihwYXlsb2FkLmF0dHJzID8/IHt9KSB9LFxuICAgICAgY2hpbGRyZW46IHBheWxvYWQuY2hpbGRyZW4gPz8gW10sXG4gICAgICB0eXBlOiBwYXlsb2FkLnR5cGUgPz8gJ3RhZycsXG4gICAgICB2b2lkRWxlbWVudDogcGF5bG9hZC52b2lkRWxlbWVudCA/PyBmYWxzZSxcbiAgICB9O1xuXG4gICAgY2hpbGROb2RlLmNoaWxkcmVuLnB1c2goLi4uKG5vZGUuY2hpbGRyZW4gPz8gW10pKTtcblxuICAgIG5vZGUuY2hpbGRyZW4gPSBbY2hpbGROb2RlXTtcblxuICAgIHJldHVybiB7IC4uLm5vZGUgfTtcbiAgfVxufVxuIl19