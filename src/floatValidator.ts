import { BaseValidator } from './baseValidator'

// This class will determine if the input of #validate is a float
export class BaseFloatValidator extends BaseValidator {
    constructor() {
        super()
    }

    validate(input: any): boolean {
        return !Array.isArray(input) && (typeof input === 'number' || !Number.isNaN(Number.parseFloat(input)))
    }

    parse(input: string | number): number {
        return Number.parseFloat(input as string)
    }
}

export const FloatValidator = new BaseFloatValidator() 