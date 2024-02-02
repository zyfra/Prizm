"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZyfraSpinnerTemplateTasks = void 0;
const ast_1 = require("@prizm-ui/ast");
exports.ZyfraSpinnerTemplateTasks = [
    {
        selector: 'zyfra-spinner',
        tasks: [
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmChangeNameTemplateTask, {
                name: 'prizm-spinner',
            }),
        ],
        inputs: {
            size: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    needFixApi: true,
                    newAttrName: 'size',
                    setExactNewAttrName: true,
                    value: 'l',
                }),
            ],
            styleClass: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            strokeWidth: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            fill: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            animationDuration: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            color: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
        },
        outputs: {},
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci50YXNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hc3QvY2IzLXRlbXBsYXRlLWV4YW1wbGVzL3NyYy9saWIvdGFza3Mvc3Bpbm5lci50YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQU11QjtBQUVWLFFBQUEseUJBQXlCLEdBQXdCO0lBQzVEO1FBQ0UsUUFBUSxFQUFFLGVBQWU7UUFDekIsS0FBSyxFQUFFO1lBQ0wsSUFBQSw0QkFBc0IsRUFBQyxpQ0FBMkIsRUFBRTtnQkFDbEQsSUFBSSxFQUFFLGVBQWU7YUFDdEIsQ0FBQztTQUNIO1FBQ0QsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFO2dCQUNKLElBQUEsNEJBQXNCLEVBQUMsNkJBQXVCLEVBQUU7b0JBQzlDLFVBQVUsRUFBRSxJQUFJO29CQUNoQixXQUFXLEVBQUUsTUFBTTtvQkFDbkIsbUJBQW1CLEVBQUUsSUFBSTtvQkFDekIsS0FBSyxFQUFFLEdBQUc7aUJBQ1gsQ0FBQzthQUNIO1lBQ0QsVUFBVSxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN2RSxXQUFXLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3hFLElBQUksRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDakUsaUJBQWlCLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzlFLEtBQUssRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDbkU7UUFDRCxPQUFPLEVBQUUsRUFBRTtLQUNaO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHByaXptQXN0Q3JlYXRlQWN0aW9uQnksXG4gIFByaXptQ2hhbmdlTmFtZVRlbXBsYXRlVGFzayxcbiAgUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssXG4gIFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLFxuICBQcml6bVRlbXBsYXRlVGFzayxcbn0gZnJvbSAnQHByaXptLXVpL2FzdCc7XG5cbmV4cG9ydCBjb25zdCBaeWZyYVNwaW5uZXJUZW1wbGF0ZVRhc2tzOiBQcml6bVRlbXBsYXRlVGFza1tdID0gW1xuICB7XG4gICAgc2VsZWN0b3I6ICd6eWZyYS1zcGlubmVyJyxcbiAgICB0YXNrczogW1xuICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bUNoYW5nZU5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgbmFtZTogJ3ByaXptLXNwaW5uZXInLFxuICAgICAgfSksXG4gICAgXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIHNpemU6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIG5lZWRGaXhBcGk6IHRydWUsXG4gICAgICAgICAgbmV3QXR0ck5hbWU6ICdzaXplJyxcbiAgICAgICAgICBzZXRFeGFjdE5ld0F0dHJOYW1lOiB0cnVlLFxuICAgICAgICAgIHZhbHVlOiAnbCcsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHN0eWxlQ2xhc3M6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgc3Ryb2tlV2lkdGg6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgZmlsbDogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBhbmltYXRpb25EdXJhdGlvbjogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBjb2xvcjogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgfSxcbiAgICBvdXRwdXRzOiB7fSxcbiAgfSxcbl07XG4iXX0=