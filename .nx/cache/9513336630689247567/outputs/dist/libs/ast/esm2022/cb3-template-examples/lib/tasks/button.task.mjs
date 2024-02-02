"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZyfraButtonTemplateTasks = void 0;
const ast_1 = require("@prizm-ui/ast");
exports.ZyfraButtonTemplateTasks = [
    {
        selector: 'zyfra-button',
        tasks: [
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmChangeNameTemplateTask, {
                name: 'button',
            }),
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmAddAttributeTemplateTask, {
                attr: 'prizmButton',
            }),
        ],
        inputs: {
            label: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmMoveToContentTemplateTask, {})],
            iconPos: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            styleClass: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            badge: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
        },
        outputs: {
            onBlur: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'blur',
                }),
            ],
            onFocus: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'focus',
                }),
            ],
            onClick: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'click',
                }),
            ],
        },
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLnRhc2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FzdC9jYjMtdGVtcGxhdGUtZXhhbXBsZXMvc3JjL2xpYi90YXNrcy9idXR0b24udGFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FRdUI7QUFFVixRQUFBLHdCQUF3QixHQUF3QjtJQUMzRDtRQUNFLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLEtBQUssRUFBRTtZQUNMLElBQUEsNEJBQXNCLEVBQUMsaUNBQTJCLEVBQUU7Z0JBQ2xELElBQUksRUFBRSxRQUFRO2FBQ2YsQ0FBQztZQUNGLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUU7Z0JBQ3BELElBQUksRUFBRSxhQUFhO2FBQ3BCLENBQUM7U0FDSDtRQUNELE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsb0NBQThCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbkUsT0FBTyxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNwRSxVQUFVLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZFLEtBQUssRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDbkU7UUFDRCxPQUFPLEVBQUU7WUFDUCxNQUFNLEVBQUU7Z0JBQ04sSUFBQSw0QkFBc0IsRUFBQyw2QkFBdUIsRUFBRTtvQkFDOUMsV0FBVyxFQUFFLE1BQU07aUJBQ3BCLENBQUM7YUFDSDtZQUNELE9BQU8sRUFBRTtnQkFDUCxJQUFBLDRCQUFzQixFQUFDLDZCQUF1QixFQUFFO29CQUM5QyxXQUFXLEVBQUUsT0FBTztpQkFDckIsQ0FBQzthQUNIO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLElBQUEsNEJBQXNCLEVBQUMsNkJBQXVCLEVBQUU7b0JBQzlDLFdBQVcsRUFBRSxPQUFPO2lCQUNyQixDQUFDO2FBQ0g7U0FDRjtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFByaXptQWRkQXR0cmlidXRlVGVtcGxhdGVUYXNrLFxuICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5LFxuICBQcml6bUNoYW5nZU5hbWVUZW1wbGF0ZVRhc2ssXG4gIFByaXptTW92ZVRvQ29udGVudFRlbXBsYXRlVGFzayxcbiAgUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssXG4gIFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLFxuICBQcml6bVRlbXBsYXRlVGFzayxcbn0gZnJvbSAnQHByaXptLXVpL2FzdCc7XG5cbmV4cG9ydCBjb25zdCBaeWZyYUJ1dHRvblRlbXBsYXRlVGFza3M6IFByaXptVGVtcGxhdGVUYXNrW10gPSBbXG4gIHtcbiAgICBzZWxlY3RvcjogJ3p5ZnJhLWJ1dHRvbicsXG4gICAgdGFza3M6IFtcbiAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1DaGFuZ2VOYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgIG5hbWU6ICdidXR0b24nLFxuICAgICAgfSksXG4gICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptQWRkQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgIGF0dHI6ICdwcml6bUJ1dHRvbicsXG4gICAgICB9KSxcbiAgICBdLFxuICAgIGlucHV0czoge1xuICAgICAgbGFiZWw6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTW92ZVRvQ29udGVudFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGljb25Qb3M6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgc3R5bGVDbGFzczogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBiYWRnZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgfSxcbiAgICBvdXRwdXRzOiB7XG4gICAgICBvbkJsdXI6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIG5ld0F0dHJOYW1lOiAnYmx1cicsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIG9uRm9jdXM6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIG5ld0F0dHJOYW1lOiAnZm9jdXMnLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBvbkNsaWNrOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBuZXdBdHRyTmFtZTogJ2NsaWNrJyxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG5dO1xuIl19