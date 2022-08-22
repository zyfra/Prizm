import {zuiIsCurrentTarget} from './is-current-target';

describe('zuiIsCurrentTarget', () => {
    it('Target is equal to currentTarget', () => {
        const event = new MouseEvent('click');

        Object.defineProperty(event, 'target', {value: '<button>'});
        Object.defineProperty(event, 'currentTarget', {value: '<button>'});

        expect(zuiIsCurrentTarget(event)).toEqual(true);
    });
});
