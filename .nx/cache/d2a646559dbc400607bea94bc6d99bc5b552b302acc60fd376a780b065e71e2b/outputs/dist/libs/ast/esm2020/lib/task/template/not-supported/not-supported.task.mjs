"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizmNotSupportedTemplateTask = void 0;
const model_1 = require("../model");
const abstract_1 = require("../abstract");
const util_1 = require("../util");
/**
 * PrizmNotSupportedTemplateTask class is responsible for handling not supported attributes in a PrizmNode.
 */
class PrizmNotSupportedTemplateTask extends abstract_1.PrizmAstTaskTemplate {
    constructor() {
        super(...arguments);
        this.type = 'not-supported';
    }
    /**
     * The `run` method processes the given node, payload and context to handle not supported attributes in the PrizmNode.
     *
     * @param node - The PrizmNode to be processed.
     * @param payload - The IPrizmNotSupportedTemplateTaskPayload containing the not supported attribute.
     * @param context - The PrizmAstTemplateContext.
     * @returns - The modified PrizmNode with a comment added for the not supported attribute.
     */
    run(node, payload, context) {
        const attr = payload.attr ?? context?.originName;
        // If there is no attribute, return the original node unchanged
        if (!attr)
            return node;
        const children = node.children ?? [];
        if (context.runIn === 'inputs') {
            (0, util_1.prizmAstHasAttribute)(attr, node.attrs);
        }
        const attrTypes = [];
        if (context.runIn === 'tasks') {
            attrTypes.push(model_1.PrizmAstTemplateAttributeType.input, model_1.PrizmAstTemplateAttributeType.inputOutput, model_1.PrizmAstTemplateAttributeType.inputVar, model_1.PrizmAstTemplateAttributeType.output);
        }
        else if (context.runIn === 'inputs') {
            attrTypes.push(model_1.PrizmAstTemplateAttributeType.input, model_1.PrizmAstTemplateAttributeType.inputOutput, model_1.PrizmAstTemplateAttributeType.inputVar);
        }
        else if (context.runIn === 'outputs') {
            attrTypes.push(model_1.PrizmAstTemplateAttributeType.output, model_1.PrizmAstTemplateAttributeType.inputOutput);
        }
        const data = (0, util_1.prizmAstFindAttributeWithType)(attr, node.attrs, attrTypes);
        if (data) {
            // Remove the not supported attribute from the node's attrs object
            delete node.attrs[data.attrName];
        }
        // Add a comment to the node's children indicating the not supported attribute
        children.push({
            type: 'comment',
            comment: `TODO not supported attr <${data?.attrName ?? attr}> in <${node.name}> with value <${data?.value}>`,
        });
        // Add a comment to the node's children indicating the not supported attribute
        if (payload.extraComment)
            children.push({
                type: 'comment',
                comment: payload.extraComment,
            });
        node.children = [...children];
        // Return the modified node with the comment added for the not supported attribute
        return { ...node };
    }
}
exports.PrizmNotSupportedTemplateTask = PrizmNotSupportedTemplateTask;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LXN1cHBvcnRlZC50YXNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hc3Qvc3JjL2xpYi90YXNrL3RlbXBsYXRlL25vdC1zdXBwb3J0ZWQvbm90LXN1cHBvcnRlZC50YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLG9DQUFrRjtBQUNsRiwwQ0FBbUQ7QUFFbkQsa0NBQXdHO0FBRXhHOztHQUVHO0FBQ0gsTUFBYSw2QkFBOEIsU0FBUSwrQkFBb0Q7SUFBdkc7O1FBQ1csU0FBSSxHQUFHLGVBQWUsQ0FBQztJQXVFbEMsQ0FBQztJQXJFQzs7Ozs7OztPQU9HO0lBQ0ksR0FBRyxDQUNSLElBQXVCLEVBQ3ZCLE9BQThDLEVBQzlDLE9BQWdDO1FBRWhDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFFLFVBQVUsQ0FBQztRQUVqRCwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUV2QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUVyQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzlCLElBQUEsMkJBQW9CLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QztRQUVELE1BQU0sU0FBUyxHQUFvQyxFQUFFLENBQUM7UUFDdEQsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLE9BQU8sRUFBRTtZQUM3QixTQUFTLENBQUMsSUFBSSxDQUNaLHFDQUE2QixDQUFDLEtBQUssRUFDbkMscUNBQTZCLENBQUMsV0FBVyxFQUN6QyxxQ0FBNkIsQ0FBQyxRQUFRLEVBQ3RDLHFDQUE2QixDQUFDLE1BQU0sQ0FDckMsQ0FBQztTQUNIO2FBQU0sSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUNyQyxTQUFTLENBQUMsSUFBSSxDQUNaLHFDQUE2QixDQUFDLEtBQUssRUFDbkMscUNBQTZCLENBQUMsV0FBVyxFQUN6QyxxQ0FBNkIsQ0FBQyxRQUFRLENBQ3ZDLENBQUM7U0FDSDthQUFNLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdEMsU0FBUyxDQUFDLElBQUksQ0FBQyxxQ0FBNkIsQ0FBQyxNQUFNLEVBQUUscUNBQTZCLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDakc7UUFFRCxNQUFNLElBQUksR0FBRyxJQUFBLG9DQUE2QixFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRXhFLElBQUksSUFBSSxFQUFFO1lBQ1Isa0VBQWtFO1lBQ2xFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEM7UUFFRCw4RUFBOEU7UUFDOUUsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNaLElBQUksRUFBRSxTQUFTO1lBQ2YsT0FBTyxFQUFFLDRCQUE0QixJQUFJLEVBQUUsUUFBUSxJQUFJLElBQUksU0FBUyxJQUFJLENBQUMsSUFBSSxpQkFDM0UsSUFBSSxFQUFFLEtBQ1IsR0FBRztTQUNHLENBQUMsQ0FBQztRQUVWLDhFQUE4RTtRQUM5RSxJQUFJLE9BQU8sQ0FBQyxZQUFZO1lBQ3RCLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ1osSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsT0FBTyxFQUFFLE9BQU8sQ0FBQyxZQUFZO2FBQ3ZCLENBQUMsQ0FBQztRQUVaLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBRTlCLGtGQUFrRjtRQUNsRixPQUFPLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0NBQ0Y7QUF4RUQsc0VBd0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCBJUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2tQYXlsb2FkIH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBQcml6bUFzdFRlbXBsYXRlQXR0cmlidXRlVHlwZSwgUHJpem1Bc3RUZW1wbGF0ZUNvbnRleHQgfSBmcm9tICcuLi9tb2RlbCc7XG5pbXBvcnQgeyBQcml6bUFzdFRhc2tUZW1wbGF0ZSB9IGZyb20gJy4uL2Fic3RyYWN0JztcbmltcG9ydCB7IFByaXptVGVtcGxhdGVOb2RlIH0gZnJvbSAnLi4vdGFzayc7XG5pbXBvcnQgeyBwcml6bUFzdEZpbmRBdHRyaWJ1dGVXaXRoVHlwZSwgcHJpem1Bc3RIYXNBdHRyaWJ1dGUsIHByaXptQXN0UmVtb3ZlQnlBdHRyTmFtZSB9IGZyb20gJy4uL3V0aWwnO1xuXG4vKipcbiAqIFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrIGNsYXNzIGlzIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyBub3Qgc3VwcG9ydGVkIGF0dHJpYnV0ZXMgaW4gYSBQcml6bU5vZGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzayBleHRlbmRzIFByaXptQXN0VGFza1RlbXBsYXRlPElQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaz4ge1xuICByZWFkb25seSB0eXBlID0gJ25vdC1zdXBwb3J0ZWQnO1xuXG4gIC8qKlxuICAgKiBUaGUgYHJ1bmAgbWV0aG9kIHByb2Nlc3NlcyB0aGUgZ2l2ZW4gbm9kZSwgcGF5bG9hZCBhbmQgY29udGV4dCB0byBoYW5kbGUgbm90IHN1cHBvcnRlZCBhdHRyaWJ1dGVzIGluIHRoZSBQcml6bU5vZGUuXG4gICAqXG4gICAqIEBwYXJhbSBub2RlIC0gVGhlIFByaXptTm9kZSB0byBiZSBwcm9jZXNzZWQuXG4gICAqIEBwYXJhbSBwYXlsb2FkIC0gVGhlIElQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFza1BheWxvYWQgY29udGFpbmluZyB0aGUgbm90IHN1cHBvcnRlZCBhdHRyaWJ1dGUuXG4gICAqIEBwYXJhbSBjb250ZXh0IC0gVGhlIFByaXptQXN0VGVtcGxhdGVDb250ZXh0LlxuICAgKiBAcmV0dXJucyAtIFRoZSBtb2RpZmllZCBQcml6bU5vZGUgd2l0aCBhIGNvbW1lbnQgYWRkZWQgZm9yIHRoZSBub3Qgc3VwcG9ydGVkIGF0dHJpYnV0ZS5cbiAgICovXG4gIHB1YmxpYyBydW4oXG4gICAgbm9kZTogUHJpem1UZW1wbGF0ZU5vZGUsXG4gICAgcGF5bG9hZDogSVByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrUGF5bG9hZCxcbiAgICBjb250ZXh0OiBQcml6bUFzdFRlbXBsYXRlQ29udGV4dFxuICApOiBQcml6bVRlbXBsYXRlTm9kZSB7XG4gICAgY29uc3QgYXR0ciA9IHBheWxvYWQuYXR0ciA/PyBjb250ZXh0Py5vcmlnaW5OYW1lO1xuXG4gICAgLy8gSWYgdGhlcmUgaXMgbm8gYXR0cmlidXRlLCByZXR1cm4gdGhlIG9yaWdpbmFsIG5vZGUgdW5jaGFuZ2VkXG4gICAgaWYgKCFhdHRyKSByZXR1cm4gbm9kZTtcblxuICAgIGNvbnN0IGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbiA/PyBbXTtcblxuICAgIGlmIChjb250ZXh0LnJ1bkluID09PSAnaW5wdXRzJykge1xuICAgICAgcHJpem1Bc3RIYXNBdHRyaWJ1dGUoYXR0ciwgbm9kZS5hdHRycyk7XG4gICAgfVxuXG4gICAgY29uc3QgYXR0clR5cGVzOiBQcml6bUFzdFRlbXBsYXRlQXR0cmlidXRlVHlwZVtdID0gW107XG4gICAgaWYgKGNvbnRleHQucnVuSW4gPT09ICd0YXNrcycpIHtcbiAgICAgIGF0dHJUeXBlcy5wdXNoKFxuICAgICAgICBQcml6bUFzdFRlbXBsYXRlQXR0cmlidXRlVHlwZS5pbnB1dCxcbiAgICAgICAgUHJpem1Bc3RUZW1wbGF0ZUF0dHJpYnV0ZVR5cGUuaW5wdXRPdXRwdXQsXG4gICAgICAgIFByaXptQXN0VGVtcGxhdGVBdHRyaWJ1dGVUeXBlLmlucHV0VmFyLFxuICAgICAgICBQcml6bUFzdFRlbXBsYXRlQXR0cmlidXRlVHlwZS5vdXRwdXRcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChjb250ZXh0LnJ1bkluID09PSAnaW5wdXRzJykge1xuICAgICAgYXR0clR5cGVzLnB1c2goXG4gICAgICAgIFByaXptQXN0VGVtcGxhdGVBdHRyaWJ1dGVUeXBlLmlucHV0LFxuICAgICAgICBQcml6bUFzdFRlbXBsYXRlQXR0cmlidXRlVHlwZS5pbnB1dE91dHB1dCxcbiAgICAgICAgUHJpem1Bc3RUZW1wbGF0ZUF0dHJpYnV0ZVR5cGUuaW5wdXRWYXJcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChjb250ZXh0LnJ1bkluID09PSAnb3V0cHV0cycpIHtcbiAgICAgIGF0dHJUeXBlcy5wdXNoKFByaXptQXN0VGVtcGxhdGVBdHRyaWJ1dGVUeXBlLm91dHB1dCwgUHJpem1Bc3RUZW1wbGF0ZUF0dHJpYnV0ZVR5cGUuaW5wdXRPdXRwdXQpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBwcml6bUFzdEZpbmRBdHRyaWJ1dGVXaXRoVHlwZShhdHRyLCBub2RlLmF0dHJzLCBhdHRyVHlwZXMpO1xuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIC8vIFJlbW92ZSB0aGUgbm90IHN1cHBvcnRlZCBhdHRyaWJ1dGUgZnJvbSB0aGUgbm9kZSdzIGF0dHJzIG9iamVjdFxuICAgICAgZGVsZXRlIG5vZGUuYXR0cnNbZGF0YS5hdHRyTmFtZV07XG4gICAgfVxuXG4gICAgLy8gQWRkIGEgY29tbWVudCB0byB0aGUgbm9kZSdzIGNoaWxkcmVuIGluZGljYXRpbmcgdGhlIG5vdCBzdXBwb3J0ZWQgYXR0cmlidXRlXG4gICAgY2hpbGRyZW4ucHVzaCh7XG4gICAgICB0eXBlOiAnY29tbWVudCcsXG4gICAgICBjb21tZW50OiBgVE9ETyBub3Qgc3VwcG9ydGVkIGF0dHIgPCR7ZGF0YT8uYXR0ck5hbWUgPz8gYXR0cn0+IGluIDwke25vZGUubmFtZX0+IHdpdGggdmFsdWUgPCR7XG4gICAgICAgIGRhdGE/LnZhbHVlXG4gICAgICB9PmAsXG4gICAgfSBhcyBhbnkpO1xuXG4gICAgLy8gQWRkIGEgY29tbWVudCB0byB0aGUgbm9kZSdzIGNoaWxkcmVuIGluZGljYXRpbmcgdGhlIG5vdCBzdXBwb3J0ZWQgYXR0cmlidXRlXG4gICAgaWYgKHBheWxvYWQuZXh0cmFDb21tZW50KVxuICAgICAgY2hpbGRyZW4ucHVzaCh7XG4gICAgICAgIHR5cGU6ICdjb21tZW50JyxcbiAgICAgICAgY29tbWVudDogcGF5bG9hZC5leHRyYUNvbW1lbnQsXG4gICAgICB9IGFzIGFueSk7XG5cbiAgICBub2RlLmNoaWxkcmVuID0gWy4uLmNoaWxkcmVuXTtcblxuICAgIC8vIFJldHVybiB0aGUgbW9kaWZpZWQgbm9kZSB3aXRoIHRoZSBjb21tZW50IGFkZGVkIGZvciB0aGUgbm90IHN1cHBvcnRlZCBhdHRyaWJ1dGVcbiAgICByZXR1cm4geyAuLi5ub2RlIH07XG4gIH1cbn1cbiJdfQ==