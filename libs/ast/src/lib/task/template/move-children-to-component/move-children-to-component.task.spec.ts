import { PrizmAstTemplateContext } from '../model';
import { PrizmTemplateNode } from '../task';
import { IPrizmMoveContentToComponentTemplateTaskPayload } from './model';
import { PrizmMoveContentToComponentTemplateTask } from './move-children-to-component.task';

describe('PrizmMoveContentToComponentTemplateTask', () => {
  let task: PrizmMoveContentToComponentTemplateTask;

  beforeEach(() => {
    task = new PrizmMoveContentToComponentTemplateTask();
  });

  test('should properly instantiate the task', () => {
    expect(task).toBeInstanceOf(PrizmMoveContentToComponentTemplateTask);
  });

  test('should move the content to the new component', () => {
    const node = {
      name: 'div',
      attrs: {
        class: 'example',
        'data-move': 'moved-component',
      },
      children: [
        {
          name: 'p',
          attrs: {},
          children: [],
        } as unknown as PrizmTemplateNode,
      ],
    } as unknown as PrizmTemplateNode;

    const payload: IPrizmMoveContentToComponentTemplateTaskPayload = {
      name: 'data-move',
      attrs: {
        id: 'moved-component',
      },
      children: [],
    };

    const context = {} as PrizmAstTemplateContext;

    const result = task.run(node, payload, context);

    expect(result).toEqual({
      name: 'div',
      attrs: {
        class: 'example',
        'data-move': 'moved-component',
      },
      children: [
        {
          name: 'data-move',
          attrs: {
            id: 'moved-component',
          },
          children: [
            {
              name: 'p',
              attrs: {},
              children: [],
            },
          ],
          type: 'tag',
          voidElement: false,
        },
      ],
    });
  });

  test('should return the original node if the name is not provided', () => {
    const node = {
      name: 'div',
      attrs: {
        class: 'example',
        'data-move': 'moved-component',
      },
      children: [
        {
          name: 'p',
          attrs: {},
          children: [],
        } as PrizmTemplateNode,
      ],
    } as unknown as PrizmTemplateNode;

    const payload: IPrizmMoveContentToComponentTemplateTaskPayload = {
      name: '',
      attrs: {
        id: 'moved-component',
      },
      children: [],
    };

    const context = {} as PrizmAstTemplateContext;

    const result = task.run(node, payload, context);

    expect(result).toEqual(node);
  });
});
