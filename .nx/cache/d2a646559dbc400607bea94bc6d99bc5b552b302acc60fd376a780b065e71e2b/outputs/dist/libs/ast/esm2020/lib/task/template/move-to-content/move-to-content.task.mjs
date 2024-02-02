"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizmMoveToContentTemplateTask = void 0;
const util_1 = require("../util");
const abstract_1 = require("../abstract");
/**
 * PrizmMoveToContentTemplateTask class is responsible for moving the attribute value to the content of a PrizmNode.
 */
class PrizmMoveToContentTemplateTask extends abstract_1.PrizmAstTaskTemplate {
    constructor() {
        super(...arguments);
        this.type = 'move-to-content';
    }
    /**
     * The `run` method processes the given node, payload, and context to move the attribute value to the content of the PrizmNode.
     *
     * @param node - The PrizmNode to be processed.
     * @param payload - The IPrizmMoveToContentTemplateTaskPayload containing the attribute information.
     * @param context - The PrizmAstTemplateContext.
     * @returns - The modified PrizmNode with the attribute value moved to the content.
     */
    run(node, payload, context) {
        // Determine the attribute to process
        const attr = payload.attr || context.originName;
        // If there is no attribute, return the original node unchanged
        if (!attr)
            return node;
        // Get the output value for the attribute
        const content = (0, util_1.prizmAstGetOutputBytAttrForTemplate)(node.attrs, attr);
        // Remove the attribute from the node's attrs object
        node.attrs = (0, util_1.prizmAstRemoveByAttrName)(node.attrs, attr);
        if (!payload.notClearChildren)
            node.children = [];
        // If there is content, move it to the node's children as a text node
        if (content) {
            node.children.push({
                type: 'text',
                content,
            });
        }
        // Return the modified node with the attribute value moved to the content
        return { ...node };
    }
}
exports.PrizmMoveToContentTemplateTask = PrizmMoveToContentTemplateTask;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZS10by1jb250ZW50LnRhc2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FzdC9zcmMvbGliL3Rhc2svdGVtcGxhdGUvbW92ZS10by1jb250ZW50L21vdmUtdG8tY29udGVudC50YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLGtDQUF3RjtBQUN4RiwwQ0FBbUQ7QUFHbkQ7O0dBRUc7QUFDSCxNQUFhLDhCQUErQixTQUFRLCtCQUFxRDtJQUF6Rzs7UUFDVyxTQUFJLEdBQUcsaUJBQWlCLENBQUM7SUF3Q3BDLENBQUM7SUF0Q0M7Ozs7Ozs7T0FPRztJQUNJLEdBQUcsQ0FDUixJQUF1QixFQUN2QixPQUErQyxFQUMvQyxPQUFnQztRQUVoQyxxQ0FBcUM7UUFDckMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDO1FBRWhELCtEQUErRDtRQUMvRCxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRXZCLHlDQUF5QztRQUN6QyxNQUFNLE9BQU8sR0FBRyxJQUFBLDBDQUFtQyxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFdEUsb0RBQW9EO1FBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBQSwrQkFBd0IsRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFFbEQscUVBQXFFO1FBQ3JFLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLElBQUksRUFBRSxNQUFNO2dCQUNaLE9BQU87YUFDRCxDQUFDLENBQUM7U0FDWDtRQUVELHlFQUF5RTtRQUN6RSxPQUFPLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0NBQ0Y7QUF6Q0Qsd0VBeUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVByaXptTW92ZVRvQ29udGVudFRlbXBsYXRlVGFzaywgSVByaXptTW92ZVRvQ29udGVudFRlbXBsYXRlVGFza1BheWxvYWQgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IFByaXptQXN0VGVtcGxhdGVDb250ZXh0IH0gZnJvbSAnLi4vbW9kZWwnO1xuaW1wb3J0IHsgcHJpem1Bc3RHZXRPdXRwdXRCeXRBdHRyRm9yVGVtcGxhdGUsIHByaXptQXN0UmVtb3ZlQnlBdHRyTmFtZSB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHsgUHJpem1Bc3RUYXNrVGVtcGxhdGUgfSBmcm9tICcuLi9hYnN0cmFjdCc7XG5pbXBvcnQgeyBQcml6bVRlbXBsYXRlTm9kZSB9IGZyb20gJy4uL3Rhc2snO1xuXG4vKipcbiAqIFByaXptTW92ZVRvQ29udGVudFRlbXBsYXRlVGFzayBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgbW92aW5nIHRoZSBhdHRyaWJ1dGUgdmFsdWUgdG8gdGhlIGNvbnRlbnQgb2YgYSBQcml6bU5vZGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBQcml6bU1vdmVUb0NvbnRlbnRUZW1wbGF0ZVRhc2sgZXh0ZW5kcyBQcml6bUFzdFRhc2tUZW1wbGF0ZTxJUHJpem1Nb3ZlVG9Db250ZW50VGVtcGxhdGVUYXNrPiB7XG4gIHJlYWRvbmx5IHR5cGUgPSAnbW92ZS10by1jb250ZW50JztcblxuICAvKipcbiAgICogVGhlIGBydW5gIG1ldGhvZCBwcm9jZXNzZXMgdGhlIGdpdmVuIG5vZGUsIHBheWxvYWQsIGFuZCBjb250ZXh0IHRvIG1vdmUgdGhlIGF0dHJpYnV0ZSB2YWx1ZSB0byB0aGUgY29udGVudCBvZiB0aGUgUHJpem1Ob2RlLlxuICAgKlxuICAgKiBAcGFyYW0gbm9kZSAtIFRoZSBQcml6bU5vZGUgdG8gYmUgcHJvY2Vzc2VkLlxuICAgKiBAcGFyYW0gcGF5bG9hZCAtIFRoZSBJUHJpem1Nb3ZlVG9Db250ZW50VGVtcGxhdGVUYXNrUGF5bG9hZCBjb250YWluaW5nIHRoZSBhdHRyaWJ1dGUgaW5mb3JtYXRpb24uXG4gICAqIEBwYXJhbSBjb250ZXh0IC0gVGhlIFByaXptQXN0VGVtcGxhdGVDb250ZXh0LlxuICAgKiBAcmV0dXJucyAtIFRoZSBtb2RpZmllZCBQcml6bU5vZGUgd2l0aCB0aGUgYXR0cmlidXRlIHZhbHVlIG1vdmVkIHRvIHRoZSBjb250ZW50LlxuICAgKi9cbiAgcHVibGljIHJ1bihcbiAgICBub2RlOiBQcml6bVRlbXBsYXRlTm9kZSxcbiAgICBwYXlsb2FkOiBJUHJpem1Nb3ZlVG9Db250ZW50VGVtcGxhdGVUYXNrUGF5bG9hZCxcbiAgICBjb250ZXh0OiBQcml6bUFzdFRlbXBsYXRlQ29udGV4dFxuICApOiBQcml6bVRlbXBsYXRlTm9kZSB7XG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBhdHRyaWJ1dGUgdG8gcHJvY2Vzc1xuICAgIGNvbnN0IGF0dHIgPSBwYXlsb2FkLmF0dHIgfHwgY29udGV4dC5vcmlnaW5OYW1lO1xuXG4gICAgLy8gSWYgdGhlcmUgaXMgbm8gYXR0cmlidXRlLCByZXR1cm4gdGhlIG9yaWdpbmFsIG5vZGUgdW5jaGFuZ2VkXG4gICAgaWYgKCFhdHRyKSByZXR1cm4gbm9kZTtcblxuICAgIC8vIEdldCB0aGUgb3V0cHV0IHZhbHVlIGZvciB0aGUgYXR0cmlidXRlXG4gICAgY29uc3QgY29udGVudCA9IHByaXptQXN0R2V0T3V0cHV0Qnl0QXR0ckZvclRlbXBsYXRlKG5vZGUuYXR0cnMsIGF0dHIpO1xuXG4gICAgLy8gUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgZnJvbSB0aGUgbm9kZSdzIGF0dHJzIG9iamVjdFxuICAgIG5vZGUuYXR0cnMgPSBwcml6bUFzdFJlbW92ZUJ5QXR0ck5hbWUobm9kZS5hdHRycywgYXR0cik7XG5cbiAgICBpZiAoIXBheWxvYWQubm90Q2xlYXJDaGlsZHJlbikgbm9kZS5jaGlsZHJlbiA9IFtdO1xuXG4gICAgLy8gSWYgdGhlcmUgaXMgY29udGVudCwgbW92ZSBpdCB0byB0aGUgbm9kZSdzIGNoaWxkcmVuIGFzIGEgdGV4dCBub2RlXG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgIG5vZGUuY2hpbGRyZW4ucHVzaCh7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgY29udGVudCxcbiAgICAgIH0gYXMgYW55KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG5vZGUgd2l0aCB0aGUgYXR0cmlidXRlIHZhbHVlIG1vdmVkIHRvIHRoZSBjb250ZW50XG4gICAgcmV0dXJuIHsgLi4ubm9kZSB9O1xuICB9XG59XG4iXX0=