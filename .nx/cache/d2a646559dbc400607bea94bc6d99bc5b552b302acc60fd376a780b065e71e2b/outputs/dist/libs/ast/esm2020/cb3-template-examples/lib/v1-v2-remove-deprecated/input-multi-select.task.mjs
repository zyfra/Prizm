"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizmInputMultiSelectTemplateTasks = void 0;
const ast_1 = require("@prizm-ui/ast");
const formControl = ['prizm-input-multi-select', 'formControl'].join('::');
const ngModel = ['prizm-input-multi-select', 'ngModel'].join('::');
const nameDropdownWidth = ['prizm-input-multi-select', 'dropdownWidth'].join('::');
const nameEmptyContent = ['prizm-input-multi-select', 'emptyContent'].join('::');
const nameIcon = ['prizm-input-multi-select', 'icon'].join('::');
const nameIdentityMatcher = ['prizm-input-multi-select', 'identityMatcher'].join('::');
const isChipsDeletable = ['prizm-input-multi-select', 'isChipsDeletable'].join('::');
const nameItems = ['prizm-input-multi-select', 'items'].join('::');
const nameMaxDropdownHeight = ['prizm-input-multi-select', 'maxDropdownHeight'].join('::');
const nameMinDropdownHeight = ['prizm-input-multi-select', 'minDropdownHeight'].join('::');
const nameNullContent = ['prizm-input-multi-select', 'nullContent'].join('::');
const namePlaceholder = ['prizm-input-multi-select', 'placeholder'].join('::');
const nameSearchMatcher = ['prizm-input-multi-select', 'searchMatcher'].join('::');
const searchable = ['prizm-input-multi-select', 'searchable'].join('::');
const selectAllItem = ['prizm-input-multi-select', 'selectAllItem'].join('::');
const stringify = ['prizm-input-multi-select', 'stringify'].join('::');
const valueTemplate = ['prizm-input-multi-select', 'valueTemplate'].join('::');
const search = ['prizm-input-multi-select', 'search'].join('::');
const searchOutput = ['prizm-input-multi-select', 'output-search'].join('::');
exports.PrizmInputMultiSelectTemplateTasks = [
    {
        // Найти элемент по селектору
        selector: 'prizm-multi-select',
        tasks: [
            // Заменить селектор
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmChangeNameTemplateTask, {
                name: 'prizm-input-layout',
            }),
            // Добавить потомка нового
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmAddChildrenTemplateTask, {
                name: 'prizm-input-multi-select',
                attrs: {},
                voidElement: true,
                children: [],
            }),
        ],
        inputs: {
            // при наличии input параметра перенести его потомку созданному
            dropdownWidth: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: nameDropdownWidth,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'dropdownWidth',
                    }),
                }),
            ],
            // ... перенести при наличии formControl созданному потомку
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
            isChipsDeletable: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: isChipsDeletable,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'isChipsDeletable',
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
            selectAllItem: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: selectAllItem,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'selectAllItem',
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
        defaultInputs: {
            label: 'Выберите из списка',
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
                        selector: 'prizm-input-multi-select',
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
                                    selectAllItem,
                                    isChipsDeletable,
                                ],
                            }),
                        ],
                    },
                ],
            }),
        ],
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbXVsdGktc2VsZWN0LnRhc2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FzdC9jYjMtdGVtcGxhdGUtZXhhbXBsZXMvc3JjL2xpYi92MS12Mi1yZW1vdmUtZGVwcmVjYXRlZC9pbnB1dC1tdWx0aS1zZWxlY3QudGFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FTdUI7QUFFdkIsTUFBTSxXQUFXLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0UsTUFBTSxPQUFPLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFbkUsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLDBCQUEwQixFQUFFLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuRixNQUFNLGdCQUFnQixHQUFHLENBQUMsMEJBQTBCLEVBQUUsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pGLE1BQU0sUUFBUSxHQUFHLENBQUMsMEJBQTBCLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pFLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2RixNQUFNLGdCQUFnQixHQUFHLENBQUMsMEJBQTBCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckYsTUFBTSxTQUFTLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkUsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLDBCQUEwQixF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c0IsRUFBQyxxQ0FBK0IsRUFBRTtnQkFDdEQsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLGFBQWEsRUFBRSxJQUFJO2dCQUNuQixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsUUFBUSxFQUFFLDBCQUEwQjt3QkFDcEMsTUFBTSxFQUFFLEVBQUU7d0JBQ1YsT0FBTyxFQUFFLEVBQUU7d0JBQ1gsS0FBSyxFQUFFOzRCQUNMLElBQUEsNEJBQXNCLEVBQUMsd0NBQWtDLEVBQUU7Z0NBQ3pELEVBQUUsRUFBRTtvQ0FDRixpQkFBaUI7b0NBQ2pCLGdCQUFnQjtvQ0FDaEIsUUFBUTtvQ0FDUixtQkFBbUI7b0NBQ25CLFNBQVM7b0NBQ1QscUJBQXFCO29DQUNyQixxQkFBcUI7b0NBQ3JCLGVBQWU7b0NBQ2YsZUFBZTtvQ0FDZixpQkFBaUI7b0NBQ2pCLFVBQVU7b0NBQ1YsU0FBUztvQ0FDVCxhQUFhO29DQUNiLE1BQU07b0NBQ04sWUFBWTtvQ0FDWixPQUFPO29DQUNQLFdBQVc7b0NBQ1gsYUFBYTtvQ0FDYixnQkFBZ0I7aUNBQ2pCOzZCQUNGLENBQUM7eUJBQ0g7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBQcml6bUFkZENoaWxkcmVuVGVtcGxhdGVUYXNrLFxuICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5LFxuICBQcml6bUNhbGxXaXRoTmV3U291cmNlVGVtcGxhdGVUYXNrLFxuICBQcml6bUNoYW5nZU5hbWVUZW1wbGF0ZVRhc2ssXG4gIFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLFxuICBQcml6bVJ1blRhc2tzT25Ob2RlVGVtcGxhdGVUYXNrLFxuICBQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzayxcbiAgUHJpem1UZW1wbGF0ZVRhc2ssXG59IGZyb20gJ0Bwcml6bS11aS9hc3QnO1xuXG5jb25zdCBmb3JtQ29udHJvbCA9IFsncHJpem0taW5wdXQtbXVsdGktc2VsZWN0JywgJ2Zvcm1Db250cm9sJ10uam9pbignOjonKTtcbmNvbnN0IG5nTW9kZWwgPSBbJ3ByaXptLWlucHV0LW11bHRpLXNlbGVjdCcsICduZ01vZGVsJ10uam9pbignOjonKTtcblxuY29uc3QgbmFtZURyb3Bkb3duV2lkdGggPSBbJ3ByaXptLWlucHV0LW11bHRpLXNlbGVjdCcsICdkcm9wZG93bldpZHRoJ10uam9pbignOjonKTtcbmNvbnN0IG5hbWVFbXB0eUNvbnRlbnQgPSBbJ3ByaXptLWlucHV0LW11bHRpLXNlbGVjdCcsICdlbXB0eUNvbnRlbnQnXS5qb2luKCc6OicpO1xuY29uc3QgbmFtZUljb24gPSBbJ3ByaXptLWlucHV0LW11bHRpLXNlbGVjdCcsICdpY29uJ10uam9pbignOjonKTtcbmNvbnN0IG5hbWVJZGVudGl0eU1hdGNoZXIgPSBbJ3ByaXptLWlucHV0LW11bHRpLXNlbGVjdCcsICdpZGVudGl0eU1hdGNoZXInXS5qb2luKCc6OicpO1xuY29uc3QgaXNDaGlwc0RlbGV0YWJsZSA9IFsncHJpem0taW5wdXQtbXVsdGktc2VsZWN0JywgJ2lzQ2hpcHNEZWxldGFibGUnXS5qb2luKCc6OicpO1xuY29uc3QgbmFtZUl0ZW1zID0gWydwcml6bS1pbnB1dC1tdWx0aS1zZWxlY3QnLCAnaXRlbXMnXS5qb2luKCc6OicpO1xuY29uc3QgbmFtZU1heERyb3Bkb3duSGVpZ2h0ID0gWydwcml6bS1pbnB1dC1tdWx0aS1zZWxlY3QnLCAnbWF4RHJvcGRvd25IZWlnaHQnXS5qb2luKCc6OicpO1xuY29uc3QgbmFtZU1pbkRyb3Bkb3duSGVpZ2h0ID0gWydwcml6bS1pbnB1dC1tdWx0aS1zZWxlY3QnLCAnbWluRHJvcGRvd25IZWlnaHQnXS5qb2luKCc6OicpO1xuY29uc3QgbmFtZU51bGxDb250ZW50ID0gWydwcml6bS1pbnB1dC1tdWx0aS1zZWxlY3QnLCAnbnVsbENvbnRlbnQnXS5qb2luKCc6OicpO1xuY29uc3QgbmFtZVBsYWNlaG9sZGVyID0gWydwcml6bS1pbnB1dC1tdWx0aS1zZWxlY3QnLCAncGxhY2Vob2xkZXInXS5qb2luKCc6OicpO1xuY29uc3QgbmFtZVNlYXJjaE1hdGNoZXIgPSBbJ3ByaXptLWlucHV0LW11bHRpLXNlbGVjdCcsICdzZWFyY2hNYXRjaGVyJ10uam9pbignOjonKTtcbmNvbnN0IHNlYXJjaGFibGUgPSBbJ3ByaXptLWlucHV0LW11bHRpLXNlbGVjdCcsICdzZWFyY2hhYmxlJ10uam9pbignOjonKTtcbmNvbnN0IHNlbGVjdEFsbEl0ZW0gPSBbJ3ByaXptLWlucHV0LW11bHRpLXNlbGVjdCcsICdzZWxlY3RBbGxJdGVtJ10uam9pbignOjonKTtcbmNvbnN0IHN0cmluZ2lmeSA9IFsncHJpem0taW5wdXQtbXVsdGktc2VsZWN0JywgJ3N0cmluZ2lmeSddLmpvaW4oJzo6Jyk7XG5jb25zdCB2YWx1ZVRlbXBsYXRlID0gWydwcml6bS1pbnB1dC1tdWx0aS1zZWxlY3QnLCAndmFsdWVUZW1wbGF0ZSddLmpvaW4oJzo6Jyk7XG5jb25zdCBzZWFyY2ggPSBbJ3ByaXptLWlucHV0LW11bHRpLXNlbGVjdCcsICdzZWFyY2gnXS5qb2luKCc6OicpO1xuY29uc3Qgc2VhcmNoT3V0cHV0ID0gWydwcml6bS1pbnB1dC1tdWx0aS1zZWxlY3QnLCAnb3V0cHV0LXNlYXJjaCddLmpvaW4oJzo6Jyk7XG5cbmV4cG9ydCBjb25zdCBQcml6bUlucHV0TXVsdGlTZWxlY3RUZW1wbGF0ZVRhc2tzOiBQcml6bVRlbXBsYXRlVGFza1tdID0gW1xuICB7XG4gICAgLy8g0J3QsNC50YLQuCDRjdC70LXQvNC10L3RgiDQv9C+INGB0LXQu9C10LrRgtC+0YDRg1xuICAgIHNlbGVjdG9yOiAncHJpem0tbXVsdGktc2VsZWN0JyxcbiAgICB0YXNrczogW1xuICAgICAgLy8g0JfQsNC80LXQvdC40YLRjCDRgdC10LvQtdC60YLQvtGAXG4gICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptQ2hhbmdlTmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICBuYW1lOiAncHJpem0taW5wdXQtbGF5b3V0JyxcbiAgICAgIH0pLFxuICAgICAgLy8g0JTQvtCx0LDQstC40YLRjCDQv9C+0YLQvtC80LrQsCDQvdC+0LLQvtCz0L5cbiAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1BZGRDaGlsZHJlblRlbXBsYXRlVGFzaywge1xuICAgICAgICBuYW1lOiAncHJpem0taW5wdXQtbXVsdGktc2VsZWN0JyxcbiAgICAgICAgYXR0cnM6IHt9LFxuICAgICAgICB2b2lkRWxlbWVudDogdHJ1ZSxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgfSksXG4gICAgXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIC8vINC/0YDQuCDQvdCw0LvQuNGH0LjQuCBpbnB1dCDQv9Cw0YDQsNC80LXRgtGA0LAg0L/QtdGA0LXQvdC10YHRgtC4INC10LPQviDQv9C+0YLQvtC80LrRgyDRgdC+0LfQtNCw0L3QvdC+0LzRg1xuICAgICAgZHJvcGRvd25XaWR0aDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IG5hbWVEcm9wZG93bldpZHRoLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdkcm9wZG93bldpZHRoJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgLy8gLi4uINC/0LXRgNC10L3QtdGB0YLQuCDQv9GA0Lgg0L3QsNC70LjRh9C40LggZm9ybUNvbnRyb2wg0YHQvtC30LTQsNC90L3QvtC80YMg0L/QvtGC0L7QvNC60YNcbiAgICAgIGZvcm1Db250cm9sOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogZm9ybUNvbnRyb2wsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ2Zvcm1Db250cm9sJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgbmdNb2RlbDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IG5nTW9kZWwsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ25nTW9kZWwnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBlbXB0eUNvbnRlbnQ6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBuYW1lRW1wdHlDb250ZW50LFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdlbXB0eUNvbnRlbnQnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBpY29uOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbmFtZUljb24sXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ2ljb24nLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBpZGVudGl0eU1hdGNoZXI6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBuYW1lSWRlbnRpdHlNYXRjaGVyLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdpZGVudGl0eU1hdGNoZXInLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBpc0NoaXBzRGVsZXRhYmxlOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogaXNDaGlwc0RlbGV0YWJsZSxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnaXNDaGlwc0RlbGV0YWJsZScsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbmFtZUl0ZW1zLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdpdGVtcycsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIG1heERyb3Bkb3duSGVpZ2h0OiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbmFtZU1heERyb3Bkb3duSGVpZ2h0LFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdtYXhEcm9wZG93bkhlaWdodCcsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIG1pbkRyb3Bkb3duSGVpZ2h0OiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbmFtZU1pbkRyb3Bkb3duSGVpZ2h0LFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdtaW5Ecm9wZG93bkhlaWdodCcsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIG51bGxDb250ZW50OiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbmFtZU51bGxDb250ZW50LFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdudWxsQ29udGVudCcsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHBsYWNlaG9sZGVyOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbmFtZVBsYWNlaG9sZGVyLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdwbGFjZWhvbGRlcicsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHNlYXJjaE1hdGNoZXI6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBuYW1lU2VhcmNoTWF0Y2hlcixcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnc2VhcmNoTWF0Y2hlcicsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHNlYXJjaGFibGU6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBzZWFyY2hhYmxlLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdzZWFyY2hhYmxlJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgc2VsZWN0QWxsSXRlbTogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IHNlbGVjdEFsbEl0ZW0sXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ3NlbGVjdEFsbEl0ZW0nLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBzdHJpbmdpZnk6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBzdHJpbmdpZnksXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ3N0cmluZ2lmeScsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHZhbHVlVGVtcGxhdGU6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiB2YWx1ZVRlbXBsYXRlLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICd2YWx1ZVRlbXBsYXRlJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgc2VhcmNoOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogc2VhcmNoLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdzZWFyY2gnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBkZWZhdWx0SW5wdXRzOiB7XG4gICAgICBsYWJlbDogJ9CS0YvQsdC10YDQuNGC0LUg0LjQtyDRgdC/0LjRgdC60LAnLFxuICAgIH0sXG5cbiAgICBvdXRwdXRzOiB7XG4gICAgICBzZWFyY2hDaGFuZ2U6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBzZWFyY2hPdXRwdXQsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ3NlYXJjaENoYW5nZScsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIGZpbmlzaFRhc2tzOiBbXG4gICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUnVuVGFza3NPbk5vZGVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgZG9udFJ1bk9uT25NYWluOiB0cnVlLFxuICAgICAgICBydW5PbkNoaWxkcmVuOiB0cnVlLFxuICAgICAgICB0YXNrczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAncHJpem0taW5wdXQtbXVsdGktc2VsZWN0JyxcbiAgICAgICAgICAgIGlucHV0czoge30sXG4gICAgICAgICAgICBvdXRwdXRzOiB7fSxcbiAgICAgICAgICAgIHRhc2tzOiBbXG4gICAgICAgICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1DYWxsV2l0aE5ld1NvdXJjZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgICAgIGlkOiBbXG4gICAgICAgICAgICAgICAgICBuYW1lRHJvcGRvd25XaWR0aCxcbiAgICAgICAgICAgICAgICAgIG5hbWVFbXB0eUNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICBuYW1lSWNvbixcbiAgICAgICAgICAgICAgICAgIG5hbWVJZGVudGl0eU1hdGNoZXIsXG4gICAgICAgICAgICAgICAgICBuYW1lSXRlbXMsXG4gICAgICAgICAgICAgICAgICBuYW1lTWF4RHJvcGRvd25IZWlnaHQsXG4gICAgICAgICAgICAgICAgICBuYW1lTWluRHJvcGRvd25IZWlnaHQsXG4gICAgICAgICAgICAgICAgICBuYW1lTnVsbENvbnRlbnQsXG4gICAgICAgICAgICAgICAgICBuYW1lUGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgICBuYW1lU2VhcmNoTWF0Y2hlcixcbiAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGUsXG4gICAgICAgICAgICAgICAgICBzdHJpbmdpZnksXG4gICAgICAgICAgICAgICAgICB2YWx1ZVRlbXBsYXRlLFxuICAgICAgICAgICAgICAgICAgc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgc2VhcmNoT3V0cHV0LFxuICAgICAgICAgICAgICAgICAgbmdNb2RlbCxcbiAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0QWxsSXRlbSxcbiAgICAgICAgICAgICAgICAgIGlzQ2hpcHNEZWxldGFibGUsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICBdLFxuICB9LFxuXTtcbiJdfQ==