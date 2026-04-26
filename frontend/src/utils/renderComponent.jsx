import { DSLRenderResult } from "./dsl/core/DSLRenderResult";
import { validateDSL } from "./dsl/core/validation/validate";
import { createScope } from "./dsl/core/scope";
import { safeRunComputed, safeRunEffects, safeRenderNode } from "./dsl/core/validation/safeExecution";
import { interpolate, resolvePath } from "./dsl/core/interpreter";

export function renderComponent(
  dsl,
  props = {},
  options = {}
) {
  const debug = options?.debug ?? false;

  // 👇 REQUIRED: renderer must be injected (no hidden imports)
  const renderNode = options?.renderNode;

  if (!renderNode) {
    throw new Error(
      "renderComponent: Missing required dependency 'renderNode' in options"
    );
  }

  const validationErrors = validateDSL(dsl) || [];

  if (validationErrors.length) {
    console.error("DSL Validation Failed:", validationErrors);
    return null;
  }

  let scope = createScope(dsl, props);

  // safety guards
  scope.$memory = scope.$memory || { runs: 0 };
  scope.$errors = scope.$errors || [];

  scope = safeRunComputed(
    dsl.component.computed,
    scope,
    { interpolate, resolvePath }
  );
  scope = safeRunEffects(dsl.component.effects, scope);

  const tree = safeRenderNode(
    { type: "FRAGMENT", children: dsl.component.tree },
    scope,
    renderNode
  );

  scope.$memory.runs++;

  if (scope.$errors.length) {
    console.warn("Render errors:", scope.$errors);
  }

  return (
    <DSLRenderResult
      tree={tree}
      scope={scope}
      debug={debug}
    />
  );
}