import { BaseNonEmptyArrayValidator } from './baseNonEmptyArrayValidator'
import { IntValidator } from './intValidator'

export const IntNonEmptyArrayValidator = new BaseNonEmptyArrayValidator(IntValidator) 