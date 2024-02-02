import { PrizmNotSupportedTemplateTask } from './not-supported';
import { PrizmMoveToContentTemplateTask } from './move-to-content';
import { PrizmChangeNameTemplateTask } from './change-name';
import { PrizmAddCommentTemplateTask } from './add-comment';
import { PrizmAddAttributeTemplateTask } from './add-attribute';
import { PrizmAstTemplateContext } from './model';
import { PrizmRenameTemplateTask } from './rename';
import { PrizmMoveContentToComponentTemplateTask } from './move-children-to-component';
import { PrizmRemoveAttributeTemplateTask } from './remove-attribute';
import { PrizmAddChildrenTemplateTask } from './add-children';
import { PrizmCommentContentTemplateTask } from './comment-content';
import { PrizmTemplateTaskStorage } from './task-storage';
import { PrizmSaveToCallOnDemandTemplateTask } from './save-to-call-on-demand';
import { PrizmCallWithNewSourceTemplateTask } from './call-with-new-source';
import { PrizmRunTasksOnNodeTemplateTask } from './run-tasks-on-node';
/**
 * Тип узла Prizm. Содержит атрибуты, имя, тип и информацию о том, является ли элемент пустым.
 */
export type PrizmTemplateNode = {
    attrs: Record<string, unknown>;
    name: string;
    content?: unknown;
    children: PrizmTemplateNode[];
    type: 'comment' | 'tag' | 'text';
    voidElement: boolean;
};
/**
 * Тип действия задачи Prizm. Содержит тип действия и значение для применения действия.
 */
export type TPrizmTemplateTaskAction<T = any> = {
    type: string;
    payload?: T;
};
/**
 * Тип задачи Prizm. Содержит имя задачи, селектор действий, входные атрибуты и выходные атрибуты.
 */
export type PrizmTemplateTask = {
    selector: PrizmTemplateSelector;
    tasks: TPrizmTemplateTaskAction[];
    finishTasks?: TPrizmTemplateTaskAction[];
    defaultInputs?: Record<string, unknown>;
    inputs: Record<string, TPrizmTemplateTaskAction[]>;
    outputs: Record<string, TPrizmTemplateTaskAction[]>;
};
export type PrizmTemplateSelector = string | PrizmTemplateSelectorByAttr[];
export type PrizmTemplateSelectorByAttr = {
    type: 'byAttr';
    attrs: Record<string, unknown>;
};
/**
 * Класс для обработки узлов PrizmTemplateNode в соответствии с задачами PrizmTask.
 */
export declare class PrizmTemplateTaskProcessor {
    private tasks;
    readonly storage: PrizmTemplateTaskStorage;
    readonly defaultTasks: (PrizmNotSupportedTemplateTask | PrizmMoveToContentTemplateTask | PrizmChangeNameTemplateTask | PrizmAddCommentTemplateTask | PrizmAddAttributeTemplateTask | PrizmRenameTemplateTask | PrizmMoveContentToComponentTemplateTask | PrizmRemoveAttributeTemplateTask | PrizmAddChildrenTemplateTask | PrizmCommentContentTemplateTask | PrizmSaveToCallOnDemandTemplateTask | PrizmCallWithNewSourceTemplateTask | PrizmRunTasksOnNodeTemplateTask)[];
    /**
     * @param {PrizmTemplateTask[]} tasks - Массив задач PrizmTemplateTask для обработки узлов.
     */
    constructor(tasks: PrizmTemplateTask[]);
    private nodeNeedToChange;
    runAction(node: PrizmTemplateNode, action: TPrizmTemplateTaskAction, getCtx: (ctx: Pick<PrizmAstTemplateContext, 'task' | 'sourceNode'>) => PrizmAstTemplateContext): PrizmTemplateNode;
    needToChange(obj: any[], tasks?: PrizmTemplateTask[]): boolean;
    clear(): void;
    processAction(node: PrizmTemplateNode, task: PrizmTemplateTask, newContext: Partial<PrizmAstTemplateContext>): PrizmTemplateNode;
    /**
     * Обрабатывает массив узлов в соответствии с задачами.
     *
     * @param {any[]} obj - Массив узлов для обработки.
     * @returns {PrizmTemplateNode[]} Массив обработанных узлов.
     */
    processTasks(obj: any[]): PrizmTemplateNode[];
    generateContext(key: string | null, runIn: PrizmAstTemplateContext['runIn'], sourceNode: PrizmTemplateNode, task: PrizmTemplateTask, newContext: Partial<PrizmAstTemplateContext>): PrizmAstTemplateContext;
}
