import { PrizmNotSupportedTemplateTask } from './not-supported';
import { PrizmMoveToContentTemplateTask } from './move-to-content';
import { PrizmChangeNameTemplateTask } from './change-name';
import { PrizmAddCommentTemplateTask } from './add-comment';
import {
  prizmAstFindAttributeWithType,
  prizmAstGetAttrName,
  prizmAstGetTypeOfAttribute,
  prizmAstHasAttribute,
} from './util';
import { PrizmAddAttributeTemplateTask } from './add-attribute';
import { PrizmAstTemplateAttributeType, PrizmAstTemplateContext } from './model';
import { PrizmRenameTemplateTask } from './rename';
import { PrizmMoveContentToComponentTemplateTask } from './move-children-to-component';
import { PrizmRemoveAttributeTemplateTask } from './remove-attribute';
import { PrizmAddChildrenTemplateTask } from './add-children';
import { PrizmCommentContentTemplateTask } from './comment-content';

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
export class PrizmTemplateTaskProcessor {
  readonly defaultTasks = [
    new PrizmAddAttributeTemplateTask(),
    new PrizmAddChildrenTemplateTask(),
    new PrizmNotSupportedTemplateTask(),
    new PrizmMoveToContentTemplateTask(),
    new PrizmCommentContentTemplateTask(),
    new PrizmRemoveAttributeTemplateTask(),
    new PrizmRenameTemplateTask(),
    new PrizmAddCommentTemplateTask(),
    new PrizmChangeNameTemplateTask(),
    new PrizmMoveContentToComponentTemplateTask(),
  ];

  /**
   * @param {PrizmTemplateTask[]} tasks - Массив задач PrizmTemplateTask для обработки узлов.
   */
  constructor(private tasks: PrizmTemplateTask[]) {}

  private nodeNeedToChange(node: PrizmTemplateNode, task: PrizmTemplateTask): boolean {
    if (typeof task.selector === 'string') {
      return node.name === task.selector;
    }

    if (Array.isArray(task.selector)) {
      return (
        task.selector.find(item => {
          if (item.type === 'byAttr') {
            const result = Object.entries(item.attrs).map(([key, value]) => {
              const attrWithType = prizmAstFindAttributeWithType(key, node.attrs);

              if (attrWithType && (value === undefined || attrWithType.value === value)) return true;

              return false;
            });
            return !result.includes(false);
          }

          return false;
        }) && true
      );
    }

    return false;
  }

  private processActions(node: PrizmTemplateNode, task: PrizmTemplateTask): PrizmTemplateNode {
    if (this.nodeNeedToChange(node, task)) {
      let newNode: PrizmTemplateNode = { ...node };
      const defaultTasks = this.defaultTasks;
      task.tasks.forEach(action => {
        const task = defaultTasks.find(task => task.type === action.type);
        if (task) newNode = task.run(newNode, action.payload, this.generateContext(null, 'tasks'));
      });

      if (task.inputs)
        Object.entries(task.inputs).forEach(([key, actions]) => {
          if (
            !prizmAstHasAttribute(key, node.attrs, [
              PrizmAstTemplateAttributeType.input,
              PrizmAstTemplateAttributeType.inputVar,
              PrizmAstTemplateAttributeType.inputOutput,
            ])
          )
            return;
          actions.forEach(action => {
            const task = defaultTasks.find(task => task.type === action.type);
            if (task) newNode = task.run(newNode, action.payload, this.generateContext(key, 'inputs'));
          });
        });

      if (task.outputs)
        Object.entries(task.outputs).forEach(([key, actions]) => {
          if (
            !prizmAstHasAttribute(key, node.attrs, [
              PrizmAstTemplateAttributeType.output,
              PrizmAstTemplateAttributeType.inputOutput,
            ])
          )
            return;

          actions.forEach(action => {
            const task = defaultTasks.find(task => task.type === action.type);
            if (task) newNode = task.run(newNode, action.payload, this.generateContext(key, 'outputs'));
          });
        });

      node = newNode;
    }

    node.children = node.children?.map(childNode => this.processActions(childNode, task)) ?? [];

    return node;
  }

  /**
   * Обрабатывает массив узлов в соответствии с задачами.
   *
   * @param {any[]} obj - Массив узлов для обработки.
   * @returns {PrizmTemplateNode[]} Массив обработанных узлов.
   */
  public processTasks(obj: any[]): PrizmTemplateNode[] {
    return obj.map(node => {
      // Обработка действий задачи для узла
      for (const task of this.tasks) {
        node = this.processActions(node, task);
      }

      return node;
    });
  }

  public generateContext(
    key: string | null,
    runIn: PrizmAstTemplateContext['runIn']
  ): PrizmAstTemplateContext {
    return {
      attrName: key && prizmAstGetAttrName(key),
      originName: key,
      runIn,
      type: key && prizmAstGetTypeOfAttribute(key),
    };
  }
}
