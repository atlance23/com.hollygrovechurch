function runComputed(computed, scope) {
  const result = { ...scope };

  for (let key in computed) {
    const value = computed[key];

    if (typeof value === "number") {
      result[key] = value;
    } else {
      // ⚠️ simple eval (you may want a safe parser later)
      result[key] = Function("scope", `with(scope) { return ${value} }`)(result);
    }
  }

  return result;
}