export default async function promiseFlatten(promise) {
  try {
    return [await promise, null]
  } catch (e) {
    return [null, e];
  }
}
