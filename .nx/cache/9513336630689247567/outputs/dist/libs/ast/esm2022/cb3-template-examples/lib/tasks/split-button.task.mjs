"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZyfraSplitButtonTemplateTasks = void 0;
const ast_1 = require("@prizm-ui/ast");
exports.ZyfraSplitButtonTemplateTasks = [
    {
        selector: 'zyfra-split-button',
        tasks: [
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmChangeNameTemplateTask, {
                name: 'prizm-split-button',
            }),
        ],
        inputs: {
            label: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmMoveToContentTemplateTask, {})],
            icon: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmAddCommentTemplateTask, {
                    comment: 'TODO need fix api for pass right icon',
                }),
            ],
            iconPos: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            style: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            menuStyle: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            menuStyleClass: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            styleClass: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            appendTo: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            dir: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            showTransitionOptions: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            hideTransitionOptions: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            model: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRemoveAttributeTemplateTask, {}),
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmAddCommentTemplateTask, {
                    comment: 'TODO use dropdown-host component to show children menus',
                }),
            ],
        },
        outputs: {
            onDropdownClick: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRemoveAttributeTemplateTask, {}),
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmAddCommentTemplateTask, {
                    comment: 'TODO use dropdown-host component to catch event for change (onDropdownClick)',
                }),
            ],
            onClick: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmAddAttributeTemplateTask, {
                    attr: '(clickIcon)',
                    passValue: true,
                }),
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'clickButton',
                }),
            ],
        },
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtYnV0dG9uLnRhc2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FzdC9jYjMtdGVtcGxhdGUtZXhhbXBsZXMvc3JjL2xpYi90YXNrcy9zcGxpdC1idXR0b24udGFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FVdUI7QUFFVixRQUFBLDZCQUE2QixHQUF3QjtJQUNoRTtRQUNFLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsS0FBSyxFQUFFO1lBQ0wsSUFBQSw0QkFBc0IsRUFBQyxpQ0FBMkIsRUFBRTtnQkFDbEQsSUFBSSxFQUFFLG9CQUFvQjthQUMzQixDQUFDO1NBQ0g7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG9DQUE4QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25FLElBQUksRUFBRTtnQkFDSixJQUFBLDRCQUFzQixFQUFDLGlDQUEyQixFQUFFO29CQUNsRCxPQUFPLEVBQUUsdUNBQXVDO2lCQUNqRCxDQUFDO2FBQ0g7WUFDRCxPQUFPLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3BFLEtBQUssRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEUsU0FBUyxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN0RSxjQUFjLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzNFLFVBQVUsRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdkUsUUFBUSxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNyRSxHQUFHLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2hFLHFCQUFxQixFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNsRixxQkFBcUIsRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEYsS0FBSyxFQUFFO2dCQUNMLElBQUEsNEJBQXNCLEVBQUMsc0NBQWdDLEVBQUUsRUFBRSxDQUFDO2dCQUM1RCxJQUFBLDRCQUFzQixFQUFDLGlDQUEyQixFQUFFO29CQUNsRCxPQUFPLEVBQUUseURBQXlEO2lCQUNuRSxDQUFDO2FBQ0g7U0FDRjtRQUNELE9BQU8sRUFBRTtZQUNQLGVBQWUsRUFBRTtnQkFDZixJQUFBLDRCQUFzQixFQUFDLHNDQUFnQyxFQUFFLEVBQUUsQ0FBQztnQkFDNUQsSUFBQSw0QkFBc0IsRUFBQyxpQ0FBMkIsRUFBRTtvQkFDbEQsT0FBTyxFQUFFLDhFQUE4RTtpQkFDeEYsQ0FBQzthQUNIO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUU7b0JBQ3BELElBQUksRUFBRSxhQUFhO29CQUNuQixTQUFTLEVBQUUsSUFBSTtpQkFDaEIsQ0FBQztnQkFDRixJQUFBLDRCQUFzQixFQUFDLDZCQUF1QixFQUFFO29CQUM5QyxXQUFXLEVBQUUsYUFBYTtpQkFDM0IsQ0FBQzthQUNIO1NBQ0Y7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBQcml6bUFkZEF0dHJpYnV0ZVRlbXBsYXRlVGFzayxcbiAgUHJpem1BZGRDb21tZW50VGVtcGxhdGVUYXNrLFxuICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5LFxuICBQcml6bUNoYW5nZU5hbWVUZW1wbGF0ZVRhc2ssXG4gIFByaXptTW92ZVRvQ29udGVudFRlbXBsYXRlVGFzayxcbiAgUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssXG4gIFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLFxuICBQcml6bVJlbmFtZVRlbXBsYXRlVGFzayxcbiAgUHJpem1UZW1wbGF0ZVRhc2ssXG59IGZyb20gJ0Bwcml6bS11aS9hc3QnO1xuXG5leHBvcnQgY29uc3QgWnlmcmFTcGxpdEJ1dHRvblRlbXBsYXRlVGFza3M6IFByaXptVGVtcGxhdGVUYXNrW10gPSBbXG4gIHtcbiAgICBzZWxlY3RvcjogJ3p5ZnJhLXNwbGl0LWJ1dHRvbicsXG4gICAgdGFza3M6IFtcbiAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1DaGFuZ2VOYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgIG5hbWU6ICdwcml6bS1zcGxpdC1idXR0b24nLFxuICAgICAgfSksXG4gICAgXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGxhYmVsOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU1vdmVUb0NvbnRlbnRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBpY29uOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1BZGRDb21tZW50VGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgY29tbWVudDogJ1RPRE8gbmVlZCBmaXggYXBpIGZvciBwYXNzIHJpZ2h0IGljb24nLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBpY29uUG9zOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHN0eWxlOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIG1lbnVTdHlsZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBtZW51U3R5bGVDbGFzczogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBzdHlsZUNsYXNzOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGFwcGVuZFRvOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGRpcjogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBzaG93VHJhbnNpdGlvbk9wdGlvbnM6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgaGlkZVRyYW5zaXRpb25PcHRpb25zOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIG1vZGVsOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW1vdmVBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHt9KSxcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bUFkZENvbW1lbnRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBjb21tZW50OiAnVE9ETyB1c2UgZHJvcGRvd24taG9zdCBjb21wb25lbnQgdG8gc2hvdyBjaGlsZHJlbiBtZW51cycsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIG91dHB1dHM6IHtcbiAgICAgIG9uRHJvcGRvd25DbGljazogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrLCB7fSksXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1BZGRDb21tZW50VGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgY29tbWVudDogJ1RPRE8gdXNlIGRyb3Bkb3duLWhvc3QgY29tcG9uZW50IHRvIGNhdGNoIGV2ZW50IGZvciBjaGFuZ2UgKG9uRHJvcGRvd25DbGljayknLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBvbkNsaWNrOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1BZGRBdHRyaWJ1dGVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBhdHRyOiAnKGNsaWNrSWNvbiknLFxuICAgICAgICAgIHBhc3NWYWx1ZTogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBuZXdBdHRyTmFtZTogJ2NsaWNrQnV0dG9uJyxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG5dO1xuIl19