"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizmInputDateRangeTemplateTasks = void 0;
const ast_1 = require("@prizm-ui/ast");
const formControl = ['prizm-input-layout-date-range', 'formControl'].join('::');
const ngModel = ['prizm-input-layout-date-range', 'ngModel'].join('::');
const defaultViewedMonth = ['prizm-input-layout-date-range', 'defaultViewedMonth'].join('::');
const disabledItemHandler = ['prizm-input-layout-date-range', 'disabledItemHandler'].join('::');
const extraButtonInjector = ['prizm-input-layout-date-range', 'extraButtonInjector'].join('::');
const items = ['prizm-input-layout-date-range', 'items'].join('::');
const markerHandler = ['prizm-input-layout-date-range', 'markerHandler'].join('::');
const max = ['prizm-input-layout-date-range', 'max'].join('::');
const placeholder = ['prizm-input-layout-date-range', 'placeholder'].join('::');
const readOnly = ['prizm-input-layout-date-range', 'readOnly'].join('::');
const min = ['prizm-input-layout-date-range', 'min'].join('::');
const testId = ['prizm-input-layout-date-range', 'testId'].join('::');
const maxLength = ['prizm-input-layout-date-range', 'maxLength'].join('::');
const minLength = ['prizm-input-layout-date-range', 'minLength'].join('::');
exports.PrizmInputDateRangeTemplateTasks = [
    {
        selector: 'prizm-input-date-range',
        tasks: [
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmChangeNameTemplateTask, {
                name: 'prizm-input-layout',
            }),
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmAddChildrenTemplateTask, {
                name: 'prizm-input-layout-date-range',
                attrs: {},
                voidElement: true,
                children: [],
            }),
        ],
        defaultInputs: {
            label: 'Выберите даты',
        },
        inputs: {
            defaultViewedMonth: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: defaultViewedMonth,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'defaultViewedMonth',
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
            maxLength: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: maxLength,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'maxLength',
                    }),
                }),
            ],
            minLength: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: minLength,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'minLength',
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
                        selector: 'prizm-input-layout-date-range',
                        inputs: {},
                        outputs: {},
                        tasks: [
                            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmCallWithNewSourceTemplateTask, {
                                id: [
                                    formControl,
                                    ngModel,
                                    defaultViewedMonth,
                                    disabledItemHandler,
                                    extraButtonInjector,
                                    items,
                                    markerHandler,
                                    max,
                                    placeholder,
                                    readOnly,
                                    min,
                                    testId,
                                    maxLength,
                                    minLength,
                                ],
                            }),
                        ],
                    },
                ],
            }),
        ],
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZGF0ZS1yYW5nZS50YXNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hc3QvY2IzLXRlbXBsYXRlLWV4YW1wbGVzL3NyYy9saWIvdjEtdjItcmVtb3ZlLWRlcHJlY2F0ZWQvaW5wdXQtZGF0ZS1yYW5nZS50YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQVV1QjtBQUV2QixNQUFNLFdBQVcsR0FBRyxDQUFDLCtCQUErQixFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoRixNQUFNLE9BQU8sR0FBRyxDQUFDLCtCQUErQixFQUFFLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4RSxNQUFNLGtCQUFrQixHQUFHLENBQUMsK0JBQStCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUYsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLCtCQUErQixFQUFFLHFCQUFxQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hHLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoRyxNQUFNLEtBQUssR0FBRyxDQUFDLCtCQUErQixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwRSxNQUFNLGFBQWEsR0FBRyxDQUFDLCtCQUErQixFQUFFLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwRixNQUFNLEdBQUcsR0FBRyxDQUFDLCtCQUErQixFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoRSxNQUFNLFdBQVcsR0FBRyxDQUFDLCtCQUErQixFQUFFLGFB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Q2xGLGFBQWEsRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsc0NBQWdDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDN0UsYUFBYSxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxzQ0FBZ0MsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM3RSxhQUFhLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLHNDQUFnQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzlFO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsSUFBQSw0QkFBc0IsRUFBQyxxQ0FBK0IsRUFBRTtnQkFDdEQsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLGFBQWEsRUFBRSxJQUFJO2dCQUNuQixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsUUFBUSxFQUFFLCtCQUErQjt3QkFDekMsTUFBTSxFQUFFLEVBQUU7d0JBQ1YsT0FBTyxFQUFFLEVBQUU7d0JBQ1gsS0FBSyxFQUFFOzRCQUNMLElBQUEsNEJBQXNCLEVBQUMsd0NBQWtDLEVBQUU7Z0NBQ3pELEVBQUUsRUFBRTtvQ0FDRixXQUFXO29DQUNYLE9BQU87b0NBQ1Asa0JBQWtCO29DQUNsQixtQkFBbUI7b0NBQ25CLG1CQUFtQjtvQ0FDbkIsS0FBSztvQ0FDTCxhQUFhO29DQUNiLEdBQUc7b0NBQ0gsV0FBVztvQ0FDWCxRQUFRO29DQUNSLEdBQUc7b0NBQ0gsTUFBTTtvQ0FDTixTQUFTO29DQUNULFNBQVM7aUNBQ1Y7NkJBQ0YsQ0FBQzt5QkFDSDtxQkFDRjtpQkFDRjthQUNGLENBQUM7U0FDSDtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFByaXptQWRkQ2hpbGRyZW5UZW1wbGF0ZVRhc2ssXG4gIHByaXptQXN0Q3JlYXRlQWN0aW9uQnksXG4gIFByaXptQ2FsbFdpdGhOZXdTb3VyY2VUZW1wbGF0ZVRhc2ssXG4gIFByaXptQ2hhbmdlTmFtZVRlbXBsYXRlVGFzayxcbiAgUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssXG4gIFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLFxuICBQcml6bVJ1blRhc2tzT25Ob2RlVGVtcGxhdGVUYXNrLFxuICBQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzayxcbiAgUHJpem1UZW1wbGF0ZVRhc2ssXG59IGZyb20gJ0Bwcml6bS11aS9hc3QnO1xuXG5jb25zdCBmb3JtQ29udHJvbCA9IFsncHJpem0taW5wdXQtbGF5b3V0LWRhdGUtcmFuZ2UnLCAnZm9ybUNvbnRyb2wnXS5qb2luKCc6OicpO1xuY29uc3QgbmdNb2RlbCA9IFsncHJpem0taW5wdXQtbGF5b3V0LWRhdGUtcmFuZ2UnLCAnbmdNb2RlbCddLmpvaW4oJzo6Jyk7XG5jb25zdCBkZWZhdWx0Vmlld2VkTW9udGggPSBbJ3ByaXptLWlucHV0LWxheW91dC1kYXRlLXJhbmdlJywgJ2RlZmF1bHRWaWV3ZWRNb250aCddLmpvaW4oJzo6Jyk7XG5jb25zdCBkaXNhYmxlZEl0ZW1IYW5kbGVyID0gWydwcml6bS1pbnB1dC1sYXlvdXQtZGF0ZS1yYW5nZScsICdkaXNhYmxlZEl0ZW1IYW5kbGVyJ10uam9pbignOjonKTtcbmNvbnN0IGV4dHJhQnV0dG9uSW5qZWN0b3IgPSBbJ3ByaXptLWlucHV0LWxheW91dC1kYXRlLXJhbmdlJywgJ2V4dHJhQnV0dG9uSW5qZWN0b3InXS5qb2luKCc6OicpO1xuY29uc3QgaXRlbXMgPSBbJ3ByaXptLWlucHV0LWxheW91dC1kYXRlLXJhbmdlJywgJ2l0ZW1zJ10uam9pbignOjonKTtcbmNvbnN0IG1hcmtlckhhbmRsZXIgPSBbJ3ByaXptLWlucHV0LWxheW91dC1kYXRlLXJhbmdlJywgJ21hcmtlckhhbmRsZXInXS5qb2luKCc6OicpO1xuY29uc3QgbWF4ID0gWydwcml6bS1pbnB1dC1sYXlvdXQtZGF0ZS1yYW5nZScsICdtYXgnXS5qb2luKCc6OicpO1xuY29uc3QgcGxhY2Vob2xkZXIgPSBbJ3ByaXptLWlucHV0LWxheW91dC1kYXRlLXJhbmdlJywgJ3BsYWNlaG9sZGVyJ10uam9pbignOjonKTtcbmNvbnN0IHJlYWRPbmx5ID0gWydwcml6bS1pbnB1dC1sYXlvdXQtZGF0ZS1yYW5nZScsICdyZWFkT25seSddLmpvaW4oJzo6Jyk7XG5jb25zdCBtaW4gPSBbJ3ByaXptLWlucHV0LWxheW91dC1kYXRlLXJhbmdlJywgJ21pbiddLmpvaW4oJzo6Jyk7XG5jb25zdCB0ZXN0SWQgPSBbJ3ByaXptLWlucHV0LWxheW91dC1kYXRlLXJhbmdlJywgJ3Rlc3RJZCddLmpvaW4oJzo6Jyk7XG5jb25zdCBtYXhMZW5ndGggPSBbJ3ByaXptLWlucHV0LWxheW91dC1kYXRlLXJhbmdlJywgJ21heExlbmd0aCddLmpvaW4oJzo6Jyk7XG5jb25zdCBtaW5MZW5ndGggPSBbJ3ByaXptLWlucHV0LWxheW91dC1kYXRlLXJhbmdlJywgJ21pbkxlbmd0aCddLmpvaW4oJzo6Jyk7XG5cbmV4cG9ydCBjb25zdCBQcml6bUlucHV0RGF0ZVJhbmdlVGVtcGxhdGVUYXNrczogUHJpem1UZW1wbGF0ZVRhc2tbXSA9IFtcbiAge1xuICAgIHNlbGVjdG9yOiAncHJpem0taW5wdXQtZGF0ZS1yYW5nZScsXG4gICAgdGFza3M6IFtcbiAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1DaGFuZ2VOYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgIG5hbWU6ICdwcml6bS1pbnB1dC1sYXlvdXQnLFxuICAgICAgfSksXG4gICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptQWRkQ2hpbGRyZW5UZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgbmFtZTogJ3ByaXptLWlucHV0LWxheW91dC1kYXRlLXJhbmdlJyxcbiAgICAgICAgYXR0cnM6IHt9LFxuICAgICAgICB2b2lkRWxlbWVudDogdHJ1ZSxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgfSksXG4gICAgXSxcbiAgICBkZWZhdWx0SW5wdXRzOiB7XG4gICAgICBsYWJlbDogJ9CS0YvQsdC10YDQuNGC0LUg0LTQsNGC0YsnLFxuICAgIH0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBkZWZhdWx0Vmlld2VkTW9udGg6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBkZWZhdWx0Vmlld2VkTW9udGgsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ2RlZmF1bHRWaWV3ZWRNb250aCcsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHZhbDogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBwc2V1ZG9Gb2N1c2VkOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHBzZXVkb0hvdmVyZWQ6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgcHNldWRvSW52YWxpZDogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBwc2V1ZG9QcmVzc2VkOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHBzZXVkb1N0YXRlOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pXSxcblxuICAgICAgZm9ybUNvbnRyb2w6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBmb3JtQ29udHJvbCxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnZm9ybUNvbnRyb2wnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBuZ01vZGVsOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbmdNb2RlbCxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnbmdNb2RlbCcsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIGRpc2FibGVkSXRlbUhhbmRsZXI6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBkaXNhYmxlZEl0ZW1IYW5kbGVyLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdkaXNhYmxlZEl0ZW1IYW5kbGVyJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgZXh0cmFCdXR0b25JbmplY3RvcjogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IGV4dHJhQnV0dG9uSW5qZWN0b3IsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ2V4dHJhQnV0dG9uSW5qZWN0b3InLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBpdGVtczogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IGl0ZW1zLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdpdGVtcycsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIG1hcmtlckhhbmRsZXI6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBtYXJrZXJIYW5kbGVyLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdtYXJrZXJIYW5kbGVyJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgbWF4OiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbWF4LFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdtYXgnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBtaW46IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBtaW4sXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ21pbicsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHBsYWNlaG9sZGVyOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogcGxhY2Vob2xkZXIsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ3BsYWNlaG9sZGVyJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgdGVzdElkOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogdGVzdElkLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICd0ZXN0SWQnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBtYXhMZW5ndGg6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBtYXhMZW5ndGgsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ21heExlbmd0aCcsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIG1pbkxlbmd0aDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IG1pbkxlbmd0aCxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnbWluTGVuZ3RoJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgcmVhZE9ubHk6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiByZWFkT25seSxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAncmVhZE9ubHknLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBvdXRwdXRzOiB7XG4gICAgICBmb2N1c1Zpc2libGVDaGFuZ2U6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgZm9jdXNlZENoYW5nZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBob3ZlcmVkQ2hhbmdlOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHByZXNzZWRDaGFuZ2U6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgIH0sXG4gICAgZmluaXNoVGFza3M6IFtcbiAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SdW5UYXNrc09uTm9kZVRlbXBsYXRlVGFzaywge1xuICAgICAgICBkb250UnVuT25Pbk1haW46IHRydWUsXG4gICAgICAgIHJ1bk9uQ2hpbGRyZW46IHRydWUsXG4gICAgICAgIHRhc2tzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdwcml6bS1pbnB1dC1sYXlvdXQtZGF0ZS1yYW5nZScsXG4gICAgICAgICAgICBpbnB1dHM6IHt9LFxuICAgICAgICAgICAgb3V0cHV0czoge30sXG4gICAgICAgICAgICB0YXNrczogW1xuICAgICAgICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptQ2FsbFdpdGhOZXdTb3VyY2VUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgICAgICBpZDogW1xuICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2wsXG4gICAgICAgICAgICAgICAgICBuZ01vZGVsLFxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZpZXdlZE1vbnRoLFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWRJdGVtSGFuZGxlcixcbiAgICAgICAgICAgICAgICAgIGV4dHJhQnV0dG9uSW5qZWN0b3IsXG4gICAgICAgICAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICAgICAgICAgIG1hcmtlckhhbmRsZXIsXG4gICAgICAgICAgICAgICAgICBtYXgsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5LFxuICAgICAgICAgICAgICAgICAgbWluLFxuICAgICAgICAgICAgICAgICAgdGVzdElkLFxuICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgXSxcbiAgfSxcbl07XG4iXX0=