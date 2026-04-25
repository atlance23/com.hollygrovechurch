const globalMemory = new WeakMap();

export function getMemory(dsl) {
  if (!globalMemory.has(dsl)) {
    globalMemory.set(dsl, {
      cache: {},
      state: {},
      runs: 0
    });
  }
  return globalMemory.get(dsl);
}