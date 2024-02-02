"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizmChangeNameTemplateTask = void 0;
const abstract_1 = require("../abstract");
/**
 * PrizmChangeNameTemplateTask class is responsible for changing the name of a PrizmNode.
 */
class PrizmChangeNameTemplateTask extends abstract_1.PrizmAstTaskTemplate {
    constructor() {
        super(...arguments);
        this.type = 'change-name';
    }
    /**
     * The `run` method processes the given node, payload and context to change the name of the PrizmNode.
     *
     * @param node - The PrizmNode to be processed.
     * @param payload - The IPrizmChangeNameTemplateTaskPayload containing the new name for the node.
     * @param context - The PrizmAstTemplateContext.
     * @returns - The modified PrizmNode with the updated name.
     */
    run(node, payload, context) {
        const { name } = payload;
        // If there is no name in the payload, return the original node unchanged
        if (!name)
            return node;
        // Return a new PrizmNode object with the updated name
        return { ...node, name };
    }
}
exports.PrizmChangeNameTemplateTask = PrizmChangeNameTemplateTask;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLW5hbWUudGFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYXN0L3NyYy9saWIvdGFzay90ZW1wbGF0ZS9jaGFuZ2UtbmFtZS9jaGFuZ2UtbmFtZS50YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDBDQUFtRDtBQUduRDs7R0FFRztBQUNILE1BQWEsMkJBQTRCLFNBQVEsK0JBQWtEO0lBQW5HOztRQUNXLFNBQUksR0FBRyxhQUFhLENBQUM7SUF1QmhDLENBQUM7SUFyQkM7Ozs7Ozs7T0FPRztJQUNJLEdBQUcsQ0FDUixJQUF1QixFQUN2QixPQUE0QyxFQUM1QyxPQUFnQztRQUVoQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBRXpCLHlFQUF5RTtRQUN6RSxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRXZCLHNEQUFzRDtRQUN0RCxPQUFPLEVBQUUsR0FBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztDQUNGO0FBeEJELGtFQXdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElQcml6bUNoYW5nZU5hbWVUZW1wbGF0ZVRhc2ssIElQcml6bUNoYW5nZU5hbWVUZW1wbGF0ZVRhc2tQYXlsb2FkIH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBQcml6bUFzdFRlbXBsYXRlQ29udGV4dCB9IGZyb20gJy4uL21vZGVsJztcbmltcG9ydCB7IFByaXptQXN0VGFza1RlbXBsYXRlIH0gZnJvbSAnLi4vYWJzdHJhY3QnO1xuaW1wb3J0IHsgUHJpem1UZW1wbGF0ZU5vZGUgfSBmcm9tICcuLi90YXNrJztcblxuLyoqXG4gKiBQcml6bUNoYW5nZU5hbWVUZW1wbGF0ZVRhc2sgY2xhc3MgaXMgcmVzcG9uc2libGUgZm9yIGNoYW5naW5nIHRoZSBuYW1lIG9mIGEgUHJpem1Ob2RlLlxuICovXG5leHBvcnQgY2xhc3MgUHJpem1DaGFuZ2VOYW1lVGVtcGxhdGVUYXNrIGV4dGVuZHMgUHJpem1Bc3RUYXNrVGVtcGxhdGU8SVByaXptQ2hhbmdlTmFtZVRlbXBsYXRlVGFzaz4ge1xuICByZWFkb25seSB0eXBlID0gJ2NoYW5nZS1uYW1lJztcblxuICAvKipcbiAgICogVGhlIGBydW5gIG1ldGhvZCBwcm9jZXNzZXMgdGhlIGdpdmVuIG5vZGUsIHBheWxvYWQgYW5kIGNvbnRleHQgdG8gY2hhbmdlIHRoZSBuYW1lIG9mIHRoZSBQcml6bU5vZGUuXG4gICAqXG4gICAqIEBwYXJhbSBub2RlIC0gVGhlIFByaXptTm9kZSB0byBiZSBwcm9jZXNzZWQuXG4gICAqIEBwYXJhbSBwYXlsb2FkIC0gVGhlIElQcml6bUNoYW5nZU5hbWVUZW1wbGF0ZVRhc2tQYXlsb2FkIGNvbnRhaW5pbmcgdGhlIG5ldyBuYW1lIGZvciB0aGUgbm9kZS5cbiAgICogQHBhcmFtIGNvbnRleHQgLSBUaGUgUHJpem1Bc3RUZW1wbGF0ZUNvbnRleHQuXG4gICAqIEByZXR1cm5zIC0gVGhlIG1vZGlmaWVkIFByaXptTm9kZSB3aXRoIHRoZSB1cGRhdGVkIG5hbWUuXG4gICAqL1xuICBwdWJsaWMgcnVuKFxuICAgIG5vZGU6IFByaXptVGVtcGxhdGVOb2RlLFxuICAgIHBheWxvYWQ6IElQcml6bUNoYW5nZU5hbWVUZW1wbGF0ZVRhc2tQYXlsb2FkLFxuICAgIGNvbnRleHQ6IFByaXptQXN0VGVtcGxhdGVDb250ZXh0XG4gICk6IFByaXptVGVtcGxhdGVOb2RlIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHBheWxvYWQ7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBubyBuYW1lIGluIHRoZSBwYXlsb2FkLCByZXR1cm4gdGhlIG9yaWdpbmFsIG5vZGUgdW5jaGFuZ2VkXG4gICAgaWYgKCFuYW1lKSByZXR1cm4gbm9kZTtcblxuICAgIC8vIFJldHVybiBhIG5ldyBQcml6bU5vZGUgb2JqZWN0IHdpdGggdGhlIHVwZGF0ZWQgbmFtZVxuICAgIHJldHVybiB7IC4uLm5vZGUsIG5hbWUgfTtcbiAgfVxufVxuIl19