"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZyfraCheckboxCodeTasks = void 0;
const code_1 = require("@prizm-ui/ast/code");
exports.ZyfraCheckboxCodeTasks = [
    (0, code_1.prizmAstCreateCodeTaskBy)(code_1.PrizmAstAddImportsIfNeededCodeTask, {
        importToAdd: '@prizm-ui/components',
        namedImports: ['PrizmCheckboxModule'],
        targetImport: '@digital-plant/zyfra-components',
        targetNamedImports: ['ZyfraCheckBoxModule'],
        commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraCheckBoxModule',
    }),
    (0, code_1.prizmAstCreateCodeTaskBy)(code_1.PrizmAstAddImportsToNgModuleCodeTask, {
        newModule: 'PrizmCheckboxModule',
        moduleToFind: 'ZyfraCheckBoxModule',
        comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraCheckBoxModule',
    }),
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gudGFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYXN0L2NiMy1jb2RlLWV4YW1wbGVzL3NyYy9saWIvdGFza3MvY2hlY2tib3gudGFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FLNEI7QUFFZixRQUFBLHNCQUFzQixHQUF3QjtJQUN6RCxJQUFBLCtCQUF3QixFQUFDLHlDQUFrQyxFQUFFO1FBQzNELFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDckMsWUFBWSxFQUFFLGlDQUFpQztRQUMvQyxrQkFBa0IsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1FBQzNDLG1CQUFtQixFQUFFLHNFQUFzRTtLQUM1RixDQUFDO0lBQ0YsSUFBQSwrQkFBd0IsRUFBQywyQ0FBb0MsRUFBRTtRQUM3RCxTQUFTLEVBQUUscUJBQXFCO1FBQ2hDLFlBQVksRUFBRSxxQkFBcUI7UUFDbkMsT0FBTyxFQUFFLHVFQUF1RTtLQUNqRixDQUFDO0NBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFByaXptQXN0QWRkSW1wb3J0c0lmTmVlZGVkQ29kZVRhc2ssXG4gIFByaXptQXN0QWRkSW1wb3J0c1RvTmdNb2R1bGVDb2RlVGFzayxcbiAgSVByaXptQXN0Q29kZVRhc2ssXG4gIHByaXptQXN0Q3JlYXRlQ29kZVRhc2tCeSxcbn0gZnJvbSAnQHByaXptLXVpL2FzdC9jb2RlJztcblxuZXhwb3J0IGNvbnN0IFp5ZnJhQ2hlY2tib3hDb2RlVGFza3M6IElQcml6bUFzdENvZGVUYXNrW10gPSBbXG4gIHByaXptQXN0Q3JlYXRlQ29kZVRhc2tCeShQcml6bUFzdEFkZEltcG9ydHNJZk5lZWRlZENvZGVUYXNrLCB7XG4gICAgaW1wb3J0VG9BZGQ6ICdAcHJpem0tdWkvY29tcG9uZW50cycsXG4gICAgbmFtZWRJbXBvcnRzOiBbJ1ByaXptQ2hlY2tib3hNb2R1bGUnXSxcbiAgICB0YXJnZXRJbXBvcnQ6ICdAZGlnaXRhbC1wbGFudC96eWZyYS1jb21wb25lbnRzJyxcbiAgICB0YXJnZXROYW1lZEltcG9ydHM6IFsnWnlmcmFDaGVja0JveE1vZHVsZSddLFxuICAgIGNvbW1lbnRCZWZvcmVJbXBvcnQ6ICdQUklaTTpNSUdSQVRPUiBhZGRlZCBuZXcgbW9kdWxlIGZvciBtaWdyYXRlIGZyb20gWnlmcmFDaGVja0JveE1vZHVsZScsXG4gIH0pLFxuICBwcml6bUFzdENyZWF0ZUNvZGVUYXNrQnkoUHJpem1Bc3RBZGRJbXBvcnRzVG9OZ01vZHVsZUNvZGVUYXNrLCB7XG4gICAgbmV3TW9kdWxlOiAnUHJpem1DaGVja2JveE1vZHVsZScsXG4gICAgbW9kdWxlVG9GaW5kOiAnWnlmcmFDaGVja0JveE1vZHVsZScsXG4gICAgY29tbWVudDogJ1BSSVpNOk1JR1JBVE9SOiBPdXIgYWRkZWQgbW9kdWxlIGZvciBtaWdyYXRlIGZyb20gWnlmcmFDaGVja0JveE1vZHVsZScsXG4gIH0pLFxuXTtcbiJdfQ==