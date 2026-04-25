export function renderComponent(dsl, props) {
  let scope = { ...props };

  scope = runComputed(dsl.component.computed, scope);
  scope = runEffects(dsl.component.effects, scope);

  return renderNode(
    { type: "FRAGMENT", children: dsl.component.tree },
    scope
  );
}