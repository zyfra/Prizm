import { PrizmTemplateNode, PrizmTemplateTask, PrizmTemplateTaskProcessor } from './task';

describe('PrizmTaskProcessor', () => {
  const tasks: PrizmTemplateTask[] = [
    {
      selector: 'testTask',
      tasks: [
        {
          type: 'change-name',
          payload: { name: 'changed' },
        },
      ],
      inputs: {
        'data-input': [
          {
            type: 'add-comment',
            payload: { comment: 'Test input comment' },
          },
        ],
      },
      outputs: {
        'data-output': [
          {
            type: 'add-comment',
            payload: { comment: 'Test output comment' },
          },
        ],
      },
    },
  ];
  const processor = new PrizmTemplateTaskProcessor(tasks);

  test('should process tasks on nodes', () => {
    const nodes: PrizmTemplateNode[] = [
      {
        name: 'testTask',
        attrs: {
          'data-input': null,
          'data-output': null,
        },
        type: 'tag',
        voidElement: false,
        children: [],
      },
    ];

    const processedNodes = processor.processTasks(nodes);

    expect(processedNodes[0].name).toBe('changed');
    expect(processedNodes[0].children).toHaveLength(2);
    expect(processedNodes[0].children[0].type).toBe('comment');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(processedNodes[0].children[0].comment).toBe('Test input comment');
    expect(processedNodes[0].children[1].type).toBe('comment');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(processedNodes[0].children[1].comment).toBe('Test output comment');
  });
});
