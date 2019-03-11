import { BaseValidator } from './baseValidator'

// This class will determine if the input of #validate is a string
export class BaseDateValidator extends BaseValidator {
    constructor() {
        super()
    }

    validate(input: Object | boolean | number | string | Date): input is Date {
        return input instanceof Date || (typeof input === 'string' && !isNaN(new Date(input).getTime()))
    }

    parse(input: number | string | Date): Date {
        return new Date(input)
    }
}

export const DateValidator = new BaseDateValidator() 