// True when the search text appears in any of the values (ignores capitals and extra spaces).
// An empty search matches everything.
export function matchesSearch(query: string, ...values: (string | number | null | undefined)[]) {
  const text = query.trim().toLowerCase();
  return !text || values.some((value) => String(value ?? '').toLowerCase().includes(text));
}
