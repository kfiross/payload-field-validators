import {validateField} from "../index.js";
import * as v from "valibot";
import {valibotCheck} from "../../utils/index.js";

/**
 * Wrapper function for Regex validation
 * @param regExp the regular expression to check
 * @param value the input to be checked
 * @param message message to shown if input is invalid
 */
export function validateRegex(regExp: RegExp, value: any, message?: string): any {
  return validateField({
    condition: valibotCheck(v.pipe(v.string(), v.regex(regExp)), value),
    message: message || "Invalid input",
  });
}
