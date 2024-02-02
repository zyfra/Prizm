"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizmMoveContentToComponentTemplateTask = void 0;
const abstract_1 = require("../abstract");
/**
 * PrizmMoveContentToComponentTemplateTask class is responsible for moving the content of a node
 * into a new component.
 */
class PrizmMoveContentToComponentTemplateTask extends abstract_1.PrizmAstTaskTemplate {
    constructor() {
        super(...arguments);
        this.type = 'move-content-to-component';
    }
    /**
     * The `run` method processes the given node, payload and context to move the node's content
     * into a new component.
     *
     * @param node - The PrizmNode to be processed.
     * @param payload - The IPrizmMoveContentToComponentTemplateTaskPayload containing the data for the new component.
     * @param context - The PrizmAstTemplateContext.
     * @returns - The modified PrizmNode with its content moved to the new component.
     */
    run(node, payload, context) {
        const attr = payload.name;
        if (!attr)
            return node;
        // Create the new child node with the provided properties from the payload
        const childNode = {
            name: payload.name,
            attrs: payload.attrs ?? {},
            children: payload.children ?? [],
            type: payload.type ?? 'tag',
            voidElement: payload.voidElement ?? false,
        };
        // Add the original node's children to the new child node
        childNode.children.push(...(node.children ?? []));
        // Set the new child node as the only child of the original node
        node.children = [childNode];
        return { ...node };
    }
}
exports.PrizmMoveContentToComponentTemplateTask = PrizmMoveContentToComponentTemplateTask;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZS1jaGlsZHJlbi10by1jb21wb25lbnQudGFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYXN0L3NyYy9saWIvdGFzay90ZW1wbGF0ZS9tb3ZlLWNoaWxkcmVuLXRvLWNvbXBvbmVudC9tb3ZlLWNoaWxkcmVuLXRvLWNvbXBvbmVudC50YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUtBLDBDQUFtRDtBQUduRDs7O0dBR0c7QUFDSCxNQUFhLHVDQUF3QyxTQUFRLCtCQUE4RDtJQUEzSDs7UUFDVyxTQUFJLEdBQUcsMkJBQTJCLENBQUM7SUFvQzlDLENBQUM7SUFsQ0M7Ozs7Ozs7O09BUUc7SUFDSSxHQUFHLENBQ1IsSUFBdUIsRUFDdkIsT0FBd0QsRUFDeEQsT0FBZ0M7UUFFaEMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRXZCLDBFQUEwRTtRQUMxRSxNQUFNLFNBQVMsR0FBc0I7WUFDbkMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ2xCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDMUIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLElBQUksRUFBRTtZQUNoQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksSUFBSSxLQUFLO1lBQzNCLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxJQUFJLEtBQUs7U0FDMUMsQ0FBQztRQUVGLHlEQUF5RDtRQUN6RCxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWxELGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFNUIsT0FBTyxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztDQUNGO0FBckNELDBGQXFDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIElQcml6bU1vdmVDb250ZW50VG9Db21wb25lbnRUZW1wbGF0ZVRhc2ssXG4gIElQcml6bU1vdmVDb250ZW50VG9Db21wb25lbnRUZW1wbGF0ZVRhc2tQYXlsb2FkLFxufSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IFByaXptQXN0VGVtcGxhdGVDb250ZXh0IH0gZnJvbSAnLi4vbW9kZWwnO1xuaW1wb3J0IHsgUHJpem1Bc3RUYXNrVGVtcGxhdGUgfSBmcm9tICcuLi9hYnN0cmFjdCc7XG5pbXBvcnQgeyBQcml6bVRlbXBsYXRlTm9kZSB9IGZyb20gJy4uL3Rhc2snO1xuXG4vKipcbiAqIFByaXptTW92ZUNvbnRlbnRUb0NvbXBvbmVudFRlbXBsYXRlVGFzayBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgbW92aW5nIHRoZSBjb250ZW50IG9mIGEgbm9kZVxuICogaW50byBhIG5ldyBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBQcml6bU1vdmVDb250ZW50VG9Db21wb25lbnRUZW1wbGF0ZVRhc2sgZXh0ZW5kcyBQcml6bUFzdFRhc2tUZW1wbGF0ZTxJUHJpem1Nb3ZlQ29udGVudFRvQ29tcG9uZW50VGVtcGxhdGVUYXNrPiB7XG4gIHJlYWRvbmx5IHR5cGUgPSAnbW92ZS1jb250ZW50LXRvLWNvbXBvbmVudCc7XG5cbiAgLyoqXG4gICAqIFRoZSBgcnVuYCBtZXRob2QgcHJvY2Vzc2VzIHRoZSBnaXZlbiBub2RlLCBwYXlsb2FkIGFuZCBjb250ZXh0IHRvIG1vdmUgdGhlIG5vZGUncyBjb250ZW50XG4gICAqIGludG8gYSBuZXcgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcGFyYW0gbm9kZSAtIFRoZSBQcml6bU5vZGUgdG8gYmUgcHJvY2Vzc2VkLlxuICAgKiBAcGFyYW0gcGF5bG9hZCAtIFRoZSBJUHJpem1Nb3ZlQ29udGVudFRvQ29tcG9uZW50VGVtcGxhdGVUYXNrUGF5bG9hZCBjb250YWluaW5nIHRoZSBkYXRhIGZvciB0aGUgbmV3IGNvbXBvbmVudC5cbiAgICogQHBhcmFtIGNvbnRleHQgLSBUaGUgUHJpem1Bc3RUZW1wbGF0ZUNvbnRleHQuXG4gICAqIEByZXR1cm5zIC0gVGhlIG1vZGlmaWVkIFByaXptTm9kZSB3aXRoIGl0cyBjb250ZW50IG1vdmVkIHRvIHRoZSBuZXcgY29tcG9uZW50LlxuICAgKi9cbiAgcHVibGljIHJ1bihcbiAgICBub2RlOiBQcml6bVRlbXBsYXRlTm9kZSxcbiAgICBwYXlsb2FkOiBJUHJpem1Nb3ZlQ29udGVudFRvQ29tcG9uZW50VGVtcGxhdGVUYXNrUGF5bG9hZCxcbiAgICBjb250ZXh0OiBQcml6bUFzdFRlbXBsYXRlQ29udGV4dFxuICApOiBQcml6bVRlbXBsYXRlTm9kZSB7XG4gICAgY29uc3QgYXR0ciA9IHBheWxvYWQubmFtZTtcbiAgICBpZiAoIWF0dHIpIHJldHVybiBub2RlO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBuZXcgY2hpbGQgbm9kZSB3aXRoIHRoZSBwcm92aWRlZCBwcm9wZXJ0aWVzIGZyb20gdGhlIHBheWxvYWRcbiAgICBjb25zdCBjaGlsZE5vZGU6IFByaXptVGVtcGxhdGVOb2RlID0ge1xuICAgICAgbmFtZTogcGF5bG9hZC5uYW1lLFxuICAgICAgYXR0cnM6IHBheWxvYWQuYXR0cnMgPz8ge30sXG4gICAgICBjaGlsZHJlbjogcGF5bG9hZC5jaGlsZHJlbiA/PyBbXSxcbiAgICAgIHR5cGU6IHBheWxvYWQudHlwZSA/PyAndGFnJyxcbiAgICAgIHZvaWRFbGVtZW50OiBwYXlsb2FkLnZvaWRFbGVtZW50ID8/IGZhbHNlLFxuICAgIH07XG5cbiAgICAvLyBBZGQgdGhlIG9yaWdpbmFsIG5vZGUncyBjaGlsZHJlbiB0byB0aGUgbmV3IGNoaWxkIG5vZGVcbiAgICBjaGlsZE5vZGUuY2hpbGRyZW4ucHVzaCguLi4obm9kZS5jaGlsZHJlbiA/PyBbXSkpO1xuXG4gICAgLy8gU2V0IHRoZSBuZXcgY2hpbGQgbm9kZSBhcyB0aGUgb25seSBjaGlsZCBvZiB0aGUgb3JpZ2luYWwgbm9kZVxuICAgIG5vZGUuY2hpbGRyZW4gPSBbY2hpbGROb2RlXTtcblxuICAgIHJldHVybiB7IC4uLm5vZGUgfTtcbiAgfVxufVxuIl19