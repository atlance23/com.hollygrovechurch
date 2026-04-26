test("computed values are derived correctly", () => {
  const scope = runComputed(
    {
      slideCount: "data.length",
      total: "slideCount * 2"
    },
    { data: [1, 2, 3] }
  );

  expect(scope.slideCount).toBe(3);
  expect(scope.total).toBe(6);
});