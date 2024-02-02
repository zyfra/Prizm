"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZyfraBreadcrumbTemplateTasks = void 0;
const ast_1 = require("@prizm-ui/ast");
exports.ZyfraBreadcrumbTemplateTasks = [
    {
        selector: 'zyfra-breadcrumb',
        tasks: [
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmChangeNameTemplateTask, {
                name: 'prizm-breadcrumbs',
            }),
        ],
        inputs: {
            styleClass: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            style: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            home: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            items: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'breadcrumbs',
                    needFixApi: true,
                }),
            ],
        },
        outputs: {
            onItemClick: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'breadcrumbChange',
                    needFixApi: true,
                }),
            ],
        },
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi50YXNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hc3QvY2IzLXRlbXBsYXRlLWV4YW1wbGVzL3NyYy9saWIvdGFza3MvYnJlYWRjcnVtYi50YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQU11QjtBQUVWLFFBQUEsNEJBQTRCLEdBQXdCO0lBQy9EO1FBQ0UsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixLQUFLLEVBQUU7WUFDTCxJQUFBLDRCQUFzQixFQUFDLGlDQUEyQixFQUFFO2dCQUNsRCxJQUFJLEVBQUUsbUJBQW1CO2FBQzFCLENBQUM7U0FDSDtRQUNELE1BQU0sRUFBRTtZQUNOLFVBQVUsRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdkUsS0FBSyxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNsRSxJQUFJLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2pFLEtBQUssRUFBRTtnQkFDTCxJQUFBLDRCQUFzQixFQUFDLDZCQUF1QixFQUFFO29CQUM5QyxXQUFXLEVBQUUsYUFBYTtvQkFDMUIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCLENBQUM7YUFDSDtTQUNGO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsV0FBVyxFQUFFO2dCQUNYLElBQUEsNEJBQXNCLEVBQUMsNkJBQXVCLEVBQUU7b0JBQzlDLFdBQVcsRUFBRSxrQkFBa0I7b0JBQy9CLFVBQVUsRUFBRSxJQUFJO2lCQUNqQixDQUFDO2FBQ0g7U0FDRjtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHByaXptQXN0Q3JlYXRlQWN0aW9uQnksXG4gIFByaXptQ2hhbmdlTmFtZVRlbXBsYXRlVGFzayxcbiAgUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssXG4gIFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLFxuICBQcml6bVRlbXBsYXRlVGFzayxcbn0gZnJvbSAnQHByaXptLXVpL2FzdCc7XG5cbmV4cG9ydCBjb25zdCBaeWZyYUJyZWFkY3J1bWJUZW1wbGF0ZVRhc2tzOiBQcml6bVRlbXBsYXRlVGFza1tdID0gW1xuICB7XG4gICAgc2VsZWN0b3I6ICd6eWZyYS1icmVhZGNydW1iJyxcbiAgICB0YXNrczogW1xuICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bUNoYW5nZU5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgbmFtZTogJ3ByaXptLWJyZWFkY3J1bWJzJyxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBzdHlsZUNsYXNzOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHN0eWxlOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGhvbWU6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIG5ld0F0dHJOYW1lOiAnYnJlYWRjcnVtYnMnLFxuICAgICAgICAgIG5lZWRGaXhBcGk6IHRydWUsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIG91dHB1dHM6IHtcbiAgICAgIG9uSXRlbUNsaWNrOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBuZXdBdHRyTmFtZTogJ2JyZWFkY3J1bWJDaGFuZ2UnLFxuICAgICAgICAgIG5lZWRGaXhBcGk6IHRydWUsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuXTtcbiJdfQ==