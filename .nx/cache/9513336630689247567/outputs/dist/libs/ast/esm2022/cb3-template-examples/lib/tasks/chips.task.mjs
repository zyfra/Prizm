"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZyfraChipsTasks = void 0;
const ast_1 = require("@prizm-ui/ast");
exports.ZyfraChipsTasks = [
    {
        selector: 'zyfra-chip',
        tasks: [
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmChangeNameTemplateTask, {
                name: 'prizm-chips-item',
            }),
        ],
        inputs: {
            label: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmMoveToContentTemplateTask, {})],
            removable: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'deletable',
                }),
            ],
            icon: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            image: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            styleClass: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            style: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            removeIcon: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
        },
        outputs: {
            onRemove: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'deleted',
                }),
            ],
        },
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMudGFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYXN0L2NiMy10ZW1wbGF0ZS1leGFtcGxlcy9zcmMvbGliL3Rhc2tzL2NoaXBzLnRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBT3VCO0FBRVYsUUFBQSxlQUFlLEdBQXdCO0lBQ2xEO1FBQ0UsUUFBUSxFQUFFLFlBQVk7UUFDdEIsS0FBSyxFQUFFO1lBQ0wsSUFBQSw0QkFBc0IsRUFBQyxpQ0FBMkIsRUFBRTtnQkFDbEQsSUFBSSxFQUFFLGtCQUFrQjthQUN6QixDQUFDO1NBQ0g7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG9DQUE4QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25FLFNBQVMsRUFBRTtnQkFDVCxJQUFBLDRCQUFzQixFQUFDLDZCQUF1QixFQUFFO29CQUM5QyxXQUFXLEVBQUUsV0FBVztpQkFDekIsQ0FBQzthQUNIO1lBRUQsSUFBSSxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNqRSxLQUFLLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2xFLFVBQVUsRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdkUsS0FBSyxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNsRSxVQUFVLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3hFO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsUUFBUSxFQUFFO2dCQUNSLElBQUEsNEJBQXNCLEVBQUMsNkJBQXVCLEVBQUU7b0JBQzlDLFdBQVcsRUFBRSxTQUFTO2lCQUN2QixDQUFDO2FBQ0g7U0FDRjtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHByaXptQXN0Q3JlYXRlQWN0aW9uQnksXG4gIFByaXptQ2hhbmdlTmFtZVRlbXBsYXRlVGFzayxcbiAgUHJpem1Nb3ZlVG9Db250ZW50VGVtcGxhdGVUYXNrLFxuICBQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzayxcbiAgUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssXG4gIFByaXptVGVtcGxhdGVUYXNrLFxufSBmcm9tICdAcHJpem0tdWkvYXN0JztcblxuZXhwb3J0IGNvbnN0IFp5ZnJhQ2hpcHNUYXNrczogUHJpem1UZW1wbGF0ZVRhc2tbXSA9IFtcbiAge1xuICAgIHNlbGVjdG9yOiAnenlmcmEtY2hpcCcsXG4gICAgdGFza3M6IFtcbiAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1DaGFuZ2VOYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgIG5hbWU6ICdwcml6bS1jaGlwcy1pdGVtJyxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBsYWJlbDogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Nb3ZlVG9Db250ZW50VGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgcmVtb3ZhYmxlOiBbXG4gICAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssIHtcbiAgICAgICAgICBuZXdBdHRyTmFtZTogJ2RlbGV0YWJsZScsXG4gICAgICAgIH0pLFxuICAgICAgXSxcblxuICAgICAgaWNvbjogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBpbWFnZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBzdHlsZUNsYXNzOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHN0eWxlOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHJlbW92ZUljb246IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgIH0sXG4gICAgb3V0cHV0czoge1xuICAgICAgb25SZW1vdmU6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIG5ld0F0dHJOYW1lOiAnZGVsZXRlZCcsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuXTtcbiJdfQ==