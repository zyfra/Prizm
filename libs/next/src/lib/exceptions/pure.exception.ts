export class PrizmPureException extends Error {
    constructor() {
        super('pzmPure can only be used with functions or getters');
    }
}
