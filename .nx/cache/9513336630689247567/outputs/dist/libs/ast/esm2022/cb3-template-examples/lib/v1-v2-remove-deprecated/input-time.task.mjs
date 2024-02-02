"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizmInputTimeTemplateTasks = void 0;
const ast_1 = require("@prizm-ui/ast");
const formControl = ['prizm-input-layout-time', 'formControl'].join('::');
const ngModel = ['prizm-input-layout-time', 'ngModel'].join('::');
const itemSize = ['prizm-input-layout-time', 'itemSize'].join('::');
const disabledItemHandler = ['prizm-input-layout-time', 'disabledItemHandler'].join('::');
const extraButtonInjector = ['prizm-input-layout-time', 'extraButtonInjector'].join('::');
const items = ['prizm-input-layout-time', 'items'].join('::');
const mode = ['prizm-input-layout-time', 'mode'].join('::');
const strict = ['prizm-input-layout-time', 'strict'].join('::');
const placeholder = ['prizm-input-layout-time', 'placeholder'].join('::');
const readOnly = ['prizm-input-layout-time', 'readOnly'].join('::');
const testId = ['prizm-input-layout-time', 'testId'].join('::');
exports.PrizmInputTimeTemplateTasks = [
    {
        selector: 'prizm-input-time',
        tasks: [
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmChangeNameTemplateTask, {
                name: 'prizm-input-layout',
            }),
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmAddChildrenTemplateTask, {
                name: 'prizm-input-layout-time',
                attrs: {},
                voidElement: true,
                children: [],
            }),
        ],
        defaultInputs: {
            label: 'Выберите время',
        },
        inputs: {
            itemSize: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: itemSize,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'itemSize',
                    }),
                }),
            ],
            val: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRemoveAttributeTemplateTask, {})],
            pseudoFocused: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRemoveAttributeTemplateTask, {})],
            pseudoHovered: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRemoveAttributeTemplateTask, {})],
            pseudoInvalid: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRemoveAttributeTemplateTask, {})],
            pseudoPressed: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRemoveAttributeTemplateTask, {})],
            pseudoState: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRemoveAttributeTemplateTask, {})],
            formControl: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: formControl,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'formControl',
                    }),
                }),
            ],
            testId: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: testId,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'testId',
                    }),
                }),
            ],
            ngModel: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: ngModel,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'ngModel',
                    }),
                }),
            ],
            disabledItemHandler: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: disabledItemHandler,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'disabledItemHandler',
                    }),
                }),
            ],
            extraButtonInjector: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: extraButtonInjector,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'extraButtonInjector',
                    }),
                }),
            ],
            items: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: items,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'items',
                    }),
                }),
            ],
            mode: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: mode,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'mode',
                    }),
                }),
            ],
            strict: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: strict,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'strict',
                    }),
                }),
            ],
            placeholder: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: placeholder,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'placeholder',
                    }),
                }),
            ],
            readOnly: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: readOnly,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'readOnly',
                    }),
                }),
            ],
        },
        outputs: {
            focusVisibleChange: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRemoveAttributeTemplateTask, {})],
            focusedChange: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRemoveAttributeTemplateTask, {})],
            hoveredChange: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRemoveAttributeTemplateTask, {})],
            pressedChange: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRemoveAttributeTemplateTask, {})],
        },
        finishTasks: [
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRunTasksOnNodeTemplateTask, {
                dontRunOnOnMain: true,
                runOnChildren: true,
                tasks: [
                    {
                        selector: 'prizm-input-layout-time',
                        inputs: {},
                        outputs: {},
                        tasks: [
                            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmCallWithNewSourceTemplateTask, {
                                id: [
                                    formControl,
                                    ngModel,
                                    itemSize,
                                    disabledItemHandler,
                                    extraButtonInjector,
                                    items,
                                    mode,
                                    strict,
                                    placeholder,
                                    readOnly,
                                    testId,
                                ],
                            }),
                        ],
                    },
                ],
            }),
        ],
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGltZS50YXNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hc3QvY2IzLXRlbXBsYXRlLWV4YW1wbGVzL3NyYy9saWIvdjEtdjItcmVtb3ZlLWRlcHJlY2F0ZWQvaW5wdXQtdGltZS50YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQVV1QjtBQUV2QixNQUFNLFdBQVcsR0FBRyxDQUFDLHlCQUF5QixFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxRSxNQUFNLE9BQU8sR0FBRyxDQUFDLHlCQUF5QixFQUFFLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsRSxNQUFNLFFBQVEsR0FBRyxDQUFDLHlCQUF5QixFQUFFLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwRSxNQUFNLG1CQUFtQixHQUFHLENBQUMseUJBQXlCLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUYsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLHlCQUF5QixFQUFFLHFCQUFxQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFGLE1BQU0sS0FBSyxHQUFHLENBQUMseUJBQXlCLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlELE1BQU0sSUFBSSxHQUFHLENBQUMseUJBQXlCLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVELE1BQU0sTUFBTSxHQUFHLENBQUMseUJBQXlCLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hFLE1BQU0sV0FBVyxHQUFHLENBQUMseUJBQXlCLEVBQUUsYUFBYSxDQUFDLENBQUMsSUFB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QUFFO3dCQUN0RCxXQUFXLEVBQUUsVUFBVTtxQkFDeEIsQ0FBQztpQkFDSCxDQUFDO2FBQ0g7U0FDRjtRQUNELE9BQU8sRUFBRTtZQUNQLGtCQUFrQixFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxzQ0FBZ0MsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNsRixhQUFhLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLHNDQUFnQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzdFLGFBQWEsRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsc0NBQWdDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDN0UsYUFBYSxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxzQ0FBZ0MsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUM5RTtRQUNELFdBQVcsRUFBRTtZQUNYLElBQUEsNEJBQXNCLEVBQUMscUNBQStCLEVBQUU7Z0JBQ3RELGVBQWUsRUFBRSxJQUFJO2dCQUNyQixhQUFhLEVBQUUsSUFBSTtnQkFDbkIsS0FBSyxFQUFFO29CQUNMO3dCQUNFLFFBQVEsRUFBRSx5QkFBeUI7d0JBQ25DLE1BQU0sRUFBRSxFQUFFO3dCQUNWLE9BQU8sRUFBRSxFQUFFO3dCQUNYLEtBQUssRUFBRTs0QkFDTCxJQUFBLDRCQUFzQixFQUFDLHdDQUFrQyxFQUFFO2dDQUN6RCxFQUFFLEVBQUU7b0NBQ0YsV0FBVztvQ0FDWCxPQUFPO29DQUNQLFFBQVE7b0NBQ1IsbUJBQW1CO29DQUNuQixtQkFBbUI7b0NBQ25CLEtBQUs7b0NBQ0wsSUFBSTtvQ0FDSixNQUFNO29DQUNOLFdBQVc7b0NBQ1gsUUFBUTtvQ0FDUixNQUFNO2lDQUNQOzZCQUNGLENBQUM7eUJBQ0g7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBQcml6bUFkZENoaWxkcmVuVGVtcGxhdGVUYXNrLFxuICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5LFxuICBQcml6bUNhbGxXaXRoTmV3U291cmNlVGVtcGxhdGVUYXNrLFxuICBQcml6bUNoYW5nZU5hbWVUZW1wbGF0ZVRhc2ssXG4gIFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLFxuICBQcml6bVJlbmFtZVRlbXBsYXRlVGFzayxcbiAgUHJpem1SdW5UYXNrc09uTm9kZVRlbXBsYXRlVGFzayxcbiAgUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssXG4gIFByaXptVGVtcGxhdGVUYXNrLFxufSBmcm9tICdAcHJpem0tdWkvYXN0JztcblxuY29uc3QgZm9ybUNvbnRyb2wgPSBbJ3ByaXptLWlucHV0LWxheW91dC10aW1lJywgJ2Zvcm1Db250cm9sJ10uam9pbignOjonKTtcbmNvbnN0IG5nTW9kZWwgPSBbJ3ByaXptLWlucHV0LWxheW91dC10aW1lJywgJ25nTW9kZWwnXS5qb2luKCc6OicpO1xuY29uc3QgaXRlbVNpemUgPSBbJ3ByaXptLWlucHV0LWxheW91dC10aW1lJywgJ2l0ZW1TaXplJ10uam9pbignOjonKTtcbmNvbnN0IGRpc2FibGVkSXRlbUhhbmRsZXIgPSBbJ3ByaXptLWlucHV0LWxheW91dC10aW1lJywgJ2Rpc2FibGVkSXRlbUhhbmRsZXInXS5qb2luKCc6OicpO1xuY29uc3QgZXh0cmFCdXR0b25JbmplY3RvciA9IFsncHJpem0taW5wdXQtbGF5b3V0LXRpbWUnLCAnZXh0cmFCdXR0b25JbmplY3RvciddLmpvaW4oJzo6Jyk7XG5jb25zdCBpdGVtcyA9IFsncHJpem0taW5wdXQtbGF5b3V0LXRpbWUnLCAnaXRlbXMnXS5qb2luKCc6OicpO1xuY29uc3QgbW9kZSA9IFsncHJpem0taW5wdXQtbGF5b3V0LXRpbWUnLCAnbW9kZSddLmpvaW4oJzo6Jyk7XG5jb25zdCBzdHJpY3QgPSBbJ3ByaXptLWlucHV0LWxheW91dC10aW1lJywgJ3N0cmljdCddLmpvaW4oJzo6Jyk7XG5jb25zdCBwbGFjZWhvbGRlciA9IFsncHJpem0taW5wdXQtbGF5b3V0LXRpbWUnLCAncGxhY2Vob2xkZXInXS5qb2luKCc6OicpO1xuY29uc3QgcmVhZE9ubHkgPSBbJ3ByaXptLWlucHV0LWxheW91dC10aW1lJywgJ3JlYWRPbmx5J10uam9pbignOjonKTtcbmNvbnN0IHRlc3RJZCA9IFsncHJpem0taW5wdXQtbGF5b3V0LXRpbWUnLCAndGVzdElkJ10uam9pbignOjonKTtcblxuZXhwb3J0IGNvbnN0IFByaXptSW5wdXRUaW1lVGVtcGxhdGVUYXNrczogUHJpem1UZW1wbGF0ZVRhc2tbXSA9IFtcbiAge1xuICAgIHNlbGVjdG9yOiAncHJpem0taW5wdXQtdGltZScsXG4gICAgdGFza3M6IFtcbiAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1DaGFuZ2VOYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgIG5hbWU6ICdwcml6bS1pbnB1dC1sYXlvdXQnLFxuICAgICAgfSksXG4gICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptQWRkQ2hpbGRyZW5UZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgbmFtZTogJ3ByaXptLWlucHV0LWxheW91dC10aW1lJyxcbiAgICAgICAgYXR0cnM6IHt9LFxuICAgICAgICB2b2lkRWxlbWVudDogdHJ1ZSxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgfSksXG4gICAgXSxcbiAgICBkZWZhdWx0SW5wdXRzOiB7XG4gICAgICBsYWJlbDogJ9CS0YvQsdC10YDQuNGC0LUg0LLRgNC10LzRjycsXG4gICAgfSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGl0ZW1TaXplOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogaXRlbVNpemUsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ2l0ZW1TaXplJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgdmFsOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHBzZXVkb0ZvY3VzZWQ6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgcHNldWRvSG92ZXJlZDogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBwc2V1ZG9JbnZhbGlkOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHBzZXVkb1ByZXNzZWQ6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgcHNldWRvU3RhdGU6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSldLFxuXG4gICAgICBmb3JtQ29udHJvbDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IGZvcm1Db250cm9sLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdmb3JtQ29udHJvbCcsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHRlc3RJZDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IHRlc3RJZCxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAndGVzdElkJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuXG4gICAgICBuZ01vZGVsOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbmdNb2RlbCxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnbmdNb2RlbCcsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIGRpc2FibGVkSXRlbUhhbmRsZXI6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBkaXNhYmxlZEl0ZW1IYW5kbGVyLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdkaXNhYmxlZEl0ZW1IYW5kbGVyJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgZXh0cmFCdXR0b25JbmplY3RvcjogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IGV4dHJhQnV0dG9uSW5qZWN0b3IsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ2V4dHJhQnV0dG9uSW5qZWN0b3InLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBpdGVtczogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IGl0ZW1zLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdpdGVtcycsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIG1vZGU6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBtb2RlLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdtb2RlJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgc3RyaWN0OiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogc3RyaWN0LFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdzdHJpY3QnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBwbGFjZWhvbGRlcjogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IHBsYWNlaG9sZGVyLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdwbGFjZWhvbGRlcicsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHJlYWRPbmx5OiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogcmVhZE9ubHksXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ3JlYWRPbmx5JyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0sXG4gICAgb3V0cHV0czoge1xuICAgICAgZm9jdXNWaXNpYmxlQ2hhbmdlOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGZvY3VzZWRDaGFuZ2U6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgaG92ZXJlZENoYW5nZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBwcmVzc2VkQ2hhbmdlOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pXSxcbiAgICB9LFxuICAgIGZpbmlzaFRhc2tzOiBbXG4gICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUnVuVGFza3NPbk5vZGVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgZG9udFJ1bk9uT25NYWluOiB0cnVlLFxuICAgICAgICBydW5PbkNoaWxkcmVuOiB0cnVlLFxuICAgICAgICB0YXNrczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAncHJpem0taW5wdXQtbGF5b3V0LXRpbWUnLFxuICAgICAgICAgICAgaW5wdXRzOiB7fSxcbiAgICAgICAgICAgIG91dHB1dHM6IHt9LFxuICAgICAgICAgICAgdGFza3M6IFtcbiAgICAgICAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bUNhbGxXaXRoTmV3U291cmNlVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICAgICAgaWQ6IFtcbiAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sLFxuICAgICAgICAgICAgICAgICAgbmdNb2RlbCxcbiAgICAgICAgICAgICAgICAgIGl0ZW1TaXplLFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWRJdGVtSGFuZGxlcixcbiAgICAgICAgICAgICAgICAgIGV4dHJhQnV0dG9uSW5qZWN0b3IsXG4gICAgICAgICAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICAgICAgICAgIG1vZGUsXG4gICAgICAgICAgICAgICAgICBzdHJpY3QsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5LFxuICAgICAgICAgICAgICAgICAgdGVzdElkLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgXSxcbiAgfSxcbl07XG4iXX0=