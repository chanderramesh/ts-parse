import { BaseValidator } from './baseValidator'

// Given a validator, this class applies the validator
// to each element of a given array to determine if
// the input is a valid array
export class BaseArrayValidator extends BaseValidator {
    private readonly validator: BaseValidator

    constructor(validator: BaseValidator) {
        super()
        this.validator = validator
    }

    validate(input: any): boolean {
        return Array.isArray(input) && input.every(element => this.validator.validate(element))
    }

    parse(input: Object): Object {
        if (Array.isArray(input)) {
            return input.map(element => this.validator.parse(element))
        }
        return null
    }
} 