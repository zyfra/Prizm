"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZyfraDropdownTemplateTasks = void 0;
const ast_1 = require("@prizm-ui/ast");
exports.ZyfraDropdownTemplateTasks = [
    {
        selector: 'zyfra-dropdown',
        tasks: [
            (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmChangeNameTemplateTask, {
                name: 'prizm-select',
            }),
        ],
        inputs: {
            options: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'items',
                    needFixApi: true,
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
            optionValue: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            optionLabel: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            optionDisabled: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            optionGroupLabel: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            optionGroupChildren: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            name: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            scrollHeight: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            style: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            panelStyle: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            styleClass: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            panelStyleClass: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            filter: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            filterValue: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            filterBy: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            filterMatchMode: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            filterPlaceholder: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            filterLocale: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            required: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            disabled: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            readonly: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            emptyMessage: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            emptyFilterMessage: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            ariaLabelledBy: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            editable: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            maxlength: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            appendTo: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            tabindex: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            inputId: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            dataKey: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            autofocus: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            autofocusFilter: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            resetFilterOnHide: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            autoDisplayFirst: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            group: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            groupTemplateClass: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
        },
        outputs: {
            onChange: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            onFocus: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            onBlur: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            onShow: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            onHide: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            onFilter: [(0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmNotSupportedTemplateTask, {})],
            onClick: [
                (0, ast_1.prizmAstCreateActionBy)(ast_1.PrizmRenameTemplateTask, {
                    newAttrName: 'click',
                }),
            ],
        },
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24udGFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYXN0L2NiMy10ZW1wbGF0ZS1leGFtcGxlcy9zcmMvbGliL3Rhc2tzL2Ryb3Bkb3duLnRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBTXVCO0FBRVYsUUFBQSwwQkFBMEIsR0FBd0I7SUFDN0Q7UUFDRSxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLEtBQUssRUFBRTtZQUNMLElBQUEsNEJBQXNCLEVBQUMsaUNBQTJCLEVBQUU7Z0JBQ2xELElBQUksRUFBRSxjQUFjO2FBQ3JCLENBQUM7U0FDSDtRQUNELE1BQU0sRUFBRTtZQUNOLE9BQU8sRUFBRTtnQkFDUCxJQUFBLDRCQUFzQixFQUFDLDZCQUF1QixFQUFFO29CQUM5QyxXQUFXLEVBQUUsT0FBTztvQkFDcEIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCLENBQUM7YUFDSDtZQUNELFlBQVksRUFBRTtnQkFDWixJQUFBLDRCQUFzQixFQUFDLDZCQUF1QixFQUFFO29CQUM5QyxXQUFXLEVBQUUsTUFBTTtvQkFDbkIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCLENBQUM7YUFDSDtZQUNELFNBQVMsRUFBRTtnQkFDVCxJQUFBLDRCQUFzQixFQUFDLDZCQUF1QixFQUFFO29CQUM5QyxXQUFXLEVBQUUsWUFBWTtpQkFDMUIsQ0FBQzthQUNIO1lBRUQsV0FBVyxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN4RSxXQUFXLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3hFLGNBQWMsRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDM0UsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFF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SUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM5RSxnQkFBZ0IsRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDN0UsS0FBSyxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNsRSxrQkFBa0IsRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDaEY7UUFDRCxPQUFPLEVBQUU7WUFDUCxRQUFRLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3JFLE9BQU8sRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDcEUsTUFBTSxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNuRSxNQUFNLEVBQUUsQ0FBQyxJQUFBLDRCQUFzQixFQUFDLG1DQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25FLE1BQU0sRUFBRSxDQUFDLElBQUEsNEJBQXNCLEVBQUMsbUNBQTZCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbkUsUUFBUSxFQUFFLENBQUMsSUFBQSw0QkFBc0IsRUFBQyxtQ0FBNkIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUVyRSxPQUFPLEVBQUU7Z0JBQ1AsSUFBQSw0QkFBc0IsRUFBQyw2QkFBdUIsRUFBRTtvQkFDOUMsV0FBVyxFQUFFLE9BQU87aUJBQ3JCLENBQUM7YUFDSDtTQUNGO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeSxcbiAgUHJpem1DaGFuZ2VOYW1lVGVtcGxhdGVUYXNrLFxuICBQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzayxcbiAgUHJpem1SZW5hbWVUZW1wbGF0ZVRhc2ssXG4gIFByaXptVGVtcGxhdGVUYXNrLFxufSBmcm9tICdAcHJpem0tdWkvYXN0JztcblxuZXhwb3J0IGNvbnN0IFp5ZnJhRHJvcGRvd25UZW1wbGF0ZVRhc2tzOiBQcml6bVRlbXBsYXRlVGFza1tdID0gW1xuICB7XG4gICAgc2VsZWN0b3I6ICd6eWZyYS1kcm9wZG93bicsXG4gICAgdGFza3M6IFtcbiAgICAgIHByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1DaGFuZ2VOYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgIG5hbWU6ICdwcml6bS1zZWxlY3QnLFxuICAgICAgfSksXG4gICAgXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIG5ld0F0dHJOYW1lOiAnaXRlbXMnLFxuICAgICAgICAgIG5lZWRGaXhBcGk6IHRydWUsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIGRyb3Bkb3duSWNvbjogW1xuICAgICAgICBwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptUmVuYW1lVGVtcGxhdGVUYXNrLCB7XG4gICAgICAgICAgbmV3QXR0ck5hbWU6ICdpY29uJyxcbiAgICAgICAgICBuZWVkRml4QXBpOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBzaG93Q2xlYXI6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIG5ld0F0dHJOYW1lOiAnZm9yY2VDbGVhcicsXG4gICAgICAgIH0pLFxuICAgICAgXSxcblxuICAgICAgb3B0aW9uVmFsdWU6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgb3B0aW9uTGFiZWw6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgb3B0aW9uRGlzYWJsZWQ6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgb3B0aW9uR3JvdXBMYWJlbDogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBvcHRpb25Hcm91cENoaWxkcmVuOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIG5hbWU6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgc2Nyb2xsSGVpZ2h0OiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHN0eWxlOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIHBhbmVsU3R5bGU6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgc3R5bGVDbGFzczogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBwYW5lbFN0eWxlQ2xhc3M6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgZmlsdGVyOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGZpbHRlclZhbHVlOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGZpbHRlckJ5OiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGZpbHRlck1hdGNoTW9kZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBmaWx0ZXJQbGFjZWhvbGRlcjogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBmaWx0ZXJMb2NhbGU6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgcmVxdWlyZWQ6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgZGlzYWJsZWQ6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgcmVhZG9ubHk6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgZW1wdHlNZXNzYWdlOiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGVtcHR5RmlsdGVyTWVzc2FnZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBhcmlhTGFiZWxsZWRCeTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBlZGl0YWJsZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBtYXhsZW5ndGg6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgYXBwZW5kVG86IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgdGFiaW5kZXg6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgaW5wdXRJZDogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBkYXRhS2V5OiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIGF1dG9mb2N1czogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBhdXRvZm9jdXNGaWx0ZXI6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgcmVzZXRGaWx0ZXJPbkhpZGU6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgYXV0b0Rpc3BsYXlGaXJzdDogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBncm91cDogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBncm91cFRlbXBsYXRlQ2xhc3M6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgIH0sXG4gICAgb3V0cHV0czoge1xuICAgICAgb25DaGFuZ2U6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgb25Gb2N1czogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBvbkJsdXI6IFtwcml6bUFzdENyZWF0ZUFjdGlvbkJ5KFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrLCB7fSldLFxuICAgICAgb25TaG93OiBbcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bU5vdFN1cHBvcnRlZFRlbXBsYXRlVGFzaywge30pXSxcbiAgICAgIG9uSGlkZTogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG4gICAgICBvbkZpbHRlcjogW3ByaXptQXN0Q3JlYXRlQWN0aW9uQnkoUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2ssIHt9KV0sXG5cbiAgICAgIG9uQ2xpY2s6IFtcbiAgICAgICAgcHJpem1Bc3RDcmVhdGVBY3Rpb25CeShQcml6bVJlbmFtZVRlbXBsYXRlVGFzaywge1xuICAgICAgICAgIG5ld0F0dHJOYW1lOiAnY2xpY2snLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbl07XG4iXX0=