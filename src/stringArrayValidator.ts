import { BaseArrayValidator } from './baseArrayValidator'
import { StringValidator } from './stringValidator'

export const StringArrayValidator = new BaseArrayValidator(StringValidator) 