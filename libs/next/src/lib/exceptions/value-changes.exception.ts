export class ZuiValueChangesException extends Error {
    constructor() {
        super(`Control does not have valueChanges`);
    }
}
