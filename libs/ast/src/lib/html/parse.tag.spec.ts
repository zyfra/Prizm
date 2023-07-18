import { prizmParseTag } from './parse-tag';
import { PrizmAstHtmlItem } from './types';

describe('prizmParseTag', () => {
  test('should parse a regular tag with attributes and children', () => {
    const tag = '<div class="container" id="main"><p>Hello world!</p></div>';
    const expected = {
      type: 'tag',
      name: 'div',
      voidElement: false,
      attrs: { class: 'container', id: 'main' },
      children: [] as PrizmAstHtmlItem[],
    };
    const result = prizmParseTag(tag);
    expect(result).toEqual(expected);
  });

  test('should parse a self-closing tag', () => {
    const tag = '<img src="image.jpg" alt="My image"/>';
    const expected = {
      type: 'tag',
      name: 'img',
      voidElement: true,
      attrs: { src: 'image.jpg', alt: 'My image' },
      children: [],
    } as PrizmAstHtmlItem;
    const result = prizmParseTag(tag);
    expect(result).toEqual(expected);
  });

  test('should parse a comment tag', () => {
    const tag = '<!-- This is a comment -->';
    const expected = {
      type: 'comment',
      comment: ' This is a comment ',
    };
    const result = prizmParseTag(tag);
    expect(result).toEqual(expected);
  });

  test('should parse a tag with a single attribute and no value', () => {
    const tag = '<input disabled>';
    const expected = {
      type: 'tag',
      name: 'input',
      voidElement: true,
      attrs: { disabled: null },
      children: [],
    } as PrizmAstHtmlItem;
    const result = prizmParseTag(tag);
    expect(result).toEqual(expected);
  });

  test('should parse a tag with a single attribute and a quoted value', () => {
    const tag = '<input type="text">';
    const expected = {
      type: 'tag',
      name: 'input',
      voidElement: true,
      attrs: { type: 'text' },
      children: [],
    } as PrizmAstHtmlItem;
    const result = prizmParseTag(tag);
    expect(result).toEqual(expected);
  });

  test('should parse a tag with multiple attributes and quoted values', () => {
    const tag = '<a href="https://example.com" target="_blank">Example</a>';
    const expected = {
      type: 'tag',
      name: 'a',
      voidElement: false,
      attrs: { href: 'https://example.com', target: '_blank' },
      children: [] as PrizmAstHtmlItem[],
    };
    const result = prizmParseTag(tag);
    expect(result).toEqual(expected);
  });
});
