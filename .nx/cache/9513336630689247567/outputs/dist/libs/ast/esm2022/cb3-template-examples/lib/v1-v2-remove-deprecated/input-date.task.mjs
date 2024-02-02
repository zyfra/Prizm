"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizmInputDateTemplateTasks = void 0;
const ast_1 = require("@prizm-ui/ast");
const formControl = ['prizm-input-layout-date', 'formControl'].join('::');
const ngModel = ['prizm-input-layout-date', 'ngModel'].join('::');
const defaultActiveYearMonth = ['prizm-input-layout-date', 'defaultActiveYearMonth'].join('::');
const disabledItemHandler = ['prizm-input-layout-date', 'disabledItemHandler'].join('::');
const extraButtonInjector = ['prizm-input-layout-date', 'extraButtonInjector'].join('::');
const items = ['prizm-input-layout-date', 'items'].join('::');
const markerHandler = ['prizm-input-layout-date', 'markerHandler'].join('::');
const max = ['prizm-input-layout-date', 'max'].join('::');
const placeholder = ['prizm-input-layout-date', 'placeholder'].join('::');
const readOnly = ['prizm-input-layout-date', 'readOnly'].join('::');
const min = ['prizm-input-layout-date', 'min'].join('::');
const testId = ['prizm-input-layout-date', 'testId'].join('::');
exports.PrizmInputDateTemplateTasks = [
    {
        selector: 'prizm-input-date',
        tasks: [
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmChangeNameTemplateTask, {
                name: 'prizm-input-layout',
            }),
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmAddChildrenTemplateTask, {
                name: 'prizm-input-layout-date',
                attrs: {},
                voidElement: true,
                children: [],
            }),
        ],
        defaultInputs: {
            label: 'Выберите дату',
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
                        selector: 'prizm-input-layout-date',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZGF0ZS50YXNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hc3QvY2IzLXRlbXBsYXRlLWV4YW1wbGVzL3NyYy9saWIvdjEtdjItcmVtb3ZlLWRlcHJlY2F0ZWQvaW5wdXQtZGF0ZS50YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQVV1QjtBQUV2QixNQUFNLFdBQVcsR0FBRyxDQUFDLHlCQUF5QixFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxRSxNQUFNLE9BQU8sR0FBRyxDQUFDLHlCQUF5QixFQUFFLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsRSxNQUFNLHNCQUFzQixHQUFHLENBQUMseUJBQXlCLEVBQUUsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEcsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLHlCQUF5QixFQUFFLHFCQUFxQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFGLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxRixNQUFNLEtBQUssR0FBRyxDQUFDLHlCQUF5QixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5RCxNQUFNLGFBQWEsR0FBRyxDQUFDLHlCQUF5QixFQUFFLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5RSxNQUFNLEdBQUcsR0FBRyxDQUFDLHlCQUF5QixFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxRCxNQUFNLFdBQVcsR0FBRyxDQUFDLHlCQUF5QixFQUFFLGFBQWEsQ0FBQyxDQUFD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bkIsbUJBQW1CO29DQUNuQixLQUFLO29DQUNMLGFBQWE7b0NBQ2IsR0FBRztvQ0FDSCxXQUFXO29DQUNYLFFBQVE7b0NBQ1IsR0FBRztvQ0FDSCxNQUFNO2lDQUNQOzZCQUNGLENBQUM7eUJBQ0g7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBQcml6bUFkZENoaWxkcmVuVGVtcGxhdGVUYXNrLFxuICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5LFxuICBQcml6bUNhbGxXaXRoTmV3U291cmNlVGVtcGxhdGVUYXNrLFxuICBQcml6bUNoYW5nZU5hbWVUZW1wbGF0ZVRhc2ssXG4gIFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLFxuICBQcml6bVJlbmFtZVRlbXBsYXRlVGFzayxcbiAgUHJpem1SdW5UYXNrc09uTm9kZVRlbXBsYXRlVGFzayxcbiAgUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssXG4gIFByaXptVGVtcGxhdGVUYXNrLFxufSBmcm9tICdAcHJpem0tdWkvYXN0JztcblxuY29uc3QgZm9ybUNvbnRyb2wgPSBbJ3ByaXptLWlucHV0LWxheW91dC1kYXRlJywgJ2Zvcm1Db250cm9sJ10uam9pbignOjonKTtcbmNvbnN0IG5nTW9kZWwgPSBbJ3ByaXptLWlucHV0LWxheW91dC1kYXRlJywgJ25nTW9kZWwnXS5qb2luKCc6OicpO1xuY29uc3QgZGVmYXVsdEFjdGl2ZVllYXJNb250aCA9IFsncHJpem0taW5wdXQtbGF5b3V0LWRhdGUnLCAnZGVmYXVsdEFjdGl2ZVllYXJNb250aCddLmpvaW4oJzo6Jyk7XG5jb25zdCBkaXNhYmxlZEl0ZW1IYW5kbGVyID0gWydwcml6bS1pbnB1dC1sYXlvdXQtZGF0ZScsICdkaXNhYmxlZEl0ZW1IYW5kbGVyJ10uam9pbignOjonKTtcbmNvbnN0IGV4dHJhQnV0dG9uSW5qZWN0b3IgPSBbJ3ByaXptLWlucHV0LWxheW91dC1kYXRlJywgJ2V4dHJhQnV0dG9uSW5qZWN0b3InXS5qb2luKCc6OicpO1xuY29uc3QgaXRlbXMgPSBbJ3ByaXptLWlucHV0LWxheW91dC1kYXRlJywgJ2l0ZW1zJ10uam9pbignOjonKTtcbmNvbnN0IG1hcmtlckhhbmRsZXIgPSBbJ3ByaXptLWlucHV0LWxheW91dC1kYXRlJywgJ21hcmtlckhhbmRsZXInXS5qb2luKCc6OicpO1xuY29uc3QgbWF4ID0gWydwcml6bS1pbnB1dC1sYXlvdXQtZGF0ZScsICdtYXgnXS5qb2luKCc6OicpO1xuY29uc3QgcGxhY2Vob2xkZXIgPSBbJ3ByaXptLWlucHV0LWxheW91dC1kYXRlJywgJ3BsYWNlaG9sZGVyJ10uam9pbignOjonKTtcbmNvbnN0IHJlYWRPbmx5ID0gWydwcml6bS1pbnB1dC1sYXlvdXQtZGF0ZScsICdyZWFkT25seSddLmpvaW4oJzo6Jyk7XG5jb25zdCBtaW4gPSBbJ3ByaXptLWlucHV0LWxheW91dC1kYXRlJywgJ21pbiddLmpvaW4oJzo6Jyk7XG5jb25zdCB0ZXN0SWQgPSBbJ3ByaXptLWlucHV0LWxheW91dC1kYXRlJywgJ3Rlc3RJZCddLmpvaW4oJzo6Jyk7XG5cbmV4cG9ydCBjb25zdCBQcml6bUlucHV0RGF0ZVRlbXBsYXRlVGFza3M6IFByaXptVGVtcGxhdGVUYXNrW10gPSBbXG4gIHtcbiAgICBzZWxlY3RvcjogJ3ByaXptLWlucHV0LWRhdGUnLFxuICAgIHRhc2tzOiBbXG4gICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptQ2hhbmdlTmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICBuYW1lOiAncHJpem0taW5wdXQtbGF5b3V0JyxcbiAgICAgIH0pLFxuICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bUFkZENoaWxkcmVuVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgIG5hbWU6ICdwcml6bS1pbnB1dC1sYXlvdXQtZGF0ZScsXG4gICAgICAgIGF0dHJzOiB7fSxcbiAgICAgICAgdm9pZEVsZW1lbnQ6IHRydWUsXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgZGVmYXVsdElucHV0czoge1xuICAgICAgbGFiZWw6ICfQktGL0LHQtdGA0LjRgtC1INC00LDRgtGDJyxcbiAgICB9LFxuICAgIGlucHV0czoge1xuICAgICAgZGVmYXVsdEFjdGl2ZVllYXJNb250aDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IGRlZmF1bHRBY3RpdmVZZWFyTW9udGgsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ2RlZmF1bHRBY3RpdmVZZWFyTW9udGgnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICB2YWw6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgcHNldWRvRm9jdXNlZDogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBwc2V1ZG9Ib3ZlcmVkOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHBzZXVkb0ludmFsaWQ6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgcHNldWRvUHJlc3NlZDogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBwc2V1ZG9TdGF0ZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KV0sXG5cbiAgICAgIGZvcm1Db250cm9sOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogZm9ybUNvbnRyb2wsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ2Zvcm1Db250cm9sJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgbmdNb2RlbDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IG5nTW9kZWwsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ25nTW9kZWwnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBkaXNhYmxlZEl0ZW1IYW5kbGVyOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogZGlzYWJsZWRJdGVtSGFuZGxlcixcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnZGlzYWJsZWRJdGVtSGFuZGxlcicsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIGV4dHJhQnV0dG9uSW5qZWN0b3I6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBleHRyYUJ1dHRvbkluamVjdG9yLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdleHRyYUJ1dHRvbkluamVjdG9yJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBpdGVtcyxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnaXRlbXMnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBtYXJrZXJIYW5kbGVyOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbWFya2VySGFuZGxlcixcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnbWFya2VySGFuZGxlcicsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIG1heDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IG1heCxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnbWF4JyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgbWluOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbWluLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdtaW4nLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBwbGFjZWhvbGRlcjogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IHBsYWNlaG9sZGVyLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdwbGFjZWhvbGRlcicsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHRlc3RJZDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IHRlc3RJZCxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAndGVzdElkJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgcmVhZE9ubHk6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiByZWFkT25seSxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAncmVhZE9ubHknLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBvdXRwdXRzOiB7XG4gICAgICBmb2N1c1Zpc2libGVDaGFuZ2U6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgZm9jdXNlZENoYW5nZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBob3ZlcmVkQ2hhbmdlOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHByZXNzZWRDaGFuZ2U6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgIH0sXG4gICAgZmluaXNoVGFza3M6IFtcbiAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SdW5UYXNrc09uTm9kZVRlbXBsYXRlVGFzaywge1xuICAgICAgICBkb250UnVuT25Pbk1haW46IHRydWUsXG4gICAgICAgIHJ1bk9uQ2hpbGRyZW46IHRydWUsXG4gICAgICAgIHRhc2tzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdwcml6bS1pbnB1dC1sYXlvdXQtZGF0ZScsXG4gICAgICAgICAgICBpbnB1dHM6IHt9LFxuICAgICAgICAgICAgb3V0cHV0czoge30sXG4gICAgICAgICAgICB0YXNrczogW1xuICAgICAgICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptQ2FsbFdpdGhOZXdTb3VyY2VUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgICAgICBpZDogW1xuICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2wsXG4gICAgICAgICAgICAgICAgICBuZ01vZGVsLFxuICAgICAgICAgICAgICAgICAgZGVmYXVsdEFjdGl2ZVllYXJNb250aCxcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkSXRlbUhhbmRsZXIsXG4gICAgICAgICAgICAgICAgICBleHRyYUJ1dHRvbkluamVjdG9yLFxuICAgICAgICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgICAgICAgICBtYXJrZXJIYW5kbGVyLFxuICAgICAgICAgICAgICAgICAgbWF4LFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgICByZWFkT25seSxcbiAgICAgICAgICAgICAgICAgIG1pbixcbiAgICAgICAgICAgICAgICAgIHRlc3RJZCxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgIF0sXG4gIH0sXG5dO1xuIl19