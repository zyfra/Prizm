"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZyfraAccordionCodeTasks = void 0;
const code_1 = require("@prizm-ui/ast/code");
exports.ZyfraAccordionCodeTasks = [
    (0, code_1.prizmAstCreateCodeTaskBy)(code_1.PrizmAstAddImportsIfNeededCodeTask, {
        importToAdd: '@prizm-ui/components',
        namedImports: ['PrizmAccordionModule'],
        targetImport: '@digital-plant/zyfra-components',
        targetNamedImports: ['ZyfraAccordionModule'],
        commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from PrizmAccordionModule',
    }),
    (0, code_1.prizmAstCreateCodeTaskBy)(code_1.PrizmAstAddImportsToNgModuleCodeTask, {
        newModule: 'PrizmAccordionModule',
        moduleToFind: 'ZyfraAccordionModule',
        comment: 'PRIZM:MIGRATOR: Our added module for migrate from PrizmAccordionModule',
    }),
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLnRhc2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FzdC9jYjMtY29kZS1leGFtcGxlcy9zcmMvbGliL3Rhc2tzL2FjY29yZGlvbi50YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUs0QjtBQUVmLFFBQUEsdUJBQXVCLEdBQXdCO0lBQzFELElBQUEsK0JBQXdCLEVBQUMseUNBQWtDLEVBQUU7UUFDM0QsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztRQUN0QyxZQUFZLEVBQUUsaUNBQWlDO1FBQy9DLGtCQUFrQixFQUFFLENBQUMsc0JBQXNCLENBQUM7UUFDNUMsbUJBQW1CLEVBQUUsdUVBQXVFO0tBQzdGLENBQUM7SUFDRixJQUFBLCtCQUF3QixFQUFDLDJDQUFvQyxFQUFFO1FBQzdELFNBQVMsRUFBRSxzQkFBc0I7UUFDakMsWUFBWSxFQUFFLHNCQUFzQjtRQUNwQyxPQUFPLEVBQUUsd0VBQXdFO0tBQ2xGLENBQUM7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgUHJpem1Bc3RBZGRJbXBvcnRzSWZOZWVkZWRDb2RlVGFzayxcbiAgUHJpem1Bc3RBZGRJbXBvcnRzVG9OZ01vZHVsZUNvZGVUYXNrLFxuICBJUHJpem1Bc3RDb2RlVGFzayxcbiAgcHJpem1Bc3RDcmVhdGVDb2RlVGFza0J5LFxufSBmcm9tICdAcHJpem0tdWkvYXN0L2NvZGUnO1xuXG5leHBvcnQgY29uc3QgWnlmcmFBY2NvcmRpb25Db2RlVGFza3M6IElQcml6bUFzdENvZGVUYXNrW10gPSBbXG4gIHByaXptQXN0Q3JlYXRlQ29kZVRhc2tCeShQcml6bUFzdEFkZEltcG9ydHNJZk5lZWRlZENvZGVUYXNrLCB7XG4gICAgaW1wb3J0VG9BZGQ6ICdAcHJpem0tdWkvY29tcG9uZW50cycsXG4gICAgbmFtZWRJbXBvcnRzOiBbJ1ByaXptQWNjb3JkaW9uTW9kdWxlJ10sXG4gICAgdGFyZ2V0SW1wb3J0OiAnQGRpZ2l0YWwtcGxhbnQvenlmcmEtY29tcG9uZW50cycsXG4gICAgdGFyZ2V0TmFtZWRJbXBvcnRzOiBbJ1p5ZnJhQWNjb3JkaW9uTW9kdWxlJ10sXG4gICAgY29tbWVudEJlZm9yZUltcG9ydDogJ1BSSVpNOk1JR1JBVE9SIGFkZGVkIG5ldyBtb2R1bGUgZm9yIG1pZ3JhdGUgZnJvbSBQcml6bUFjY29yZGlvbk1vZHVsZScsXG4gIH0pLFxuICBwcml6bUFzdENyZWF0ZUNvZGVUYXNrQnkoUHJpem1Bc3RBZGRJbXBvcnRzVG9OZ01vZHVsZUNvZGVUYXNrLCB7XG4gICAgbmV3TW9kdWxlOiAnUHJpem1BY2NvcmRpb25Nb2R1bGUnLFxuICAgIG1vZHVsZVRvRmluZDogJ1p5ZnJhQWNjb3JkaW9uTW9kdWxlJyxcbiAgICBjb21tZW50OiAnUFJJWk06TUlHUkFUT1I6IE91ciBhZGRlZCBtb2R1bGUgZm9yIG1pZ3JhdGUgZnJvbSBQcml6bUFjY29yZGlvbk1vZHVsZScsXG4gIH0pLFxuXTtcbiJdfQ==