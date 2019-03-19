import { BaseNonEmptyArrayValidator } from './baseNonEmptyArrayValidator'
import { StringValidator } from './stringValidator'

export const StringNonEmptyArrayValidator = new BaseNonEmptyArrayValidator(StringValidator) 