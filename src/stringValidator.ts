import { BaseValidator } from './baseValidator'

// This class will determine if the input of #validate is a string
export class BaseStringValidator extends BaseValidator {
    constructor() {
        super()
    }

    validate(input: any): boolean {
        return typeof input === 'string'
    }

    parse(input: string): string {
        return input
    }
}

export const StringValidator = new BaseStringValidator()