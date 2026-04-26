export function safeRunComputed(computed, scope, runtime = {}) {
  const result = { ...scope };

  for (let key in computed || {}) {
    try {
      const value = computed[key];

      if (typeof value === "number") {
        result[key] = value;
      } else {
        const fn = new Function(
          "scope",
          "interpolate",
          "resolvePath",
          `with(scope) { return (${value}) }`
        );

        result[key] = fn(result, interpolate, resolvePath);
      }

    } catch (err) {
      result.$errors.push(`Computed error in "${key}": ${err.message} COMPUTED`);
    }
  }

  return result;
}

export function safeRunEffects(effects, scope) {
  let result = { ...scope };

  for (let effect of effects || []) {
    try {
      if (effect.type === "generateKeyframes") {
        let keyframes = "";
        const { slideCount, pauseTime, moveTime, totalTime } = result;

        for (let i = 0; i <= slideCount; i++) {
          const startPause =
            (i * (pauseTime + moveTime) / totalTime) * 100;

          const endPause =
            ((i * (pauseTime + moveTime) + pauseTime) / totalTime) * 100;

          const distance = i === slideCount ? 0 : -(i * 100);

          keyframes += `${startPause}% { transform: translateX(${distance}vw); }
                        ${endPause}% { transform: translateX(${distance}vw); }`;
        }

        result.keyframes = keyframes;
      }

    } catch (err) {
      result.$errors.push(`Effect error (${effect.type}): ${err.message} EFFECTS`);
    }
  }

  return result;
}

export function safeRenderNode(node, scope, renderNode) {
  try {
    return renderNode(node, scope);
  } catch (err) {
    scope.$errors.push(`Render error in ${node.type}: ${err.message} NODE`);
    return null;
  }
}