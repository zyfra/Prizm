import {prizmIsCurrentTarget} from './is-current-target';

describe('prizmIsCurrentTarget', () => {
    it('Target is equal to currentTarget', () => {
        const event = new MouseEvent('click');

        Object.defineProperty(event, 'target', {value: '<button>'});
        Object.defineProperty(event, 'currentTarget', {value: '<button>'});

        expect(prizmIsCurrentTarget(event)).toEqual(true);
    });
});
