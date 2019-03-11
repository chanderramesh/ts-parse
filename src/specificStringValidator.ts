import { BaseStringValidator } from './stringValidator'

// This class will determine if the input of #validate is a specific given string
export class SpecificStringValidator extends BaseStringValidator {
    private readonly str: string

    constructor(str: string) {
        super()
        this.str = str
    }

    validate(input: any): boolean {
        return super.validate(input) && this.str === input
    }

    parse(input: string): string {
        return input
    }
}