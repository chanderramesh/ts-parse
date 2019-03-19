import { BaseArrayValidator } from './baseArrayValidator'
import { BaseValidator } from './baseValidator'

export class BaseNonEmptyArrayValidator extends BaseArrayValidator {

    constructor(validator: BaseValidator) {
        super(validator)
    }

    validate(input: any): boolean {
        return super.validate(input) && input.length > 0
    }

    parse(input: Object): Object {
        return super.parse(input)
    }
}