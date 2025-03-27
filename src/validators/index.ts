import {validateUrl} from './url/index.js'
import {validateRegex} from './regex/index.js'
import {validateIPAddress} from './ip_address/index.js'

/**
 * Interface to define a Validator
 */
interface PayloadValidator {
  condition: boolean
  message?: string
}

/**
 * list of Validators to apply on Payload's Collection Field
 * @param validators
 */
export function validateField(validators: PayloadValidator[] | PayloadValidator): any {
  const _list = Array.isArray(validators) ? validators : [validators]
  for (let {condition, message} of _list) {
    if (!condition)
      return message || "Invalid input";
  }
  return null;
}


export {
  validateRegex,
  validateUrl,
  validateIPAddress,
}
