"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizmInputDateTimeRangeTemplateTasks = void 0;
const ast_1 = require("@prizm-ui/ast");
const formControl = ['prizm-input-layout-date-time-range', 'formControl'].join('::');
const ngModel = ['prizm-input-layout-date-time-range', 'ngModel'].join('::');
const defaultActiveYearMonth = ['prizm-input-layout-date-time-range', 'defaultActiveYearMonth'].join('::');
const disabledItemHandler = ['prizm-input-layout-date-time-range', 'disabledItemHandler'].join('::');
const extraButtonInjector = ['prizm-input-layout-date-time-range', 'extraButtonInjector'].join('::');
const items = ['prizm-input-layout-date-time-range', 'items'].join('::');
const markerHandler = ['prizm-input-layout-date-time-range', 'markerHandler'].join('::');
const max = ['prizm-input-layout-date-time-range', 'max'].join('::');
const placeholder = ['prizm-input-layout-date-time-range', 'placeholder'].join('::');
const readOnly = ['prizm-input-layout-date-time-range', 'readOnly'].join('::');
const min = ['prizm-input-layout-date-time-range', 'min'].join('::');
const timeItems = ['prizm-input-layout-date-time-range', 'timeItems'].join('::');
const timeMode = ['prizm-input-layout-date-time-range', 'timeMode'].join('::');
const timeStrict = ['prizm-input-layout-date-time-range', 'timeStrict'].join('::');
const testId = ['prizm-input-layout-date-time-range', 'testId'].join('::');
exports.PrizmInputDateTimeRangeTemplateTasks = [
    {
        selector: 'prizm-input-date-time-range',
        tasks: [
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmChangeNameTemplateTask, {
                name: 'prizm-input-layout',
            }),
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmAddChildrenTemplateTask, {
                name: 'prizm-input-layout-date-time-range',
                attrs: {},
                voidElement: true,
                children: [],
            }),
        ],
        defaultInputs: {
            label: 'Выберите из списка',
        },
        inputs: {
            defaultActiveYearMonth: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: defaultActiveYearMonth,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'defaultActiveYearMonth',
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
            timeItems: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: timeItems,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'timeItems',
                    }),
                }),
            ],
            timeMode: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: timeMode,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'timeMode',
                    }),
                }),
            ],
            timeStrict: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: timeStrict,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'timeStrict',
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
                        selector: 'prizm-input-layout-date-time-range',
                        inputs: {},
                        outputs: {},
                        tasks: [
                            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmCallWithNewSourceTemplateTask, {
                                id: [
                                    formControl,
                                    ngModel,
                                    defaultActiveYearMonth,
                                    disabledItemHandler,
                                    extraButtonInjector,
                                    items,
                                    markerHandler,
                                    max,
                                    placeholder,
                                    readOnly,
                                    min,
                                    timeItems,
                                    timeMode,
                                    timeStrict,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZGF0ZS10aW1lLXJhbmdlLnRhc2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FzdC9jYjMtdGVtcGxhdGUtZXhhbXBsZXMvc3JjL2xpYi92MS12Mi1yZW1vdmUtZGVwcmVjYXRlZC9pbnB1dC1kYXRlLXRpbWUtcmFuZ2UudGFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FVdUI7QUFFdkIsTUFBTSxXQUFXLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckYsTUFBTSxPQUFPLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0UsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLG9DQUFvQyxFQUFFLHdCQUF3QixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNHLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNyRyxNQUFNLG1CQUFtQixHQUFHLENBQUMsb0NBQW9DLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckcsTUFBTSxLQUFLLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekUsTUFBTSxhQUFhLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekYsTUFBTSxHQUFHLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckUsTUFBTSxXQUFXLEdBQUcsQ0FBQyxvQ0FB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Q0g7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBQcml6bUFkZENoaWxkcmVuVGVtcGxhdGVUYXNrLFxuICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5LFxuICBQcml6bUNhbGxXaXRoTmV3U291cmNlVGVtcGxhdGVUYXNrLFxuICBQcml6bUNoYW5nZU5hbWVUZW1wbGF0ZVRhc2ssXG4gIFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLFxuICBQcml6bVJlbmFtZVRlbXBsYXRlVGFzayxcbiAgUHJpem1SdW5UYXNrc09uTm9kZVRlbXBsYXRlVGFzayxcbiAgUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssXG4gIFByaXptVGVtcGxhdGVUYXNrLFxufSBmcm9tICdAcHJpem0tdWkvYXN0JztcblxuY29uc3QgZm9ybUNvbnRyb2wgPSBbJ3ByaXptLWlucHV0LWxheW91dC1kYXRlLXRpbWUtcmFuZ2UnLCAnZm9ybUNvbnRyb2wnXS5qb2luKCc6OicpO1xuY29uc3QgbmdNb2RlbCA9IFsncHJpem0taW5wdXQtbGF5b3V0LWRhdGUtdGltZS1yYW5nZScsICduZ01vZGVsJ10uam9pbignOjonKTtcbmNvbnN0IGRlZmF1bHRBY3RpdmVZZWFyTW9udGggPSBbJ3ByaXptLWlucHV0LWxheW91dC1kYXRlLXRpbWUtcmFuZ2UnLCAnZGVmYXVsdEFjdGl2ZVllYXJNb250aCddLmpvaW4oJzo6Jyk7XG5jb25zdCBkaXNhYmxlZEl0ZW1IYW5kbGVyID0gWydwcml6bS1pbnB1dC1sYXlvdXQtZGF0ZS10aW1lLXJhbmdlJywgJ2Rpc2FibGVkSXRlbUhhbmRsZXInXS5qb2luKCc6OicpO1xuY29uc3QgZXh0cmFCdXR0b25JbmplY3RvciA9IFsncHJpem0taW5wdXQtbGF5b3V0LWRhdGUtdGltZS1yYW5nZScsICdleHRyYUJ1dHRvbkluamVjdG9yJ10uam9pbignOjonKTtcbmNvbnN0IGl0ZW1zID0gWydwcml6bS1pbnB1dC1sYXlvdXQtZGF0ZS10aW1lLXJhbmdlJywgJ2l0ZW1zJ10uam9pbignOjonKTtcbmNvbnN0IG1hcmtlckhhbmRsZXIgPSBbJ3ByaXptLWlucHV0LWxheW91dC1kYXRlLXRpbWUtcmFuZ2UnLCAnbWFya2VySGFuZGxlciddLmpvaW4oJzo6Jyk7XG5jb25zdCBtYXggPSBbJ3ByaXptLWlucHV0LWxheW91dC1kYXRlLXRpbWUtcmFuZ2UnLCAnbWF4J10uam9pbignOjonKTtcbmNvbnN0IHBsYWNlaG9sZGVyID0gWydwcml6bS1pbnB1dC1sYXlvdXQtZGF0ZS10aW1lLXJhbmdlJywgJ3BsYWNlaG9sZGVyJ10uam9pbignOjonKTtcbmNvbnN0IHJlYWRPbmx5ID0gWydwcml6bS1pbnB1dC1sYXlvdXQtZGF0ZS10aW1lLXJhbmdlJywgJ3JlYWRPbmx5J10uam9pbignOjonKTtcbmNvbnN0IG1pbiA9IFsncHJpem0taW5wdXQtbGF5b3V0LWRhdGUtdGltZS1yYW5nZScsICdtaW4nXS5qb2luKCc6OicpO1xuY29uc3QgdGltZUl0ZW1zID0gWydwcml6bS1pbnB1dC1sYXlvdXQtZGF0ZS10aW1lLXJhbmdlJywgJ3RpbWVJdGVtcyddLmpvaW4oJzo6Jyk7XG5jb25zdCB0aW1lTW9kZSA9IFsncHJpem0taW5wdXQtbGF5b3V0LWRhdGUtdGltZS1yYW5nZScsICd0aW1lTW9kZSddLmpvaW4oJzo6Jyk7XG5jb25zdCB0aW1lU3RyaWN0ID0gWydwcml6bS1pbnB1dC1sYXlvdXQtZGF0ZS10aW1lLXJhbmdlJywgJ3RpbWVTdHJpY3QnXS5qb2luKCc6OicpO1xuY29uc3QgdGVzdElkID0gWydwcml6bS1pbnB1dC1sYXlvdXQtZGF0ZS10aW1lLXJhbmdlJywgJ3Rlc3RJZCddLmpvaW4oJzo6Jyk7XG5cbmV4cG9ydCBjb25zdCBQcml6bUlucHV0RGF0ZVRpbWVSYW5nZVRlbXBsYXRlVGFza3M6IFByaXptVGVtcGxhdGVUYXNrW10gPSBbXG4gIHtcbiAgICBzZWxlY3RvcjogJ3ByaXptLWlucHV0LWRhdGUtdGltZS1yYW5nZScsXG4gICAgdGFza3M6IFtcbiAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1DaGFuZ2VOYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgIG5hbWU6ICdwcml6bS1pbnB1dC1sYXlvdXQnLFxuICAgICAgfSksXG4gICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptQWRkQ2hpbGRyZW5UZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgbmFtZTogJ3ByaXptLWlucHV0LWxheW91dC1kYXRlLXRpbWUtcmFuZ2UnLFxuICAgICAgICBhdHRyczoge30sXG4gICAgICAgIHZvaWRFbGVtZW50OiB0cnVlLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICB9KSxcbiAgICBdLFxuICAgIGRlZmF1bHRJbnB1dHM6IHtcbiAgICAgIGxhYmVsOiAn0JLRi9Cx0LXRgNC40YLQtSDQuNC3INGB0L/QuNGB0LrQsCcsXG4gICAgfSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGRlZmF1bHRBY3RpdmVZZWFyTW9udGg6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBkZWZhdWx0QWN0aXZlWWVhck1vbnRoLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdkZWZhdWx0QWN0aXZlWWVhck1vbnRoJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgdmFsOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHBzZXVkb0ZvY3VzZWQ6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgcHNldWRvSG92ZXJlZDogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBwc2V1ZG9JbnZhbGlkOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHBzZXVkb1ByZXNzZWQ6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgcHNldWRvU3RhdGU6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSldLFxuXG4gICAgICBmb3JtQ29udHJvbDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IGZvcm1Db250cm9sLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdmb3JtQ29udHJvbCcsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIG5nTW9kZWw6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBuZ01vZGVsLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICduZ01vZGVsJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgZGlzYWJsZWRJdGVtSGFuZGxlcjogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IGRpc2FibGVkSXRlbUhhbmRsZXIsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ2Rpc2FibGVkSXRlbUhhbmRsZXInLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBleHRyYUJ1dHRvbkluamVjdG9yOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogZXh0cmFCdXR0b25JbmplY3RvcixcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnZXh0cmFCdXR0b25JbmplY3RvcicsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogaXRlbXMsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ2l0ZW1zJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgdGltZUl0ZW1zOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogdGltZUl0ZW1zLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICd0aW1lSXRlbXMnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICB0aW1lTW9kZTogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IHRpbWVNb2RlLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICd0aW1lTW9kZScsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHRpbWVTdHJpY3Q6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiB0aW1lU3RyaWN0LFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICd0aW1lU3RyaWN0JyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgdGVzdElkOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogdGVzdElkLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICd0ZXN0SWQnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBtYXJrZXJIYW5kbGVyOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbWFya2VySGFuZGxlcixcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnbWFya2VySGFuZGxlcicsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIG1heDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IG1heCxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnbWF4JyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgbWluOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbWluLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdtaW4nLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBwbGFjZWhvbGRlcjogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IHBsYWNlaG9sZGVyLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdwbGFjZWhvbGRlcicsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHJlYWRPbmx5OiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogcmVhZE9ubHksXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ3JlYWRPbmx5JyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0sXG4gICAgb3V0cHV0czoge1xuICAgICAgZm9jdXNWaXNpYmxlQ2hhbmdlOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGZvY3VzZWRDaGFuZ2U6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgaG92ZXJlZENoYW5nZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBwcmVzc2VkQ2hhbmdlOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pXSxcbiAgICB9LFxuICAgIGZpbmlzaFRhc2tzOiBbXG4gICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUnVuVGFza3NPbk5vZGVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgZG9udFJ1bk9uT25NYWluOiB0cnVlLFxuICAgICAgICBydW5PbkNoaWxkcmVuOiB0cnVlLFxuICAgICAgICB0YXNrczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAncHJpem0taW5wdXQtbGF5b3V0LWRhdGUtdGltZS1yYW5nZScsXG4gICAgICAgICAgICBpbnB1dHM6IHt9LFxuICAgICAgICAgICAgb3V0cHV0czoge30sXG4gICAgICAgICAgICB0YXNrczogW1xuICAgICAgICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptQ2FsbFdpdGhOZXdTb3VyY2VUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgICAgICBpZDogW1xuICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2wsXG4gICAgICAgICAgICAgICAgICBuZ01vZGVsLFxuICAgICAgICAgICAgICAgICAgZGVmYXVsdEFjdGl2ZVllYXJNb250aCxcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkSXRlbUhhbmRsZXIsXG4gICAgICAgICAgICAgICAgICBleHRyYUJ1dHRvbkluamVjdG9yLFxuICAgICAgICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgICAgICAgICBtYXJrZXJIYW5kbGVyLFxuICAgICAgICAgICAgICAgICAgbWF4LFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgICByZWFkT25seSxcbiAgICAgICAgICAgICAgICAgIG1pbixcbiAgICAgICAgICAgICAgICAgIHRpbWVJdGVtcyxcbiAgICAgICAgICAgICAgICAgIHRpbWVNb2RlLFxuICAgICAgICAgICAgICAgICAgdGltZVN0cmljdCxcbiAgICAgICAgICAgICAgICAgIHRlc3RJZCxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgIF0sXG4gIH0sXG5dO1xuIl19