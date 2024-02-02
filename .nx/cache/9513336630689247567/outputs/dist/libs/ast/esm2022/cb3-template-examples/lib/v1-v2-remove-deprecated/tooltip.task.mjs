"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizmTooltipTemplateTasks = void 0;
const ast_1 = require("@prizm-ui/ast");
exports.PrizmTooltipTemplateTasks = [
    {
        selector: [
            {
                type: 'byAttr',
                attrs: {
                    prizmTooltip: undefined,
                },
            },
        ],
        tasks: [],
        defaultInputs: {},
        inputs: {
            prizmHintShow: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRemoveAttributeTemplateTask, {})],
        },
        outputs: {
            prizmHoverChange: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'prizmTooltipShowed',
                }),
            ],
        },
        finishTasks: [],
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC50YXNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hc3QvY2IzLXRlbXBsYXRlLWV4YW1wbGVzL3NyYy9saWIvdjEtdjItcmVtb3ZlLWRlcHJlY2F0ZWQvdG9vbHRpcC50YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUt1QjtBQUVWLFFBQUEseUJBQXlCLEdBQXdCO0lBQzVEO1FBQ0UsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFO29CQUNMLFlBQVksRUFBRSxTQUFTO2lCQUN4QjthQUNGO1NBQ0Y7UUFDRCxLQUFLLEVBQUUsRUFBRTtRQUNULGFBQWEsRUFBRSxFQUFFO1FBQ2pCLE1BQU0sRUFBRTtZQUNOLGFBQWEsRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsc0NBQWdDLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDOUU7UUFDRCxPQUFPLEVBQUU7WUFDUCxnQkFBZ0IsRUFBRTtnQkFDaEIsSUFBQSw0QkFBc0IsRUFBQyw2QkFBdUIsRUFBRTtvQkFDOUMsV0FBVyxFQUFFLG9CQUFvQjtpQkFDbEMsQ0FBQzthQUNIO1NBQ0Y7UUFDRCxXQUFXLEVBQUUsRUFBRTtLQUNoQjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5LFxuICBQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzayxcbiAgUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssXG4gIFByaXptVGVtcGxhdGVUYXNrLFxufSBmcm9tICdAcHJpem0tdWkvYXN0JztcblxuZXhwb3J0IGNvbnN0IFByaXptVG9vbHRpcFRlbXBsYXRlVGFza3M6IFByaXptVGVtcGxhdGVUYXNrW10gPSBbXG4gIHtcbiAgICBzZWxlY3RvcjogW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnYnlBdHRyJyxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBwcml6bVRvb2x0aXA6IHVuZGVmaW5lZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICB0YXNrczogW10sXG4gICAgZGVmYXVsdElucHV0czoge30sXG4gICAgaW5wdXRzOiB7XG4gICAgICBwcml6bUhpbnRTaG93OiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pXSxcbiAgICB9LFxuICAgIG91dHB1dHM6IHtcbiAgICAgIHByaXptSG92ZXJDaGFuZ2U6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIG5ld0F0dHJOYW1lOiAncHJpem1Ub29sdGlwU2hvd2VkJyxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0sXG4gICAgZmluaXNoVGFza3M6IFtdLFxuICB9LFxuXTtcbiJdfQ==