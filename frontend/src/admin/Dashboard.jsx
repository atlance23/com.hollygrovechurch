import { useState } from "react";
import { DSLDevPanel } from "../components/DSLDevPanel";
import { renderComponent } from "../utils/renderComponent";
import componentData from "./../utils/dsl/components/slider.json";
import { renderNode } from "./../utils/dsl/core/render";

export default function Dashboard() {
  const [output, setOutput] = useState(null);
  const [debug, setDebug] = useState(false);
  const [scopeData, setScopeData] = useState(null);

  function handleGenerate() {
    const result = renderComponent(componentData, { data }, {
      debug: true,
      renderNode
    });

    setOutput(result);
    setDebug(true);

    // 🟢 ADD: extract scope if available
    if (result?.props?.scope) {
        setScopeData(result.props.scope);
    }
}

  return (
    <>
      <button onClick={handleGenerate}>
        Test Component Generation
      </button>

      {output}

      {debug && <DSLDevPanel scope={scopeData} />}
    </>
  );
}