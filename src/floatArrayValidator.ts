import { BaseArrayValidator } from './baseArrayValidator'
import { FloatValidator } from './floatValidator'

export const FloatArrayValidator = new BaseArrayValidator(FloatValidator) 