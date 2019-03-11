import { BaseValidator } from './baseValidator'

// No-Op validator that allows anything
// Generally not to be used unless you have a _very_ good reason
export class BaseNoOpValidator extends BaseValidator {
    constructor() {
        super()
    }

    validate(input: any): boolean {
        return true
    }

    parse(input: string | number | boolean | Object): string | number | boolean | Object {
        return input
    }
}

export const NoOpValidator = new BaseNoOpValidator() 