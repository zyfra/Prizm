export class PzmPureException extends Error {
    constructor() {
        super('zuiPure can only be used with functions or getters');
    }
}
