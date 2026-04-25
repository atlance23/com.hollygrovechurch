/**
 * Resolve props (including styles)
 */
function resolveProps(props = {}, scope) {
  const resolved = {};

  for (let key in props) {
    const value = props[key];

    if (key === "style") {
      resolved.style = {};
      for (let styleKey in value) {
        resolved.style[styleKey] = interpolate(value[styleKey], scope);
      }
    } else {
      resolved[key] = interpolate(value, scope);
    }
  }

  return resolved;
}