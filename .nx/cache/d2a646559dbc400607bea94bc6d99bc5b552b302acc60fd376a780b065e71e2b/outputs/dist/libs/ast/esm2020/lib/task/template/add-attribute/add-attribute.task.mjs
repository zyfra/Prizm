"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizmAddAttributeTemplateTask = void 0;
const abstract_1 = require("../abstract");
const util_1 = require("../util");
/**
 * PrizmAddAttributeTemplateTask class is responsible for adding an attribute to a PrizmNode.
 */
class PrizmAddAttributeTemplateTask extends abstract_1.PrizmAstTaskTemplate {
    constructor() {
        super(...arguments);
        this.type = 'add-attribute';
    }
    /**
     * The `run` method processes the given node, payload and context to add an attribute to the PrizmNode.
     *
     * @param node - The PrizmNode to be processed.
     * @param payload - The IPrizmAddAttributeTemplateTaskPayload containing the attribute to be added.
     * @param context - The PrizmAstTemplateContext.
     * @returns - The modified PrizmNode with the attribute added.
     */
    run(node, payload, context) {
        const attr = payload.attr;
        // If there is no attribute in the payload, return the original node unchanged
        if (!attr)
            return node;
        const newValue = payload.passValue && context.originName
            ? (0, util_1.prizmAstFindAttributeWithType)(context.attrName, node.attrs)?.value
            : null;
        // Return a new PrizmNode object with the added attribute
        return {
            ...node,
            attrs: {
                ...node.attrs,
                [attr]: newValue,
            },
        };
    }
}
exports.PrizmAddAttributeTemplateTask = PrizmAddAttributeTemplateTask;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWF0dHJpYnV0ZS50YXNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hc3Qvc3JjL2xpYi90YXNrL3RlbXBsYXRlL2FkZC1hdHRyaWJ1dGUvYWRkLWF0dHJpYnV0ZS50YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDBDQUFtRDtBQUVuRCxrQ0FBd0Q7QUFFeEQ7O0dBRUc7QUFDSCxNQUFhLDZCQUE4QixTQUFRLCtCQUFvRDtJQUF2Rzs7UUFDVyxTQUFJLEdBQUcsZUFBZSxDQUFDO0lBa0NsQyxDQUFDO0lBaENDOzs7Ozs7O09BT0c7SUFDSSxHQUFHLENBQ1IsSUFBdUIsRUFDdkIsT0FBOEMsRUFDOUMsT0FBZ0M7UUFFaEMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUUxQiw4RUFBOEU7UUFDOUUsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUV2QixNQUFNLFFBQVEsR0FDWixPQUFPLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxVQUFVO1lBQ3JDLENBQUMsQ0FBQyxJQUFBLG9DQUE2QixFQUFDLE9BQU8sQ0FBQyxRQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUs7WUFDM0UsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUVYLHlEQUF5RDtRQUN6RCxPQUFPO1lBQ0wsR0FBRyxJQUFJO1lBQ1AsS0FBSyxFQUFFO2dCQUNMLEdBQUcsSUFBSSxDQUFDLEtBQUs7Z0JBQ2IsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRO2FBQ2pCO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQW5DRCxzRUFtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUHJpem1BZGRBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIElQcml6bUFkZEF0dHJpYnV0ZVRlbXBsYXRlVGFza1BheWxvYWQgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IFByaXptQXN0VGVtcGxhdGVDb250ZXh0IH0gZnJvbSAnLi4vbW9kZWwnO1xuaW1wb3J0IHsgUHJpem1Bc3RUYXNrVGVtcGxhdGUgfSBmcm9tICcuLi9hYnN0cmFjdCc7XG5pbXBvcnQgeyBQcml6bVRlbXBsYXRlTm9kZSB9IGZyb20gJy4uL3Rhc2snO1xuaW1wb3J0IHsgcHJpem1Bc3RGaW5kQXR0cmlidXRlV2l0aFR5cGUgfSBmcm9tICcuLi91dGlsJztcblxuLyoqXG4gKiBQcml6bUFkZEF0dHJpYnV0ZVRlbXBsYXRlVGFzayBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgYWRkaW5nIGFuIGF0dHJpYnV0ZSB0byBhIFByaXptTm9kZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFByaXptQWRkQXR0cmlidXRlVGVtcGxhdGVUYXNrIGV4dGVuZHMgUHJpem1Bc3RUYXNrVGVtcGxhdGU8SVByaXptQWRkQXR0cmlidXRlVGVtcGxhdGVUYXNrPiB7XG4gIHJlYWRvbmx5IHR5cGUgPSAnYWRkLWF0dHJpYnV0ZSc7XG5cbiAgLyoqXG4gICAqIFRoZSBgcnVuYCBtZXRob2QgcHJvY2Vzc2VzIHRoZSBnaXZlbiBub2RlLCBwYXlsb2FkIGFuZCBjb250ZXh0IHRvIGFkZCBhbiBhdHRyaWJ1dGUgdG8gdGhlIFByaXptTm9kZS5cbiAgICpcbiAgICogQHBhcmFtIG5vZGUgLSBUaGUgUHJpem1Ob2RlIHRvIGJlIHByb2Nlc3NlZC5cbiAgICogQHBhcmFtIHBheWxvYWQgLSBUaGUgSVByaXptQWRkQXR0cmlidXRlVGVtcGxhdGVUYXNrUGF5bG9hZCBjb250YWluaW5nIHRoZSBhdHRyaWJ1dGUgdG8gYmUgYWRkZWQuXG4gICAqIEBwYXJhbSBjb250ZXh0IC0gVGhlIFByaXptQXN0VGVtcGxhdGVDb250ZXh0LlxuICAgKiBAcmV0dXJucyAtIFRoZSBtb2RpZmllZCBQcml6bU5vZGUgd2l0aCB0aGUgYXR0cmlidXRlIGFkZGVkLlxuICAgKi9cbiAgcHVibGljIHJ1bihcbiAgICBub2RlOiBQcml6bVRlbXBsYXRlTm9kZSxcbiAgICBwYXlsb2FkOiBJUHJpem1BZGRBdHRyaWJ1dGVUZW1wbGF0ZVRhc2tQYXlsb2FkLFxuICAgIGNvbnRleHQ6IFByaXptQXN0VGVtcGxhdGVDb250ZXh0XG4gICk6IFByaXptVGVtcGxhdGVOb2RlIHtcbiAgICBjb25zdCBhdHRyID0gcGF5bG9hZC5hdHRyO1xuXG4gICAgLy8gSWYgdGhlcmUgaXMgbm8gYXR0cmlidXRlIGluIHRoZSBwYXlsb2FkLCByZXR1cm4gdGhlIG9yaWdpbmFsIG5vZGUgdW5jaGFuZ2VkXG4gICAgaWYgKCFhdHRyKSByZXR1cm4gbm9kZTtcblxuICAgIGNvbnN0IG5ld1ZhbHVlID1cbiAgICAgIHBheWxvYWQucGFzc1ZhbHVlICYmIGNvbnRleHQub3JpZ2luTmFtZVxuICAgICAgICA/IHByaXptQXN0RmluZEF0dHJpYnV0ZVdpdGhUeXBlKGNvbnRleHQuYXR0ck5hbWUgYXMgYW55LCBub2RlLmF0dHJzKT8udmFsdWVcbiAgICAgICAgOiBudWxsO1xuXG4gICAgLy8gUmV0dXJuIGEgbmV3IFByaXptTm9kZSBvYmplY3Qgd2l0aCB0aGUgYWRkZWQgYXR0cmlidXRlXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm5vZGUsXG4gICAgICBhdHRyczoge1xuICAgICAgICAuLi5ub2RlLmF0dHJzLFxuICAgICAgICBbYXR0cl06IG5ld1ZhbHVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iXX0=