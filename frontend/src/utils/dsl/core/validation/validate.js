import Ajv from "ajv";
import schema from "./schema/schema.json"

const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(schema);

export function validateDSL(dsl) {
  const valid = validate(dsl);

  return {
    valid,
    errors: validate.errors || []
  };
}