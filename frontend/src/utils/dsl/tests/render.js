test("renders slider without crashing", () => {
  const tree = renderComponent(dsl, {
    data: [{ slideId: 1 }]
  });

  expect(tree).toBeTruthy();
});