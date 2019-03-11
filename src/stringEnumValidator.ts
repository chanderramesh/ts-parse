import { BaseValidator } from './baseValidator'

// Given a string enum at object creation,
// this class will determine if the input of #validate is an element in the enum
export class StringEnumValidator extends BaseValidator {
    private readonly values: Set<string>

    // We cannot enforce a type `enum`, unfortunately due to javascript limitations
    // so we settle for `Object` here
    constructor(input: Object) {
        super()
        this.values = new Set(Object.keys(input))
    }

    validate(input: any): boolean {
        return typeof input === 'string' && this.values.has(input)
    }

    parse(input: string): string {
        return input
    }
}