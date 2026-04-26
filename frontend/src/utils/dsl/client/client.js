export async function saveDSL(name, dsl) {
  return fetch("/api/save-dsl", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, dsl })
  });
}