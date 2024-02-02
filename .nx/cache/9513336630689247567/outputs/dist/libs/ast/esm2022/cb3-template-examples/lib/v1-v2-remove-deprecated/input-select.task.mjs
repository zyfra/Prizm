"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizmInputSelectTemplateTasks = void 0;
const ast_1 = require("@prizm-ui/ast");
const formControl = ['prizm-input-select', 'formControl'].join('::');
const ngModel = ['prizm-input-select', 'ngModel'].join('::');
const nameDropdownWidth = ['prizm-input-select', 'dropdownWidth'].join('::');
const nameEmptyContent = ['prizm-input-select', 'emptyContent'].join('::');
const nameIcon = ['prizm-input-select', 'icon'].join('::');
const nameIdentityMatcher = ['prizm-input-select', 'identityMatcher'].join('::');
const nameItems = ['prizm-input-select', 'items'].join('::');
const nameMaxDropdownHeight = ['prizm-input-select', 'maxDropdownHeight'].join('::');
const nameMinDropdownHeight = ['prizm-input-select', 'minDropdownHeight'].join('::');
const nameNullContent = ['prizm-input-select', 'nullContent'].join('::');
const namePlaceholder = ['prizm-input-select', 'placeholder'].join('::');
const nameSearchMatcher = ['prizm-input-select', 'searchMatcher'].join('::');
const searchable = ['prizm-input-select', 'searchable'].join('::');
const stringify = ['prizm-input-select', 'stringify'].join('::');
const valueTemplate = ['prizm-input-select', 'valueTemplate'].join('::');
const search = ['prizm-input-select', 'search'].join('::');
const searchOutput = ['prizm-input-select', 'output-search'].join('::');
exports.PrizmInputSelectTemplateTasks = [
    {
        selector: 'prizm-select',
        tasks: [
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmChangeNameTemplateTask, {
                name: 'prizm-input-layout',
            }),
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmAddChildrenTemplateTask, {
                name: 'prizm-input-select',
                attrs: {},
                voidElement: true,
                children: [],
            }),
        ],
        defaultInputs: {
            label: 'Выберите из списка',
        },
        inputs: {
            dropdownWidth: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: nameDropdownWidth,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'dropdownWidth',
                    }),
                }),
            ],
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
            emptyContent: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: nameEmptyContent,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'emptyContent',
                    }),
                }),
            ],
            icon: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: nameIcon,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'icon',
                    }),
                }),
            ],
            identityMatcher: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: nameIdentityMatcher,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'identityMatcher',
                    }),
                }),
            ],
            items: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: nameItems,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'items',
                    }),
                }),
            ],
            maxDropdownHeight: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: nameMaxDropdownHeight,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'maxDropdownHeight',
                    }),
                }),
            ],
            minDropdownHeight: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: nameMinDropdownHeight,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'minDropdownHeight',
                    }),
                }),
            ],
            nullContent: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: nameNullContent,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'nullContent',
                    }),
                }),
            ],
            placeholder: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: namePlaceholder,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'placeholder',
                    }),
                }),
            ],
            searchMatcher: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: nameSearchMatcher,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'searchMatcher',
                    }),
                }),
            ],
            searchable: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: searchable,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'searchable',
                    }),
                }),
            ],
            stringify: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: stringify,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'stringify',
                    }),
                }),
            ],
            valueTemplate: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: valueTemplate,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'valueTemplate',
                    }),
                }),
            ],
            search: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: search,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'search',
                    }),
                }),
            ],
        },
        outputs: {
            searchChange: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: searchOutput,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'searchChange',
                    }),
                }),
            ],
        },
        finishTasks: [
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRunTasksOnNodeTemplateTask, {
                dontRunOnOnMain: true,
                runOnChildren: true,
                tasks: [
                    {
                        selector: 'prizm-input-select',
                        inputs: {},
                        outputs: {},
                        tasks: [
                            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmCallWithNewSourceTemplateTask, {
                                id: [
                                    nameDropdownWidth,
                                    nameEmptyContent,
                                    nameIcon,
                                    nameIdentityMatcher,
                                    nameItems,
                                    nameMaxDropdownHeight,
                                    nameMinDropdownHeight,
                                    nameNullContent,
                                    namePlaceholder,
                                    nameSearchMatcher,
                                    searchable,
                                    stringify,
                                    valueTemplate,
                                    search,
                                    searchOutput,
                                    ngModel,
                                    formControl,
                                ],
                            }),
                        ],
                    },
                ],
            }),
        ],
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VsZWN0LnRhc2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FzdC9jYjMtdGVtcGxhdGUtZXhhbXBsZXMvc3JjL2xpYi92MS12Mi1yZW1vdmUtZGVwcmVjYXRlZC9pbnB1dC1zZWxlY3QudGFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FTdUI7QUFFdkIsTUFBTSxXQUFXLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckUsTUFBTSxPQUFPLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFN0QsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLG9CQUFvQixFQUFFLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3RSxNQUFNLGdCQUFnQixHQUFHLENBQUMsb0JBQW9CLEVBQUUsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNFLE1BQU0sUUFBUSxHQUFHLENBQUMsb0JBQW9CLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNELE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqRixNQUFNLFNBQVMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3RCxNQUFNLHFCQUFxQixHQUFHLENBQUMsb0JBQW9CLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckYsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLG9CQUFvQixFQUFFLG1CQUFtQixD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O29CQUNWLE1BQU0sRUFBRSxJQUFBLDRCQUFzQixFQUFDLDZCQUF1QixFQUFFO3dCQUN0RCxXQUFXLEVBQUUsUUFBUTtxQkFDdEIsQ0FBQztpQkFDSCxDQUFDO2FBQ0g7U0FDRjtRQUNELE9BQU8sRUFBRTtZQUNQLFlBQVksRUFBRTtnQkFDWixJQUFBLDRCQUFzQixFQUFDLHlDQUFtQyxFQUFFO29CQUMxRCxFQUFFLEVBQUUsWUFBWTtvQkFDaEIsTUFBTSxFQUFFLElBQUEsNEJBQXNCLEVBQUMsNkJBQXVCLEVBQUU7d0JBQ3RELFdBQVcsRUFBRSxjQUFjO3FCQUM1QixDQUFDO2lCQUNILENBQUM7YUFDSDtTQUNGO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsSUFBQSw0QkFBc0IsRUFBQyxxQ0FBK0IsRUFBRTtnQkFDdEQsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLGFBQWEsRUFBRSxJQUFJO2dCQUNuQixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsUUFBUSxFQUFFLG9CQUFvQjt3QkFDOUIsTUFBTSxFQUFFLEVBQUU7d0JBQ1YsT0FBTyxFQUFFLEVBQUU7d0JBQ1gsS0FBSyxFQUFFOzRCQUNMLElBQUEsNEJBQXNCLEVBQUMsd0NBQWtDLEVBQUU7Z0NBQ3pELEVBQUUsRUFBRTtvQ0FDRixpQkFBaUI7b0NBQ2pCLGdCQUFnQjtvQ0FDaEIsUUFBUTtvQ0FDUixtQkFBbUI7b0NBQ25CLFNBQVM7b0NBQ1QscUJBQXFCO29DQUNyQixxQkFBcUI7b0NBQ3JCLGVBQWU7b0NBQ2YsZUFBZTtvQ0FDZixpQkFBaUI7b0NBQ2pCLFVBQVU7b0NBQ1YsU0FBUztvQ0FDVCxhQUFhO29DQUNiLE1BQU07b0NBQ04sWUFBWTtvQ0FDWixPQUFPO29DQUNQLFdBQVc7aUNBQ1o7NkJBQ0YsQ0FBQzt5QkFDSDtxQkFDRjtpQkFDRjthQUNGLENBQUM7U0FDSDtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFByaXptQWRkQ2hpbGRyZW5UZW1wbGF0ZVRhc2ssXG4gIHByaXptQXN0Q3JlYXRlQWN0aW9uQnksXG4gIFByaXptQ2FsbFdpdGhOZXdTb3VyY2VUZW1wbGF0ZVRhc2ssXG4gIFByaXptQ2hhbmdlTmFtZVRlbXBsYXRlVGFzayxcbiAgUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssXG4gIFByaXptUnVuVGFza3NPbk5vZGVUZW1wbGF0ZVRhc2ssXG4gIFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLFxuICBQcml6bVRlbXBsYXRlVGFzayxcbn0gZnJvbSAnQHByaXptLXVpL2FzdCc7XG5cbmNvbnN0IGZvcm1Db250cm9sID0gWydwcml6bS1pbnB1dC1zZWxlY3QnLCAnZm9ybUNvbnRyb2wnXS5qb2luKCc6OicpO1xuY29uc3QgbmdNb2RlbCA9IFsncHJpem0taW5wdXQtc2VsZWN0JywgJ25nTW9kZWwnXS5qb2luKCc6OicpO1xuXG5jb25zdCBuYW1lRHJvcGRvd25XaWR0aCA9IFsncHJpem0taW5wdXQtc2VsZWN0JywgJ2Ryb3Bkb3duV2lkdGgnXS5qb2luKCc6OicpO1xuY29uc3QgbmFtZUVtcHR5Q29udGVudCA9IFsncHJpem0taW5wdXQtc2VsZWN0JywgJ2VtcHR5Q29udGVudCddLmpvaW4oJzo6Jyk7XG5jb25zdCBuYW1lSWNvbiA9IFsncHJpem0taW5wdXQtc2VsZWN0JywgJ2ljb24nXS5qb2luKCc6OicpO1xuY29uc3QgbmFtZUlkZW50aXR5TWF0Y2hlciA9IFsncHJpem0taW5wdXQtc2VsZWN0JywgJ2lkZW50aXR5TWF0Y2hlciddLmpvaW4oJzo6Jyk7XG5jb25zdCBuYW1lSXRlbXMgPSBbJ3ByaXptLWlucHV0LXNlbGVjdCcsICdpdGVtcyddLmpvaW4oJzo6Jyk7XG5jb25zdCBuYW1lTWF4RHJvcGRvd25IZWlnaHQgPSBbJ3ByaXptLWlucHV0LXNlbGVjdCcsICdtYXhEcm9wZG93bkhlaWdodCddLmpvaW4oJzo6Jyk7XG5jb25zdCBuYW1lTWluRHJvcGRvd25IZWlnaHQgPSBbJ3ByaXptLWlucHV0LXNlbGVjdCcsICdtaW5Ecm9wZG93bkhlaWdodCddLmpvaW4oJzo6Jyk7XG5jb25zdCBuYW1lTnVsbENvbnRlbnQgPSBbJ3ByaXptLWlucHV0LXNlbGVjdCcsICdudWxsQ29udGVudCddLmpvaW4oJzo6Jyk7XG5jb25zdCBuYW1lUGxhY2Vob2xkZXIgPSBbJ3ByaXptLWlucHV0LXNlbGVjdCcsICdwbGFjZWhvbGRlciddLmpvaW4oJzo6Jyk7XG5jb25zdCBuYW1lU2VhcmNoTWF0Y2hlciA9IFsncHJpem0taW5wdXQtc2VsZWN0JywgJ3NlYXJjaE1hdGNoZXInXS5qb2luKCc6OicpO1xuY29uc3Qgc2VhcmNoYWJsZSA9IFsncHJpem0taW5wdXQtc2VsZWN0JywgJ3NlYXJjaGFibGUnXS5qb2luKCc6OicpO1xuY29uc3Qgc3RyaW5naWZ5ID0gWydwcml6bS1pbnB1dC1zZWxlY3QnLCAnc3RyaW5naWZ5J10uam9pbignOjonKTtcbmNvbnN0IHZhbHVlVGVtcGxhdGUgPSBbJ3ByaXptLWlucHV0LXNlbGVjdCcsICd2YWx1ZVRlbXBsYXRlJ10uam9pbignOjonKTtcbmNvbnN0IHNlYXJjaCA9IFsncHJpem0taW5wdXQtc2VsZWN0JywgJ3NlYXJjaCddLmpvaW4oJzo6Jyk7XG5jb25zdCBzZWFyY2hPdXRwdXQgPSBbJ3ByaXptLWlucHV0LXNlbGVjdCcsICdvdXRwdXQtc2VhcmNoJ10uam9pbignOjonKTtcblxuZXhwb3J0IGNvbnN0IFByaXptSW5wdXRTZWxlY3RUZW1wbGF0ZVRhc2tzOiBQcml6bVRlbXBsYXRlVGFza1tdID0gW1xuICB7XG4gICAgc2VsZWN0b3I6ICdwcml6bS1zZWxlY3QnLFxuICAgIHRhc2tzOiBbXG4gICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptQ2hhbmdlTmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICBuYW1lOiAncHJpem0taW5wdXQtbGF5b3V0JyxcbiAgICAgIH0pLFxuICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bUFkZENoaWxkcmVuVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgIG5hbWU6ICdwcml6bS1pbnB1dC1zZWxlY3QnLFxuICAgICAgICBhdHRyczoge30sXG4gICAgICAgIHZvaWRFbGVtZW50OiB0cnVlLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICB9KSxcbiAgICBdLFxuICAgIGRlZmF1bHRJbnB1dHM6IHtcbiAgICAgIGxhYmVsOiAn0JLRi9Cx0LXRgNC40YLQtSDQuNC3INGB0L/QuNGB0LrQsCcsXG4gICAgfSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGRyb3Bkb3duV2lkdGg6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBuYW1lRHJvcGRvd25XaWR0aCxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnZHJvcGRvd25XaWR0aCcsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIGZvcm1Db250cm9sOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogZm9ybUNvbnRyb2wsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ2Zvcm1Db250cm9sJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgbmdNb2RlbDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IG5nTW9kZWwsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ25nTW9kZWwnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBlbXB0eUNvbnRlbnQ6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBuYW1lRW1wdHlDb250ZW50LFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdlbXB0eUNvbnRlbnQnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBpY29uOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbmFtZUljb24sXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ2ljb24nLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBpZGVudGl0eU1hdGNoZXI6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBuYW1lSWRlbnRpdHlNYXRjaGVyLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdpZGVudGl0eU1hdGNoZXInLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBpdGVtczogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IG5hbWVJdGVtcyxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnaXRlbXMnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBtYXhEcm9wZG93bkhlaWdodDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IG5hbWVNYXhEcm9wZG93bkhlaWdodCxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnbWF4RHJvcGRvd25IZWlnaHQnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBtaW5Ecm9wZG93bkhlaWdodDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IG5hbWVNaW5Ecm9wZG93bkhlaWdodCxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnbWluRHJvcGRvd25IZWlnaHQnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBudWxsQ29udGVudDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IG5hbWVOdWxsQ29udGVudCxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnbnVsbENvbnRlbnQnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBwbGFjZWhvbGRlcjogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IG5hbWVQbGFjZWhvbGRlcixcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAncGxhY2Vob2xkZXInLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBzZWFyY2hNYXRjaGVyOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbmFtZVNlYXJjaE1hdGNoZXIsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ3NlYXJjaE1hdGNoZXInLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBzZWFyY2hhYmxlOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogc2VhcmNoYWJsZSxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnc2VhcmNoYWJsZScsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHN0cmluZ2lmeTogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IHN0cmluZ2lmeSxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnc3RyaW5naWZ5JyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgdmFsdWVUZW1wbGF0ZTogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IHZhbHVlVGVtcGxhdGUsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ3ZhbHVlVGVtcGxhdGUnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBzZWFyY2g6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBzZWFyY2gsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ3NlYXJjaCcsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIG91dHB1dHM6IHtcbiAgICAgIHNlYXJjaENoYW5nZTogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IHNlYXJjaE91dHB1dCxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnc2VhcmNoQ2hhbmdlJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0sXG4gICAgZmluaXNoVGFza3M6IFtcbiAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SdW5UYXNrc09uTm9kZVRlbXBsYXRlVGFzaywge1xuICAgICAgICBkb250UnVuT25Pbk1haW46IHRydWUsXG4gICAgICAgIHJ1bk9uQ2hpbGRyZW46IHRydWUsXG4gICAgICAgIHRhc2tzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdwcml6bS1pbnB1dC1zZWxlY3QnLFxuICAgICAgICAgICAgaW5wdXRzOiB7fSxcbiAgICAgICAgICAgIG91dHB1dHM6IHt9LFxuICAgICAgICAgICAgdGFza3M6IFtcbiAgICAgICAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bUNhbGxXaXRoTmV3U291cmNlVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICAgICAgaWQ6IFtcbiAgICAgICAgICAgICAgICAgIG5hbWVEcm9wZG93bldpZHRoLFxuICAgICAgICAgICAgICAgICAgbmFtZUVtcHR5Q29udGVudCxcbiAgICAgICAgICAgICAgICAgIG5hbWVJY29uLFxuICAgICAgICAgICAgICAgICAgbmFtZUlkZW50aXR5TWF0Y2hlcixcbiAgICAgICAgICAgICAgICAgIG5hbWVJdGVtcyxcbiAgICAgICAgICAgICAgICAgIG5hbWVNYXhEcm9wZG93bkhlaWdodCxcbiAgICAgICAgICAgICAgICAgIG5hbWVNaW5Ecm9wZG93bkhlaWdodCxcbiAgICAgICAgICAgICAgICAgIG5hbWVOdWxsQ29udGVudCxcbiAgICAgICAgICAgICAgICAgIG5hbWVQbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICAgIG5hbWVTZWFyY2hNYXRjaGVyLFxuICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZSxcbiAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlVGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgICBzZWFyY2gsXG4gICAgICAgICAgICAgICAgICBzZWFyY2hPdXRwdXQsXG4gICAgICAgICAgICAgICAgICBuZ01vZGVsLFxuICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2wsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICBdLFxuICB9LFxuXTtcbiJdfQ==