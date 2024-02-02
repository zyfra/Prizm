"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizmInputMonthTemplateTasks = void 0;
const ast_1 = require("@prizm-ui/ast");
const formControl = ['prizm-input-layout-month', 'formControl'].join('::');
const ngModel = ['prizm-input-layout-month', 'ngModel'].join('::');
const disabledItemHandler = ['prizm-input-layout-month', 'disabledItemHandler'].join('::');
const extraButtonInjector = ['prizm-input-layout-month', 'extraButtonInjector'].join('::');
const items = ['prizm-input-layout-month', 'items'].join('::');
const markerHandler = ['prizm-input-layout-month', 'markerHandler'].join('::');
const max = ['prizm-input-layout-month', 'max'].join('::');
const placeholder = ['prizm-input-layout-month', 'placeholder'].join('::');
const readOnly = ['prizm-input-layout-month', 'readOnly'].join('::');
const min = ['prizm-input-layout-month', 'min'].join('::');
const testId = ['prizm-input-layout-month', 'testId'].join('::');
exports.PrizmInputMonthTemplateTasks = [
    {
        selector: 'prizm-input-date',
        tasks: [
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmChangeNameTemplateTask, {
                name: 'prizm-input-layout',
            }),
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmAddChildrenTemplateTask, {
                name: 'prizm-input-layout-month',
                attrs: {},
                voidElement: true,
                children: [],
            }),
        ],
        defaultInputs: {
            label: 'Выберите месяц',
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
                        selector: 'prizm-input-layout-month',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbW9udGgudGFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYXN0L2NiMy10ZW1wbGF0ZS1leGFtcGxlcy9zcmMvbGliL3YxLXYyLXJlbW92ZS1kZXByZWNhdGVkL2lucHV0LW1vbnRoLnRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBVXVCO0FBRXZCLE1BQU0sV0FBVyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNFLE1BQU0sT0FBTyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25FLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzRixNQUFNLG1CQUFtQixHQUFHLENBQUMsMEJBQTBCLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0YsTUFBTSxLQUFLLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0QsTUFBTSxhQUFhLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0UsTUFBTSxHQUFHLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0QsTUFBTSxXQUFXLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0UsTUFBTSxRQUFRLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxVQUFVLENBQUMsQ0FBQyxJ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QixFQUFFO3dCQUN0RCxXQUFXLEVBQUUsVUFBVTtxQkFDeEIsQ0FBQztpQkFDSCxDQUFDO2FBQ0g7U0FDRjtRQUNELE9BQU8sRUFBRTtZQUNQLGtCQUFrQixFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxzQ0FBZ0MsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNsRixhQUFhLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLHNDQUFnQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzdFLGFBQWEsRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsc0NBQWdDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDN0UsYUFBYSxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxzQ0FBZ0MsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUM5RTtRQUNELFdBQVcsRUFBRTtZQUNYLElBQUEsNEJBQXNCLEVBQUMscUNBQStCLEVBQUU7Z0JBQ3RELGVBQWUsRUFBRSxJQUFJO2dCQUNyQixhQUFhLEVBQUUsSUFBSTtnQkFDbkIsS0FBSyxFQUFFO29CQUNMO3dCQUNFLFFBQVEsRUFBRSwwQkFBMEI7d0JBQ3BDLE1BQU0sRUFBRSxFQUFFO3dCQUNWLE9BQU8sRUFBRSxFQUFFO3dCQUNYLEtBQUssRUFBRTs0QkFDTCxJQUFBLDRCQUFzQixFQUFDLHdDQUFrQyxFQUFFO2dDQUN6RCxFQUFFLEVBQUU7b0NBQ0YsV0FBVztvQ0FDWCxPQUFPO29DQUNQLG1CQUFtQjtvQ0FDbkIsbUJBQW1CO29DQUNuQixLQUFLO29DQUNMLGFBQWE7b0NBQ2IsR0FBRztvQ0FDSCxXQUFXO29DQUNYLFFBQVE7b0NBQ1IsR0FBRztvQ0FDSCxNQUFNO2lDQUNQOzZCQUNGLENBQUM7eUJBQ0g7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBQcml6bUFkZENoaWxkcmVuVGVtcGxhdGVUYXNrLFxuICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5LFxuICBQcml6bUNhbGxXaXRoTmV3U291cmNlVGVtcGxhdGVUYXNrLFxuICBQcml6bUNoYW5nZU5hbWVUZW1wbGF0ZVRhc2ssXG4gIFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLFxuICBQcml6bVJlbmFtZVRlbXBsYXRlVGFzayxcbiAgUHJpem1SdW5UYXNrc09uTm9kZVRlbXBsYXRlVGFzayxcbiAgUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssXG4gIFByaXptVGVtcGxhdGVUYXNrLFxufSBmcm9tICdAcHJpem0tdWkvYXN0JztcblxuY29uc3QgZm9ybUNvbnRyb2wgPSBbJ3ByaXptLWlucHV0LWxheW91dC1tb250aCcsICdmb3JtQ29udHJvbCddLmpvaW4oJzo6Jyk7XG5jb25zdCBuZ01vZGVsID0gWydwcml6bS1pbnB1dC1sYXlvdXQtbW9udGgnLCAnbmdNb2RlbCddLmpvaW4oJzo6Jyk7XG5jb25zdCBkaXNhYmxlZEl0ZW1IYW5kbGVyID0gWydwcml6bS1pbnB1dC1sYXlvdXQtbW9udGgnLCAnZGlzYWJsZWRJdGVtSGFuZGxlciddLmpvaW4oJzo6Jyk7XG5jb25zdCBleHRyYUJ1dHRvbkluamVjdG9yID0gWydwcml6bS1pbnB1dC1sYXlvdXQtbW9udGgnLCAnZXh0cmFCdXR0b25JbmplY3RvciddLmpvaW4oJzo6Jyk7XG5jb25zdCBpdGVtcyA9IFsncHJpem0taW5wdXQtbGF5b3V0LW1vbnRoJywgJ2l0ZW1zJ10uam9pbignOjonKTtcbmNvbnN0IG1hcmtlckhhbmRsZXIgPSBbJ3ByaXptLWlucHV0LWxheW91dC1tb250aCcsICdtYXJrZXJIYW5kbGVyJ10uam9pbignOjonKTtcbmNvbnN0IG1heCA9IFsncHJpem0taW5wdXQtbGF5b3V0LW1vbnRoJywgJ21heCddLmpvaW4oJzo6Jyk7XG5jb25zdCBwbGFjZWhvbGRlciA9IFsncHJpem0taW5wdXQtbGF5b3V0LW1vbnRoJywgJ3BsYWNlaG9sZGVyJ10uam9pbignOjonKTtcbmNvbnN0IHJlYWRPbmx5ID0gWydwcml6bS1pbnB1dC1sYXlvdXQtbW9udGgnLCAncmVhZE9ubHknXS5qb2luKCc6OicpO1xuY29uc3QgbWluID0gWydwcml6bS1pbnB1dC1sYXlvdXQtbW9udGgnLCAnbWluJ10uam9pbignOjonKTtcbmNvbnN0IHRlc3RJZCA9IFsncHJpem0taW5wdXQtbGF5b3V0LW1vbnRoJywgJ3Rlc3RJZCddLmpvaW4oJzo6Jyk7XG5cbmV4cG9ydCBjb25zdCBQcml6bUlucHV0TW9udGhUZW1wbGF0ZVRhc2tzOiBQcml6bVRlbXBsYXRlVGFza1tdID0gW1xuICB7XG4gICAgc2VsZWN0b3I6ICdwcml6bS1pbnB1dC1kYXRlJyxcbiAgICB0YXNrczogW1xuICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bUNoYW5nZU5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgbmFtZTogJ3ByaXptLWlucHV0LWxheW91dCcsXG4gICAgICB9KSxcbiAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1BZGRDaGlsZHJlblRlbXBsYXRlVGFzaywge1xuICAgICAgICBuYW1lOiAncHJpem0taW5wdXQtbGF5b3V0LW1vbnRoJyxcbiAgICAgICAgYXR0cnM6IHt9LFxuICAgICAgICB2b2lkRWxlbWVudDogdHJ1ZSxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgfSksXG4gICAgXSxcbiAgICBkZWZhdWx0SW5wdXRzOiB7XG4gICAgICBsYWJlbDogJ9CS0YvQsdC10YDQuNGC0LUg0LzQtdGB0Y/RhicsXG4gICAgfSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIHZhbDogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBwc2V1ZG9Gb2N1c2VkOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHBzZXVkb0hvdmVyZWQ6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgcHNldWRvSW52YWxpZDogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBwc2V1ZG9QcmVzc2VkOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHBzZXVkb1N0YXRlOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pXSxcblxuICAgICAgZm9ybUNvbnRyb2w6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBmb3JtQ29udHJvbCxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnZm9ybUNvbnRyb2wnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBuZ01vZGVsOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbmdNb2RlbCxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnbmdNb2RlbCcsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIGRpc2FibGVkSXRlbUhhbmRsZXI6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBkaXNhYmxlZEl0ZW1IYW5kbGVyLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdkaXNhYmxlZEl0ZW1IYW5kbGVyJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgZXh0cmFCdXR0b25JbmplY3RvcjogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IGV4dHJhQnV0dG9uSW5qZWN0b3IsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ2V4dHJhQnV0dG9uSW5qZWN0b3InLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBpdGVtczogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IGl0ZW1zLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdpdGVtcycsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIG1hcmtlckhhbmRsZXI6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBtYXJrZXJIYW5kbGVyLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdtYXJrZXJIYW5kbGVyJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgbWF4OiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbWF4LFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdtYXgnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBtaW46IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBtaW4sXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ21pbicsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHBsYWNlaG9sZGVyOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogcGxhY2Vob2xkZXIsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ3BsYWNlaG9sZGVyJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgdGVzdElkOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogdGVzdElkLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICd0ZXN0SWQnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICByZWFkT25seTogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IHJlYWRPbmx5LFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdyZWFkT25seScsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIG91dHB1dHM6IHtcbiAgICAgIGZvY3VzVmlzaWJsZUNoYW5nZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBmb2N1c2VkQ2hhbmdlOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGhvdmVyZWRDaGFuZ2U6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgcHJlc3NlZENoYW5nZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgfSxcbiAgICBmaW5pc2hUYXNrczogW1xuICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJ1blRhc2tzT25Ob2RlVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgIGRvbnRSdW5Pbk9uTWFpbjogdHJ1ZSxcbiAgICAgICAgcnVuT25DaGlsZHJlbjogdHJ1ZSxcbiAgICAgICAgdGFza3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3ByaXptLWlucHV0LWxheW91dC1tb250aCcsXG4gICAgICAgICAgICBpbnB1dHM6IHt9LFxuICAgICAgICAgICAgb3V0cHV0czoge30sXG4gICAgICAgICAgICB0YXNrczogW1xuICAgICAgICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptQ2FsbFdpdGhOZXdTb3VyY2VUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgICAgICBpZDogW1xuICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2wsXG4gICAgICAgICAgICAgICAgICBuZ01vZGVsLFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWRJdGVtSGFuZGxlcixcbiAgICAgICAgICAgICAgICAgIGV4dHJhQnV0dG9uSW5qZWN0b3IsXG4gICAgICAgICAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICAgICAgICAgIG1hcmtlckhhbmRsZXIsXG4gICAgICAgICAgICAgICAgICBtYXgsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5LFxuICAgICAgICAgICAgICAgICAgbWluLFxuICAgICAgICAgICAgICAgICAgdGVzdElkLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgXSxcbiAgfSxcbl07XG4iXX0=