import { BaseValidator } from './baseValidator'
import { BaseFloatValidator, FloatValidator } from './floatValidator'

// Given a float enum at object creation,
// this class will determine if the input of #validate is an element in the enum
export class FloatEnumValidator extends BaseValidator {
    private readonly values: Set<number>
    private readonly floatValidator: BaseFloatValidator

    // We cannot enforce a type `enum`, unfortunately due to javascript limitations
    // so we settle for `Object` here
    constructor(input: Object) {
        super()
        this.values = new Set(Object.keys(input)
            .filter(key => typeof input[key] === 'number')
            .map(key => Number.parseFloat(input[key])))
        this.floatValidator = FloatValidator
    }

    validate(input: any): boolean {
        return this.floatValidator.validate(input) && this.values.has(Number.parseFloat(input))
    }

    parse(input: string | number): number {
        return Number.parseFloat(input as string)
    }
}