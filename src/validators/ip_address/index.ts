import {validateField} from "../index.js";
import {isIP} from 'node:net';


/**
 * Wrapper function for checking IP address validation
 * @param value the input to be checked
 * @param message message to shown if input is invalid
 */
export function validateIPAddress(value: any, message?: string): any {
  return validateField({
    condition: isIP(value) > 0,
    message: message || "Invalid IP address",
  });
}

