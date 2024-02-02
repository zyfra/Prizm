"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZyfraAccordionTemplateTasks = void 0;
const ast_1 = require("@prizm-ui/ast");
exports.ZyfraAccordionTemplateTasks = [
    {
        selector: 'zyfra-accordion',
        tasks: [
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmChangeNameTemplateTask, {
                name: 'prizm-accordion',
            }),
        ],
        inputs: {
            styleClass: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            expandIcon: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            collapseIcon: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            multiple: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
        },
        outputs: {
            activeIndexChange: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            onClose: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            onOpen: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
        },
    },
    {
        selector: 'zyfra-accordion-tab',
        tasks: [
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmChangeNameTemplateTask, {
                name: 'prizm-accordion-item',
            }),
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmMoveContentToComponentTemplateTask, {
                name: 'ng-template',
                attrs: {
                    prizmAccordionContent: null,
                },
                children: [],
            }),
        ],
        inputs: {
            header: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'title',
                }),
            ],
            isExpanded: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'selected',
                }),
            ],
            cache: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            transitionOptions: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
        },
        outputs: {
            selectedChange: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'isExpandedChange',
                }),
            ],
        },
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLnRhc2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FzdC9jYjMtdGVtcGxhdGUtZXhhbXBsZXMvc3JjL2xpYi90YXNrcy9hY2NvcmRpb24udGFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FPdUI7QUFFVixRQUFBLDJCQUEyQixHQUF3QjtJQUM5RDtRQUNFLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsS0FBSyxFQUFFO1lBQ0wsSUFBQSw0QkFBc0IsRUFBQyxpQ0FBMkIsRUFBRTtnQkFDbEQsSUFBSSxFQUFFLGlCQUFpQjthQUN4QixDQUFDO1NBQ0g7UUFDRCxNQUFNLEVBQUU7WUFDTixVQUFVLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZFLFVBQVUsRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdkUsWUFBWSxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN6RSxRQUFRLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3RFO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsaUJBQWlCLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzlFLE9BQU8sRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDcEUsTUFBTSxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNwRTtLQUNGO0lBQ0Q7UUFDRSxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLEtBQUssRUFBRTtZQUNMLElBQUEsNEJBQXNCLEVBQUMsaUNBQTJCLEVBQUU7Z0JBQ2xELElBQUksRUFBRSxzQkFBc0I7YUFDN0IsQ0FBQztZQUNGLElBQUEsNEJBQXNCLEVBQUMsNkNBQXVDLEVBQUU7Z0JBQzlELElBQUksRUFBRSxhQUFhO2dCQUNuQixLQUFLLEVBQUU7b0JBQ0wscUJBQXFCLEVBQUUsSUFBSTtpQkFDNUI7Z0JBQ0QsUUFBUSxFQUFFLEVBQUU7YUFDYixDQUFDO1NBQ0g7UUFDRCxNQUFNLEVBQUU7WUFDTixNQUFNLEVBQUU7Z0JBQ04sSUFBQSw0QkFBc0IsRUFBQyw2QkFBdUIsRUFBRTtvQkFDOUMsV0FBVyxFQUFFLE9BQU87aUJBQ3JCLENBQUM7YUFDSDtZQUNELFVBQVUsRUFBRTtnQkFDVixJQUFBLDRCQUFzQixFQUFDLDZCQUF1QixFQUFFO29CQUM5QyxXQUFXLEVBQUUsVUFBVTtpQkFDeEIsQ0FBQzthQUNIO1lBQ0QsS0FBSyxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNsRSxpQkFBaUIsRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDL0U7UUFDRCxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUU7Z0JBQ2QsSUFBQSw0QkFBc0IsRUFBQyw2QkFBdUIsRUFBRTtvQkFDOUMsV0FBVyxFQUFFLGtCQUFrQjtpQkFDaEMsQ0FBQzthQUNIO1NBQ0Y7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5LFxuICBQcml6bUNoYW5nZU5hbWVUZW1wbGF0ZVRhc2ssXG4gIFByaXptTW92ZUNvbnRlbnRUb0NvbXBvbmVudFRlbXBsYXRlVGFzayxcbiAgUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssXG4gIFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLFxuICBQcml6bVRlbXBsYXRlVGFzayxcbn0gZnJvbSAnQHByaXptLXVpL2FzdCc7XG5cbmV4cG9ydCBjb25zdCBaeWZyYUFjY29yZGlvblRlbXBsYXRlVGFza3M6IFByaXptVGVtcGxhdGVUYXNrW10gPSBbXG4gIHtcbiAgICBzZWxlY3RvcjogJ3p5ZnJhLWFjY29yZGlvbicsXG4gICAgdGFza3M6IFtcbiAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1DaGFuZ2VOYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgIG5hbWU6ICdwcml6bS1hY2NvcmRpb24nLFxuICAgICAgfSksXG4gICAgXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIHN0eWxlQ2xhc3M6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgZXhwYW5kSWNvbjogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBjb2xsYXBzZUljb246IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgbXVsdGlwbGU6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgIH0sXG4gICAgb3V0cHV0czoge1xuICAgICAgYWN0aXZlSW5kZXhDaGFuZ2U6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgb25DbG9zZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBvbk9wZW46IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ3p5ZnJhLWFjY29yZGlvbi10YWInLFxuICAgIHRhc2tzOiBbXG4gICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptQ2hhbmdlTmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICBuYW1lOiAncHJpem0tYWNjb3JkaW9uLWl0ZW0nLFxuICAgICAgfSksXG4gICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTW92ZUNvbnRlbnRUb0NvbXBvbmVudFRlbXBsYXRlVGFzaywge1xuICAgICAgICBuYW1lOiAnbmctdGVtcGxhdGUnLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHByaXptQWNjb3JkaW9uQ29udGVudDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgfSksXG4gICAgXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGhlYWRlcjogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgbmV3QXR0ck5hbWU6ICd0aXRsZScsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIGlzRXhwYW5kZWQ6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIG5ld0F0dHJOYW1lOiAnc2VsZWN0ZWQnLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBjYWNoZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICB0cmFuc2l0aW9uT3B0aW9uczogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgfSxcbiAgICBvdXRwdXRzOiB7XG4gICAgICBzZWxlY3RlZENoYW5nZTogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgbmV3QXR0ck5hbWU6ICdpc0V4cGFuZGVkQ2hhbmdlJyxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG5dO1xuIl19