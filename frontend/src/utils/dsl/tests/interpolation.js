test("interpolates values", () => {
  const result = interpolate("Hello {{name}}", { name: "John" });
  expect(result).toBe("Hello John");
});