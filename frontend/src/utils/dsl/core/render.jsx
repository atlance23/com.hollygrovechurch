import React from "react";
import { resolvePath, interpolate } from "./interpreter";
import { resolveProps } from "./props.js";
import { evaluateCondition } from "./conditions.js";
import * as interpreter from "./interpreter.js";

console.log("INTERPRETER MODULE:", interpreter);

export function renderNode(node, scope) {
  if (!node) return null;

  console.log("interpolate type:", typeof interpolate);

  switch (node.type) {
    case "TEXT":
      return (
        <>
          {
            <React.Fragment>
              {interpolate(node.value, scope)}
            </React.Fragment>
          }
        </>
      );

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