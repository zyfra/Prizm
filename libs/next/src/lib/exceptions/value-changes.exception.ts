export class PrizmValueChangesException extends Error {
    constructor() {
        super(`Control does not have valueChanges`);
    }
}
