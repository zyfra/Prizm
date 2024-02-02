"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZyfraToggleButtonTemplateTasks = void 0;
const ast_1 = require("@prizm-ui/ast");
exports.ZyfraToggleButtonTemplateTasks = [
    {
        selector: 'zyfra-toggle-button',
        tasks: [
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmChangeNameTemplateTask, {
                name: 'prizm-toggle',
            }),
        ],
        inputs: {
            onLabel: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {
                    extraComment: 'TODO onLabel need set before this component',
                }),
            ],
            offLabel: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {
                    extraComment: 'TODO offLabel need set before this component',
                }),
            ],
            disabled: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {
                    extraComment: 'TODO disabled need pass with FormControl',
                }),
            ],
            onIcon: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'iconOn',
                }),
            ],
            offIcon: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'iconOff',
                }),
            ],
            ariaLabelledBy: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            inputId: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            tabindex: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            styleClass: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            iconPos: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
        },
        outputs: {},
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWJ1dHRvbi50YXNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hc3QvY2IzLXRlbXBsYXRlLWV4YW1wbGVzL3NyYy9saWIvdGFza3MvdG9nZ2xlLWJ1dHRvbi50YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQU11QjtBQUVWLFFBQUEsOEJBQThCLEdBQXdCO0lBQ2pFO1FBQ0UsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixLQUFLLEVBQUU7WUFDTCxJQUFBLDRCQUFzQixFQUFDLGlDQUEyQixFQUFFO2dCQUNsRCxJQUFJLEVBQUUsY0FBYzthQUNyQixDQUFDO1NBQ0g7UUFDRCxNQUFNLEVBQUU7WUFDTixPQUFPLEVBQUU7Z0JBQ1AsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRTtvQkFDcEQsWUFBWSxFQUFFLDZDQUE2QztpQkFDNUQsQ0FBQzthQUNIO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUU7b0JBQ3BELFlBQVksRUFBRSw4Q0FBOEM7aUJBQzdELENBQUM7YUFDSDtZQUNELFFBQVEsRUFBRTtnQkFDUixJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFO29CQUNwRCxZQUFZLEVBQUUsMENBQTBDO2lCQUN6RCxDQUFDO2FBQ0g7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sSUFBQSw0QkFBc0IsRUFBQyw2QkFBdUIsRUFBRTtvQkFDOUMsV0FBVyxFQUFFLFFBQVE7aUJBQ3RCLENBQUM7YUFDSDtZQUNELE9BQU8sRUFBRTtnQkFDUCxJQUFBLDRCQUFzQixFQUFDLDZCQUF1QixFQUFFO29CQUM5QyxXQUFXLEVBQUUsU0FBUztpQkFDdkIsQ0FBQzthQUNIO1lBQ0QsY0FBYyxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMzRSxPQUFPLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3BFLFFBQVEsRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDckUsVUFBVSxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN2RSxPQUFPLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3JFO1FBQ0QsT0FBTyxFQUFFLEVBQUU7S0FDWjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5LFxuICBQcml6bUNoYW5nZU5hbWVUZW1wbGF0ZVRhc2ssXG4gIFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLFxuICBQcml6bVJlbmFtZVRlbXBsYXRlVGFzayxcbiAgUHJpem1UZW1wbGF0ZVRhc2ssXG59IGZyb20gJ0Bwcml6bS11aS9hc3QnO1xuXG5leHBvcnQgY29uc3QgWnlmcmFUb2dnbGVCdXR0b25UZW1wbGF0ZVRhc2tzOiBQcml6bVRlbXBsYXRlVGFza1tdID0gW1xuICB7XG4gICAgc2VsZWN0b3I6ICd6eWZyYS10b2dnbGUtYnV0dG9uJyxcbiAgICB0YXNrczogW1xuICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bUNoYW5nZU5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgbmFtZTogJ3ByaXptLXRvZ2dsZScsXG4gICAgICB9KSxcbiAgICBdLFxuICAgIGlucHV0czoge1xuICAgICAgb25MYWJlbDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgZXh0cmFDb21tZW50OiAnVE9ETyBvbkxhYmVsIG5lZWQgc2V0IGJlZm9yZSB0aGlzIGNvbXBvbmVudCcsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIG9mZkxhYmVsOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBleHRyYUNvbW1lbnQ6ICdUT0RPIG9mZkxhYmVsIG5lZWQgc2V0IGJlZm9yZSB0aGlzIGNvbXBvbmVudCcsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIGRpc2FibGVkOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBleHRyYUNvbW1lbnQ6ICdUT0RPIGRpc2FibGVkIG5lZWQgcGFzcyB3aXRoIEZvcm1Db250cm9sJyxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgb25JY29uOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBuZXdBdHRyTmFtZTogJ2ljb25PbicsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIG9mZkljb246IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIG5ld0F0dHJOYW1lOiAnaWNvbk9mZicsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIGFyaWFMYWJlbGxlZEJ5OiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGlucHV0SWQ6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgdGFiaW5kZXg6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgc3R5bGVDbGFzczogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBpY29uUG9zOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICB9LFxuICAgIG91dHB1dHM6IHt9LFxuICB9LFxuXTtcbiJdfQ==