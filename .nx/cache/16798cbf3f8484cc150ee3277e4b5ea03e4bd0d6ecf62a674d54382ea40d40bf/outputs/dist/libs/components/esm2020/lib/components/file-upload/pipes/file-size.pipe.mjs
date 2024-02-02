import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class PrizmFileSizePipe {
    transform(size) {
        if (size < 1024) {
            return size + 'bytes';
        }
        else if (size > 1024 && size < 1048576) {
            return (size / 1024).toFixed(1) + 'KB';
        }
        else if (size > 1048576) {
            return (size / 1048576).toFixed(1) + 'MB';
        }
        return '';
    }
}
PrizmFileSizePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmFileSizePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
PrizmFileSizePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmFileSizePipe, isStandalone: true, name: "prizmFileSize" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmFileSizePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'prizmFileSize', standalone: true }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zaXplLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2ZpbGUtdXBsb2FkL3BpcGVzL2ZpbGUtc2l6ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUdwRCxNQUFNLE9BQU8saUJBQWlCO0lBQ3JCLFNBQVMsQ0FBQyxJQUFZO1FBQzNCLElBQUksSUFBSSxHQUFHLElBQUksRUFBRTtZQUNmLE9BQU8sSUFBSSxHQUFHLE9BQU8sQ0FBQztTQUN2QjthQUFNLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsT0FBTyxFQUFFO1lBQ3hDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN4QzthQUFNLElBQUksSUFBSSxHQUFHLE9BQU8sRUFBRTtZQUN6QixPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDM0M7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7OzhHQVhVLGlCQUFpQjs0R0FBakIsaUJBQWlCOzJGQUFqQixpQkFBaUI7a0JBRDdCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ3ByaXptRmlsZVNpemUnLCBzdGFuZGFsb25lOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgUHJpem1GaWxlU2l6ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgcHVibGljIHRyYW5zZm9ybShzaXplOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmIChzaXplIDwgMTAyNCkge1xuICAgICAgcmV0dXJuIHNpemUgKyAnYnl0ZXMnO1xuICAgIH0gZWxzZSBpZiAoc2l6ZSA+IDEwMjQgJiYgc2l6ZSA8IDEwNDg1NzYpIHtcbiAgICAgIHJldHVybiAoc2l6ZSAvIDEwMjQpLnRvRml4ZWQoMSkgKyAnS0InO1xuICAgIH0gZWxzZSBpZiAoc2l6ZSA+IDEwNDg1NzYpIHtcbiAgICAgIHJldHVybiAoc2l6ZSAvIDEwNDg1NzYpLnRvRml4ZWQoMSkgKyAnTUInO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuIl19