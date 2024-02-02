"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizmAddCommentTemplateTask = void 0;
const abstract_1 = require("../abstract");
/**
 * PrizmAddCommentTemplateTask class is responsible for adding a comment to a PrizmNode.
 */
class PrizmAddCommentTemplateTask extends abstract_1.PrizmAstTaskTemplate {
    constructor() {
        super(...arguments);
        this.type = 'add-comment';
    }
    /**
     * The `run` method processes the given node, payload and context to add a comment to the PrizmNode.
     *
     * @param node - The PrizmNode to be processed.
     * @param payload - The IPrizmAddCommentTemplateTaskPayload containing the comment to be added.
     * @param context - The PrizmAstTemplateContext.
     * @returns - The modified PrizmNode with the comment added.
     */
    run(node, payload, context) {
        const { comment } = payload;
        const attr = payload.attr ?? context?.originName;
        // If there is no attr, return the original node unchanged
        if (!attr)
            return node;
        const children = node.children ?? [];
        // Add the comment to the node's children
        children.push({
            type: 'comment',
            comment,
        });
        node.children = children;
        // Return the modified node with the comment added
        return { ...node };
    }
}
exports.PrizmAddCommentTemplateTask = PrizmAddCommentTemplateTask;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWNvbW1lbnQudGFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYXN0L3NyYy9saWIvdGFzay90ZW1wbGF0ZS9hZGQtY29tbWVudC9hZGQtY29tbWVudC50YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDBDQUFtRDtBQUduRDs7R0FFRztBQUNILE1BQWEsMkJBQTRCLFNBQVEsK0JBQWtEO0lBQW5HOztRQUNXLFNBQUksR0FBRyxhQUFhLENBQUM7SUFpQ2hDLENBQUM7SUEvQkM7Ozs7Ozs7T0FPRztJQUNJLEdBQUcsQ0FDUixJQUF1QixFQUN2QixPQUE0QyxFQUM1QyxPQUFnQztRQUVoQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQzVCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFFLFVBQVUsQ0FBQztRQUVqRCwwREFBMEQ7UUFDMUQsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUV2QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUVyQyx5Q0FBeUM7UUFDekMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNaLElBQUksRUFBRSxTQUFTO1lBQ2YsT0FBTztTQUNELENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRXpCLGtEQUFrRDtRQUNsRCxPQUFPLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0NBQ0Y7QUFsQ0Qsa0VBa0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVByaXptQWRkQ29tbWVudFRlbXBsYXRlVGFzaywgSVByaXptQWRkQ29tbWVudFRlbXBsYXRlVGFza1BheWxvYWQgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IFByaXptQXN0VGVtcGxhdGVDb250ZXh0IH0gZnJvbSAnLi4vbW9kZWwnO1xuaW1wb3J0IHsgUHJpem1Bc3RUYXNrVGVtcGxhdGUgfSBmcm9tICcuLi9hYnN0cmFjdCc7XG5pbXBvcnQgeyBQcml6bVRlbXBsYXRlTm9kZSB9IGZyb20gJy4uL3Rhc2snO1xuXG4vKipcbiAqIFByaXptQWRkQ29tbWVudFRlbXBsYXRlVGFzayBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgYWRkaW5nIGEgY29tbWVudCB0byBhIFByaXptTm9kZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFByaXptQWRkQ29tbWVudFRlbXBsYXRlVGFzayBleHRlbmRzIFByaXptQXN0VGFza1RlbXBsYXRlPElQcml6bUFkZENvbW1lbnRUZW1wbGF0ZVRhc2s+IHtcbiAgcmVhZG9ubHkgdHlwZSA9ICdhZGQtY29tbWVudCc7XG5cbiAgLyoqXG4gICAqIFRoZSBgcnVuYCBtZXRob2QgcHJvY2Vzc2VzIHRoZSBnaXZlbiBub2RlLCBwYXlsb2FkIGFuZCBjb250ZXh0IHRvIGFkZCBhIGNvbW1lbnQgdG8gdGhlIFByaXptTm9kZS5cbiAgICpcbiAgICogQHBhcmFtIG5vZGUgLSBUaGUgUHJpem1Ob2RlIHRvIGJlIHByb2Nlc3NlZC5cbiAgICogQHBhcmFtIHBheWxvYWQgLSBUaGUgSVByaXptQWRkQ29tbWVudFRlbXBsYXRlVGFza1BheWxvYWQgY29udGFpbmluZyB0aGUgY29tbWVudCB0byBiZSBhZGRlZC5cbiAgICogQHBhcmFtIGNvbnRleHQgLSBUaGUgUHJpem1Bc3RUZW1wbGF0ZUNvbnRleHQuXG4gICAqIEByZXR1cm5zIC0gVGhlIG1vZGlmaWVkIFByaXptTm9kZSB3aXRoIHRoZSBjb21tZW50IGFkZGVkLlxuICAgKi9cbiAgcHVibGljIHJ1bihcbiAgICBub2RlOiBQcml6bVRlbXBsYXRlTm9kZSxcbiAgICBwYXlsb2FkOiBJUHJpem1BZGRDb21tZW50VGVtcGxhdGVUYXNrUGF5bG9hZCxcbiAgICBjb250ZXh0OiBQcml6bUFzdFRlbXBsYXRlQ29udGV4dFxuICApOiBQcml6bVRlbXBsYXRlTm9kZSB7XG4gICAgY29uc3QgeyBjb21tZW50IH0gPSBwYXlsb2FkO1xuICAgIGNvbnN0IGF0dHIgPSBwYXlsb2FkLmF0dHIgPz8gY29udGV4dD8ub3JpZ2luTmFtZTtcblxuICAgIC8vIElmIHRoZXJlIGlzIG5vIGF0dHIsIHJldHVybiB0aGUgb3JpZ2luYWwgbm9kZSB1bmNoYW5nZWRcbiAgICBpZiAoIWF0dHIpIHJldHVybiBub2RlO1xuXG4gICAgY29uc3QgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuID8/IFtdO1xuXG4gICAgLy8gQWRkIHRoZSBjb21tZW50IHRvIHRoZSBub2RlJ3MgY2hpbGRyZW5cbiAgICBjaGlsZHJlbi5wdXNoKHtcbiAgICAgIHR5cGU6ICdjb21tZW50JyxcbiAgICAgIGNvbW1lbnQsXG4gICAgfSBhcyBhbnkpO1xuICAgIG5vZGUuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblxuICAgIC8vIFJldHVybiB0aGUgbW9kaWZpZWQgbm9kZSB3aXRoIHRoZSBjb21tZW50IGFkZGVkXG4gICAgcmV0dXJuIHsgLi4ubm9kZSB9O1xuICB9XG59XG4iXX0=