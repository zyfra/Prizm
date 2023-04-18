import { PrizmNode } from '../task';
import { PrizmNotSupportedTemplateTask } from './not-supported.task';

describe('PrizmNotSupportedTemplateTask', () => {
  const notSupportedTask = new PrizmNotSupportedTemplateTask();

  test('should remove not supported attribute and add comment', () => {
    const node = {
      attrs: {
        notSupportedAttr: 'value',
        otherAttr: 'otherValue',
      },
    } as unknown as PrizmNode;
    const payload = {
      attr: 'notSupportedAttr',
    };
    const context: any = {
      originName: 'notSupportedAttr',
    };

    const newNode = notSupportedTask.run(node, payload, context);

    expect(newNode.attrs).not.toHaveProperty('notSupportedAttr');
    expect(newNode.attrs).toHaveProperty('otherAttr');
    expect(newNode.attrs['otherAttr']).toBe('otherValue');
    expect(newNode.children).toHaveLength(1);
    expect(newNode.children[0].type).toBe('comment');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(newNode.children[0].comment).toBe('TODO not supported attr <notSupportedAttr>');
  });
});
