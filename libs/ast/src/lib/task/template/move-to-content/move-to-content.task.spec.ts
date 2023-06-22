import { PrizmAstTemplateContext } from '../model';
import { PrizmTemplateNode } from '../task';
import { PrizmMoveToContentTemplateTask } from './move-to-content.task';

describe('PrizmMoveToContentTemplateTask', () => {
  const moveToContentTask = new PrizmMoveToContentTemplateTask();

  test('should move attribute value to content', () => {
    const node = {
      attrs: {
        attrToMove: 'contentValue',
        otherAttr: 'otherValue',
      },
    } as unknown as PrizmTemplateNode;
    const payload = {
      attr: 'attrToMove',
    };
    const context = {
      originName: 'attrToMove',
    } as unknown as PrizmAstTemplateContext;

    const newNode = moveToContentTask.run(node, payload, context);

    expect(newNode.attrs).not.toHaveProperty('attrToMove');
    expect(newNode.attrs).toHaveProperty('otherAttr');
    expect(newNode.attrs['otherAttr']).toBe('otherValue');
    expect(newNode.children).toHaveLength(1);
    expect(newNode.children[0].type).toBe('text');
    expect(newNode.children[0].content).toBe('contentValue');
  });
});
