import { prizmHtmlParse } from './html-parse';

describe('prizmHtmlParse', () => {
  it('should parse an empty string', () => {
    const html = '';
    const result = prizmHtmlParse(html);
    expect(result).toEqual([
      {
        content: '',
        type: 'text',
      },
    ]);
  });

  it('should parse a text node', () => {
    const html = 'Hello, world!';
    const result = prizmHtmlParse(html);
    expect(result).toEqual([{ type: 'text', content: 'Hello, world!' }]);
  });

  it('should parse a comment node', () => {
    const html = '<!-- This is a comment -->';
    const result = prizmHtmlParse(html);
    expect(result).toEqual([{ type: 'comment', comment: ' This is a comment ' }]);
  });

  it('should parse a void element', () => {
    const html = '<input type="text" disabled>';
    const result = prizmHtmlParse(html);
    expect(result).toEqual([
      {
        type: 'tag',
        name: 'input',
        attrs: { type: 'text', disabled: '' },
        voidElement: true,
        children: [],
      },
    ]);
  });

  it('should parse a non-void element with children', () => {
    const html = '<div id="container">Hello, world!</div>';
    const result = prizmHtmlParse(html);
    expect(result).toEqual([
      {
        type: 'tag',
        name: 'div',
        attrs: { id: 'container' },
        voidElement: false,
        children: [{ type: 'text', content: 'Hello, world!' }],
      },
    ]);
  });

  it('should parse nested elements', () => {
    const html = '<div><p>Hello, <span>world</span>!</p></div>';
    const result = prizmHtmlParse(html);
    expect(result).toEqual([
      {
        type: 'tag',
        name: 'div',
        voidElement: false,
        attrs: {},
        children: [
          {
            type: 'tag',
            name: 'p',
            voidElement: false,
            attrs: {},
            children: [
              { type: 'text', content: 'Hello, ' },
              {
                type: 'tag',
                name: 'span',
                voidElement: false,
                attrs: {},
                children: [{ type: 'text', content: 'world' }],
              },
              { type: 'text', content: '!' },
            ],
          },
        ],
      },
    ]);
  });
});
