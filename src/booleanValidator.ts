import { BaseValidator } from './baseValidator'

// This class will determine if the input of #validate is a boolean
export class BaseBooleanValidator extends BaseValidator {
    constructor() {
        super()
    }

    validate(input: any): boolean {
        return (typeof input === 'string' && (input === 'false' || input === 'true'))
            || typeof input === 'boolean'
    }

    parse(input: string | boolean): boolean {
        // Some mobile frameworks send 'true' instead of true
        return input === true || input === 'true'
    }
}

export const BooleanValidator = new BaseBooleanValidator()