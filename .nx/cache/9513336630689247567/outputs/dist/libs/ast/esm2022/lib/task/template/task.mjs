"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizmTemplateTaskProcessor = void 0;
const not_supported_1 = require("./not-supported");
const move_to_content_1 = require("./move-to-content");
const change_name_1 = require("./change-name");
const add_comment_1 = require("./add-comment");
const util_1 = require("./util");
const add_attribute_1 = require("./add-attribute");
const model_1 = require("./model");
const rename_1 = require("./rename");
const move_children_to_component_1 = require("./move-children-to-component");
const remove_attribute_1 = require("./remove-attribute");
const add_children_1 = require("./add-children");
const comment_content_1 = require("./comment-content");
const task_storage_1 = require("./task-storage");
const save_to_call_on_demand_1 = require("./save-to-call-on-demand");
const call_with_new_source_1 = require("./call-with-new-source");
const run_tasks_on_node_1 = require("./run-tasks-on-node");
/**
 * Класс для обработки узлов PrizmTemplateNode в соответствии с задачами PrizmTask.
 */
class PrizmTemplateTaskProcessor {
    /**
     * @param {PrizmTemplateTask[]} tasks - Массив задач PrizmTemplateTask для обработки узлов.
     */
    constructor(tasks) {
        this.tasks = tasks;
        this.storage = new task_storage_1.PrizmTemplateTaskStorage();
        this.defaultTasks = [
            new call_with_new_source_1.PrizmCallWithNewSourceTemplateTask(),
            new run_tasks_on_node_1.PrizmRunTasksOnNodeTemplateTask(),
            new add_attribute_1.PrizmAddAttributeTemplateTask(),
            new add_children_1.PrizmAddChildrenTemplateTask(),
            new not_supported_1.PrizmNotSupportedTemplateTask(),
            new move_to_content_1.PrizmMoveToContentTemplateTask(),
            new comment_content_1.PrizmCommentContentTemplateTask(),
            new remove_attribute_1.PrizmRemoveAttributeTemplateTask(),
            new save_to_call_on_demand_1.PrizmSaveToCallOnDemandTemplateTask(),
            new rename_1.PrizmRenameTemplateTask(),
            new add_comment_1.PrizmAddCommentTemplateTask(),
            new change_name_1.PrizmChangeNameTemplateTask(),
            new move_children_to_component_1.PrizmMoveContentToComponentTemplateTask(),
        ];
    }
    nodeNeedToChange(node, task) {
        if (typeof task.selector === 'string') {
            return node.name === task.selector;
        }
        if (Array.isArray(task.selector)) {
            return Boolean(task.selector.find(item => {
                if (item.type === 'byAttr') {
                    const result = Object.entries(item.attrs).map(([key, value]) => {
                        const attrWithType = (0, util_1.prizmAstFindAttributeWithType)(key, node.attrs);
                        if (attrWithType && (value === undefined || attrWithType.value === value))
                            return true;
                        return false;
                    });
                    return !result.includes(false);
                }
                return false;
            }) && true);
        }
        return false;
    }
    runAction(node, action, getCtx) {
        try {
            const task = this.defaultTasks.find(task => task.type === action.type);
            if (task)
                node = task.run(node, action.payload, getCtx({ task: task, sourceNode: node }));
        }
        catch (e) {
            console.error('Warning:prizm-template-task:runAction', e);
        }
        return node;
    }
    needToChange(obj, tasks = this.tasks) {
        if (!obj || !Array.isArray(obj)) {
            return false;
        }
        return !!obj.find(node => {
            // Обработка действий задачи для узла
            for (const task of this.tasks) {
                if (this.nodeNeedToChange(node, task))
                    return true;
            }
            return false;
        });
    }
    clear() {
        this.storage.clear();
    }
    processAction(node, task, newContext) {
        let newNode;
        if (this.nodeNeedToChange(node, task)) {
            newNode = { ...node };
            task.tasks.forEach(action => {
                newNode = this.runAction(newNode, action, ({ task, sourceNode }) => this.generateContext(null, 'tasks', sourceNode, task, newContext));
            });
            if (task.defaultInputs) {
                Object.entries(task.defaultInputs).forEach(([key, value]) => {
                    if (node.attrs[key] ||
                        node.attrs[`[${key}]`] ||
                        node.attrs[`[(${key})]`] ||
                        node.attrs[`([${key}])`])
                        return;
                    // if value is not string wrap key for template value
                    if (typeof value !== 'string') {
                        key = `[${key}]`;
                    }
                    node.attrs[key] = value;
                });
            }
            if (task.inputs)
                Object.entries(task.inputs).forEach(([key, actions]) => {
                    if (!(0, util_1.prizmAstHasAttribute)(key, node.attrs, [
                        model_1.PrizmAstTemplateAttributeType.input,
                        model_1.PrizmAstTemplateAttributeType.inputVar,
                        model_1.PrizmAstTemplateAttributeType.inputOutput,
                    ]))
                        return;
                    actions.forEach(action => {
                        newNode = this.runAction(newNode, action, ({ task, sourceNode }) => this.generateContext(key, 'inputs', sourceNode, task, newContext));
                    });
                });
            if (task.outputs)
                Object.entries(task.outputs).forEach(([key, actions]) => {
                    if (!(0, util_1.prizmAstHasAttribute)(key, node.attrs, [
                        model_1.PrizmAstTemplateAttributeType.output,
                        model_1.PrizmAstTemplateAttributeType.inputOutput,
                    ]))
                        return;
                    actions.forEach(action => {
                        newNode = this.runAction(newNode, action, ({ task, sourceNode }) => this.generateContext(key, 'outputs', sourceNode, task, newContext));
                    });
                });
            node = newNode;
        }
        node.children = node.children?.map(childNode => this.processAction(childNode, task, newContext)) ?? [];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (newNode)
            task.finishTasks?.forEach(action => {
                newNode = this.runAction(newNode, action, ({ task, sourceNode }) => this.generateContext(null, 'tasks', sourceNode, task, newContext));
            });
        return node;
    }
    /**
     * Обрабатывает массив узлов в соответствии с задачами.
     *
     * @param {any[]} obj - Массив узлов для обработки.
     * @returns {PrizmTemplateNode[]} Массив обработанных узлов.
     */
    processTasks(obj) {
        return obj.map(node => {
            // Обработка действий задачи для узла
            for (const task of this.tasks) {
                node = this.processAction(node, task, {});
            }
            return node;
        });
    }
    generateContext(key, runIn, sourceNode, task, newContext) {
        return {
            attrName: key && (0, util_1.prizmAstGetAttrName)(key),
            originName: key,
            runIn,
            sourceNode,
            storage: this.storage,
            task,
            processor: this,
            type: key && (0, util_1.prizmAstGetTypeOfAttribute)(key),
            ...(newContext ?? {}),
        };
    }
}
exports.PrizmTemplateTaskProcessor = PrizmTemplateTaskProcessor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYXN0L3NyYy9saWIvdGFzay90ZW1wbGF0ZS90YXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQUFnRTtBQUNoRSx1REFBbUU7QUFDbkUsK0NBQTREO0FBQzVELCtDQUE0RDtBQUM1RCxpQ0FLZ0I7QUFDaEIsbURBQWdFO0FBQ2hFLG1DQUFpRjtBQUNqRixxQ0FBbUQ7QUFDbkQsNkVBQXVGO0FBQ3ZGLHlEQUFzRTtBQUN0RSxpREFBOEQ7QUFDOUQsdURBQW9FO0FBQ3BFLGlEQUEwRDtBQUMxRCxxRUFBK0U7QUFDL0UsaUVBQTRFO0FBQzVFLDJEQUFzRTtBQTBDdEU7O0dBRUc7QUFDSCxNQUFhLDBCQUEwQjtJQWtCckM7O09BRUc7SUFDSCxZQUFvQixLQUEwQjtRQUExQixVQUFLLEdBQUwsS0FBSyxDQUFxQjtRQXBCckMsWUFBTyxHQUFHLElBQUksdUNBQXdCLEVBQUUsQ0FBQztRQUN6QyxpQkFBWSxHQUFHO1lBQ3RCLElBQUkseURBQWtDLEVBQUU7WUFDeEMsSUFBSSxtREFBK0IsRUFBRTtZQUNyQyxJQUFJLDZDQUE2QixFQUFFO1lBQ25DLElBQUksMkNBQTRCLEVBQUU7WUFDbEMsSUFBSSw2Q0FBNkIsRUFBRTtZQUNuQyxJQUFJLGdEQUE4QixFQUFFO1lBQ3BDLElBQUksaURBQStCLEVBQUU7WUFDckMsSUFBSSxtREFBZ0MsRUFBRTtZQUN0QyxJQUFJLDREQUFtQyxFQUFFO1lBQ3pDLElBQUksZ0NBQXVCLEVBQUU7WUFDN0IsSUFBSSx5Q0FBMkIsRUFBRTtZQUNqQyxJQUFJLHlDQUEyQixFQUFFO1lBQ2pDLElBQUksb0VBQXVDLEVBQUU7U0FDOUMsQ0FBQztJQUsrQyxDQUFDO0lBRTFDLGdCQUFnQixDQUFDLElBQXVCLEVBQUUsSUFBdUI7UUFDdkUsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1lB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WUFDZixLQUFLO1lBQ0wsVUFBVTtZQUNWLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixJQUFJO1lBQ0osU0FBUyxFQUFFLElBQUk7WUFDZixJQUFJLEVBQUUsR0FBRyxJQUFLLElBQUEsaUNBQTBCLEVBQUMsR0FBRyxDQUFTO1lBQ3JELEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1NBQ3RCLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUF0TUQsZ0VBc01DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpem1Ob3RTdXBwb3J0ZWRUZW1wbGF0ZVRhc2sgfSBmcm9tICcuL25vdC1zdXBwb3J0ZWQnO1xuaW1wb3J0IHsgUHJpem1Nb3ZlVG9Db250ZW50VGVtcGxhdGVUYXNrIH0gZnJvbSAnLi9tb3ZlLXRvLWNvbnRlbnQnO1xuaW1wb3J0IHsgUHJpem1DaGFuZ2VOYW1lVGVtcGxhdGVUYXNrIH0gZnJvbSAnLi9jaGFuZ2UtbmFtZSc7XG5pbXBvcnQgeyBQcml6bUFkZENvbW1lbnRUZW1wbGF0ZVRhc2sgfSBmcm9tICcuL2FkZC1jb21tZW50JztcbmltcG9ydCB7XG4gIHByaXptQXN0RmluZEF0dHJpYnV0ZVdpdGhUeXBlLFxuICBwcml6bUFzdEdldEF0dHJOYW1lLFxuICBwcml6bUFzdEdldFR5cGVPZkF0dHJpYnV0ZSxcbiAgcHJpem1Bc3RIYXNBdHRyaWJ1dGUsXG59IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBQcml6bUFkZEF0dHJpYnV0ZVRlbXBsYXRlVGFzayB9IGZyb20gJy4vYWRkLWF0dHJpYnV0ZSc7XG5pbXBvcnQgeyBQcml6bUFzdFRlbXBsYXRlQXR0cmlidXRlVHlwZSwgUHJpem1Bc3RUZW1wbGF0ZUNvbnRleHQgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IFByaXptUmVuYW1lVGVtcGxhdGVUYXNrIH0gZnJvbSAnLi9yZW5hbWUnO1xuaW1wb3J0IHsgUHJpem1Nb3ZlQ29udGVudFRvQ29tcG9uZW50VGVtcGxhdGVUYXNrIH0gZnJvbSAnLi9tb3ZlLWNoaWxkcmVuLXRvLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bVJlbW92ZUF0dHJpYnV0ZVRlbXBsYXRlVGFzayB9IGZyb20gJy4vcmVtb3ZlLWF0dHJpYnV0ZSc7XG5pbXBvcnQgeyBQcml6bUFkZENoaWxkcmVuVGVtcGxhdGVUYXNrIH0gZnJvbSAnLi9hZGQtY2hpbGRyZW4nO1xuaW1wb3J0IHsgUHJpem1Db21tZW50Q29udGVudFRlbXBsYXRlVGFzayB9IGZyb20gJy4vY29tbWVudC1jb250ZW50JztcbmltcG9ydCB7IFByaXptVGVtcGxhdGVUYXNrU3RvcmFnZSB9IGZyb20gJy4vdGFzay1zdG9yYWdlJztcbmltcG9ydCB7IFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrIH0gZnJvbSAnLi9zYXZlLXRvLWNhbGwtb24tZGVtYW5kJztcbmltcG9ydCB7IFByaXptQ2FsbFdpdGhOZXdTb3VyY2VUZW1wbGF0ZVRhc2sgfSBmcm9tICcuL2NhbGwtd2l0aC1uZXctc291cmNlJztcbmltcG9ydCB7IFByaXptUnVuVGFza3NPbk5vZGVUZW1wbGF0ZVRhc2sgfSBmcm9tICcuL3J1bi10YXNrcy1vbi1ub2RlJztcblxuLyoqXG4gKiDQotC40L8g0YPQt9C70LAgUHJpem0uINCh0L7QtNC10YDQttC40YIg0LDRgtGA0LjQsdGD0YLRiywg0LjQvNGPLCDRgtC40L8g0Lgg0LjQvdGE0L7RgNC80LDRhtC40Y4g0L4g0YLQvtC8LCDRj9Cy0LvRj9C10YLRgdGPINC70Lgg0Y3Qu9C10LzQtdC90YIg0L/Rg9GB0YLRi9C8LlxuICovXG5leHBvcnQgdHlwZSBQcml6bVRlbXBsYXRlTm9kZSA9IHtcbiAgYXR0cnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvbnRlbnQ/OiB1bmtub3duO1xuICBjaGlsZHJlbjogUHJpem1UZW1wbGF0ZU5vZGVbXTtcblxuICB0eXBlOiAnY29tbWVudCcgfCAndGFnJyB8ICd0ZXh0JztcbiAgdm9pZEVsZW1lbnQ6IGJvb2xlYW47XG59O1xuXG4vKipcbiAqINCi0LjQvyDQtNC10LnRgdGC0LLQuNGPINC30LDQtNCw0YfQuCBQcml6bS4g0KHQvtC00LXRgNC20LjRgiDRgtC40L8g0LTQtdC50YHRgtCy0LjRjyDQuCDQt9C90LDRh9C10L3QuNC1INC00LvRjyDQv9GA0LjQvNC10L3QtdC90LjRjyDQtNC10LnRgdGC0LLQuNGPLlxuICovXG5leHBvcnQgdHlwZSBUUHJpem1UZW1wbGF0ZVRhc2tBY3Rpb248VCA9IGFueT4gPSB7XG4gIHR5cGU6IHN0cmluZztcbiAgcGF5bG9hZD86IFQ7XG59O1xuXG4vKipcbiAqINCi0LjQvyDQt9Cw0LTQsNGH0LggUHJpem0uINCh0L7QtNC10YDQttC40YIg0LjQvNGPINC30LDQtNCw0YfQuCwg0YHQtdC70LXQutGC0L7RgCDQtNC10LnRgdGC0LLQuNC5LCDQstGF0L7QtNC90YvQtSDQsNGC0YDQuNCx0YPRgtGLINC4INCy0YvRhdC+0LTQvdGL0LUg0LDRgtGA0LjQsdGD0YLRiy5cbiAqL1xuZXhwb3J0IHR5cGUgUHJpem1UZW1wbGF0ZVRhc2sgPSB7XG4gIHNlbGVjdG9yOiBQcml6bVRlbXBsYXRlU2VsZWN0b3I7XG4gIHRhc2tzOiBUUHJpem1UZW1wbGF0ZVRhc2tBY3Rpb25bXTtcbiAgZmluaXNoVGFza3M/OiBUUHJpem1UZW1wbGF0ZVRhc2tBY3Rpb25bXTtcbiAgZGVmYXVsdElucHV0cz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBpbnB1dHM6IFJlY29yZDxzdHJpbmcsIFRQcml6bVRlbXBsYXRlVGFza0FjdGlvbltdPjtcbiAgb3V0cHV0czogUmVjb3JkPHN0cmluZywgVFByaXptVGVtcGxhdGVUYXNrQWN0aW9uW10+O1xufTtcblxuZXhwb3J0IHR5cGUgUHJpem1UZW1wbGF0ZVNlbGVjdG9yID0gc3RyaW5nIHwgUHJpem1UZW1wbGF0ZVNlbGVjdG9yQnlBdHRyW107XG5cbmV4cG9ydCB0eXBlIFByaXptVGVtcGxhdGVTZWxlY3RvckJ5QXR0ciA9IHtcbiAgdHlwZTogJ2J5QXR0cic7XG4gIGF0dHJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbn07XG5cbi8qKlxuICog0JrQu9Cw0YHRgSDQtNC70Y8g0L7QsdGA0LDQsdC+0YLQutC4INGD0LfQu9C+0LIgUHJpem1UZW1wbGF0ZU5vZGUg0LIg0YHQvtC+0YLQstC10YLRgdGC0LLQuNC4INGBINC30LDQtNCw0YfQsNC80LggUHJpem1UYXNrLlxuICovXG5leHBvcnQgY2xhc3MgUHJpem1UZW1wbGF0ZVRhc2tQcm9jZXNzb3Ige1xuICByZWFkb25seSBzdG9yYWdlID0gbmV3IFByaXptVGVtcGxhdGVUYXNrU3RvcmFnZSgpO1xuICByZWFkb25seSBkZWZhdWx0VGFza3MgPSBbXG4gICAgbmV3IFByaXptQ2FsbFdpdGhOZXdTb3VyY2VUZW1wbGF0ZVRhc2soKSxcbiAgICBuZXcgUHJpem1SdW5UYXNrc09uTm9kZVRlbXBsYXRlVGFzaygpLFxuICAgIG5ldyBQcml6bUFkZEF0dHJpYnV0ZVRlbXBsYXRlVGFzaygpLFxuICAgIG5ldyBQcml6bUFkZENoaWxkcmVuVGVtcGxhdGVUYXNrKCksXG4gICAgbmV3IFByaXptTm90U3VwcG9ydGVkVGVtcGxhdGVUYXNrKCksXG4gICAgbmV3IFByaXptTW92ZVRvQ29udGVudFRlbXBsYXRlVGFzaygpLFxuICAgIG5ldyBQcml6bUNvbW1lbnRDb250ZW50VGVtcGxhdGVUYXNrKCksXG4gICAgbmV3IFByaXptUmVtb3ZlQXR0cmlidXRlVGVtcGxhdGVUYXNrKCksXG4gICAgbmV3IFByaXptU2F2ZVRvQ2FsbE9uRGVtYW5kVGVtcGxhdGVUYXNrKCksXG4gICAgbmV3IFByaXptUmVuYW1lVGVtcGxhdGVUYXNrKCksXG4gICAgbmV3IFByaXptQWRkQ29tbWVudFRlbXBsYXRlVGFzaygpLFxuICAgIG5ldyBQcml6bUNoYW5nZU5hbWVUZW1wbGF0ZVRhc2soKSxcbiAgICBuZXcgUHJpem1Nb3ZlQ29udGVudFRvQ29tcG9uZW50VGVtcGxhdGVUYXNrKCksXG4gIF07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UHJpem1UZW1wbGF0ZVRhc2tbXX0gdGFza3MgLSDQnNCw0YHRgdC40LIg0LfQsNC00LDRhyBQcml6bVRlbXBsYXRlVGFzayDQtNC70Y8g0L7QsdGA0LDQsdC+0YLQutC4INGD0LfQu9C+0LIuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhc2tzOiBQcml6bVRlbXBsYXRlVGFza1tdKSB7fVxuXG4gIHByaXZhdGUgbm9kZU5lZWRUb0NoYW5nZShub2RlOiBQcml6bVRlbXBsYXRlTm9kZSwgdGFzazogUHJpem1UZW1wbGF0ZVRhc2spOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIHRhc2suc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gbm9kZS5uYW1lID09PSB0YXNrLnNlbGVjdG9yO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHRhc2suc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbihcbiAgICAgICAgdGFzay5zZWxlY3Rvci5maW5kKGl0ZW0gPT4ge1xuICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdieUF0dHInKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBPYmplY3QuZW50cmllcyhpdGVtLmF0dHJzKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhdHRyV2l0aFR5cGUgPSBwcml6bUFzdEZpbmRBdHRyaWJ1dGVXaXRoVHlwZShrZXksIG5vZGUuYXR0cnMpO1xuXG4gICAgICAgICAgICAgIGlmIChhdHRyV2l0aFR5cGUgJiYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgYXR0cldpdGhUeXBlLnZhbHVlID09PSB2YWx1ZSkpIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuICFyZXN1bHQuaW5jbHVkZXMoZmFsc2UpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSkgJiYgdHJ1ZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgcnVuQWN0aW9uKFxuICAgIG5vZGU6IFByaXptVGVtcGxhdGVOb2RlLFxuICAgIGFjdGlvbjogVFByaXptVGVtcGxhdGVUYXNrQWN0aW9uLFxuICAgIGdldEN0eDogKGN0eDogUGljazxQcml6bUFzdFRlbXBsYXRlQ29udGV4dCwgJ3Rhc2snIHwgJ3NvdXJjZU5vZGUnPikgPT4gUHJpem1Bc3RUZW1wbGF0ZUNvbnRleHRcbiAgKTogUHJpem1UZW1wbGF0ZU5vZGUge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0YXNrID0gdGhpcy5kZWZhdWx0VGFza3MuZmluZCh0YXNrID0+IHRhc2sudHlwZSA9PT0gYWN0aW9uLnR5cGUpO1xuICAgICAgaWYgKHRhc2spIG5vZGUgPSB0YXNrLnJ1bihub2RlLCBhY3Rpb24ucGF5bG9hZCwgZ2V0Q3R4KHsgdGFzazogdGFzayBhcyBhbnksIHNvdXJjZU5vZGU6IG5vZGUgfSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1dhcm5pbmc6cHJpem0tdGVtcGxhdGUtdGFzazpydW5BY3Rpb24nLCBlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwdWJsaWMgbmVlZFRvQ2hhbmdlKG9iajogYW55W10sIHRhc2tzOiBQcml6bVRlbXBsYXRlVGFza1tdID0gdGhpcy50YXNrcyk6IGJvb2xlYW4ge1xuICAgIGlmICghb2JqIHx8ICFBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuICEhb2JqLmZpbmQobm9kZSA9PiB7XG4gICAgICAvLyDQntCx0YDQsNCx0L7RgtC60LAg0LTQtdC50YHRgtCy0LjQuSDQt9Cw0LTQsNGH0Lgg0LTQu9GPINGD0LfQu9CwXG4gICAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGhpcy50YXNrcykge1xuICAgICAgICBpZiAodGhpcy5ub2RlTmVlZFRvQ2hhbmdlKG5vZGUsIHRhc2spKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhcigpIHtcbiAgICB0aGlzLnN0b3JhZ2UuY2xlYXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBwcm9jZXNzQWN0aW9uKFxuICAgIG5vZGU6IFByaXptVGVtcGxhdGVOb2RlLFxuICAgIHRhc2s6IFByaXptVGVtcGxhdGVUYXNrLFxuICAgIG5ld0NvbnRleHQ6IFBhcnRpYWw8UHJpem1Bc3RUZW1wbGF0ZUNvbnRleHQ+XG4gICk6IFByaXptVGVtcGxhdGVOb2RlIHtcbiAgICBsZXQgbmV3Tm9kZTogUHJpem1UZW1wbGF0ZU5vZGU7XG4gICAgaWYgKHRoaXMubm9kZU5lZWRUb0NoYW5nZShub2RlLCB0YXNrKSkge1xuICAgICAgbmV3Tm9kZSA9IHsgLi4ubm9kZSB9O1xuICAgICAgdGFzay50YXNrcy5mb3JFYWNoKGFjdGlvbiA9PiB7XG4gICAgICAgIG5ld05vZGUgPSB0aGlzLnJ1bkFjdGlvbihuZXdOb2RlLCBhY3Rpb24sICh7IHRhc2ssIHNvdXJjZU5vZGUgfSkgPT5cbiAgICAgICAgICB0aGlzLmdlbmVyYXRlQ29udGV4dChudWxsLCAndGFza3MnLCBzb3VyY2VOb2RlLCB0YXNrIGFzIGFueSwgbmV3Q29udGV4dClcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGFzay5kZWZhdWx0SW5wdXRzKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRhc2suZGVmYXVsdElucHV0cykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbm9kZS5hdHRyc1trZXldIHx8XG4gICAgICAgICAgICBub2RlLmF0dHJzW2BbJHtrZXl9XWBdIHx8XG4gICAgICAgICAgICBub2RlLmF0dHJzW2BbKCR7a2V5fSldYF0gfHxcbiAgICAgICAgICAgIG5vZGUuYXR0cnNbYChbJHtrZXl9XSlgXVxuICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAvLyBpZiB2YWx1ZSBpcyBub3Qgc3RyaW5nIHdyYXAga2V5IGZvciB0ZW1wbGF0ZSB2YWx1ZVxuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBrZXkgPSBgWyR7a2V5fV1gO1xuICAgICAgICAgIH1cbiAgICAgICAgICBub2RlLmF0dHJzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGFzay5pbnB1dHMpXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRhc2suaW5wdXRzKS5mb3JFYWNoKChba2V5LCBhY3Rpb25zXSkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFwcml6bUFzdEhhc0F0dHJpYnV0ZShrZXksIG5vZGUuYXR0cnMsIFtcbiAgICAgICAgICAgICAgUHJpem1Bc3RUZW1wbGF0ZUF0dHJpYnV0ZVR5cGUuaW5wdXQsXG4gICAgICAgICAgICAgIFByaXptQXN0VGVtcGxhdGVBdHRyaWJ1dGVUeXBlLmlucHV0VmFyLFxuICAgICAgICAgICAgICBQcml6bUFzdFRlbXBsYXRlQXR0cmlidXRlVHlwZS5pbnB1dE91dHB1dCxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIGFjdGlvbnMuZm9yRWFjaChhY3Rpb24gPT4ge1xuICAgICAgICAgICAgbmV3Tm9kZSA9IHRoaXMucnVuQWN0aW9uKG5ld05vZGUsIGFjdGlvbiwgKHsgdGFzaywgc291cmNlTm9kZSB9KSA9PlxuICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ29udGV4dChrZXksICdpbnB1dHMnLCBzb3VyY2VOb2RlLCB0YXNrIGFzIGFueSwgbmV3Q29udGV4dClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICBpZiAodGFzay5vdXRwdXRzKVxuICAgICAgICBPYmplY3QuZW50cmllcyh0YXNrLm91dHB1dHMpLmZvckVhY2goKFtrZXksIGFjdGlvbnNdKSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXByaXptQXN0SGFzQXR0cmlidXRlKGtleSwgbm9kZS5hdHRycywgW1xuICAgICAgICAgICAgICBQcml6bUFzdFRlbXBsYXRlQXR0cmlidXRlVHlwZS5vdXRwdXQsXG4gICAgICAgICAgICAgIFByaXptQXN0VGVtcGxhdGVBdHRyaWJ1dGVUeXBlLmlucHV0T3V0cHV0LFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICBhY3Rpb25zLmZvckVhY2goYWN0aW9uID0+IHtcbiAgICAgICAgICAgIG5ld05vZGUgPSB0aGlzLnJ1bkFjdGlvbihuZXdOb2RlLCBhY3Rpb24sICh7IHRhc2ssIHNvdXJjZU5vZGUgfSkgPT5cbiAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUNvbnRleHQoa2V5LCAnb3V0cHV0cycsIHNvdXJjZU5vZGUsIHRhc2sgYXMgYW55LCBuZXdDb250ZXh0KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgIG5vZGUgPSBuZXdOb2RlO1xuICAgIH1cblxuICAgIG5vZGUuY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuPy5tYXAoY2hpbGROb2RlID0+IHRoaXMucHJvY2Vzc0FjdGlvbihjaGlsZE5vZGUsIHRhc2ssIG5ld0NvbnRleHQpKSA/PyBbXTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKG5ld05vZGUpXG4gICAgICB0YXNrLmZpbmlzaFRhc2tzPy5mb3JFYWNoKGFjdGlvbiA9PiB7XG4gICAgICAgIG5ld05vZGUgPSB0aGlzLnJ1bkFjdGlvbihuZXdOb2RlLCBhY3Rpb24sICh7IHRhc2ssIHNvdXJjZU5vZGUgfSkgPT5cbiAgICAgICAgICB0aGlzLmdlbmVyYXRlQ29udGV4dChudWxsLCAndGFza3MnLCBzb3VyY2VOb2RlLCB0YXNrIGFzIGFueSwgbmV3Q29udGV4dClcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICAvKipcbiAgICog0J7QsdGA0LDQsdCw0YLRi9Cy0LDQtdGCINC80LDRgdGB0LjQsiDRg9C30LvQvtCyINCyINGB0L7QvtGC0LLQtdGC0YHRgtCy0LjQuCDRgSDQt9Cw0LTQsNGH0LDQvNC4LlxuICAgKlxuICAgKiBAcGFyYW0ge2FueVtdfSBvYmogLSDQnNCw0YHRgdC40LIg0YPQt9C70L7QsiDQtNC70Y8g0L7QsdGA0LDQsdC+0YLQutC4LlxuICAgKiBAcmV0dXJucyB7UHJpem1UZW1wbGF0ZU5vZGVbXX0g0JzQsNGB0YHQuNCyINC+0LHRgNCw0LHQvtGC0LDQvdC90YvRhSDRg9C30LvQvtCyLlxuICAgKi9cbiAgcHVibGljIHByb2Nlc3NUYXNrcyhvYmo6IGFueVtdKTogUHJpem1UZW1wbGF0ZU5vZGVbXSB7XG4gICAgcmV0dXJuIG9iai5tYXAobm9kZSA9PiB7XG4gICAgICAvLyDQntCx0YDQsNCx0L7RgtC60LAg0LTQtdC50YHRgtCy0LjQuSDQt9Cw0LTQsNGH0Lgg0LTQu9GPINGD0LfQu9CwXG4gICAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGhpcy50YXNrcykge1xuICAgICAgICBub2RlID0gdGhpcy5wcm9jZXNzQWN0aW9uKG5vZGUsIHRhc2ssIHt9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGVDb250ZXh0KFxuICAgIGtleTogc3RyaW5nIHwgbnVsbCxcbiAgICBydW5JbjogUHJpem1Bc3RUZW1wbGF0ZUNvbnRleHRbJ3J1bkluJ10sXG4gICAgc291cmNlTm9kZTogUHJpem1UZW1wbGF0ZU5vZGUsXG4gICAgdGFzazogUHJpem1UZW1wbGF0ZVRhc2ssXG4gICAgbmV3Q29udGV4dDogUGFydGlhbDxQcml6bUFzdFRlbXBsYXRlQ29udGV4dD5cbiAgKTogUHJpem1Bc3RUZW1wbGF0ZUNvbnRleHQge1xuICAgIHJldHVybiB7XG4gICAgICBhdHRyTmFtZToga2V5ICYmIHByaXptQXN0R2V0QXR0ck5hbWUoa2V5KSxcbiAgICAgIG9yaWdpbk5hbWU6IGtleSxcbiAgICAgIHJ1bkluLFxuICAgICAgc291cmNlTm9kZSxcbiAgICAgIHN0b3JhZ2U6IHRoaXMuc3RvcmFnZSxcbiAgICAgIHRhc2ssXG4gICAgICBwcm9jZXNzb3I6IHRoaXMsXG4gICAgICB0eXBlOiBrZXkgJiYgKHByaXptQXN0R2V0VHlwZU9mQXR0cmlidXRlKGtleSkgYXMgYW55KSxcbiAgICAgIC4uLihuZXdDb250ZXh0ID8/IHt9KSxcbiAgICB9O1xuICB9XG59XG4iXX0=