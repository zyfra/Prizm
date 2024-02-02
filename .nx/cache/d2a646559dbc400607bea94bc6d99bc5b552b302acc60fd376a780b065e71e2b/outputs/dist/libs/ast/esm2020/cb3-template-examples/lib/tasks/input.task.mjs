"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZyfraInputTemplateTasks = void 0;
const ast_1 = require("@prizm-ui/ast");
const newName = 'prizm-input-layout';
const newNameOfPlaceholder = [newName, 'placeholder'].join('::');
const newNameOfNgModel = [newName, 'ngModel'].join('::');
const newNameOfFormControl = [newName, 'formControl'].join('::');
const newNameOfFormControlName = [newName, 'formControlName'].join('::');
const newNameOfType = [newName, 'type'].join('::');
const newNameOfDisabled = [newName, 'disabled'].join('::');
exports.ZyfraInputTemplateTasks = [
    {
        selector: 'zyfra-input',
        tasks: [
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmChangeNameTemplateTask, {
                name: newName,
            }),
            // TODO also set children
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmAddChildrenTemplateTask, {
                name: 'input',
                attrs: {
                    prizmInput: null,
                },
                voidElement: true,
                children: [],
            }),
        ],
        inputs: {
            // options: [
            //   prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            //     newAttrName: 'items',
            //     needFixApi: true,
            //   }),
            // ],
            // size: [
            //   prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
            //     comment: 'TODO: need to correct size format (number > enum)',
            //   }),
            //   prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
            //     comment: 'TODO: You also need to pass size to child ',
            //   }),
            // ],
            // formControl: [
            //   prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
            //     id: newNameOfFormControl,
            //     action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            //       newAttrName: 'formControl',
            //     }),
            //   }),
            // ],
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
            maxlength: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            tabindex: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            title: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            ariaLabel: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            ariaRequired: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            name: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            autocomplete: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
        },
        outputs: {
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
                                ],
                            }),
                        ],
                    },
                ],
            }),
        ],
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQudGFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYXN0L2NiMy10ZW1wbGF0ZS1leGFtcGxlcy9zcmMvbGliL3Rhc2tzL2lucHV0LnRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBWXVCO0FBRXZCLE1BQU0sT0FBTyxHQUFHLG9CQUFvQixDQUFDO0FBQ3JDLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pFLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pELE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pFLE1BQU0sd0JBQXdCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekUsTUFBTSxhQUFhLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25ELE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlDLFFBQUEsdUJBQXVCLEdBQXdCO0lBQzFEO1FBQ0UsUUFBUSxFQUFFLGFBQWE7UUFDdkIsS0FBSyxFQUFFO1lBQ0wsSUFBQSw0QkFBc0IsRUFBQyxpQ0FBMkIsRUFBRTtnQkFDbEQsSUFBSSxFQUFFLE9BQU87YUFDZCxDQUFDO1lBQ0YseUJBQXlCO1lBQ3pCLElBQUEsNEJBQXNCLEVBQUMsa0NBQTRCLEVBQUU7Z0JBQ25ELElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFB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QUFLLEVBQUU7b0NBQ0wsVUFBVSxFQUFFLFNBQVM7aUNBQ3RCOzZCQUNGO3lCQUNGO3dCQUNELE1BQU0sRUFBRSxFQUFFO3dCQUNWLE9BQU8sRUFBRSxFQUFFO3dCQUNYLEtBQUssRUFBRTs0QkFDTCxJQUFBLDRCQUFzQixFQUFDLHdDQUFrQyxFQUFFO2dDQUN6RCxFQUFFLEVBQUU7b0NBQ0Ysb0JBQW9CO29DQUNwQixnQkFBZ0I7b0NBQ2hCLG9CQUFvQjtvQ0FDcEIsd0JBQXdCO29DQUN4QixpQkFBaUI7b0NBQ2pCLGFBQWE7aUNBQ2Q7NkJBQ0YsQ0FBQzt5QkFDSDtxQkFDRjtpQkFDRjthQUNGLENBQUM7U0FDSDtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFByaXptQWRkQ2hpbGRyZW5UZW1wbGF0ZVRhc2ssXG4gIFByaXptQWRkQ29tbWVudFRlbXBsYXRlVGFzayxcbiAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeSxcbiAgUHJpem1DYWxsV2l0aE5ld1NvdXJjZVRlbXBsYXRlVGFzayxcbiAgUHJpem1DaGFuZ2VOYW1lVGVtcGxhdGVUYXNrLFxuICBQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzayxcbiAgUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssXG4gIFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLFxuICBQcml6bVJ1blRhc2tzT25Ob2RlVGVtcGxhdGVUYXNrLFxuICBQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzayxcbiAgUHJpem1UZW1wbGF0ZVRhc2ssXG59IGZyb20gJ0Bwcml6bS11aS9hc3QnO1xuXG5jb25zdCBuZXdOYW1lID0gJ3ByaXptLWlucHV0LWxheW91dCc7XG5jb25zdCBuZXdOYW1lT2ZQbGFjZWhvbGRlciA9IFtuZXdOYW1lLCAncGxhY2Vob2xkZXInXS5qb2luKCc6OicpO1xuY29uc3QgbmV3TmFtZU9mTmdNb2RlbCA9IFtuZXdOYW1lLCAnbmdNb2RlbCddLmpvaW4oJzo6Jyk7XG5jb25zdCBuZXdOYW1lT2ZGb3JtQ29udHJvbCA9IFtuZXdOYW1lLCAnZm9ybUNvbnRyb2wnXS5qb2luKCc6OicpO1xuY29uc3QgbmV3TmFtZU9mRm9ybUNvbnRyb2xOYW1lID0gW25ld05hbWUsICdmb3JtQ29udHJvbE5hbWUnXS5qb2luKCc6OicpO1xuY29uc3QgbmV3TmFtZU9mVHlwZSA9IFtuZXdOYW1lLCAndHlwZSddLmpvaW4oJzo6Jyk7XG5jb25zdCBuZXdOYW1lT2ZEaXNhYmxlZCA9IFtuZXdOYW1lLCAnZGlzYWJsZWQnXS5qb2luKCc6OicpO1xuZXhwb3J0IGNvbnN0IFp5ZnJhSW5wdXRUZW1wbGF0ZVRhc2tzOiBQcml6bVRlbXBsYXRlVGFza1tdID0gW1xuICB7XG4gICAgc2VsZWN0b3I6ICd6eWZyYS1pbnB1dCcsXG4gICAgdGFza3M6IFtcbiAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1DaGFuZ2VOYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgIG5hbWU6IG5ld05hbWUsXG4gICAgICB9KSxcbiAgICAgIC8vIFRPRE8gYWxzbyBzZXQgY2hpbGRyZW5cbiAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1BZGRDaGlsZHJlblRlbXBsYXRlVGFzaywge1xuICAgICAgICBuYW1lOiAnaW5wdXQnLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHByaXptSW5wdXQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHZvaWRFbGVtZW50OiB0cnVlLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICB9KSxcbiAgICBdLFxuICAgIGlucHV0czoge1xuICAgICAgLy8gb3B0aW9uczogW1xuICAgICAgLy8gICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAvLyAgICAgbmV3QXR0ck5hbWU6ICdpdGVtcycsXG4gICAgICAvLyAgICAgbmVlZEZpeEFwaTogdHJ1ZSxcbiAgICAgIC8vICAgfSksXG4gICAgICAvLyBdLFxuICAgICAgLy8gc2l6ZTogW1xuICAgICAgLy8gICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptQWRkQ29tbWVudFRlbXBsYXRlVGFzaywge1xuICAgICAgLy8gICAgIGNvbW1lbnQ6ICdUT0RPOiBuZWVkIHRvIGNvcnJlY3Qgc2l6ZSBmb3JtYXQgKG51bWJlciA+IGVudW0pJyxcbiAgICAgIC8vICAgfSksXG4gICAgICAvLyAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1BZGRDb21tZW50VGVtcGxhdGVUYXNrLCB7XG4gICAgICAvLyAgICAgY29tbWVudDogJ1RPRE86IFlvdSBhbHNvIG5lZWQgdG8gcGFzcyBzaXplIHRvIGNoaWxkICcsXG4gICAgICAvLyAgIH0pLFxuICAgICAgLy8gXSxcbiAgICAgIC8vIGZvcm1Db250cm9sOiBbXG4gICAgICAvLyAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgIC8vICAgICBpZDogbmV3TmFtZU9mRm9ybUNvbnRyb2wsXG4gICAgICAvLyAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAvLyAgICAgICBuZXdBdHRyTmFtZTogJ2Zvcm1Db250cm9sJyxcbiAgICAgIC8vICAgICB9KSxcbiAgICAgIC8vICAgfSksXG4gICAgICAvLyBdLFxuICAgICAgZGlzYWJsZWQ6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVNhdmVUb0NhbGxPbkRlbWFuZFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGlkOiBuZXdOYW1lT2ZEaXNhYmxlZCxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnZGlzYWJsZWQnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICB0eXBlOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1TYXZlVG9DYWxsT25EZW1hbmRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBpZDogbmV3TmFtZU9mVHlwZSxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAndHlwZScsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIGZvcm1Db250cm9sTmFtZTogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IG5ld05hbWVPZkZvcm1Db250cm9sTmFtZSxcbiAgICAgICAgICBhY3Rpb246IHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICAgIG5ld0F0dHJOYW1lOiAnZm9ybUNvbnRyb2xOYW1lJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgbmdNb2RlbDogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IG5ld05hbWVPZk5nTW9kZWwsXG4gICAgICAgICAgYWN0aW9uOiBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICBuZXdBdHRyTmFtZTogJ25nTW9kZWwnLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBwbGFjZWhvbGRlcjogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgaWQ6IG5ld05hbWVPZlBsYWNlaG9sZGVyLFxuICAgICAgICAgIGFjdGlvbjogcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgICAgbmV3QXR0ck5hbWU6ICdwbGFjZWhvbGRlcicsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHZhbHVlOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KSxcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bUFkZENvbW1lbnRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBjb21tZW50OiAnVE9ETzogWW91IGFsc28gbmVlZCB0byBwYXNzIGEgdmFsdWUgc2l6ZSB0byBjaGlsZCAnLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBzdGVwOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KSxcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bUFkZENvbW1lbnRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBjb21tZW50OiAnVE9ETzogWW91IGFsc28gbmVlZCB0byBwYXNzIGEgc3RlcCBzaXplIHRvIGNoaWxkICcsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIG1pbjogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSksXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1BZGRDb21tZW50VGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgY29tbWVudDogJ1RPRE86IFlvdSBhbHNvIG5lZWQgdG8gcGFzcyBhIG1pbiB2YWx1ZSB0byBjaGlsZCAnLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBtYXg6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pLFxuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptQWRkQ29tbWVudFRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIGNvbW1lbnQ6ICdUT0RPOiBZb3UgYWxzbyBuZWVkIHRvIHBhc3MgYSBtYXggdmFsdWUgdG8gY2hpbGQgJyxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgZHJvcGRvd25JY29uOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBuZXdBdHRyTmFtZTogJ2ljb24nLFxuICAgICAgICAgIG5lZWRGaXhBcGk6IHRydWUsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHNob3dDbGVhcjogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgbmV3QXR0ck5hbWU6ICdmb3JjZUNsZWFyJyxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgdG9vbHRpcFBvc2l0aW9uOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHRvb2x0aXA6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgZm9ybWF0OiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHNob3dCdXR0b25zOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGJ1dHRvbkxheW91dDogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBzcGFuQ2xhc3M6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgaUNsYXNzOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGluY3JlbWVudEJ1dHRvbkNsYXNzOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGRlY3JlbWVudEJ1dHRvbkNsYXNzOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGluY3JlbWVudEJ1dHRvbkljb246IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgZGVjcmVtZW50QnV0dG9uSWNvbjogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBsb2NhbGU6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgbG9jYWxlTWF0Y2hlcjogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBtb2RlOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHByZWZpeDogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBzdWZmaXg6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgY3VycmVuY3k6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgY3VycmVuY3lEaXNwbGF5OiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHVzZUdyb3VwaW5nOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIG1pbkZyYWN0aW9uRGlnaXRzOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIG1heEZyYWN0aW9uRGlnaXRzOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHN0eWxlOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHN0eWxlQ2xhc3M6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgaW5wdXRJZDogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBpbnB1dFN0eWxlOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGlucHV0U3R5bGVDbGFzczogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBtYXhsZW5ndGg6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgdGFiaW5kZXg6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgdGl0bGU6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgYXJpYUxhYmVsOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGFyaWFSZXF1aXJlZDogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBuYW1lOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGF1dG9jb21wbGV0ZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgfSxcbiAgICBvdXRwdXRzOiB7XG4gICAgICBvbklucHV0OiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIG9uQmx1cjogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBvbkZvY3VzOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzaywge30pXSxcbiAgICB9LFxuICAgIGZpbmlzaFRhc2tzOiBbXG4gICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUnVuVGFza3NPbk5vZGVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgZG9udFJ1bk9uT25NYWluOiB0cnVlLFxuICAgICAgICBydW5PbkNoaWxkcmVuOiB0cnVlLFxuICAgICAgICB0YXNrczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYnlBdHRyJyxcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgcHJpem1JbnB1dDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgaW5wdXRzOiB7fSxcbiAgICAgICAgICAgIG91dHB1dHM6IHt9LFxuICAgICAgICAgICAgdGFza3M6IFtcbiAgICAgICAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bUNhbGxXaXRoTmV3U291cmNlVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgICAgICAgaWQ6IFtcbiAgICAgICAgICAgICAgICAgIG5ld05hbWVPZlBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgICAgbmV3TmFtZU9mTmdNb2RlbCxcbiAgICAgICAgICAgICAgICAgIG5ld05hbWVPZkZvcm1Db250cm9sLFxuICAgICAgICAgICAgICAgICAgbmV3TmFtZU9mRm9ybUNvbnRyb2xOYW1lLFxuICAgICAgICAgICAgICAgICAgbmV3TmFtZU9mRGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICBuZXdOYW1lT2ZUeXBlLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgXSxcbiAgfSxcbl07XG4iXX0=