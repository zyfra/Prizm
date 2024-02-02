"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizmCommentContentTemplateTask = void 0;
const abstract_1 = require("../abstract");
const html_stringify_1 = require("../../../html/html-stringify");
class PrizmCommentContentTemplateTask extends abstract_1.PrizmAstTaskTemplate {
    constructor() {
        super(...arguments);
        this.type = 'comment-content';
    }
    run(node, payload, context) {
        const htmlContent = (0, html_stringify_1.prizmAstHtmlStringify)((node.children ?? []));
        if (htmlContent) {
            node.children = [
                {
                    type: 'comment',
                    comment: htmlContent,
                },
            ];
        }
        return { ...node };
    }
}
exports.PrizmCommentContentTemplateTask = PrizmCommentContentTemplateTask;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC1jb250ZW50LnRhc2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FzdC9zcmMvbGliL3Rhc2svdGVtcGxhdGUvY29tbWVudC1jb250ZW50L2NvbW1lbnQtY29udGVudC50YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDBDQUFtRDtBQUVuRCxpRUFBcUU7QUFHckUsTUFBYSwrQkFBZ0MsU0FBUSwrQkFBc0Q7SUFBM0c7O1FBQ1csU0FBSSxHQUFHLGlCQUFpQixDQUFDO0lBb0JwQyxDQUFDO0lBbEJRLEdBQUcsQ0FDUixJQUF1QixFQUN2QixPQUFnRCxFQUNoRCxPQUFnQztRQUVoQyxNQUFNLFdBQVcsR0FBRyxJQUFBLHNDQUFxQixFQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQXVCLENBQUMsQ0FBQztRQUV2RixJQUFJLFdBQVcsRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLEdBQUc7Z0JBQ2Q7b0JBQ0UsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsT0FBTyxFQUFFLFdBQVc7aUJBQ2Q7YUFDVCxDQUFDO1NBQ0g7UUFFRCxPQUFPLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0NBQ0Y7QUFyQkQsMEVBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVByaXptQ29tbWVudENvbnRlbnRUZW1wbGF0ZVRhc2ssIElQcml6bUNvbW1lbnRDb250ZW50VGVtcGxhdGVUYXNrUGF5bG9hZCB9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgUHJpem1Bc3RUZW1wbGF0ZUNvbnRleHQgfSBmcm9tICcuLi9tb2RlbCc7XG5pbXBvcnQgeyBQcml6bUFzdFRhc2tUZW1wbGF0ZSB9IGZyb20gJy4uL2Fic3RyYWN0JztcbmltcG9ydCB7IFByaXptVGVtcGxhdGVOb2RlIH0gZnJvbSAnLi4vdGFzayc7XG5pbXBvcnQgeyBwcml6bUFzdEh0bWxTdHJpbmdpZnkgfSBmcm9tICcuLi8uLi8uLi9odG1sL2h0bWwtc3RyaW5naWZ5JztcbmltcG9ydCB7IFByaXptQXN0SHRtbEl0ZW0gfSBmcm9tICcuLi8uLi8uLi9odG1sL3R5cGVzJztcblxuZXhwb3J0IGNsYXNzIFByaXptQ29tbWVudENvbnRlbnRUZW1wbGF0ZVRhc2sgZXh0ZW5kcyBQcml6bUFzdFRhc2tUZW1wbGF0ZTxJUHJpem1Db21tZW50Q29udGVudFRlbXBsYXRlVGFzaz4ge1xuICByZWFkb25seSB0eXBlID0gJ2NvbW1lbnQtY29udGVudCc7XG5cbiAgcHVibGljIHJ1bihcbiAgICBub2RlOiBQcml6bVRlbXBsYXRlTm9kZSxcbiAgICBwYXlsb2FkOiBJUHJpem1Db21tZW50Q29udGVudFRlbXBsYXRlVGFza1BheWxvYWQsXG4gICAgY29udGV4dDogUHJpem1Bc3RUZW1wbGF0ZUNvbnRleHRcbiAgKTogUHJpem1UZW1wbGF0ZU5vZGUge1xuICAgIGNvbnN0IGh0bWxDb250ZW50ID0gcHJpem1Bc3RIdG1sU3RyaW5naWZ5KChub2RlLmNoaWxkcmVuID8/IFtdKSBhcyBQcml6bUFzdEh0bWxJdGVtW10pO1xuXG4gICAgaWYgKGh0bWxDb250ZW50KSB7XG4gICAgICBub2RlLmNoaWxkcmVuID0gW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2NvbW1lbnQnLFxuICAgICAgICAgIGNvbW1lbnQ6IGh0bWxDb250ZW50LFxuICAgICAgICB9IGFzIGFueSxcbiAgICAgIF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgLi4ubm9kZSB9O1xuICB9XG59XG4iXX0=