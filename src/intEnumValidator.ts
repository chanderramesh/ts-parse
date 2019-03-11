import { BaseValidator } from './baseValidator'
import { BaseIntValidator, IntValidator } from './intValidator'

// Given a float enum at object creation,
// this class will determine if the input of #validate is an element in the enum
export class IntEnumValidator extends BaseValidator {
    private readonly values: Set<number>
    private readonly intValidator: BaseIntValidator

    // We cannot enforce a type `enum`, unfortunately due to javascript limitations
    // so we settle for `Object` here
    constructor(input: Object) {
        super()
        this.values = new Set(Object.keys(input)
            .filter(key => typeof input[key] === 'number' && Number.isInteger(input[key]))
            .map(key => Number.parseInt(input[key])))
        this.intValidator = IntValidator
    }

    validate(input: any): boolean {
        return this.intValidator.validate(input) && this.values.has(Number.parseFloat(input))
    }

    parse(input: string | number): number {
        return Number.parseInt(input as string)
    }
}