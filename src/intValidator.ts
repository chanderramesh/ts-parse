import { BaseValidator } from './baseValidator'

// This class will determine if the input of #validate is an int
export class BaseIntValidator extends BaseValidator {
    constructor() {
        super()
    }

    validate(input: any): boolean {
        return (typeof input === 'number' || typeof input === 'string') && Number.isInteger(Number.parseFloat(input as string))
    }

    parse(input: string | number): number {
        return Number.parseInt(input as string)
    }
}

// tslint:disable-next-line:variable-name
export const IntValidator = new BaseIntValidator() 