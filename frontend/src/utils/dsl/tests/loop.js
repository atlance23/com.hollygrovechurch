test("loop renders correct number of items", () => {
  const node = {
    type: "LOOP",
    source: "items",
    itemName: "item",
    children: [
      { type: "TEXT", value: "{{item}}" }
    ]
  };

  const output = renderNode(node, { items: [1, 2, 3] });

  expect(output.length).toBe(3);
});