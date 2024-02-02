"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizmInputMonthRangeTemplateTasks = void 0;
const ast_1 = require("@prizm-ui/ast");
const formControl = ['prizm-input-layout-month-range', 'formControl'].join('::');
const ngModel = ['prizm-input-layout-month-range', 'ngModel'].join('::');
const disabledItemHandler = ['prizm-input-layout-month-range', 'disabledItemHandler'].join('::');
const extraButtonInjector = ['prizm-input-layout-month-range', 'extraButtonInjector'].join('::');
const items = ['prizm-input-layout-month-range', 'items'].join('::');
const markerHandler = ['prizm-input-layout-month-range', 'markerHandler'].join('::');
const max = ['prizm-input-layout-month-range', 'max'].join('::');
const placeholder = ['prizm-input-layout-month-range', 'placeholder'].join('::');
const readOnly = ['prizm-input-layout-month-range', 'readOnly'].join('::');
const min = ['prizm-input-layout-month-range', 'min'].join('::');
const testId = ['prizm-input-layout-month-range', 'testId'].join('::');
exports.PrizmInputMonthRangeTemplateTasks = [
    {
        selector: 'prizm-input-date',
        tasks: [
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmChangeNameTemplateTask, {
                name: 'prizm-input-layout',
            }),
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmAddChildrenTemplateTask, {
                name: 'prizm-input-layout-month-range',
                attrs: {},
                voidElement: true,
                children: [],
            }),
        ],
        defaultInputs: {
            label: 'Выберите период',
        },
        inputs: {
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
            markerHandler: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: markerHandler,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'markerHandler',
                    }),
                }),
            ],
            max: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: max,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'max',
                    }),
                }),
            ],
            min: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: min,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'min',
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
            testId: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: testId,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'testId',
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
                        selector: 'prizm-input-layout-month-range',
                        inputs: {},
                        outputs: {},
                        tasks: [
                            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmCallWithNewSourceTemplateTask, {
                                id: [
                                    formControl,
                                    ngModel,
                                    disabledItemHandler,
                                    extraButtonInjector,
                                    items,
                                    markerHandler,
                                    max,
                                    placeholder,
                                    readOnly,
                                    min,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbW9udGgtcmFuZ2UudGFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYXN0L2NiMy10ZW1wbGF0ZS1leGFtcGxlcy9zcmMvbGliL3YxLXYyLXJlbW92ZS1kZXByZWNhdGVkL2lucHV0LW1vbnRoLXJhbmdlLnRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBVXVCO0FBRXZCLE1BQU0sV0FBVyxHQUFHLENBQUMsZ0NBQWdDLEVBQUUsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pGLE1BQU0sT0FBTyxHQUFHLENBQUMsZ0NBQWdDLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pFLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqRyxNQUFNLG1CQUFtQixHQUFHLENBQUMsZ0NBQWdDLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakcsTUFBTSxLQUFLLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckUsTUFBTSxhQUFhLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRSxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckYsTUFBTSxHQUFHLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakUsTUFBTSxXQUFXLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRSxVQUFV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QixFQUFDLDZCQUF1QixFQUFFO3dCQUN0RCxXQUFXLEVBQUUsVUFBVTtxQkFDeEIsQ0FBQztpQkFDSCxDQUFDO2FBQ0g7U0FDRjtRQUNELE9BQU8sRUFBRTtZQUNQLGtCQUFrQixFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxzQ0FBZ0MsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNsRixhQUFhLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLHNDQUFnQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzdFLGFBQWEsRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsc0NBQWdDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDN0UsYUFBYSxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxzQ0FBZ0MsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUM5RTtRQUNELFdBQVcsRUFBRTtZQUNYLElBQUEsNEJBQXNCLEVBQUMscUNBQStCLEVBQUU7Z0JBQ3RELGVBQWUsRUFBRSxJQUFJO2dCQUNyQixhQUFhLEVBQUUsSUFBSTtnQkFDbkIsS0FBSyxFQUFFO29CQUNMO3dCQUNFLFFBQVEsRUFBRSxnQ0FBZ0M7d0JBQzFDLE1BQU0sRUFBRSxFQUFFO3dCQUNWLE9BQU8sRUFBRSxFQUFFO3dCQUNYLEtBQUssRUFBRTs0QkFDTCxJQUFBLDRCQUFzQixFQUFDLHdDQUFrQyxFQUFFO2dDQUN6RCxFQUFFLEVBQUU7b0NBQ0YsV0FBVztvQ0FDWCxPQUFPO29DQUNQLG1CQUFtQjtvQ0FDbkIsbUJBQW1CO29DQUNuQixLQUFLO29DQUNMLGFBQWE7b0NBQ2IsR0FBRztvQ0FDSCxXQUFXO29DQUNYLFFBQVE7b0NBQ1IsR0FBRztvQ0FDSCxNQUFNO2lDQUNQOzZCQUNGLENBQUM7eUJBQ0g7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBQcml6bUFkZENoaWxkcmVuVGVtcGxhdGVUYXNrLFxuICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5LFxuICBQcml6bUNhbGxXaXRoTmV3U291cmNlVGVtcGxhdGVUYXNrLFxuICBQcml6bUNoYW5nZU5hbWVUZW1wbGF0ZVRhc2ssXG4gIFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLFxuICBQcml6bVJlbmFtZVRlbXBsYXRlVGFzayxcbiAgUHJpem1SdW5UYXNrc09uTm9kZVRlbXBsYXRlVGFzayxcbiAgUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssXG4gIFByaXptVGVtcGxhdGVUYXNrLFxufSBmcm9tICdAcHJpem0tdWkvYXN0JztcblxuY29uc3QgZm9ybUNvbnRyb2wgPSBbJ3ByaXptLWlucHV0LWxheW91dC1tb250aC1yYW5nZScsICdmb3JtQ29udHJvbCddLmpvaW4oJzo6Jyk7XG5jb25zdCBuZ01vZGVsID0gWydwcml6bS1pbnB1dC1sYXlvdXQtbW9udGgtcmFuZ2UnLCAnbmdNb2RlbCddLmpvaW4oJzo6Jyk7XG5jb25zdCBkaXNhYmxlZEl0ZW1IYW5kbGVyID0gWydwcml6bS1pbnB1dC1sYXlvdXQtbW9udGgtcmFuZ2UnLCAnZGlzYWJsZWRJdGVtSGFuZGxlciddLmpvaW4oJzo6Jyk7XG5jb25zdCBleHRyYUJ1dHRvbkluamVjdG9yID0gWydwcml6bS1pbnB1dC1sYXlvdXQtbW9udGgtcmFuZ2UnLCAnZXh0cmFCdXR0b25JbmplY3RvciddLmpvaW4oJzo6Jyk7XG5jb25zdCBpdGVtcyA9IFsncHJpem0taW5wdXQtbGF5b3V0LW1vbnRoLXJhbmdlJywgJ2l0ZW1zJ10uam9pbignOjonKTtcbmNvbnN0IG1hcmtlckhhbmRsZXIgPSBbJ3ByaXptLWlucHV0LWxheW91dC1tb250aC1yYW5nZScsICdtYXJrZXJIYW5kbGVyJ10uam9pbignOjonKTtcbmNvbnN0IG1heCA9IFsncHJpem0taW5wdXQtbGF5b3V0LW1vbnRoLXJhbmdlJywgJ21heCddLmpvaW4oJzo6Jyk7XG5jb25zdCBwbGFjZWhvbGRlciA9IFsncHJpem0taW5wdXQtbGF5b3V0LW1vbnRoLXJhbmdlJywgJ3BsYWNlaG9sZGVyJ10uam9pbignOjonKTtcbmNvbnN0IHJlYWRPbmx5ID0gWydwcml6bS1pbnB1dC1sYXlvdXQtbW9udGgtcmFuZ2UnLCAncmVhZE9ubHknXS5qb2luKCc6OicpO1xuY29uc3QgbWluID0gWydwcml6bS1pbnB1dC1sYXlvdXQtbW9udGgtcmFuZ2UnLCAnbWluJ10uam9pbignOjonKTtcbmNvbnN0IHRlc3RJZCA9IFsncHJpem0taW5wdXQtbGF5b3V0LW1vbnRoLXJhbmdlJywgJ3Rlc3RJZCddLmpvaW4oJzo6Jyk7XG5cbmV4cG9ydCBjb25zdCBQcml6bUlucHV0TW9udGhSYW5nZVRlbXBsYXRlVGFza3M6IFByaXptVGVtcGxhdGVUYXNrW10gPSBbXG4gIHtcbiAgICBzZWxlY3RvcjogJ3ByaXptLWlucHV0LWRhdGUnLFxuICAgIHRhc2tzOiBbXG4gICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptQ2hhbmdlTmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICBuYW1lOiAncHJpem0taW5wdXQtbGF5b3V0JyxcbiAgICAgIH0pLFxuICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bUFkZENoaWxkcmVuVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgIG5hbWU6ICdwcml6bS1pbnB1dC1sYXlvdXQtbW9udGgtcmFuZ2UnLFxuICAgICAgICBhdHRyczoge30sXG4gICAgICAgIHZvaWRFbGVtZW50OiB0cnVlLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICB9KSxcbiAgICBdLFxuICAgIGRlZmF1bHRJbnB1dHM6IHtcbiAgICAgIGxhYmVsOiAn0JLRi9Cx0LXRgNC40YLQtSDQv9C10YDQuNC+0LQnLFxuICAgIH0sXG4gICAgaW5wdXRzOiB7XG4gICAgICB2YWw6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgcHNldWRvRm9jdXNlZDogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBwc2V1ZG9Ib3ZlcmVkOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHBzZXVkb0ludmFsaWQ6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgcHNldWRvUHJlc3NlZDogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBwc2V1ZG9TdGF0ZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KV0sXG5cbiAgICAgIGZvcm1Db250cm9sOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogZm9ybUNvbnRyb2wsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ2Zvcm1Db250cm9sJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgbmdNb2RlbDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IG5nTW9kZWwsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ25nTW9kZWwnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBkaXNhYmxlZEl0ZW1IYW5kbGVyOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogZGlzYWJsZWRJdGVtSGFuZGxlcixcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnZGlzYWJsZWRJdGVtSGFuZGxlcicsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIGV4dHJhQnV0dG9uSW5qZWN0b3I6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBleHRyYUJ1dHRvbkluamVjdG9yLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdleHRyYUJ1dHRvbkluamVjdG9yJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBpdGVtcyxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnaXRlbXMnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBtYXJrZXJIYW5kbGVyOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbWFya2VySGFuZGxlcixcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnbWFya2VySGFuZGxlcicsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIG1heDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IG1heCxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnbWF4JyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgbWluOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbWluLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdtaW4nLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBwbGFjZWhvbGRlcjogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IHBsYWNlaG9sZGVyLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdwbGFjZWhvbGRlcicsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHRlc3RJZDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IHRlc3RJZCxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAndGVzdElkJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgcmVhZE9ubHk6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiByZWFkT25seSxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAncmVhZE9ubHknLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBvdXRwdXRzOiB7XG4gICAgICBmb2N1c1Zpc2libGVDaGFuZ2U6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgZm9jdXNlZENoYW5nZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBob3ZlcmVkQ2hhbmdlOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHByZXNzZWRDaGFuZ2U6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgIH0sXG4gICAgZmluaXNoVGFza3M6IFtcbiAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SdW5UYXNrc09uTm9kZVRlbXBsYXRlVGFzaywge1xuICAgICAgICBkb250UnVuT25Pbk1haW46IHRydWUsXG4gICAgICAgIHJ1bk9uQ2hpbGRyZW46IHRydWUsXG4gICAgICAgIHRhc2tzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdwcml6bS1pbnB1dC1sYXlvdXQtbW9udGgtcmFuZ2UnLFxuICAgICAgICAgICAgaW5wdXRzOiB7fSxcbiAgICAgICAgICAgIG91dHB1dHM6IHt9LFxuICAgICAgICAgICAgdGFza3M6IFtcbiAgICAgICAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bUNhbGxXaXRoTmV3U291cmNlVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICAgICAgaWQ6IFtcbiAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sLFxuICAgICAgICAgICAgICAgICAgbmdNb2RlbCxcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkSXRlbUhhbmRsZXIsXG4gICAgICAgICAgICAgICAgICBleHRyYUJ1dHRvbkluamVjdG9yLFxuICAgICAgICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgICAgICAgICBtYXJrZXJIYW5kbGVyLFxuICAgICAgICAgICAgICAgICAgbWF4LFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgICByZWFkT25seSxcbiAgICAgICAgICAgICAgICAgIG1pbixcbiAgICAgICAgICAgICAgICAgIHRlc3RJZCxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgIF0sXG4gIH0sXG5dO1xuIl19