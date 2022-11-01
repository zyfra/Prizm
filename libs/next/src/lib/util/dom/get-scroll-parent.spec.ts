import { pzmGetScrollParent } from './get-scroll-parent';

describe('pzmGetScrollParent', () => {
    it('There is no element', () => {
        expect(pzmGetScrollParent(null)).toEqual(null);
    });

    it('Should return element. Vertical is true', () => {
        const element = document.createElement('div');

        Object.defineProperty(element, 'scrollHeight', {value: 5});
        Object.defineProperty(element, 'clientHeight', {value: 0});

        expect(pzmGetScrollParent(element)).toEqual(element);
    });

    it('Should return element. Vertical is false', () => {
        const element = document.createElement('div');

        Object.defineProperty(element, 'scrollWidth', {value: 5});
        Object.defineProperty(element, 'clientWidth', {value: 0});

        expect(pzmGetScrollParent(element, false)).toEqual(element);
    });

    it('Should return parent element', () => {
        const parentElement = document.createElement('div');
        const childElement = document.createElement('div');

        parentElement.appendChild(childElement);

        Object.defineProperty(childElement, 'scrollWidth', {value: 0});
        Object.defineProperty(childElement, 'clientWidth', {value: 5});

        Object.defineProperty(parentElement, 'scrollWidth', {value: 5});
        Object.defineProperty(parentElement, 'clientWidth', {value: 0});

        expect(pzmGetScrollParent(childElement, false)).toEqual(parentElement);
    });
});
