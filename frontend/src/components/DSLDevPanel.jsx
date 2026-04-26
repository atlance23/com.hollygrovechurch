import React from "react";

export function DSLDevPanel({ scope }) {
  return (
    <div style={{
      position: "fixed",
      right: 0,
      top: 0,
      width: "400px",
      height: "100vh",
      background: "#111",
      color: "#0f0",
      overflow: "auto",
      fontSize: "12px",
      padding: "10px",
      zIndex: 9999
    }}>
      <h3>DSL Debug Panel</h3>

      <section>
        <h4>Scope</h4>
        <pre>{JSON.stringify(scope, null, 2)}</pre>
      </section>

      <section>
        <h4>Errors</h4>
        <pre>{JSON.stringify(scope.$errors, null, 2)}</pre>
      </section>

      <section>
        <h4>Memory</h4>
        <pre>{JSON.stringify(scope.$memory, null, 2)}</pre>
      </section>
    </div>
  );
}