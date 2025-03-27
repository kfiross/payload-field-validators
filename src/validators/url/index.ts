import {validateField} from "../index.js";
import * as v from "valibot";
import {valibotCheck} from "../../utils/index.js";

/**
 * Wrapper function for URL validation
 * @param value the input to be checked
 * @param message message to shown if input is invalid
 */
export function validateUrl(value: any, message?: string): any {
  return validateField({
    condition: valibotCheck(v.pipe(v.string(), v.url()), value),
    message: message || "Not a valid URL",
  });
}
