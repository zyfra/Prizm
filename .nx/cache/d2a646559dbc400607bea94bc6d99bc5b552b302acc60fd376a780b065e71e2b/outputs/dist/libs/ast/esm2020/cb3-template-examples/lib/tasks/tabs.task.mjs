"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZyfraTabsTemplateTasks = void 0;
const ast_1 = require("@prizm-ui/ast");
exports.ZyfraTabsTemplateTasks = [
    {
        selector: 'zyfra-tab-view',
        tasks: [
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmChangeNameTemplateTask, {
                name: 'prizm-tabs',
            }),
        ],
        inputs: {
            activeIndex: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'activeTabIndex',
                }),
            ],
            controlClose: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            style: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            styleClass: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
        },
        outputs: {
            activeIndexChange: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'activeTabIndexChange',
                }),
            ],
            onClose: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            onChange: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
        },
    },
    {
        selector: 'zyfra-tab-panel',
        tasks: [
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmChangeNameTemplateTask, {
                name: 'prizm-tab',
            }),
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmCommentContentTemplateTask, {}),
        ],
        inputs: {
            header: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmMoveToContentTemplateTask, {
                    notClearChildren: true,
                }),
            ],
            tooltip: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'prizmTooltip',
                }),
            ],
            tooltipPosition: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'prizmHintDirection',
                    needFixApi: true,
                }),
            ],
            selected: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            headerStyle: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            headerStyleClass: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            cache: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            leftIcon: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            rightIcon: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            tooltipStyleClass: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            tooltipPositionStyle: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
        },
        outputs: {
            propChange: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
        },
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy50YXNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hc3QvY2IzLXRlbXBsYXRlLWV4YW1wbGVzL3NyYy9saWIvdGFza3MvdGFicy50YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQVF1QjtBQUVWLFFBQUEsc0JBQXNCLEdBQXdCO0lBQ3pEO1FBQ0UsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixLQUFLLEVBQUU7WUFDTCxJQUFBLDRCQUFzQixFQUFDLGlDQUEyQixFQUFFO2dCQUNsRCxJQUFJLEVBQUUsWUFBWTthQUNuQixDQUFDO1NBQ0g7UUFDRCxNQUFNLEVBQUU7WUFDTixXQUFXLEVBQUU7Z0JBQ1gsSUFBQSw0QkFBc0IsRUFBQyw2QkFBdUIsRUFBRTtvQkFDOUMsV0FBVyxFQUFFLGdCQUFnQjtpQkFDOUIsQ0FBQzthQUNIO1lBRUQsWUFBWSxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN6RSxLQUFLLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2xFLFVBQVUsRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDeEU7UUFDRCxPQUFPLEVBQUU7WUFDUCxpQkFBaUIsRUFBRTtnQkFDakIsSUFBQSw0QkFBc0IsRUFBQyw2QkFBdUIsRUFBRTtvQkFDOUMsV0FBVyxFQUFFLHNCQUFzQjtpQkFDcEMsQ0FBQzthQUNIO1lBQ0QsT0FBTyxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNwRSxRQUFRLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3RFO0tBQ0Y7SUFDRDtRQUNFLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsS0FBSyxFQUFFO1lBQ0wsSUFBQSw0QkFBc0IsRUFBQyxpQ0FBMkIsRUFBRTtnQkFDbEQsSUFBSSxFQUFFLFdBQVc7YUFDbEIsQ0FBQztZQUNGLElBQUEsNEJBQXNCLEVBQUMscUNBQStCLEVBQUUsRUFBRSxDQUFDO1NBQzVEO1FBQ0QsTUFBTSxFQUFFO1lBQ04sTUFBTSxFQUFFO2dCQUNOLElBQUEsNEJBQXNCLEVBQUMsb0NBQThCLEVBQUU7b0JBQ3JELGdCQUFnQixFQUFFLElBQUk7aUJBQ3ZCLENBQUM7YUFDSDtZQUNELE9BQU8sRUFBRTtnQkFDUCxJQUFBLDRCQUFzQixFQUFDLDZCQUF1QixFQUFFO29CQUM5QyxXQUFXLEVBQUUsY0FBYztpQkFDNUIsQ0FBQzthQUNIO1lBQ0QsZUFBZSxFQUFFO2dCQUNmLElBQUEsNEJBQXNCLEVBQUMsNkJBQXVCLEVBQUU7b0JBQzlDLFdBQVcsRUFBRSxvQkFBb0I7b0JBQ2pDLFVBQVUsRUFBRSxJQUFJO2lCQUNqQixDQUFDO2FBQ0g7WUFDRCxRQUFRLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3JFLFdBQVcsRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDeEUsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzdFLEtBQUssRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEUsUUFBUSxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNyRSxTQUFTLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3RFLGlCQUFpQixFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM5RSxvQkFBb0IsRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDbEY7UUFDRCxPQUFPLEVBQUU7WUFDUCxVQUFVLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3hFO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeSxcbiAgUHJpem1DaGFuZ2VOYW1lVGVtcGxhdGVUYXNrLFxuICBQcml6bUNvbW1lbnRDb250ZW50VGVtcGxhdGVUYXNrLFxuICBQcml6bU1vdmVUb0NvbnRlbnRUZW1wbGF0ZVRhc2ssXG4gIFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLFxuICBQcml6bVJlbmFtZVRlbXBsYXRlVGFzayxcbiAgUHJpem1UZW1wbGF0ZVRhc2ssXG59IGZyb20gJ0Bwcml6bS11aS9hc3QnO1xuXG5leHBvcnQgY29uc3QgWnlmcmFUYWJzVGVtcGxhdGVUYXNrczogUHJpem1UZW1wbGF0ZVRhc2tbXSA9IFtcbiAge1xuICAgIHNlbGVjdG9yOiAnenlmcmEtdGFiLXZpZXcnLFxuICAgIHRhc2tzOiBbXG4gICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptQ2hhbmdlTmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICBuYW1lOiAncHJpem0tdGFicycsXG4gICAgICB9KSxcbiAgICBdLFxuICAgIGlucHV0czoge1xuICAgICAgYWN0aXZlSW5kZXg6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIG5ld0F0dHJOYW1lOiAnYWN0aXZlVGFiSW5kZXgnLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG5cbiAgICAgIGNvbnRyb2xDbG9zZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBzdHlsZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBzdHlsZUNsYXNzOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICB9LFxuICAgIG91dHB1dHM6IHtcbiAgICAgIGFjdGl2ZUluZGV4Q2hhbmdlOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBuZXdBdHRyTmFtZTogJ2FjdGl2ZVRhYkluZGV4Q2hhbmdlJyxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgb25DbG9zZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBvbkNoYW5nZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnenlmcmEtdGFiLXBhbmVsJyxcbiAgICB0YXNrczogW1xuICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bUNoYW5nZU5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgbmFtZTogJ3ByaXptLXRhYicsXG4gICAgICB9KSxcbiAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Db21tZW50Q29udGVudFRlbXBsYXRlVGFzaywge30pLFxuICAgIF0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBoZWFkZXI6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU1vdmVUb0NvbnRlbnRUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBub3RDbGVhckNoaWxkcmVuOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICB0b29sdGlwOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBuZXdBdHRyTmFtZTogJ3ByaXptVG9vbHRpcCcsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHRvb2x0aXBQb3NpdGlvbjogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgbmV3QXR0ck5hbWU6ICdwcml6bUhpbnREaXJlY3Rpb24nLFxuICAgICAgICAgIG5lZWRGaXhBcGk6IHRydWUsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIHNlbGVjdGVkOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGhlYWRlclN0eWxlOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGhlYWRlclN0eWxlQ2xhc3M6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgY2FjaGU6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgbGVmdEljb246IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgcmlnaHRJY29uOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHRvb2x0aXBTdHlsZUNsYXNzOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHRvb2x0aXBQb3NpdGlvblN0eWxlOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICB9LFxuICAgIG91dHB1dHM6IHtcbiAgICAgIHByb3BDaGFuZ2U6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgIH0sXG4gIH0sXG5dO1xuIl19