"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZyfraInputSwitchTemplateTasks = void 0;
const ast_1 = require("@prizm-ui/ast");
exports.ZyfraInputSwitchTemplateTasks = [
    {
        selector: 'zyfra-input-switch',
        tasks: [
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmChangeNameTemplateTask, {
                name: 'prizm-toggle',
            }),
        ],
        inputs: {
            disabled: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {}),
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmAddCommentTemplateTask, {
                    comment: 'TODO: for pass disabled use pass by FormControl ',
                }),
            ],
            readonly: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {}),
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmAddCommentTemplateTask, {
                    comment: 'TODO: for pass readonly use pass by FormControl ',
                }),
            ],
            mini: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'size',
                    setExactNewAttrName: true,
                    value: 'm',
                }),
            ],
            ariaLabelledBy: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            styleClass: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            style: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            inputId: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            tabindex: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            name: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
        },
        outputs: {},
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc3dpdGNoLnRhc2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FzdC9jYjMtdGVtcGxhdGUtZXhhbXBsZXMvc3JjL2xpYi90YXNrcy9pbnB1dC1zd2l0Y2gudGFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FPdUI7QUFFVixRQUFBLDZCQUE2QixHQUF3QjtJQUNoRTtRQUNFLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsS0FBSyxFQUFFO1lBQ0wsSUFBQSw0QkFBc0IsRUFBQyxpQ0FBMkIsRUFBRTtnQkFDbEQsSUFBSSxFQUFFLGNBQWM7YUFDckIsQ0FBQztTQUNIO1FBQ0QsTUFBTSxFQUFFO1lBQ04sUUFBUSxFQUFFO2dCQUNSLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDO2dCQUN6RCxJQUFBLDRCQUFzQixFQUFDLGlDQUEyQixFQUFFO29CQUNsRCxPQUFPLEVBQUUsa0RBQWtEO2lCQUM1RCxDQUFDO2FBQ0g7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUM7Z0JBQ3pELElBQUEsNEJBQXNCLEVBQUMsaUNBQTJCLEVBQUU7b0JBQ2xELE9BQU8sRUFBRSxrREFBa0Q7aUJBQzVELENBQUM7YUFDSDtZQUNELElBQUksRUFBRTtnQkFDSixJQUFBLDRCQUFzQixFQUFDLDZCQUF1QixFQUFFO29CQUM5QyxXQUFXLEVBQUUsTUFBTTtvQkFDbkIsbUJBQW1CLEVBQUUsSUFBSTtvQkFDekIsS0FBSyxFQUFFLEdBQUc7aUJBQ1gsQ0FBQzthQUNIO1lBRUQsY0FBYyxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMzRSxVQUFVLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZFLEtBQUssRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEUsT0FBTyxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNwRSxRQUFRLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3JFLElBQUksRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDbEU7UUFDRCxPQUFPLEVBQUUsRUFBRTtLQUNaO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFByaXptQWRkQ29tbWVudFRlbXBsYXRlVGFzayxcbiAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeSxcbiAgUHJpem1DaGFuZ2VOYW1lVGVtcGxhdGVUYXNrLFxuICBQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzayxcbiAgUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssXG4gIFByaXptVGVtcGxhdGVUYXNrLFxufSBmcm9tICdAcHJpem0tdWkvYXN0JztcblxuZXhwb3J0IGNvbnN0IFp5ZnJhSW5wdXRTd2l0Y2hUZW1wbGF0ZVRhc2tzOiBQcml6bVRlbXBsYXRlVGFza1tdID0gW1xuICB7XG4gICAgc2VsZWN0b3I6ICd6eWZyYS1pbnB1dC1zd2l0Y2gnLFxuICAgIHRhc2tzOiBbXG4gICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptQ2hhbmdlTmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICBuYW1lOiAncHJpem0tdG9nZ2xlJyxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBkaXNhYmxlZDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSksXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1BZGRDb21tZW50VGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgY29tbWVudDogJ1RPRE86IGZvciBwYXNzIGRpc2FibGVkIHVzZSBwYXNzIGJ5IEZvcm1Db250cm9sICcsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHJlYWRvbmx5OiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KSxcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bUFkZENvbW1lbnRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBjb21tZW50OiAnVE9ETzogZm9yIHBhc3MgcmVhZG9ubHkgdXNlIHBhc3MgYnkgRm9ybUNvbnRyb2wgJyxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgbWluaTogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgbmV3QXR0ck5hbWU6ICdzaXplJyxcbiAgICAgICAgICBzZXRFeGFjdE5ld0F0dHJOYW1lOiB0cnVlLFxuICAgICAgICAgIHZhbHVlOiAnbScsXG4gICAgICAgIH0pLFxuICAgICAgXSxcblxuICAgICAgYXJpYUxhYmVsbGVkQnk6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgc3R5bGVDbGFzczogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBzdHlsZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBpbnB1dElkOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHRhYmluZGV4OiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIG5hbWU6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgIH0sXG4gICAgb3V0cHV0czoge30sXG4gIH0sXG5dO1xuIl19