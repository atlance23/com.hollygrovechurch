test("AND condition works", () => {
  const result = evaluateCondition(
    { and: ["a", "b"] },
    { a: true, b: true }
  );

  expect(result).toBe(true);
});