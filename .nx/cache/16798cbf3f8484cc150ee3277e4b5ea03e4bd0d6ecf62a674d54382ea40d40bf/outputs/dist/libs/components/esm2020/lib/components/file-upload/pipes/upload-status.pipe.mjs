import { Pipe } from '@angular/core';
import { UploadingStatusEnum } from '../file-upload.enums';
import * as i0 from "@angular/core";
export class PrizmUploadStatusPipe {
    transform(progress, error) {
        if (error) {
            return UploadingStatusEnum.warning;
        }
        if (progress === 0) {
            return UploadingStatusEnum.idle;
        }
        if (progress === 100) {
            return UploadingStatusEnum.success;
        }
        return UploadingStatusEnum.progress;
    }
}
PrizmUploadStatusPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmUploadStatusPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
PrizmUploadStatusPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmUploadStatusPipe, isStandalone: true, name: "prizmUploadStatus" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmUploadStatusPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'prizmUploadStatus', standalone: true }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLXN0YXR1cy5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9maWxlLXVwbG9hZC9waXBlcy91cGxvYWQtc3RhdHVzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRzNELE1BQU0sT0FBTyxxQkFBcUI7SUFDekIsU0FBUyxDQUFDLFFBQWdCLEVBQUUsS0FBYztRQUMvQyxJQUFJLEtBQUssRUFBRTtZQUNULE9BQU8sbUJBQW1CLENBQUMsT0FBTyxDQUFDO1NBQ3BDO1FBRUQsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sbUJBQW1CLENBQUMsSUFBSSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxRQUFRLEtBQUssR0FBRyxFQUFFO1lBQ3BCLE9BQU8sbUJBQW1CLENBQUMsT0FBTyxDQUFDO1NBQ3BDO1FBRUQsT0FBTyxtQkFBbUIsQ0FBQyxRQUFRLENBQUM7SUFDdEMsQ0FBQzs7a0hBZlUscUJBQXFCO2dIQUFyQixxQkFBcUI7MkZBQXJCLHFCQUFxQjtrQkFEakMsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXBsb2FkaW5nU3RhdHVzRW51bSB9IGZyb20gJy4uL2ZpbGUtdXBsb2FkLmVudW1zJztcblxuQFBpcGUoeyBuYW1lOiAncHJpem1VcGxvYWRTdGF0dXMnLCBzdGFuZGFsb25lOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgUHJpem1VcGxvYWRTdGF0dXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHB1YmxpYyB0cmFuc2Zvcm0ocHJvZ3Jlc3M6IG51bWJlciwgZXJyb3I6IGJvb2xlYW4pOiBVcGxvYWRpbmdTdGF0dXNFbnVtIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBVcGxvYWRpbmdTdGF0dXNFbnVtLndhcm5pbmc7XG4gICAgfVxuXG4gICAgaWYgKHByb2dyZXNzID09PSAwKSB7XG4gICAgICByZXR1cm4gVXBsb2FkaW5nU3RhdHVzRW51bS5pZGxlO1xuICAgIH1cblxuICAgIGlmIChwcm9ncmVzcyA9PT0gMTAwKSB7XG4gICAgICByZXR1cm4gVXBsb2FkaW5nU3RhdHVzRW51bS5zdWNjZXNzO1xuICAgIH1cblxuICAgIHJldHVybiBVcGxvYWRpbmdTdGF0dXNFbnVtLnByb2dyZXNzO1xuICB9XG59XG4iXX0=