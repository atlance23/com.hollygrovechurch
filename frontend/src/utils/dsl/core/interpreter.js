/**
 * Resolve expressions like:
 * - "slide.headingContent"
 * - "data.length"
 */
function resolvePath(path, scope) {
  return path.split(".").reduce((acc, key) => acc?.[key], scope);
}

/**
 * Replace {{ }} bindings inside strings
 */
function interpolate(str, scope) {
  if (typeof str !== "string") return str;

  return str.replace(/{{(.*?)}}/g, (_, expr) => {
    return resolvePath(expr.trim(), scope) ?? "";
  });
}