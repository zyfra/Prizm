"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZyfraTooltipTemplateTasks = void 0;
const ast_1 = require("@prizm-ui/ast");
exports.ZyfraTooltipTemplateTasks = [
    {
        selector: [
            {
                type: 'byAttr',
                attrs: {
                    zyfraTooltip: undefined,
                },
            },
        ],
        tasks: [],
        inputs: {
            zyfraTooltip: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'prizmTooltip',
                }),
            ],
            zyfraTooltipShow: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'prizmHintShow',
                }),
            ],
            zyfraTooltipContext: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'prizmHintContext',
                }),
            ],
            zyfraTooltipDelay: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'prizmTooltipShowDelay',
                }),
            ],
            zyfraTooltipPosition: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'prizmHintDirection',
                    needFixApi: true,
                }),
            ],
            zyfraTooltipColor: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            zyfraTooltipClass: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            zyfraTooltipOverflowText: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
        },
        outputs: {
            zyfraTooltipShowChange: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'prizmHoveredChange',
                }),
            ],
        },
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC50YXNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hc3QvY2IzLXRlbXBsYXRlLWV4YW1wbGVzL3NyYy9saWIvdGFza3MvdG9vbHRpcC50YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUt1QjtBQUVWLFFBQUEseUJBQXlCLEdBQXdCO0lBQzVEO1FBQ0UsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFO29CQUNMLFlBQVksRUFBRSxTQUFTO2lCQUN4QjthQUNGO1NBQ0Y7UUFDRCxLQUFLLEVBQUUsRUFBRTtRQUNULE1BQU0sRUFBRTtZQUNOLFlBQVksRUFBRTtnQkFDWixJQUFBLDRCQUFzQixFQUFDLDZCQUF1QixFQUFFO29CQUM5QyxXQUFXLEVBQUUsY0FBYztpQkFDNUIsQ0FBQzthQUNIO1lBQ0QsZ0JBQWdCLEVBQUU7Z0JBQ2hCLElBQUEsNEJBQXNCLEVBQUMsNkJBQXVCLEVBQUU7b0JBQzlDLFdBQVcsRUFBRSxlQUFlO2lCQUM3QixDQUFDO2FBQ0g7WUFDRCxtQkFBbUIsRUFBRTtnQkFDbkIsSUFBQSw0QkFBc0IsRUFBQyw2QkFBdUIsRUFBRTtvQkFDOUMsV0FBVyxFQUFFLGtCQUFrQjtpQkFDaEMsQ0FBQzthQUNIO1lBQ0QsaUJBQWlCLEVBQUU7Z0JBQ2pCLElBQUEsNEJBQXNCLEVBQUMsNkJBQXVCLEVBQUU7b0JBQzlDLFdBQVcsRUFBRSx1QkFBdUI7aUJBQ3JDLENBQUM7YUFDSDtZQUNELG9CQUFvQixFQUFFO2dCQUNwQixJQUFBLDRCQUFzQixFQUFDLDZCQUF1QixFQUFFO29CQUM5QyxXQUFXLEVBQUUsb0JBQW9CO29CQUNqQyxVQUFVLEVBQUUsSUFBSTtpQkFDakIsQ0FBQzthQUNIO1lBQ0QsaUJBQWlCLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzlFLGlCQUFpQixFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM5RSx3QkFBd0IsRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDdEY7UUFDRCxPQUFPLEVBQUU7WUFDUCxzQkFBc0IsRUFBRTtnQkFDdEIsSUFBQSw0QkFBc0IsRUFBQyw2QkFBdUIsRUFBRTtvQkFDOUMsV0FBVyxFQUFFLG9CQUFvQjtpQkFDbEMsQ0FBQzthQUNIO1NBQ0Y7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5LFxuICBQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzayxcbiAgUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssXG4gIFByaXptVGVtcGxhdGVUYXNrLFxufSBmcm9tICdAcHJpem0tdWkvYXN0JztcblxuZXhwb3J0IGNvbnN0IFp5ZnJhVG9vbHRpcFRlbXBsYXRlVGFza3M6IFByaXptVGVtcGxhdGVUYXNrW10gPSBbXG4gIHtcbiAgICBzZWxlY3RvcjogW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnYnlBdHRyJyxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB6eWZyYVRvb2x0aXA6IHVuZGVmaW5lZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICB0YXNrczogW10sXG4gICAgaW5wdXRzOiB7XG4gICAgICB6eWZyYVRvb2x0aXA6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIG5ld0F0dHJOYW1lOiAncHJpem1Ub29sdGlwJyxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgenlmcmFUb29sdGlwU2hvdzogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgbmV3QXR0ck5hbWU6ICdwcml6bUhpbnRTaG93JyxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgenlmcmFUb29sdGlwQ29udGV4dDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgbmV3QXR0ck5hbWU6ICdwcml6bUhpbnRDb250ZXh0JyxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgenlmcmFUb29sdGlwRGVsYXk6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIG5ld0F0dHJOYW1lOiAncHJpem1Ub29sdGlwU2hvd0RlbGF5JyxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgenlmcmFUb29sdGlwUG9zaXRpb246IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIG5ld0F0dHJOYW1lOiAncHJpem1IaW50RGlyZWN0aW9uJyxcbiAgICAgICAgICBuZWVkRml4QXBpOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICB6eWZyYVRvb2x0aXBDb2xvcjogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICB6eWZyYVRvb2x0aXBDbGFzczogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICB6eWZyYVRvb2x0aXBPdmVyZmxvd1RleHQ6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgIH0sXG4gICAgb3V0cHV0czoge1xuICAgICAgenlmcmFUb29sdGlwU2hvd0NoYW5nZTogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgbmV3QXR0ck5hbWU6ICdwcml6bUhvdmVyZWRDaGFuZ2UnLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbl07XG4iXX0=