function renderNode(node, scope) {
  if (!node) return null;

  switch (node.type) {
    case "TEXT":
      return interpolate(node.value, scope);

    case "FRAGMENT":
      return (
        <>
          {node.children?.map((child, i) => (
            <React.Fragment key={i}>
              {renderNode(child, scope)}
            </React.Fragment>
          ))}
        </>
      );

    case "CONDITIONAL":
      if (!evaluateCondition(node.if, scope)) return null;
      return node.children?.map((child, i) => (
        <React.Fragment key={i}>
          {renderNode(child, scope)}
        </React.Fragment>
      ));

    case "LOOP":
      const list = resolvePath(node.source, scope) || [];
      return list.map((item, index) => {
        const newScope = {
          ...scope,
          [node.itemName]: item
        };

        return node.children.map((child, i) => (
          <React.Fragment key={item.slideId || i}>
            {renderNode(child, newScope)}
          </React.Fragment>
        ));
      });

    default:
      const props = resolveProps(node.props, scope);

      return React.createElement(
        node.type,
        props,
        node.children?.map((child, i) => (
          <React.Fragment key={i}>
            {renderNode(child, scope)}
          </React.Fragment>
        ))
      );
  }
}