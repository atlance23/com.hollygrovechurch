function runEffects(effects, scope) {
  let result = { ...scope };

  effects.forEach(effect => {
    if (effect.type === "generateKeyframes") {
      let keyframes = "";
      const slideCount = result.slideCount;

      for (let i = 0; i <= slideCount; i++) {
        const startPause =
          (i * (result.pauseTime + result.moveTime) / result.totalTime) * 100;

        const endPause =
          ((i * (result.pauseTime + result.moveTime) + result.pauseTime) /
            result.totalTime) *
          100;

        const distance = i === slideCount ? 0 : -(i * 100);

        keyframes += `
          ${startPause}% { transform: translateX(${distance}vw); }
          ${endPause}% { transform: translateX(${distance}vw); }
        `;
      }

      result.keyframes = keyframes;
    }
  });

  return result;
}