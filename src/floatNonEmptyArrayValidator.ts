import { BaseNonEmptyArrayValidator } from './baseNonEmptyArrayValidator'
import { FloatValidator } from './floatValidator'

export const FloatNonEmptyArrayValidator = new BaseNonEmptyArrayValidator(FloatValidator) 