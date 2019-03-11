import { BaseArrayValidator } from './baseArrayValidator'
import { IntValidator } from './intValidator'

export const IntArrayValidator = new BaseArrayValidator(IntValidator) 