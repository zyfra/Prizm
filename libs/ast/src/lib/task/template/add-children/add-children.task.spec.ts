import { PrizmAstTemplateContext } from '../model';
import { PrizmTemplateNode } from '../task';
import { IPrizmAddChildrenTemplateTaskPayload } from './model';
import { PrizmAddChildrenTemplateTask } from './add-children.task';

describe('PrizmMoveContentToComponentTemplateTask', () => {
  let task: PrizmAddChildrenTemplateTask;

  beforeEach(() => {
    task = new PrizmAddChildrenTemplateTask();
  });

  test('should properly instantiate the task', () => {
    expect(task).toBeInstanceOf(PrizmAddChildrenTemplateTask);
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

    const payload: IPrizmAddChildrenTemplateTaskPayload = {
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
        } as any as PrizmTemplateNode,
      ],
    } as unknown as PrizmTemplateNode;

    const payload: IPrizmAddChildrenTemplateTaskPayload = {
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
