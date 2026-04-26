export function resolvePath(path, scope) {
  return path.split(".").reduce((acc, key) => acc?.[key], scope);
}

export function interpolate(str, scope) {
  if (typeof str !== "string") return str;

  try {
    return str.replace(/{{(.*?)}}/g, (_, expr) => {
      try {
        if (!scope) return "";

        const trimmed = expr?.trim?.();
        if (!trimmed) return "";

        const value = resolvePath(trimmed, scope);

        // explicit undefined/null safety
        if (value === undefined || value === null) return "";

        return value;
      } catch (err) {
        console.warn("Interpolation error in expression:", expr, err);
        return "";
      }
    });
  } catch (err) {
    console.error("Fatal interpolate error:", err, { str, scope });
    return "";
  }
}