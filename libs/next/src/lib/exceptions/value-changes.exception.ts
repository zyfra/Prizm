export class PzmValueChangesException extends Error {
    constructor() {
        super(`Control does not have valueChanges`);
    }
}
