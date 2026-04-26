export function DSLRenderResult({ tree, scope, debug }) {
  return (
    <>
      {tree}

      {debug && (
        <pre
          style={{
            position: "fixed",
            right: 0,
            top: 0,
            width: 400,
            height: "100vh",
            overflow: "auto",
            background: "#111",
            color: "#0f0",
            fontSize: 12,
            padding: 10,
            zIndex: 9999
          }}
        >
          {JSON.stringify(scope, null, 2)}
        </pre>
      )}
    </>
  );
}