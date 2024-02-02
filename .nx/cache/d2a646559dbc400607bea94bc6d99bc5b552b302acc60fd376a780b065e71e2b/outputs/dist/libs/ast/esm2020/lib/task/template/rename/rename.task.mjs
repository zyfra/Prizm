"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizmRenameTemplateTask = void 0;
const model_1 = require("../model");
const abstract_1 = require("../abstract");
const util_1 = require("../util");
/**
 * PrizmRenameTemplateTask class is responsible for renaming attributes in a PrizmNode.
 */
class PrizmRenameTemplateTask extends abstract_1.PrizmAstTaskTemplate {
    constructor() {
        super(...arguments);
        this.type = 'rename';
    }
    /**
     * The `run` method processes the given node, payload, and context to rename attributes in the PrizmNode.
     *
     * @param node - The PrizmNode to be processed.
     * @param payload - The IPrizmRenameTemplateTaskPayload containing the old and new attribute names.
     * @param context - The PrizmAstTemplateContext.
     * @returns - The modified PrizmNode with the attributes renamed.
     */
    run(node, payload, context) {
        // Return the original node unchanged if there's no payload or no new attribute name
        if (!payload || !payload.newAttrName)
            return node;
        // If there is an old attribute name in the payload, convert it to a proper attribute name
        if (payload.oldAttrName)
            payload.oldAttrName = (0, util_1.prizmAstGetAttrName)(payload.oldAttrName);
        // Determine the attribute to rename
        let attr = payload.oldAttrName ?? context?.attrName;
        // Return the original node unchanged if there's no context.runIn
        if (!context.runIn)
            return node;
        const attrWithType = (0, util_1.prizmAstFindAttributeWithType)(attr, context.sourceNode.attrs, context.runIn === 'outputs'
            ? [model_1.PrizmAstTemplateAttributeType.output]
            : [model_1.PrizmAstTemplateAttributeType.input, model_1.PrizmAstTemplateAttributeType.inputVar]);
        if (!attrWithType)
            return node;
        attr = attrWithType.attrName;
        const newName = (0, util_1.prizmAstConvertAttrNameByType)(payload.newAttrName, attrWithType?.type);
        const oldValue = 'value' in payload ? payload.value : attrWithType.value;
        node.attrs[newName] = oldValue;
        if (node !== context.sourceNode || attr !== newName)
            delete context.sourceNode.attrs[attr];
        // Add a comment to fix API differences if needFixApi is true
        if (payload.needFixApi) {
            node.children = [
                ...(node.children ?? []),
                {
                    type: 'comment',
                    comment: `TODO: ${attr} > ${payload.newAttrName} has different api, please manually fix it here`,
                },
            ];
        }
        // Return the modified node with the attributes renamed
        return { ...node };
    }
}
exports.PrizmRenameTemplateTask = PrizmRenameTemplateTask;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuYW1lLnRhc2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FzdC9zcmMvbGliL3Rhc2svdGVtcGxhdGUvcmVuYW1lL3JlbmFtZS50YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLG9DQUFrRjtBQUNsRiwwQ0FBbUQ7QUFFbkQsa0NBQTRHO0FBRTVHOztHQUVHO0FBQ0gsTUFBYSx1QkFBd0IsU0FBUSwrQkFBOEM7SUFBM0Y7O1FBQ1csU0FBSSxHQUFHLFFBQVEsQ0FBQztJQXlEM0IsQ0FBQztJQXZEQzs7Ozs7OztPQU9HO0lBQ0ksR0FBRyxDQUNSLElBQXVCLEVBQ3ZCLE9BQXdDLEVBQ3hDLE9BQWdDO1FBRWhDLG9GQUFvRjtRQUNwRixJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFBRSxPQUFPLElBQUksQ0FBQztRQUVsRCwwRkFBMEY7UUFDMUYsSUFBSSxPQUFPLENBQUMsV0FBVztZQUFFLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBQSwwQkFBbUIsRUFBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFeEYsb0NBQW9DO1FBQ3BDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxXQUFXLElBQUksT0FBTyxFQUFFLFFBQVEsQ0FBQztRQUVwRCxpRUFBaUU7UUFDakUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFaEMsTUFBTSxZQUFZLEdBQUcsSUFBQSxvQ0FBNkIsRUFDaEQsSUFBVyxFQUNYLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUN4QixPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVM7WUFDekIsQ0FBQyxDQUFDLENBQUMscUNBQTZCLENBQUMsTUFBTSxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxDQUFDLHFDQUE2QixDQUFDLEtBQUssRUFBRSxxQ0FBNkIsQ0FBQyxRQUFRLENBQUMsQ0FDbEYsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDL0IsSUFBSSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFFN0IsTUFBTSxPQUFPLEdBQUcsSUFBQSxvQ0FBNkIsRUFBQyxPQUFPLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RixNQUFNLFFBQVEsR0FBRyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQy9CLElBQUksSUFBSSxLQUFLLE9BQU8sQ0FBQyxVQUFVLElBQUksSUFBSSxLQUFLLE9BQU87WUFBRSxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNGLDZEQUE2RDtRQUM3RCxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRztnQkFDZCxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCO29CQUNFLElBQUksRUFBRSxTQUFTO29CQUNmLE9BQU8sRUFBRSxTQUFTLElBQUksTUFBTSxPQUFPLENBQUMsV0FBVyxpREFBaUQ7aUJBQzFGO2FBQ1QsQ0FBQztTQUNIO1FBRUQsdURBQXVEO1FBQ3ZELE9BQU8sRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7Q0FDRjtBQTFERCwwREEwREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIElQcml6bVJlbmFtZVRlbXBsYXRlVGFza1BheWxvYWQgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IFByaXptQXN0VGVtcGxhdGVBdHRyaWJ1dGVUeXBlLCBQcml6bUFzdFRlbXBsYXRlQ29udGV4dCB9IGZyb20gJy4uL21vZGVsJztcbmltcG9ydCB7IFByaXptQXN0VGFza1RlbXBsYXRlIH0gZnJvbSAnLi4vYWJzdHJhY3QnO1xuaW1wb3J0IHsgUHJpem1UZW1wbGF0ZU5vZGUgfSBmcm9tICcuLi90YXNrJztcbmltcG9ydCB7IHByaXptQXN0Q29udmVydEF0dHJOYW1lQnlUeXBlLCBwcml6bUFzdEZpbmRBdHRyaWJ1dGVXaXRoVHlwZSwgcHJpem1Bc3RHZXRBdHRyTmFtZSB9IGZyb20gJy4uL3V0aWwnO1xuXG4vKipcbiAqIFByaXptUmVuYW1lVGVtcGxhdGVUYXNrIGNsYXNzIGlzIHJlc3BvbnNpYmxlIGZvciByZW5hbWluZyBhdHRyaWJ1dGVzIGluIGEgUHJpem1Ob2RlLlxuICovXG5leHBvcnQgY2xhc3MgUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2sgZXh0ZW5kcyBQcml6bUFzdFRhc2tUZW1wbGF0ZTxJUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2s+IHtcbiAgcmVhZG9ubHkgdHlwZSA9ICdyZW5hbWUnO1xuXG4gIC8qKlxuICAgKiBUaGUgYHJ1bmAgbWV0aG9kIHByb2Nlc3NlcyB0aGUgZ2l2ZW4gbm9kZSwgcGF5bG9hZCwgYW5kIGNvbnRleHQgdG8gcmVuYW1lIGF0dHJpYnV0ZXMgaW4gdGhlIFByaXptTm9kZS5cbiAgICpcbiAgICogQHBhcmFtIG5vZGUgLSBUaGUgUHJpem1Ob2RlIHRvIGJlIHByb2Nlc3NlZC5cbiAgICogQHBhcmFtIHBheWxvYWQgLSBUaGUgSVByaXptUmVuYW1lVGVtcGxhdGVUYXNrUGF5bG9hZCBjb250YWluaW5nIHRoZSBvbGQgYW5kIG5ldyBhdHRyaWJ1dGUgbmFtZXMuXG4gICAqIEBwYXJhbSBjb250ZXh0IC0gVGhlIFByaXptQXN0VGVtcGxhdGVDb250ZXh0LlxuICAgKiBAcmV0dXJucyAtIFRoZSBtb2RpZmllZCBQcml6bU5vZGUgd2l0aCB0aGUgYXR0cmlidXRlcyByZW5hbWVkLlxuICAgKi9cbiAgcHVibGljIHJ1bihcbiAgICBub2RlOiBQcml6bVRlbXBsYXRlTm9kZSxcbiAgICBwYXlsb2FkOiBJUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2tQYXlsb2FkLFxuICAgIGNvbnRleHQ6IFByaXptQXN0VGVtcGxhdGVDb250ZXh0XG4gICk6IFByaXptVGVtcGxhdGVOb2RlIHtcbiAgICAvLyBSZXR1cm4gdGhlIG9yaWdpbmFsIG5vZGUgdW5jaGFuZ2VkIGlmIHRoZXJlJ3Mgbm8gcGF5bG9hZCBvciBubyBuZXcgYXR0cmlidXRlIG5hbWVcbiAgICBpZiAoIXBheWxvYWQgfHwgIXBheWxvYWQubmV3QXR0ck5hbWUpIHJldHVybiBub2RlO1xuXG4gICAgLy8gSWYgdGhlcmUgaXMgYW4gb2xkIGF0dHJpYnV0ZSBuYW1lIGluIHRoZSBwYXlsb2FkLCBjb252ZXJ0IGl0IHRvIGEgcHJvcGVyIGF0dHJpYnV0ZSBuYW1lXG4gICAgaWYgKHBheWxvYWQub2xkQXR0ck5hbWUpIHBheWxvYWQub2xkQXR0ck5hbWUgPSBwcml6bUFzdEdldEF0dHJOYW1lKHBheWxvYWQub2xkQXR0ck5hbWUpO1xuXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBhdHRyaWJ1dGUgdG8gcmVuYW1lXG4gICAgbGV0IGF0dHIgPSBwYXlsb2FkLm9sZEF0dHJOYW1lID8/IGNvbnRleHQ/LmF0dHJOYW1lO1xuXG4gICAgLy8gUmV0dXJuIHRoZSBvcmlnaW5hbCBub2RlIHVuY2hhbmdlZCBpZiB0aGVyZSdzIG5vIGNvbnRleHQucnVuSW5cbiAgICBpZiAoIWNvbnRleHQucnVuSW4pIHJldHVybiBub2RlO1xuXG4gICAgY29uc3QgYXR0cldpdGhUeXBlID0gcHJpem1Bc3RGaW5kQXR0cmlidXRlV2l0aFR5cGUoXG4gICAgICBhdHRyIGFzIGFueSxcbiAgICAgIGNvbnRleHQuc291cmNlTm9kZS5hdHRycyxcbiAgICAgIGNvbnRleHQucnVuSW4gPT09ICdvdXRwdXRzJ1xuICAgICAgICA/IFtQcml6bUFzdFRlbXBsYXRlQXR0cmlidXRlVHlwZS5vdXRwdXRdXG4gICAgICAgIDogW1ByaXptQXN0VGVtcGxhdGVBdHRyaWJ1dGVUeXBlLmlucHV0LCBQcml6bUFzdFRlbXBsYXRlQXR0cmlidXRlVHlwZS5pbnB1dFZhcl1cbiAgICApO1xuXG4gICAgaWYgKCFhdHRyV2l0aFR5cGUpIHJldHVybiBub2RlO1xuICAgIGF0dHIgPSBhdHRyV2l0aFR5cGUuYXR0ck5hbWU7XG5cbiAgICBjb25zdCBuZXdOYW1lID0gcHJpem1Bc3RDb252ZXJ0QXR0ck5hbWVCeVR5cGUocGF5bG9hZC5uZXdBdHRyTmFtZSwgYXR0cldpdGhUeXBlPy50eXBlKTtcbiAgICBjb25zdCBvbGRWYWx1ZSA9ICd2YWx1ZScgaW4gcGF5bG9hZCA/IHBheWxvYWQudmFsdWUgOiBhdHRyV2l0aFR5cGUudmFsdWU7XG4gICAgbm9kZS5hdHRyc1tuZXdOYW1lXSA9IG9sZFZhbHVlO1xuICAgIGlmIChub2RlICE9PSBjb250ZXh0LnNvdXJjZU5vZGUgfHwgYXR0ciAhPT0gbmV3TmFtZSkgZGVsZXRlIGNvbnRleHQuc291cmNlTm9kZS5hdHRyc1thdHRyXTtcblxuICAgIC8vIEFkZCBhIGNvbW1lbnQgdG8gZml4IEFQSSBkaWZmZXJlbmNlcyBpZiBuZWVkRml4QXBpIGlzIHRydWVcbiAgICBpZiAocGF5bG9hZC5uZWVkRml4QXBpKSB7XG4gICAgICBub2RlLmNoaWxkcmVuID0gW1xuICAgICAgICAuLi4obm9kZS5jaGlsZHJlbiA/PyBbXSksXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnY29tbWVudCcsXG4gICAgICAgICAgY29tbWVudDogYFRPRE86ICR7YXR0cn0gPiAke3BheWxvYWQubmV3QXR0ck5hbWV9IGhhcyBkaWZmZXJlbnQgYXBpLCBwbGVhc2UgbWFudWFsbHkgZml4IGl0IGhlcmVgLFxuICAgICAgICB9IGFzIGFueSxcbiAgICAgIF07XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtb2RpZmllZCBub2RlIHdpdGggdGhlIGF0dHJpYnV0ZXMgcmVuYW1lZFxuICAgIHJldHVybiB7IC4uLm5vZGUgfTtcbiAgfVxufVxuIl19