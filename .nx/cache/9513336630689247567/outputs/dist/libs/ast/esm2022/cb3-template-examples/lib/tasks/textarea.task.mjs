"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZyfraTextareaTemplateTasks = void 0;
const ast_1 = require("@prizm-ui/ast");
const newName = 'prizm-input-layout';
const newNameOfPlaceholder = [newName, 'placeholder'].join('::');
const newNameOfNgModel = [newName, 'ngModel'].join('::');
const newNameOfFormControl = [newName, 'formControl'].join('::');
const newNameOfFormControlName = [newName, 'formControlName'].join('::');
const newNameOfType = [newName, 'type'].join('::');
const newNameOfDisabled = [newName, 'disabled'].join('::');
const newNameOfMaxLength = [newName, 'maxlength'].join('::');
const newNameOfMinLength = [newName, 'minlength'].join('::');
const newNameOfRows = [newName, 'rows'].join('::');
const newNameOfCols = [newName, 'cols'].join('::');
const newNameOfAutoResize = [newName, 'autoResize'].join('::');
exports.ZyfraTextareaTemplateTasks = [
    {
        selector: 'zyfra-textarea',
        tasks: [
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmChangeNameTemplateTask, {
                name: newName,
            }),
            // TODO also set children
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmAddChildrenTemplateTask, {
                name: 'textarea',
                attrs: {
                    prizmInput: null,
                },
                voidElement: false,
                children: [],
            }),
        ],
        inputs: {
            maxlength: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: newNameOfMaxLength,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'maxlength',
                    }),
                }),
            ],
            minlength: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: newNameOfMinLength,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'minlength',
                    }),
                }),
            ],
            rows: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: newNameOfRows,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'rows',
                    }),
                }),
            ],
            autoResize: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: newNameOfAutoResize,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'autoResize',
                    }),
                }),
            ],
            cols: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: newNameOfCols,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'cols',
                    }),
                }),
            ],
            options: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'items',
                    needFixApi: true,
                }),
            ],
            size: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmAddCommentTemplateTask, {
                    comment: 'TODO: need to correct size format (number > enum)',
                }),
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmAddCommentTemplateTask, {
                    comment: 'TODO: You also need to pass size to child ',
                }),
            ],
            formControl: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: newNameOfFormControl,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'formControl',
                    }),
                }),
            ],
            disabled: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: newNameOfDisabled,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'disabled',
                    }),
                }),
            ],
            type: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: newNameOfType,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'type',
                    }),
                }),
            ],
            formControlName: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: newNameOfFormControlName,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'formControlName',
                    }),
                }),
            ],
            ngModel: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: newNameOfNgModel,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'ngModel',
                    }),
                }),
            ],
            placeholder: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmSaveToCallOnDemandTemplateTask, {
                    id: newNameOfPlaceholder,
                    action: (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                        newAttrName: 'placeholder',
                    }),
                }),
            ],
            value: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRemoveAttributeTemplateTask, {}),
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmAddCommentTemplateTask, {
                    comment: 'TODO: You also need to pass a value size to child ',
                }),
            ],
            step: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRemoveAttributeTemplateTask, {}),
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmAddCommentTemplateTask, {
                    comment: 'TODO: You also need to pass a step size to child ',
                }),
            ],
            min: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRemoveAttributeTemplateTask, {}),
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmAddCommentTemplateTask, {
                    comment: 'TODO: You also need to pass a min value to child ',
                }),
            ],
            max: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRemoveAttributeTemplateTask, {}),
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmAddCommentTemplateTask, {
                    comment: 'TODO: You also need to pass a max value to child ',
                }),
            ],
            dropdownIcon: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'icon',
                    needFixApi: true,
                }),
            ],
            showClear: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'forceClear',
                }),
            ],
            tooltipPosition: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            tooltip: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            format: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            showButtons: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            buttonLayout: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            spanClass: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            iClass: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            incrementButtonClass: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            decrementButtonClass: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            incrementButtonIcon: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            decrementButtonIcon: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            locale: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            localeMatcher: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            mode: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            prefix: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            suffix: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            currency: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            currencyDisplay: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            useGrouping: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            minFractionDigits: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            maxFractionDigits: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            style: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            styleClass: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            inputId: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            inputStyle: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            inputStyleClass: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            tabindex: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            title: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            ariaLabel: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            ariaRequired: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            name: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            autocomplete: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
        },
        outputs: {
            onResize: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRemoveAttributeTemplateTask, {})],
            onInput: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRemoveAttributeTemplateTask, {})],
            onBlur: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRemoveAttributeTemplateTask, {})],
            onFocus: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRemoveAttributeTemplateTask, {})],
        },
        finishTasks: [
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRunTasksOnNodeTemplateTask, {
                dontRunOnOnMain: true,
                runOnChildren: true,
                tasks: [
                    {
                        selector: [
                            {
                                type: 'byAttr',
                                attrs: {
                                    prizmInput: undefined,
                                },
                            },
                        ],
                        inputs: {},
                        outputs: {},
                        tasks: [
                            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmCallWithNewSourceTemplateTask, {
                                id: [
                                    newNameOfPlaceholder,
                                    newNameOfNgModel,
                                    newNameOfFormControl,
                                    newNameOfFormControlName,
                                    newNameOfDisabled,
                                    newNameOfType,
                                    newNameOfMaxLength,
                                    newNameOfMinLength,
                                    newNameOfRows,
                                    newNameOfCols,
                                    newNameOfAutoResize,
                                ],
                            }),
                        ],
                    },
                ],
            }),
        ],
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEudGFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYXN0L2NiMy10ZW1wbGF0ZS1leGFtcGxlcy9zcmMvbGliL3Rhc2tzL3RleHRhcmVhLnRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBWXVCO0FBRXZCLE1BQU0sT0FBTyxHQUFHLG9CQUFvQixDQUFDO0FBQ3JDLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pFLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pELE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pFLE1BQU0sd0JBQXdCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekUsTUFBTSxhQUFhLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25ELE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNELE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdELE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdELE1BQU0sYUFBYSxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElB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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBQcml6bUFkZENoaWxkcmVuVGVtcGxhdGVUYXNrLFxuICBQcml6bUFkZENvbW1lbnRUZW1wbGF0ZVRhc2ssXG4gIHByaXptQXN0Q3JlYXRlQWN0aW9uQnksXG4gIFByaXptQ2FsbFdpdGhOZXdTb3VyY2VUZW1wbGF0ZVRhc2ssXG4gIFByaXptQ2hhbmdlTmFtZVRlbXBsYXRlVGFzayxcbiAgUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssXG4gIFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLFxuICBQcml6bVJlbmFtZVRlbXBsYXRlVGFzayxcbiAgUHJpem1SdW5UYXNrc09uTm9kZVRlbXBsYXRlVGFzayxcbiAgUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssXG4gIFByaXptVGVtcGxhdGVUYXNrLFxufSBmcm9tICdAcHJpem0tdWkvYXN0JztcblxuY29uc3QgbmV3TmFtZSA9ICdwcml6bS1pbnB1dC1sYXlvdXQnO1xuY29uc3QgbmV3TmFtZU9mUGxhY2Vob2xkZXIgPSBbbmV3TmFtZSwgJ3BsYWNlaG9sZGVyJ10uam9pbignOjonKTtcbmNvbnN0IG5ld05hbWVPZk5nTW9kZWwgPSBbbmV3TmFtZSwgJ25nTW9kZWwnXS5qb2luKCc6OicpO1xuY29uc3QgbmV3TmFtZU9mRm9ybUNvbnRyb2wgPSBbbmV3TmFtZSwgJ2Zvcm1Db250cm9sJ10uam9pbignOjonKTtcbmNvbnN0IG5ld05hbWVPZkZvcm1Db250cm9sTmFtZSA9IFtuZXdOYW1lLCAnZm9ybUNvbnRyb2xOYW1lJ10uam9pbignOjonKTtcbmNvbnN0IG5ld05hbWVPZlR5cGUgPSBbbmV3TmFtZSwgJ3R5cGUnXS5qb2luKCc6OicpO1xuY29uc3QgbmV3TmFtZU9mRGlzYWJsZWQgPSBbbmV3TmFtZSwgJ2Rpc2FibGVkJ10uam9pbignOjonKTtcbmNvbnN0IG5ld05hbWVPZk1heExlbmd0aCA9IFtuZXdOYW1lLCAnbWF4bGVuZ3RoJ10uam9pbignOjonKTtcbmNvbnN0IG5ld05hbWVPZk1pbkxlbmd0aCA9IFtuZXdOYW1lLCAnbWlubGVuZ3RoJ10uam9pbignOjonKTtcbmNvbnN0IG5ld05hbWVPZlJvd3MgPSBbbmV3TmFtZSwgJ3Jvd3MnXS5qb2luKCc6OicpO1xuY29uc3QgbmV3TmFtZU9mQ29scyA9IFtuZXdOYW1lLCAnY29scyddLmpvaW4oJzo6Jyk7XG5jb25zdCBuZXdOYW1lT2ZBdXRvUmVzaXplID0gW25ld05hbWUsICdhdXRvUmVzaXplJ10uam9pbignOjonKTtcblxuZXhwb3J0IGNvbnN0IFp5ZnJhVGV4dGFyZWFUZW1wbGF0ZVRhc2tzOiBQcml6bVRlbXBsYXRlVGFza1tdID0gW1xuICB7XG4gICAgc2VsZWN0b3I6ICd6eWZyYS10ZXh0YXJlYScsXG4gICAgdGFza3M6IFtcbiAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1DaGFuZ2VOYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgIG5hbWU6IG5ld05hbWUsXG4gICAgICB9KSxcbiAgICAgIC8vIFRPRE8gYWxzbyBzZXQgY2hpbGRyZW5cbiAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1BZGRDaGlsZHJlblRlbXBsYXRlVGFzaywge1xuICAgICAgICBuYW1lOiAndGV4dGFyZWEnLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHByaXptSW5wdXQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHZvaWRFbGVtZW50OiBmYWxzZSxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgfSksXG4gICAgXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIG1heGxlbmd0aDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IG5ld05hbWVPZk1heExlbmd0aCxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnbWF4bGVuZ3RoJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgbWlubGVuZ3RoOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbmV3TmFtZU9mTWluTGVuZ3RoLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdtaW5sZW5ndGgnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICByb3dzOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbmV3TmFtZU9mUm93cyxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAncm93cycsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIGF1dG9SZXNpemU6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBuZXdOYW1lT2ZBdXRvUmVzaXplLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdhdXRvUmVzaXplJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgY29sczogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IG5ld05hbWVPZkNvbHMsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ2NvbHMnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBuZXdBdHRyTmFtZTogJ2l0ZW1zJyxcbiAgICAgICAgICBuZWVkRml4QXBpOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBzaXplOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1BZGRDb21tZW50VGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgY29tbWVudDogJ1RPRE86IG5lZWQgdG8gY29ycmVjdCBzaXplIGZvcm1hdCAobnVtYmVyID4gZW51bSknLFxuICAgICAgICB9KSxcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bUFkZENvbW1lbnRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBjb21tZW50OiAnVE9ETzogWW91IGFsc28gbmVlZCB0byBwYXNzIHNpemUgdG8gY2hpbGQgJyxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgZm9ybUNvbnRyb2w6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBuZXdOYW1lT2ZGb3JtQ29udHJvbCxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnZm9ybUNvbnRyb2wnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBkaXNhYmxlZDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IG5ld05hbWVPZkRpc2FibGVkLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdkaXNhYmxlZCcsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHR5cGU6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBuZXdOYW1lT2ZUeXBlLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICd0eXBlJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgZm9ybUNvbnRyb2xOYW1lOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbmV3TmFtZU9mRm9ybUNvbnRyb2xOYW1lLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdmb3JtQ29udHJvbE5hbWUnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBuZ01vZGVsOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbmV3TmFtZU9mTmdNb2RlbCxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnbmdNb2RlbCcsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHBsYWNlaG9sZGVyOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbmV3TmFtZU9mUGxhY2Vob2xkZXIsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ3BsYWNlaG9sZGVyJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgdmFsdWU6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pLFxuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptQWRkQ29tbWVudFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGNvbW1lbnQ6ICdUT0RPOiBZb3UgYWxzbyBuZWVkIHRvIHBhc3MgYSB2YWx1ZSBzaXplIHRvIGNoaWxkICcsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHN0ZXA6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pLFxuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptQWRkQ29tbWVudFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGNvbW1lbnQ6ICdUT0RPOiBZb3UgYWxzbyBuZWVkIHRvIHBhc3MgYSBzdGVwIHNpemUgdG8gY2hpbGQgJyxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgbWluOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KSxcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bUFkZENvbW1lbnRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBjb21tZW50OiAnVE9ETzogWW91IGFsc28gbmVlZCB0byBwYXNzIGEgbWluIHZhbHVlIHRvIGNoaWxkICcsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIG1heDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSksXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1BZGRDb21tZW50VGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgY29tbWVudDogJ1RPRE86IFlvdSBhbHNvIG5lZWQgdG8gcGFzcyBhIG1heCB2YWx1ZSB0byBjaGlsZCAnLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBkcm9wZG93bkljb246IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIG5ld0F0dHJOYW1lOiAnaWNvbicsXG4gICAgICAgICAgbmVlZEZpeEFwaTogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgc2hvd0NsZWFyOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBuZXdBdHRyTmFtZTogJ2ZvcmNlQ2xlYXInLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICB0b29sdGlwUG9zaXRpb246IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgdG9vbHRpcDogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBmb3JtYXQ6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgc2hvd0J1dHRvbnM6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgYnV0dG9uTGF5b3V0OiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHNwYW5DbGFzczogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBpQ2xhc3M6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgaW5jcmVtZW50QnV0dG9uQ2xhc3M6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgZGVjcmVtZW50QnV0dG9uQ2xhc3M6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgaW5jcmVtZW50QnV0dG9uSWNvbjogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBkZWNyZW1lbnRCdXR0b25JY29uOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGxvY2FsZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBsb2NhbGVNYXRjaGVyOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIG1vZGU6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgcHJlZml4OiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHN1ZmZpeDogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBjdXJyZW5jeTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBjdXJyZW5jeURpc3BsYXk6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgdXNlR3JvdXBpbmc6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgbWluRnJhY3Rpb25EaWdpdHM6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgbWF4RnJhY3Rpb25EaWdpdHM6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgc3R5bGU6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgc3R5bGVDbGFzczogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBpbnB1dElkOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGlucHV0U3R5bGU6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgaW5wdXRTdHlsZUNsYXNzOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHRhYmluZGV4OiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHRpdGxlOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGFyaWFMYWJlbDogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBhcmlhUmVxdWlyZWQ6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgbmFtZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBhdXRvY29tcGxldGU6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgIH0sXG4gICAgb3V0cHV0czoge1xuICAgICAgb25SZXNpemU6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgb25JbnB1dDogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBvbkJsdXI6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgb25Gb2N1czogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgfSxcbiAgICBmaW5pc2hUYXNrczogW1xuICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJ1blRhc2tzT25Ob2RlVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgIGRvbnRSdW5Pbk9uTWFpbjogdHJ1ZSxcbiAgICAgICAgcnVuT25DaGlsZHJlbjogdHJ1ZSxcbiAgICAgICAgdGFza3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2J5QXR0cicsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHByaXptSW5wdXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGlucHV0czoge30sXG4gICAgICAgICAgICBvdXRwdXRzOiB7fSxcbiAgICAgICAgICAgIHRhc2tzOiBbXG4gICAgICAgICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1DYWxsV2l0aE5ld1NvdXJjZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgICAgIGlkOiBbXG4gICAgICAgICAgICAgICAgICBuZXdOYW1lT2ZQbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICAgIG5ld05hbWVPZk5nTW9kZWwsXG4gICAgICAgICAgICAgICAgICBuZXdOYW1lT2ZGb3JtQ29udHJvbCxcbiAgICAgICAgICAgICAgICAgIG5ld05hbWVPZkZvcm1Db250cm9sTmFtZSxcbiAgICAgICAgICAgICAgICAgIG5ld05hbWVPZkRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgbmV3TmFtZU9mVHlwZSxcbiAgICAgICAgICAgICAgICAgIG5ld05hbWVPZk1heExlbmd0aCxcbiAgICAgICAgICAgICAgICAgIG5ld05hbWVPZk1pbkxlbmd0aCxcbiAgICAgICAgICAgICAgICAgIG5ld05hbWVPZlJvd3MsXG4gICAgICAgICAgICAgICAgICBuZXdOYW1lT2ZDb2xzLFxuICAgICAgICAgICAgICAgICAgbmV3TmFtZU9mQXV0b1Jlc2l6ZSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgIF0sXG4gIH0sXG5dO1xuIl19