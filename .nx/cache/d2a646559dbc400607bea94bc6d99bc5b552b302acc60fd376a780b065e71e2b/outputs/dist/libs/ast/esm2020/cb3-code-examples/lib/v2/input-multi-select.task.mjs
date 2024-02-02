"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizmInputMultiSelectCodeTasks = void 0;
const code_1 = require("@prizm-ui/ast/code");
exports.PrizmInputMultiSelectCodeTasks = [
    (0, code_1.prizmAstCreateCodeTaskBy)(code_1.PrizmAstAddImportsIfNeededCodeTask, {
        importToAdd: '@prizm-ui/components',
        namedImports: ['PrizmInputMultiSelectModule'],
        targetImport: '@prizm-ui/components',
        targetNamedImports: ['PrizmMultiSelectModule'],
        commentBeforeImport: 'PRIZM:MIGRATOR changed from PrizmMultiSelectModule to PrizmInputMultiSelectModule',
    }),
    (0, code_1.prizmAstCreateCodeTaskBy)(code_1.PrizmAstAddImportsToNgModuleCodeTask, {
        newModule: 'PrizmInputMultiSelectModule',
        moduleToFind: 'PrizmMultiSelectModule',
        comment: 'PRIZM:MIGRATOR changed from PrizmMultiSelectModule to PrizmInputMultiSelectModule',
    }),
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbXVsdGktc2VsZWN0LnRhc2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FzdC9jYjMtY29kZS1leGFtcGxlcy9zcmMvbGliL3YyL2lucHV0LW11bHRpLXNlbGVjdC50YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUs0QjtBQUVmLFFBQUEsOEJBQThCLEdBQXdCO0lBQ2pFLElBQUEsK0JBQXdCLEVBQUMseUNBQWtDLEVBQUU7UUFDM0QsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxZQUFZLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztRQUM3QyxZQUFZLEVBQUUsc0JBQXNCO1FBQ3BDLGtCQUFrQixFQUFFLENBQUMsd0JBQXdCLENBQUM7UUFDOUMsbUJBQW1CLEVBQUUsbUZBQW1GO0tBQ3pHLENBQUM7SUFDRixJQUFBLCtCQUF3QixFQUFDLDJDQUFvQyxFQUFFO1FBQzdELFNBQVMsRUFBRSw2QkFBNkI7UUFDeEMsWUFBWSxFQUFFLHdCQUF3QjtRQUN0QyxPQUFPLEVBQUUsbUZBQW1GO0tBQzdGLENBQUM7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgUHJpem1Bc3RBZGRJbXBvcnRzSWZOZWVkZWRDb2RlVGFzayxcbiAgUHJpem1Bc3RBZGRJbXBvcnRzVG9OZ01vZHVsZUNvZGVUYXNrLFxuICBJUHJpem1Bc3RDb2RlVGFzayxcbiAgcHJpem1Bc3RDcmVhdGVDb2RlVGFza0J5LFxufSBmcm9tICdAcHJpem0tdWkvYXN0L2NvZGUnO1xuXG5leHBvcnQgY29uc3QgUHJpem1JbnB1dE11bHRpU2VsZWN0Q29kZVRhc2tzOiBJUHJpem1Bc3RDb2RlVGFza1tdID0gW1xuICBwcml6bUFzdENyZWF0ZUNvZGVUYXNrQnkoUHJpem1Bc3RBZGRJbXBvcnRzSWZOZWVkZWRDb2RlVGFzaywge1xuICAgIGltcG9ydFRvQWRkOiAnQHByaXptLXVpL2NvbXBvbmVudHMnLFxuICAgIG5hbWVkSW1wb3J0czogWydQcml6bUlucHV0TXVsdGlTZWxlY3RNb2R1bGUnXSxcbiAgICB0YXJnZXRJbXBvcnQ6ICdAcHJpem0tdWkvY29tcG9uZW50cycsXG4gICAgdGFyZ2V0TmFtZWRJbXBvcnRzOiBbJ1ByaXptTXVsdGlTZWxlY3RNb2R1bGUnXSxcbiAgICBjb21tZW50QmVmb3JlSW1wb3J0OiAnUFJJWk06TUlHUkFUT1IgY2hhbmdlZCBmcm9tIFByaXptTXVsdGlTZWxlY3RNb2R1bGUgdG8gUHJpem1JbnB1dE11bHRpU2VsZWN0TW9kdWxlJyxcbiAgfSksXG4gIHByaXptQXN0Q3JlYXRlQ29kZVRhc2tCeShQcml6bUFzdEFkZEltcG9ydHNUb05nTW9kdWxlQ29kZVRhc2ssIHtcbiAgICBuZXdNb2R1bGU6ICdQcml6bUlucHV0TXVsdGlTZWxlY3RNb2R1bGUnLFxuICAgIG1vZHVsZVRvRmluZDogJ1ByaXptTXVsdGlTZWxlY3RNb2R1bGUnLFxuICAgIGNvbW1lbnQ6ICdQUklaTTpNSUdSQVRPUiBjaGFuZ2VkIGZyb20gUHJpem1NdWx0aVNlbGVjdE1vZHVsZSB0byBQcml6bUlucHV0TXVsdGlTZWxlY3RNb2R1bGUnLFxuICB9KSxcbl07XG4iXX0=