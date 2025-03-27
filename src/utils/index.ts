import {BaseIssue, BaseSchema, pipe, regex, safeParse, string, url} from "valibot";

/**
 * utility for valibot
 * @param schema valibot scheme to apply valiation
 * @param value  the value to be checked
 */
export function valibotCheck(schema: BaseSchema<unknown, unknown, BaseIssue<unknown>>, value: any): boolean {
  return safeParse(schema, value)?.success == true;
}
