import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class PrizmColumnIconPipe {
    transform(status) {
        let icon = 'sort-eye';
        switch (status) {
            case 'hidden':
                icon = 'sort-eye-off-2';
                break;
            case 'sticky':
                icon = 'account-lock';
                break;
        }
        return icon;
    }
}
PrizmColumnIconPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmColumnIconPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
PrizmColumnIconPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmColumnIconPipe, isStandalone: true, name: "prizmColumnIcon" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmColumnIconPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'prizmColumnIcon',
                    standalone: true,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWljb24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvY29sdW1uLXNldHRpbmdzL3BpcGVzL2NvbHVtbi1pY29uLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBT3BELE1BQU0sT0FBTyxtQkFBbUI7SUFDdkIsU0FBUyxDQUFDLE1BQXlCO1FBQ3hDLElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQztRQUN0QixRQUFRLE1BQU0sRUFBRTtZQUNkLEtBQUssUUFBUTtnQkFDWCxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQ3hCLE1BQU07WUFFUixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxHQUFHLGNBQWMsQ0FBQztnQkFDdEIsTUFBTTtTQUNUO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztnSEFiVSxtQkFBbUI7OEdBQW5CLG1CQUFtQjsyRkFBbkIsbUJBQW1CO2tCQUovQixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxpQkFBaUI7b0JBQ3ZCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptQ29sdW1uU3RhdHVzIH0gZnJvbSAnLi4vY29sdW1uLXNldHRpbmdzLm1vZGVsJztcblxuQFBpcGUoe1xuICBuYW1lOiAncHJpem1Db2x1bW5JY29uJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1Db2x1bW5JY29uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBwdWJsaWMgdHJhbnNmb3JtKHN0YXR1czogUHJpem1Db2x1bW5TdGF0dXMpOiBzdHJpbmcge1xuICAgIGxldCBpY29uID0gJ3NvcnQtZXllJztcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgY2FzZSAnaGlkZGVuJzpcbiAgICAgICAgaWNvbiA9ICdzb3J0LWV5ZS1vZmYtMic7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzdGlja3knOlxuICAgICAgICBpY29uID0gJ2FjY291bnQtbG9jayc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gaWNvbjtcbiAgfVxufVxuIl19