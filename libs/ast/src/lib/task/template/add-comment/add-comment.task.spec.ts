import { PrizmAstTemplateContext } from '../model';
import { PrizmTemplateNode } from '../task';
import { PrizmAddCommentTemplateTask } from './add-comment.task';

describe('PrizmAddCommentTemplateTask', () => {
  const addCommentTask = new PrizmAddCommentTemplateTask();

  test('should add a comment to the node', () => {
    const node = {
      name: 'testNode',
      attrs: {
        attr: 'value',
      },
    } as unknown as PrizmTemplateNode;
    const payload = {
      attr: 'attr',
      comment: 'Test comment',
    };
    const context = {} as PrizmAstTemplateContext;

    const newNode = addCommentTask.run(node, payload, context);

    expect(newNode.children).toBeDefined();
    expect(newNode.children).toHaveLength(1);
    expect(newNode.children[0].type).toBe('comment');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(newNode.children[0].comment).toBe('Test comment');
  });

  test('should not add a comment if attribute is not provided', () => {
    const node = {
      name: 'testNode',
      attrs: {
        attr: 'value',
      },
    } as unknown as PrizmTemplateNode;
    const payload = {
      comment: 'Test comment',
    };
    const context = {} as PrizmAstTemplateContext;

    const newNode = addCommentTask.run(node, payload, context);

    expect(newNode.children).toBeUndefined();
  });
});
