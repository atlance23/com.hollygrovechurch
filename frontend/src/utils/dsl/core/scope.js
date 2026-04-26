import { getMemory } from "./memory";

export function createScope(dsl, props) {
  const memory = getMemory(dsl);

  return {
    ...props,
    $memory: memory,
    $errors: [],
    $warnings: []
  };
}